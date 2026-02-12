from flask import Flask, request, jsonify

from functions.soma import somar

calculador = Flask(__name__)

@calculador.after_request
def adicionar_cors(resposta):
    resposta.headers["Access-Control-Allow-Origin"] = "*"
    resposta.headers["Access-Control-Allow-Headers"] = "Content-Type"
    resposta.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
    return resposta

##################### Ignorar daqui para cima #####################

# Função auxiliar para extrair números do corpo JSON, com tratamento de casos ausentes ou inválidos

def obter_numeros(corpo_json: dict | None):
    corpo_json = corpo_json or {}
    
    numero1 = float(corpo_json.get("numero1", 0))
    numero2 = float(corpo_json.get("numero2", 0))
    
    return numero1, numero2

@calculador.route('/soma', methods=['POST'])
def rota_soma():
    corpo_json = request.get_json(silent=True)
    
    numero1, numero2 = obter_numeros(corpo_json)
    resultado = somar(numero1, numero2)
    
    return jsonify({'resultado': resultado})

# Rota para multiplicação

#################### Ignorar daqui para baixo #####################

if __name__ == "__main__":
    calculador.run(host="0.0.0.0", port=5000, debug=True)
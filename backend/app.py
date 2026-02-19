from flask import Flask, request, jsonify

from functions.soma import somar
from functions.subtrai import subtrair
from functions.multiplica import multiplicar
from functions.dividi import dividir

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

# Rota para Soma
@calculador.route('/soma', methods=['POST'])
def rota_soma():
    corpo_json = request.get_json(silent=True)
    
    numero1, numero2 = obter_numeros(corpo_json)
    resultado = somar(numero1, numero2)
    
    return jsonify({'resultado': resultado})

# Rota para Subtração
@calculador.route('/subtrai', methods=['POST'])
def rota_subtrai():
    corpo_json = request.get_json(silent=True)
    
    numero1, numero2 = obter_numeros(corpo_json)
    resultado = subtrair(numero1, numero2)
    
    return jsonify({'resultado': resultado})

# Rota para Multiplicação
@calculador.route('/multiplica', methods=['POST'])
def rota_multiplica():    
    corpo_json = request.get_json(silent=True)
    
    numero1, numero2 = obter_numeros(corpo_json)
    resultado = multiplicar(numero1, numero2)
    
    return jsonify({'resultado': resultado})

# Rota para Divisão
@calculador.route('/dividi', methods=['POST'])
def rota_dividi():    
    corpo_json = request.get_json(silent=True)
    
    numero1, numero2 = obter_numeros(corpo_json)
    resultado = dividir(numero1, numero2)
    
    return jsonify({'resultado': resultado})

#################### Ignorar daqui para baixo #####################

if __name__ == "__main__":
    calculador.run(host="0.0.0.0", port=5000, debug=True)
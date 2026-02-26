import json
from app import calculador

def test_rota_subtrai_retorna_200_e_json():
    cliente = calculador.test_client()

    resposta = cliente.post(
        "/subtrai",   
        data=json.dumps({"numero1": 10, "numero2": 5}),
        content_type="application/json",
    )

    assert resposta.status_code == 200
    assert resposta.is_json
    assert resposta.get_json() == {"resultado": 5.0}


def test_rota_subtrai_aceita_strings_numericas():
    cliente = calculador.test_client()

    resposta = cliente.post(
        "/subtrai",
        json={"numero1": "10", "numero2": "5"},
    )

    assert resposta.status_code == 200
    assert resposta.get_json() == {"resultado": 5.0}
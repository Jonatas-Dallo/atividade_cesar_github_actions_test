import json
from app import calculador


def test_rota_resto_divisao_retorna_200_e_json():
    cliente = calculador.test_client()

    resposta = cliente.post(
        "/resto_divisao",
        data=json.dumps({"numero1": 10, "numero2": 4}),
        content_type="application/json",
    )

    assert resposta.status_code == 200
    assert resposta.is_json
    assert resposta.get_json() == {"resultado": 2.0}


def test_rota_resto_divisao_aceita_strings_numericas():
    cliente = calculador.test_client()

    resposta = cliente.post(
        "/resto_divisao",
        json={"numero1": "10", "numero2": "4"},
    )

    assert resposta.status_code == 200
    assert resposta.get_json() == {"resultado": 2.0}
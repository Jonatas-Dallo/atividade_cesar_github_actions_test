import json
from app import calculador


def test_rota_multiplica_retorna_200_e_json():
    cliente = calculador.test_client()

    resposta = cliente.post(
        "/multiplica",
        data=json.dumps({"numero1": 10, "numero2": 5}),
        content_type="application/json",
    )

    assert resposta.status_code == 200
    assert resposta.is_json
    assert resposta.get_json() == {"resultado": 50.0}


def test_rota_multiplica_aceita_strings_numericas():
    cliente = calculador.test_client()

    resposta = cliente.post(
        "/multiplica",
        json={"numero1": "10", "numero2": "5"},
    )

    assert resposta.status_code == 200
    assert resposta.get_json() == {"resultado": 50.0}

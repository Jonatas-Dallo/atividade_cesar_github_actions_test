import json
from app import calculador


def test_rota_media_retorna_200_e_json():
    cliente = calculador.test_client()

    resposta = cliente.post(
        "/media",
        data=json.dumps({"numero1": 10, "numero2": 5}),
        content_type="application/json",
    )

    assert resposta.status_code == 200
    assert resposta.is_json
    assert resposta.get_json() == {"resultado": 7.5}


def test_rota_media_aceita_strings_numericas():
    cliente = calculador.test_client()

    resposta = cliente.post(
        "/media",
        json={"numero1": "10", "numero2": "5"},
    )

    assert resposta.status_code == 200
    assert resposta.get_json() == {"resultado": 7.5}

from app import calculador


def test_cors_headers_em_resposta():
    cliente = calculador.test_client()

    resposta = cliente.post("/soma", json={"numero1": 1, "numero2": 2})

    assert resposta.headers.get("Access-Control-Allow-Origin") == "*"
    assert "Content-Type" in (resposta.headers.get("Access-Control-Allow-Headers") or "")
    assert "POST" in (resposta.headers.get("Access-Control-Allow-Methods") or "")


def test_rota_soma_sem_json_retorna_zero():
    cliente = calculador.test_client()

    # sem body; request.get_json() vira {} no seu código
    resposta = cliente.post("/soma")

    assert resposta.status_code == 200
    assert resposta.get_json() == {"resultado": 0.0}


def test_rota_soma_com_campos_faltando_retorna_zero_parcial():
    cliente = calculador.test_client()

    resposta = cliente.post("/soma", json={"numero1": 10})
    assert resposta.status_code == 200
    assert resposta.get_json() == {"resultado": 10.0}

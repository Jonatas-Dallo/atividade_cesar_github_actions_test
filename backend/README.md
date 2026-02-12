````md
# Atividade Cesar — Testes

## Requisitos
- Python 3.12+
- Ambiente virtual (`venv`) ativado
- Dependências instaladas:

```bash
pip install -r requirements-dev.txt
````

---

## Rodar os testes (backend)

### Rodar tudo

Dentro da pasta `backend/`:

```bash
python -m pytest -q
```

### Rodar com saída detalhada (mostra cada teste executado)

```bash
python -m pytest -vv
```

---

## Verificar quais testes existem (sem executar)

### Listar os testes coletados

```bash
python -m pytest --collect-only -q
```

---

## Rodar testes por arquivo (opcional)

```bash
python -m pytest -q tests/test_cors_e_validacao.py
python -m pytest -q tests/soma/test_soma_endpoint.py
python -m pytest -q tests/soma/test_soma_funcao.py
```

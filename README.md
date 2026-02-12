````md
# Atividade Cesar — Calculadora (Backend + Frontend + Testes + CI)

Este repositório contém uma calculadora simples com:
- **Backend (Python/Flask)**: fornece os endpoints de operação
- **Frontend (HTML/CSS/JS)**: interface web consumindo o backend
- **Testes**
  - Backend: `pytest`
  - Frontend: npm test
- **CI (GitHub Actions)**: roda testes automaticamente em `push` e `pull_request`

---

## Estrutura do projeto

```text
atividade_Cesar/
├── .github/workflows/ci.yaml
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── requirements-dev.txt
│   └── tests/
└── frontend/
    ├── template/index.html
    ├── static/
    ├── package.json
    └── tests/
````

---

## Requisitos

* **Python 3.12+**
* **Node.js 20+**
* Linux/Mac/Windows (comandos abaixo assumem Linux)

---

# 1) Rodar o Backend (Flask)

## 1.1 Criar e ativar ambiente virtual (uma vez)

Na raiz do projeto:

```bash
python -m venv venv
source venv/bin/activate
```

## 1.2 Instalar dependências do backend

```bash
cd backend
pip install -r requirements.txt
```

## 1.3 Executar o backend

```bash
python app.py
```

O backend sobe em `http://localhost:5000`.

### Teste rápido do endpoint

No insomina numa requisição POST:

```bash
http://localhost:5000/soma
```

```json
{
    "numero":1, 
    "numero2":2
}
```

---

# 2) Rodar o Frontend (HTML/CSS/JS)

O frontend é estático, então vamos servir com `http.server`.

Botão direito e rode Live Server

Abra no navegador:

* `http://127.0.0.1:5503/frontend/template/index.html`

---

# 3) Rodar Testes do Backend (pytest)

## 3.1 Rodar todos os testes

Dentro da pasta Backend no terminal:

```bash
python -m pytest -q
```

## 3.2 Rodar com saída detalhada (mostra cada teste)

```bash
python -m pytest -vv
```

## 3.3 Ver quais testes existem (sem executar)

```bash
python -m pytest --collect-only -q
```

---

# 4) Rodar Testes do Frontend (Node)

Os testes do frontend são **testes estáticos**:

* confirmam que o HTML mantém o contrato do botão de soma (`id`, `class`, `type`, texto)
* confirmam que o JS continua amarrando o evento e chamando a operação esperada

## 4.1 Rodar todos os testes

Precisa estar na pasta Frontend no terminal

```bash
npm test
```

## 4.2 Ver saída mais detalhada

```bash
node --test --test-reporter=spec tests/*.test.js
```

> Esses testes **não precisam** do backend nem do frontend rodando, pois validam apenas os arquivos (contrato do código).

---

# 5) CI no GitHub (GitHub Actions)

O workflow está em:

* `.github/workflows/ci.yaml`

Ele roda automaticamente em:

* `push`
* `pull_request`

E executa:

* testes do backend (pytest)
* testes do frontend (node)

Se o repositório estiver com regras de proteção, o merge na branch principal só será permitido quando o CI passar.

---

## Comandos rápidos (resumo)

### Rodar backend

```bash
source venv/bin/activate
cd backend
python app.py
```

### Rodar frontend

- Botão direito no index.html e então Live Server

### Testes backend

```bash
source venv/bin/activate
cd backend
python -m pytest -q
```

### Testes frontend

```bash
cd frontend
npm test
```



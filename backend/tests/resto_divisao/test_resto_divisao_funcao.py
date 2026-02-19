from functions.resto_divisao import resto_da_divisao
import pytest

def test_resto_divisao_inteiros_basico():
    assert resto_da_divisao(10, 5) == 0

def test_resto_divisao_float():
    assert resto_da_divisao(10.5, 5.2) == pytest.approx(0.1)

def test_resto_divisao_negativos():
    assert resto_da_divisao(-10, -4) == -2

def test_resto_divisao_misto():
    assert resto_da_divisao(525, 125) == 25
from functions.dividi import dividir
import pytest

def test_dividir_inteiros_basico():
    assert dividir(10, 5) == 2


def test_dividir_float():
    assert dividir(0.64, 0.2) == pytest.approx(3.2)

def test_dividir_negativos():
    assert dividir(-10, -5) == 2


def test_dividir_misto():
    assert dividir(-10, 5) == -2
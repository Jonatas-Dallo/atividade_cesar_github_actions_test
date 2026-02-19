from functions.multiplica import multiplicar
import pytest

def test_multiplicar_inteiros_basico():
    assert multiplicar(10, 5) == 50


def test_multiplicar_float():
    assert multiplicar(0.1, 0.2) == pytest.approx(0.02)

def test_multiplicar_negativos():
    assert multiplicar(-10, -5) == 50


def test_multiplicar_misto():
    assert multiplicar(-10, 5) == -50
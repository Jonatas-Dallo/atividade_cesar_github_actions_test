from functions.subtrai import subtrair
import pytest

def test_subtrair_inteiros_basico():
    assert subtrair(10, 5) == 5


def test_subtrair_float():
    assert subtrair(0.3, 0.1) ==  pytest.approx(0.2)

def test_subtrair_negativos():
    assert subtrair(-10, -5) == -5


def test_subtrair_misto():
    assert subtrair(-10, 5) == -15

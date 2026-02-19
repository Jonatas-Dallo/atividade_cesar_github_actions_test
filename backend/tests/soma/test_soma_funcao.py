from functions.soma import somar
import pytest

def test_somar_inteiros_basico():
    assert somar(10, 5) == 15


def test_somar_float():
    assert somar(0.1, 0.2) == pytest.approx(0.30000000000000004)


def test_somar_negativos():
    assert somar(-10, -5) == -15


def test_somar_misto():
    assert somar(-10, 5) == -5

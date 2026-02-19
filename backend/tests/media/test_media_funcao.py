from functions.media import media
import pytest


def test_media_inteiros_basico():
    assert media(10, 5) == 7.5


def test_media_float():
    assert media(0.1, 0.2) == pytest.approx(0.15)


def test_media_negativos():
    assert media(-10, -5) == -7.5


def test_media_misto():
    assert media(-10, 5) == -2.5

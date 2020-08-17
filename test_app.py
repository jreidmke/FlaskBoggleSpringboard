from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle

app.config['TESTING'] = True


class FlaskTests(TestCase):

    # TODO -- write tests for every view function / feature!

    def setUp(self):
        self.game = Boggle()

    def test_make_board(self):
        """Tests for 200 response"""

        with app.test_client() as client:
            res = client.get('/')
            self.assertEqual(res.status_code, 200)

    def test_session_board(self):
        """Tests that board is created and stored in session['board']"""

        with app.test_client() as client:
            client.get('/')
            self.assertEqual(len(session['board']), 5)

    def test_check_not_word(self):
        """Tests that response for none word value equal to 'not-word'"""
        with app.test_client() as client:
            client.get('/')
            res = Boggle.check_valid_word(self.game, session['board'], 'nklfvdsahjkpvdas')

            self.assertEqual(res, 'not-word')

    def test_check_word_response_correct(self):
        """Checks Boggle.check_valid_word returns correct json"""

        board = [["Y", "E", "S", "Y", "E"], ["Y", "E", "S", "Y", "E"], ["Y", "E", "S", "Y", "E"], ["Y", "E", "S", "Y", "E"], ["Y", "E", "S", "Y", "E"]]
        res = Boggle.check_valid_word(self.game, board, 'yes')
        self.assertEqual(res, 'ok')

    def test_check_word_response_incorrect(self):
        """Checks Boggle.check_valid_word returns correct json"""

        board = [["Y", "E", "S", "Y", "E"], ["Y", "E", "S", "Y", "E"], ["Y", "E", "S", "Y", "E"], ["Y", "E", "S", "Y", "E"], ["Y", "E", "S", "Y", "E"]]
        res = Boggle.check_valid_word(self.game, board, 'no')
        self.assertEqual(res, 'not-on-board')

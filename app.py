from boggle import Boggle
from flask import Flask, request, render_template, redirect, session, jsonify
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = "oh-so-secret"
# app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = True

debug = DebugToolbarExtension(app)

boggle_game = Boggle()

BOARD = 'board'
ATTEMPTS = 'attempts'
SCORES = 'scores'



@app.route('/')
def show_board():
    """Directs user to board page."""
    session[ATTEMPTS] = 0
    session[SCORES] = []

    return render_template('start.html')

@app.route('/game')
def new_board():
    boggle_game = Boggle()
    board = boggle_game.make_board()
    session[BOARD] = board
    return render_template('board.html', letters=session[BOARD])

@app.route('/check-word')
def check_word():
    "Checks word and returns json of response"

    #This function works in tandem with an axios.get request made in app.js. The request is made to '/check-word' with parameters of {word: {user input}}.

    word = request.args['word'] #It stores user word in variable word.
    isCorrect = boggle_game.check_valid_word(session[BOARD], word)#stores result of check_valid_word when board and word are passed in
    return jsonify({'isWord': isCorrect}) #Returns answer as json object

@app.route("/post-score", methods=["POST"])
def post_score():
    """Stores score on backend"""
    score = request.json['score']

    scores = session[SCORES]
    scores.append(score)
    session[SCORES] = scores

    attempts = session[ATTEMPTS]
    attempts += 1
    session[ATTEMPTS] = attempts

    hi_score = max(session[SCORES])

    resp = f"You scored {score}. You have played {attempts}. Your high score is {hi_score}"

    return jsonify({'resp': resp})
//Store some jquery items
const $display = $('#display');
const $btn = $('#submitbtn');
const $score = $('#score');
const $input = $('#input');


class Boggle {
    constructor() {
        this.score = 0;
        this.endTime = 60;
        this.words = new Set();
        this.updateTimer();
        $('answer').on('submit', this.postAnswer.bind(this));
        this.int = setInterval(this.decrease.bind(this), 1000);
    }

    async postAnswer(e) {
        e.preventDefault();
        const resp = await axios.get('/check-word', {params: {word: $input.val()}})
        const isWord = resp.data['isWord'];
        this.display(isWord, $input.val());
        $input.val("");
        this.gameOver();
    }

    checkScore(len) {
        this.score += len;
        $score.text(this.score);
        return;
    }

    display(resp, word) {
        if(resp == 'ok') {
            $display.text('Great Job!');
            let isNew = this.addWord(word);
            isNew ? this.checkScore(word.length) : this.checkScore(0);
        } else if (resp == 'not-on-board') {
            $display.text('That\'s not on the board!');
        } else {
            $display.text('That\'s not a word!');
        }
        setTimeout(this.displayReturn, 1000);
    }

    displayReturn() {
        return $display.text("Enter Answer");
    }

    addWord(word) {
        if(!this.words.has(word)) {
            this.words.add(word);
            return true;
        }
        return false;
    }

    decrease() {
        this.endTime === 0 ? this.gameOver() : this.endTime -= 1;
        this.updateTimer(this.endTime);
    }

    updateTimer() {
        $("#countdown").text(this.endTime);
    }

    async gameOver() {
        clearInterval(this.int);
        await this.postScore();
    }

    async postScore() {
        // const resp = await axios.post('/post-score', {score: this.score});
        try {
            const resp = await axios.post("/post-score", {score: this.score});
            const response = resp.data['resp']
            alert(response + " Refresh page for another game.")
        } catch (error) {
            console.log(error);
        }
    }
  }

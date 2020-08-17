// // //Store some jquery items
// // const $display = $('#display');
// // const $answer = $('#answer');
// // const $btn = $('#submitbtn');
// // const $score = $('#score');

// // $('#start').on('click', startGame)

// // function startGame() {
// //     return new Boggle();
// // }

// // class Boggle {
// //     constructor() {
// //         this.endTime = [(new Date().getMinutes()) + 1, new Date().getSeconds()];
// //     }

// //     async postAnswer(e) {
// //         e.preventDefault();
// //         isOver = this.gameOver();
// //         if (isOver == true) {
// //             return;
// //         } else {
// //             const resp = await axios.get('/check-word', { params: {'word': $answer.val()} });
// //             const isWord = resp.data['isWord'];
// //             this.display();
// //             $answer.val("");
// //             console.log(this.currTime)
// //             console.log(this.endTime)
// //         }
// //     }

// //     display() {
// //         if(this.isWord == 'ok') {
// //             $display.text('Great Job!');
// //         } else if (this.isWord == 'not-on-board') {
// //             $display.text('That\'s not on the board!');
// //         } else {
// //             $display.text('That\'s not a word!');
// //         }
// //         setTimeout(this.displayReturn, 1000);
// //     }

// //     displayReturn() {
// //         return $display.text("Enter Answer");
// //     }

// //     gameOver() {
// //         currTime = [(new Date().getMinutes()), new Date().getSeconds()];
// //         isOver = this.endTime.every(m => currTime.includes(m));
// //         return isOver;
// //     }
// //   }

// //   // //Store some jquery items
// // // const $display = $('#display');
// // // const $answer = $('#answer');
// // // const $btn = $('#submitbtn');
// // // const $score = $('#score');

// // // //Event handler
// // // $btn.on('click', postAnswer)
// // // $('#start').on('click', setEndTime)

// // // //This func creates an AJAX get request to check-word and passes in the user word as parameters
// // // async function postAnswer(e) {
// // //   e.preventDefault();
// // //   const resp = await axios.get('/check-word', { params: {'word': $answer.val()} })

// // //   let isWord = resp.data['isWord']//The response is a json object created on app.py with a key of 'isWord'. The value of this is stored in variable isWord.

// // //   score(isWord) //isWord is passed into score function

// // //   if(isWord == 'ok') { //Conditional block for text display on page
// // //     isWord = 'Great Job!'
// // //   } else if(isWord == 'not-on-board') {
// // //     isWord = 'That\'s not on the board!'
// // //   } else {
// // //     isWord = 'That\'s not a word!'
// // //   }
// // //   $display.text(isWord)
// // //   setTimeout(displayReturn, 1000) //After one second, text returns to "Enter word"
// // //   $answer.val("")
// // // }

// // // function displayReturn() {
// // //   return $display.text("Enter Answer")
// // // }

// // // function score(isWord) {
// // //   points = $answer.val().length
// // //   let score = parseInt($score.text())
// // //   isWord == 'ok' ? score += points : score = score
// // //   $score.text(score)
// // // }

// // // function currentTime() {
// // //   currTime = new Date();
// // //   return [currTime.getMinutes(), currTime.getSeconds()];
// // // }

// // // function setEndTime() {
// // //   endTime = currentTime();
// // //   endTime[0] += 1;
// // //   return endTime;
// // // }

// // // function checkTimer(start, end) {

// // // }

// // // //Store some jquery items
// // // const $display = $('#display');
// // // const $answer = $('#answer');
// // // const $btn = $('#submitbtn');
// // // const $score = $('#score');

// // // $('#start').on('click', startGame)

// // // function startGame() {
// // //     return new Boggle();
// // // }

// // // class Boggle {
// // //     constructor() {
// // //         this.endTime = [(new Date().getMinutes()) + 1, new Date().getSeconds()];
// // //     }

// // //     async postAnswer(e) {
// // //         e.preventDefault();
// // //         const resp = await axios.get('/check-word', { params: {'word': $answer.val()} });
// // //         const isWord = resp.data['isWord'];
// // //         this.display();
// // //         $answer.val("");
// // //     }

// // //     display() {
// // //         if(this.isWord == 'ok') {
// // //             $display.text('Great Job!');
// // //         } else if (this.isWord == 'not-on-board') {
// // //             $display.text('That\'s not on the board!');
// // //         } else {
// // //             $display.text('That\'s not a word!');
// // //         }
// // //         setTimeout(this.displayReturn, 1000);
// // //     }

// // //     displayReturn() {
// // //         return $display.text("Enter Answer");
// // //     }

// // //   }

// // Store some jquery items
// const $answer = $('#answer');
// const $btn = $('#submitbtn');
// const $score = $('#score');

// $('#start').on('click', startGame);

// class Boggle {
//     constructor() {
//         this.endTime = [(new Date().getMinutes()) + 1, new Date().getSeconds()];

//     }

//     async postAnswer(e) {
//         e.preventDefault();
//       // isOver = this.gameOver();
//       // if (isOver == true) {
//       //     return;
//       // } else {
//           const resp = await axios.get("/check-word", { params: { word: $answer.val() }});
//           const isWord = resp.data['isWord'];
//           await this.display();
//           $answer.val("");
//   }
//     display() {
//         $display = $('#display');
//         if(this.isWord == 'ok') {
//             $display.text('Great Job!');
//         } else if (this.isWord == 'not-on-board') {
//             $display.text('That\'s not on the board!');
//         } else {
//             $display.text('That\'s not a word!');
//         }
//         setTimeout(this.displayReturn, 1000);
//     }

//     displayReturn() {
//         return $display.text("Enter Answer");
//     }

//     gameOver() {
//         currTime = [(new Date().getMinutes()), new Date().getSeconds()];
//         isOver = this.endTime.every(m => currTime.includes(m));
//         return isOver;
//     }
//   }



// # @app.route("/check-word", methods=["GET"])
// # def check_word():
// #     """Check if word is in dictionary."""

// #     word = request.args["word"]
// #     board = session["board"]
// #     response = boggle_game.check_valid_word(board, word)

// #     return jsonify({'result': response})

// # @app.route('/check-word', methods=["POST", "GET"])
// # def check_word():
// #     "Checks word and returns json of response"

// #     #This function works in tandem with an axios.get request made in app.js. The request is made to '/check-word' with parameters of {word: {user input}}.

// #     word = request.args['word'] #It stores user word in variable word.
// #     isCorrect = boggle_game.check_valid_word(session[BOARD], word)#stores result of check_valid_word when board and word are passed in
// #     return jsonify({'isWord': isCorrect}) #Returns answer as json object

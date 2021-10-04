var score = 0

var startquizBtn = document.querySelector("#startbutton");
var quizcardEl = document.querySelector("#quizcard");
var quizboxEl = document.querySelector("#quizbox");
var quiztimerEl = document.querySelector("#quiztimer");
var quizquestionEl = document.querySelector(".quizquestion");
var option0El = document.querySelector(".option0");
var option1El = document.querySelector(".option1");
var option2El = document.querySelector(".option2");
var option3El = document.querySelector(".option3");
var textareaEl = document.querySelector(".textarea");
var mainscorequizEl = document.querySelector("#mainscorequiz");



var myquestions = [{
        question: 'Which built-in method combines the text of two strings and returns a new string?',
        choise0: "concat()",
        choise1: "append()",
        choise2: "attach()",
        choise3: "None of the above.",
        answer: 0

    },
    {
        question: 'Which built-in method returns the characters in a string beginning at the specified location?',
        choise0: "slice()",
        choise1: "getSubstring()",
        choise2: "substr()",
        choise3: "None of the above.",
        answer: 0

    },
    {
        question: 'Who invented JavaScript?',
        choise0: "Douglas Crockford",
        choise1: "Sheryl Sandberg",
        choise2: "Brendan Eich",
        choise3: "None of the above.",
        answer: 0

    },
    {
        question: 'JavaScript is a ___ -side programming language',
        choise0: "Client",
        choise1: "Server",
        choise2: "Both",
        choise3: "None of the above.",
        answer: 0

    },
    {
        question: 'How do you find the minimum of x and y using JavaScript?',
        choise0: "min(x,y)",
        choise1: "Math.min(x,y)",
        choise2: "Math.min(xy)",
        choise3: "min(xy)",
        answer: 0

    },

]


var secondsLeft = 60;

function startquiz() {
    var x = document.querySelector("#quizcard");
    var y = document.querySelector("#quizbox");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    if (y.style.display == "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}

function starttimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        quiztimerEl.textContent = " Time Left : " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

function reducetimer() {
    secondsLeft = secondsLeft - 5
}

function DisplayScore() {
    mainscorequizEl.textContent = "Your score : " + score;
}


function scorepage() {
    location.href = "http://192.168.1.126:5500/Javascript-Quiz/highscores.html"
}

// qustion one-----------------------------------------------------------
function startgame() {
    quizquestionEl.innerHTML = myquestions[0].question
    option0El.innerHTML = myquestions[0].choise0
    option1El.innerHTML = myquestions[0].choise1
    option2El.innerHTML = myquestions[0].choise2
    option3El.innerHTML = myquestions[0].choise3

    option0El.addEventListener('click', function () {
        option0El.value = 0
        if (myquestions[0].answer == option0El.value) {
            textareaEl.innerHTML = "correct"
            score = score + 1
            DisplayScore();
            newqustion1();
        } else {
            textareaEl.innerHTML = "wrong"
            reducetimer();
            newqustion1();
        }

    })
    option1El.addEventListener('click', function () {
        option1El.value = 1
        if (myquestions[0].answer == option1El.value) {
            textareaEl.innerHTML = "correct"
            score++;
            newqustion1()

        } else {
            textareaEl.innerHTML = "wrong"
            reducetimer()
            newqustion1()
        }

    })
    option2El.addEventListener('click', function () {
        option2El.value = 2
        if (myquestions[0].answer == option2El.value) {
            textareaEl.innerHTML = "correct"
            //score++;

            newqustion1()

        } else {
            textareaEl.innerHTML = "wrong"
            reducetimer()
            newqustion1()


        }

    })
    option3El.addEventListener('click', function () {
        option3El.value = 3
        if (myquestions[0].answer == option3El.value) {
            textareaEl.innerHTML = "correct"
            // score++;

            newqustion1()

        } else {
            textareaEl.innerHTML = "wrong"
            reducetimer()
            newqustion1()


        }

    })


}
// qustion two-----------------------------------------------------------
function newqustion1() {

    quizquestionEl.innerHTML = myquestions[1].question
    option0El.innerHTML = myquestions[1].choise0
    option1El.innerHTML = myquestions[1].choise1
    option2El.innerHTML = myquestions[1].choise2
    option3El.innerHTML = myquestions[1].choise3
    option0El.addEventListener('click', function () {
        //option0El.value = 0
        if (myquestions[1].answer == option0El.value) {
            textareaEl.innerHTML = "correct"
            score = score + 1
            DisplayScore()
            newqustion2()
        } else {
            textareaEl.innerHTML = "wrong"
            newqustion2()
            reducetimer()
        }

    })
    option1El.addEventListener('click', function () {
        option0El.value = 1
        if (myquestions[1].answer == option1El.value) {
            textareaEl.innerHTML = "correct"
            // score++;
            newqustion2()

        } else {
            textareaEl.innerHTML = "wrong"
            newqustion2()
            reducetimer()

        }

    })
    option2El.addEventListener('click', function () {
        option2El.value = 2
        if (myquestions[1].answer == option2El.value) {
            textareaEl.innerHTML = "correct"
            // score++;
            newqustion2()

        } else {
            textareaEl.innerHTML = "wrong"
            newqustion2()
            reducetimer()

        }

    })
    option3El.addEventListener('click', function () {
        option3El.value = 3
        if (myquestions[1].answer == option3El.value) {
            textareaEl.innerHTML = "correct"
            //score++;
            newqustion2()

        } else {
            textareaEl.innerHTML = "wrong"
            newqustion2()
            reducetimer()

        }

    })
}
// qustion three-----------------------------------------------------------
function newqustion2() {

    quizquestionEl.innerHTML = myquestions[2].question
    option0El.innerHTML = myquestions[2].choise0
    option1El.innerHTML = myquestions[2].choise1
    option2El.innerHTML = myquestions[2].choise2
    option3El.innerHTML = myquestions[2].choise3

    option0El.addEventListener('click', function () {
        //option0El.value = 0
        if (myquestions[2].answer == option0El.value) {
            textareaEl.innerHTML = "correct"
            score = score + 1
            DisplayScore()
            newqustion3()

        } else {
            textareaEl.innerHTML = "wrong"
            newqustion3()
            reducetimer()

        }

    })
    option1El.addEventListener('click', function () {
        option0El.value = 1
        if (myquestions[2].answer == option1El.value) {
            textareaEl.innerHTML = "correct"
            //score++;
            newqustion3()

        } else {
            textareaEl.innerHTML = "wrong"
            newqustion3()
            reducetimer()

        }

    })
    option2El.addEventListener('click', function () {
        option2El.value = 2
        if (myquestions[2].answer == option2El.value) {
            textareaEl.innerHTML = "correct"
            //score++;
            newqustion3()

        } else {
            textareaEl.innerHTML = "wrong"
            newqustion3()
            reducetimer()

        }

    })
    option3El.addEventListener('click', function () {
        option3El.value = 3
        if (myquestions[2].answer == option3El.value) {
            textareaEl.innerHTML = "correct"
            //score++;
            newqustion3()

        } else {
            textareaEl.innerHTML = "wrong"
            newqustion3()
            reducetimer()

        }

    })

}


// qustion four-----------------------------------------------------------
function newqustion3() {
    quizquestionEl.innerHTML = myquestions[3].question
    option0El.innerHTML = myquestions[3].choise0
    option1El.innerHTML = myquestions[3].choise1
    option2El.innerHTML = myquestions[3].choise2
    option3El.innerHTML = myquestions[3].choise3

    option0El.addEventListener('click', function () {
       // option0El.value = 0
        if (myquestions[3].answer == option0El.value) {
            textareaEl.innerHTML = "correct"
            score = score + 1
            DisplayScore()
            newqustion4()

        } else {
            textareaEl.innerHTML = "wrong"
            reducetimer()
            newqustion4()


        }

    })
    option1El.addEventListener('click', function () {
        option1El.value = 1
        if (myquestions[3].answer == option1El.value) {
            textareaEl.innerHTML = "correct"
            //score++;
            newqustion4()

        } else {
            textareaEl.innerHTML = "wrong"
            reducetimer()
            newqustion4()

        }

    })
    option2El.addEventListener('click', function () {
        option2El.value = 2
        if (myquestions[3].answer == option2El.value) {
            textareaEl.innerHTML = "correct"

            newqustion4()

        } else {
            textareaEl.innerHTML = "wrong"
            reducetimer()
            newqustion4()


        }

    })
    option3El.addEventListener('click', function () {
        option3El.value = 3
        if (myquestions[3].answer == option3El.value) {
            textareaEl.innerHTML = "correct"
            // score++;
            newqustion4()

        } else {
            textareaEl.innerHTML = "wrong"
            reducetimer()
            newqustion4()


        }

    })

}

// qustion five-----------------------------------------------------------
function newqustion4() {
    quizquestionEl.innerHTML = myquestions[4].question
    option0El.innerHTML = myquestions[4].choise0
    option1El.innerHTML = myquestions[4].choise1
    option2El.innerHTML = myquestions[4].choise2
    option3El.innerHTML = myquestions[4].choise3

    option0El.addEventListener('click', function () {
        //option0El.value = 0
        if (myquestions[4].answer == option0El.value) {
            textareaEl.innerHTML = "correct"
            score = score + 1
            //scorepage()
            DisplayScore()


        } else {
            textareaEl.innerHTML = "wrong"
            reducetimer()
            //scorepage()
            DisplayScore()
        }

    })
    option1El.addEventListener('click', function () {
        option1El.value = 1
        if (myquestions[4].answer == option1El.value) {
            textareaEl.innerHTML = "correct"
            // score++;
            scorepage()

        } else {
            textareaEl.innerHTML = "wrong"
            reducetimer()
            scorepage()

        }

    })
    option2El.addEventListener('click', function () {
        option2El.value = 2
        if (myquestions[4].answer == option2El.value) {
            textareaEl.innerHTML = "correct"
            //score++;
            scorepage()

        } else {
            textareaEl.innerHTML = "wrong"
            reducetimer()
            scorepage()


        }

    })
    option3El.addEventListener('click', function () {
        option3El.value = 3
        if (myquestions[4].answer == option3El.value) {
            textareaEl.innerHTML = "correct"
            //  score++;
            scorepage()

        } else {
            textareaEl.innerHTML = "wrong"
            reducetimer()
            scorepage()


        }

    })

}




startquizBtn.addEventListener("click", startquiz)
startquizBtn.addEventListener("click", starttimer)
startquizBtn.addEventListener("click", startgame)



function startgame() {

    for (var i = 0; i <= 4; i++) {

        quizquestionEl.innerHTML = myquestions[i].question
        option0El.innerHTML = myquestions[i].choise0
        option1El.innerHTML = myquestions[i].choise1
        option2El.innerHTML = myquestions[i].choise2
        option3El.innerHTML = myquestions[i].choise3

        option0El.addEventListener('click', function () {
            textareaEl.innerHTML = "correct"
            countscore++;
            DisplayCountScore();
        })
        option1El.addEventListener('click', function () {
            textareaEl.innerHTML = "wrong"

        })
        option2El.addEventListener('click', function () {
            textareaEl.innerHTML = "wrong"
        })
        option3El.addEventListener('click', function () {
            textareaEl.innerHTML = "wrong"
        })

        if (i === 4) {
            DisplayCountScore();
        }
    }

}
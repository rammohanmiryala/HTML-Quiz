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
var quizscoreEl = document.querySelector(".quizscore");



var selectedanswer = "";
var score = "";



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
        answer: 3

    },
    {
        question: 'JavaScript is a ___ -side programming language',
        choise0: "Client",
        choise1: "Server",
        choise2: "Both",
        choise3: "None of the above.",
        answer: 3

    },
    {
        question: 'How do you find the minimum of x and y using JavaScript?',
        choise0: "min(x,y)",
        choise1: "Math.min(x,y)",
        choise2: "Math.min(xy)",
        choise3: "min(xy)",
        answer: 1

    },

]
var timerInterval = ""
var secondsLeft = 60;



function starttimer() {
    timerInterval = setTimeout(function () {
        secondsLeft--;
        var timer = quiztimerEl.textContent = " Time Left : " + secondsLeft;
        if (secondsLeft === 0) {
            clearTimeout(timerInterval);
            // sendMessage();

        }

    }, 1000);
}

function reducetimer() {
    setInterval(function () {
        secondsLeft--;
        quiztimerEl.textContent = " Time Left : " + (secondsLeft - 10);
        if (secondsLeft === 0) {
            setInterval(timerInterval);
            // sendMessage();

        }

    }, 1000);

}

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


function stoptimer() {
    clearInterval(timerInterval);
    timerInterval
}

function reducetimer() {
    setInterval(function () {
        secondsLeft--;
        timerInterval = quiztimerEl.textContent = " Time Left : " + (secondsLeft - 10);
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // sendMessage();

        }

    }, 1000);
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
            score++;
            newqustion1()

        } else {
            textareaEl.innerHTML = "wrong"

            newqustion1()

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
            newqustion1()
            reducetimer()
        }

    })
    option2El.addEventListener('click', function () {
        option2El.value = 2
        if (myquestions[0].answer == option2El.value) {
            textareaEl.innerHTML = "correct"
            score++;
            newqustion1()

        } else {
            textareaEl.innerHTML = "wrong"
            newqustion1()
            reducetimer()

        }

    })
    option3El.addEventListener('click', function () {
        option3El.value = 3
        if (myquestions[0].answer == option3El.value) {
            textareaEl.innerHTML = "correct"
            score++;
            newqustion1()

        } else {
            textareaEl.innerHTML = "wrong"
            newqustion1()
            reducetimer()

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
        option0El.value = 0
        if (myquestions[1].answer == option0El.value) {
            textareaEl.innerHTML = "correct"
            score++;
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
            score++;
            newqustion2()

        } else {
            textareaEl.innerHTML = "wrong"
            newqustion2()
            reducetimer()

        }

    })
    option2El.addEventListener('click', function () {
        option2El.value = 0
        if (myquestions[1].answer == option2El.value) {
            textareaEl.innerHTML = "correct"
            score++;
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
            score++;
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
        option0El.value = 0
        if (myquestions[2].answer == option0El.value) {
            textareaEl.innerHTML = "correct"
            score++;
            newqustion3()

        } else {
            textareaEl.innerHTML = "wrong"
            newqustion3()
            reducetimer()

        }

    })
    option1El.addEventListener('click', function () {
        option0El.value = 1
        if (myquestions[3].answer == option1El.value) {
            textareaEl.innerHTML = "correct"
            score++;
            newqustion3()

        } else {
            textareaEl.innerHTML = "wrong"
            newqustion3()
            reducetimer()

        }

    })
    option2El.addEventListener('click', function () {
        option2El.value = 0
        if (myquestions[3].answer == option2El.value) {
            textareaEl.innerHTML = "correct"
            score++;
            newqustion3()

        } else {
            textareaEl.innerHTML = "wrong"
            newqustion3()
            reducetimer()

        }

    })
    option3El.addEventListener('click', function () {
        option3El.value = 3
        if (myquestions[3].answer == option3El.value) {
            textareaEl.innerHTML = "correct"
            score++;
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

}

// qustion four-----------------------------------------------------------
function newqustion4() {

}


startquizBtn.addEventListener("click", startquiz)
startquizBtn.addEventListener("click", starttimer)
startquizBtn.addEventListener("click", startgame)
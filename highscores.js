var quizscoreEl = document.querySelector("#quizscore");
var quizcardEl = document.querySelector("#quizcard");
var quizboxEl = document.querySelector("#quizbox");
var submitBtn = document.querySelector("#submit");
var gobackBtn = document.querySelector(".goback")
var clearBtn = document.querySelector(".clear")
var initialscoreEl = document.querySelector("#initialscore");
var initialnameEl = document.querySelector("#initialname")
var textareamessageEl = document.querySelector(".textareamessage")
var initialEl = document.querySelector("#initial");


var score = localStorage.getItem("score");
quizscoreEl.textContent = "Your score is " + score;



function submitinstial() {
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

// function displayMessage(type, message) {
//     msgDiv.textContent = message;

// }

function displayMessage(message) {
    textareamessageEl.textContent = message;


}

function valuesstored() {
    var initialname = localStorage.getItem("initialname");
    var score = localStorage.getItem("score");

    if (!initialname) {
        return;
    }
    initialscoreEl.textContent = score;
    initialnameEl.textContent = initialname;


}
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var initialname = document.querySelector("#initial").value
    if (initialname === "") {
        displayMessage("initial cannot be blank")
        return

    } else {
        localStorage.setItem("initialname", initialname);
        valuesstored();
    }
});

function gobackmain() {
    location.href = "http://192.168.1.126:5500/Javascript-Quiz/index.html"
}






function clearall() {
    var clearinstial = localStorage.clear("initialname");
    var clearinstialscore = localStorage.clear("score");
    
    initialscoreEl.textContent = clearinstial;
    initialnameEl.textContent = clearinstialscore;
}

clearBtn.addEventListener("click", function () {
    clearall()


})



submitBtn.addEventListener("click", submitinstial)
gobackBtn.addEventListener("click", gobackmain)
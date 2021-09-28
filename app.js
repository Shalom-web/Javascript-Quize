var questions = [
    {
        question: 'Which is not valid datatype in javascript?',
        choices: ['float', 'Number', 'Boolean', 'Undefined'],
        correctAnswer: 0
    },
    {
        question: 'What type of language is Javascript?',
        choices: ['Programming', 'Scripting', 'Markup', 'None of the above'],
        correctAnswer: 1
    },
    {
        question: 'Which operator outputs the remainder of an integer division?',
        choices: ['Add', 'Subtraction', 'Modulus', 'Increment'],
        correctAnswer: 2
    },
    {
        question: 'Java code can be called by using?',
        choices: ['RMI', 'Triggering', 'Preprocessor', 'Function/Method'],
        correctAnswer: 3
    },
    {
        question: 'Which operation will return false if two values are equal?',
        choices: ['!', '!=', '!==', 'Above of the above'],
        correctAnswer: 1
    },
    {
        question: 'A.......... will be visible only within a function where it is defined',
        choices: ['global variable','local variable','Both A and B','None of the above'],
        correctAnswer: 1

    },
    {
        question: 'A.......... is a group of reusable code which can be called anywhere in your program',
        choices: ['exception','loop','function','switch'],
        correctAnswer: 2

    },
    {
        question: 'The most common way to define a function in javascript is by using the..........keyboard',
        choices: ['fun','var','function','define'],
        correctAnswer: 2

    },
    {
        question: 'Which statement is required if you want to return a value from a function?',
        choices: ['continue','break','loop','return'],
        correctAnswer: 3

    },
    {
        question: 'The function() constructor expects....... number of string arguments',
        choices: ['2','1','0','any'],
        correctAnswer: 3

    },
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

window.addEventListener('DOMContentLoaded', function(e){
    displayCurrentQuestion();

    var quizMessage = document.querySelector('.quizMessage');

        quizMessage.style.display = 'none';

    document.querySelector('.nextButton').addEventListener('click', function(){
        
        if(!quizOver){
            var radioBtnsChecked = document.querySelector('input[type=radio]:checked');

            if (radioBtnsChecked === null){
                quizMessage.innerText = 'Please select an answer';
                quizMessage.style.display = 'block';
            } else {
                console.log(radioBtnsChecked.value);
                quizMessage.style.display = 'none';
                if (parseInt(radioBtnsChecked.value) === questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }

                currentQuestion++;

                if (currentQuestion < questions.length){
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    document.querySelector('.nextButton').innerText = 'Play Again?';
                    quizOver = true;
                 }
                }   
        } else {
            quizOver = false;
            document.querySelector('.nextButton').innerText = 'Next Question';
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion(){
    console.log('In display current Questions');

    var question = questions[currentQuestion].question;
    var questionClass = document.querySelector('.quizContainer > .question');
    var choiceList = document.querySelector('.quizContainer > .choiceList');
    var numChoices = questions[currentQuestion].choices.length;

    //Set the questionClass text to the current question
    questionClass.innerText = question;

    //Remove all current <li> elements (if any)
    choiceList.innerHTML = '';

    var choice;
    for (i = 0; i < numChoices; i++){
        choice = questions[currentQuestion].choices[i];
        var li = document.createElement('li');
            li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
        choiceList.appendChild(li);

    }
}

function resetQuiz(){
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore(){
    document.querySelector('.quizContainer > .result').innerText = 'You scored: ' + correctAnswers + ' out of ' + questions.length;
    document.querySelector('.quizContainer > .result').style.display = 'block';
}

function hideScore(){
    document.querySelector('.result').style.display = 'none';
}

const quizForm = document.getElementById("quiz-form");
const message = document.getElementById("message");

const answers = ["90","right angled"];

function updateMessage(msg){
    message.innerText = msg;
}

function checkAnswers(values){
    let score = 0;
    console.log({values});
    answers.forEach( ans => {
            if(values.includes(ans)){
                score += 50;
            }else{
                score  -=50;
            }
    });

    updateMessage(`Your score is: ${score}`);
}

function onFormSubmit(event){
    updateMessage("");
    let data = new FormData(quizForm);
    let isAnswered1 = data.has('question1');
    let isAnswered2 = data.has('question2')

    console.log(data.has('question1'),data.has('question2'));

    if(isAnswered1 && isAnswered2){
        checkAnswers([...data.values()]);
    }else if(isAnswered1){
        updateMessage("Select answer to question2");
    }else if(isAnswered2){
        updateMessage("Select answer to question1.");
    }else{
        updateMessage("Select answer to question1 and question2.");        
    }
}

quizForm.addEventListener("submit",onFormSubmit);
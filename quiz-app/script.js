const quizData=[
    {
        question:'Boksörlerin kullandığı eldivenlerde, parmakları saran kaç bölüm olduğu görülür?',
        a:'1',
        b:'2',
        c:'3',
        d:'4',
        correct:'b'
    },  {
        question:'Doğalgaz hangi birimle ölçülür ve ücretlendirilir?',
        a:'Ons',
        b:'Galon',
        c:'Mililitre',
        d:'Metreküp',
        correct:'d'
    }, {
        question:'Hangisi doğru yazılmıştır?',
        a:'Kopora',
        b:'Kapora',
        c:'Kaparo',
        d:'Kaporo',
        correct:'b'
    },
    {
        question:'Hangi meslekteki kişiler günlük işleri sırasında "Alfa, Lima, Yankee, Zulu, Charlie, Bravo" gibi ifadeler kullanırlar?',
        a:'Ekonomist',
        b:'Pilot',
        c:'Cerrah',
        d:'Psikiyatr',
        correct:'b'
    },

]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score=0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML=currentQuizData.question;
    a_text.innerHTML=currentQuizData.a;
    b_text.innerHTML=currentQuizData.b;
    c_text.innerHTML=currentQuizData.c;
    d_text.innerHTML=currentQuizData.d;
    

}

function getSelected() {
let answer=undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer= answerEl.id
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
     answerEl.checked=false;
    });
}
submitBtn.addEventListener('click', () => {
const answer = getSelected();
if(answer){
    debugger;
    if(answer=== quizData[currentQuiz].correct){
        score++;
    }
    currentQuiz++;
    if(currentQuiz< quizData.length){
        loadQuiz();
    }
        else{
quiz.innerHTML=`<h2 class="final">${quizData.length} sorudan ${score} soruyu doğru cevapladın.</h2>
<button onclick="location.reload()">Tekrar Dene</button>`;
        }
   
}
   
})
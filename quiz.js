'use strict';

const questionArea = document.getElementById('question');
const resultArea   = document.getElementById('result');
const graphArea    = document.getElementById('graph');
const retryButton  = document.getElementById('retry');
const ansButton    = document.getElementById('answer');
var question, answer, a, b, c;

function makeQuiz() {
  a = Math.floor(Math.random()*3 + 1);
  b = Math.floor(Math.random()*5 + 1)*2*a;
  c = Math.floor(Math.random()*7 + 1);
  var aa = a;
  var bb = b;
  if (a == 1) aa = "";  //係数が1のときは省略する
  if (b == 1) bb = "";
  question = "\\(" + aa + "x^{2} + " + bb + "x + " + c + "\\)"; 

  if ((c - b*b/4/a) == 0){  //カッコの外に出る項が0なら省略
    answer  = "\\(=" + aa + "(x + " + b/2/a + ")^{2} "   + "\\)";
  } else if ((c - b*b/4/a) < 0){  //カッコの外に出る項が0未満ならその前の+記号を省略(もともとマイナスがついているから)
    answer  = "\\(=" + aa + "(x + " + b/2/a + ")^{2} "   + (c - b*b/4/a) + "\\)";
  } else {  //カッコの外に出る項が0より大きいなら普通に(+を省略せずに)表示する
    answer  = "\\(=" + aa + "(x + " + b/2/a + ")^{2} + " + (c - b*b/4/a) + "\\)";
  }
  
  questionArea.textContent = question;
  resultArea.textContent = "";
  MathJax.Hub.Typeset(questionArea);

  ansButton.style.visibility = "visible";
  retryButton.style.visibility = "hidden";
}

function dispAns() {
  resultArea.textContent = answer;
  MathJax.Hub.Typeset(resultArea);
  
  //graphArea.innerHTML = "ここにグラフ予定";

  ansButton.style.visibility = "hidden";
  retryButton.style.visibility = "visible";
}
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var button = document.querySelector('button');

function testSpeech() {
  button.disabled = true;
  button.textContent = 'Test in progress';

  var grammar = '#JSGF V1.0; grammar phrase;';
  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {
    var speechResult = event.results[0][0].transcript;
    process(speechResult);
    // if(speechResult === phrase) {
    //   resultPara.textContent = 'I heard the correct phrase!';
    //   resultPara.style.background = 'lime';
    // } else {
    //   resultPara.textContent = 'That didn\'t sound right.';
    //   resultPara.style.background = 'red';
    // }
  }

  recognition.onspeechend = function() {
    recognition.stop();
    button.disabled = false;
    button.textContent = 'Start new test';
  }

  recognition.onerror = function(event) {
    button.disabled = false;
    button.textContent = 'Start new test';
    diagnosticPara.textContent = 'Error occurred in recognition: ' + event.error;
  }

}

button.addEventListener('click', testSpeech);

function process(text) {
  console.log("he said " + text)
  $("body").append("he said " + text)
}

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
  console.log(text);
  var replies = reply(text);
  speak(replies[Math.random() * replies.length]);
  
}



/////////////////////////////////////////////////////////////////////////////



var synthesis = window.speechSynthesis;
window.speechSynthesis.onvoiceschanged = function(){
		voices = synthesis.getVoices()
}

rate = 1
	
function setTheVoices(){
	console.log(voices)
	for (i = 0; i < voices.length; i++) {
		
		options.append("<option value='" + voices[i].name + "'>" + voices[i].name + "</option>")
	}
}

function speak(text){
	talk = new SpeechSynthesisUtterance(text)
	for (i = 0; i < voices.length; i++){
		if (options.val() === voices[i].name){
			talk.voice = voices[i]
		}
	}
	
	talk.pitch = 1;
	talk.rate = Number(rate);
	synthesis.speak(talk);

}
console.log(synthesis.getVoices())

$(document).ready(function() {

	options = $('#options')
	$('.speed').click(function(){
		console.log('aa')
		rate = this.value
	})
	setTheVoices()
	
})


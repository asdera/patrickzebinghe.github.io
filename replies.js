

function reply(said) {
  switch(said.toLowerCase()){


    case "hi":
	case "hello":
      possibleReplies = ["hi what can I help you with?", 'hi how are you doing today'];
      break;
	case "i'm doing good":
      possibleReplies = ["that great! need help with anything?", "nice! keep it up!"];
      break;
   	case "i'm having a bad day":
      possibleReplies = ["aww how can i make it better", "that's too bad hope you feel better"];
      break;

    default:
      possibleReplies = ["sorry I don't understand, could you repeat that", "sorry could you say something else"]
  }
}
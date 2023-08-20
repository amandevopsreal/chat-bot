// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {

        const lowercase = message.toLowerCase();
        if (lowercase.includes("hello")) {
            this.actionProvider.greet();
        }
        {/*if (lowercase.includes("todos")) {
            this.actionProvider.handelerTodos()
        }*/}
        if (lowercase.includes("javascript") || lowercase.includes("javascript")) {
            this.actionProvider.handleJavascriptQuiz();
        }
    }
}

export default MessageParser;
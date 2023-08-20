// ActionProvider starter code
class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }
    helloWorldHandeler = () => {
        const message = this.createChatBotMessage("Hello")
        this.setChatBotMessage(message);
    }
    askHandeler = () => {
        const message = this.createChatBotMessage("Aman")
        this.setChatBotMessage(message);
    }
    handelerTodos = () => {
        const message = this.createChatBotMessage("Sure here are your todos, ", {
            widget: "todos"
        })
        this.setChatBotMessage(message)
    }
    greet = () => {
        const message = this.createChatBotMessage("Hello friend.")
        this.setChatBotMessage(message)
    }
    handleJavascriptQuiz = () => {
        const message = this.createChatBotMessage("Here is your quiz good luck", {
            widget: "javascriptQuiz"
        })
        this.setChatBotMessage(message)
    }
    setChatBotMessage = (message) => {
        this.setState(state => ({ ...state, messages: [...state.messages, message] }))
    }
}

export default ActionProvider;
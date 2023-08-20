// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./Components/BotAvatar";
/*import Todos from "./Components/Todos";*/
import Options from "./Components/Options";
import Quiz from "./Components/Quiz";
const config = {
    initialMessages: [createChatBotMessage(`Hello What do you want to learn?`, {
        widget: "options"
    })],
    botName: "Learningbot",
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />
    },
    customStyles: {
        botMessageBox: {
            backgroundColor: "purple"
        },
        chatButton: {
            backgroundColor: "purple"
        }

    },
    state: {
        todos: []
    },
    /*config property*/
    widgets: [
        /*{
            widgetName: "todos",
            widgetFunc: (props) => <Todos {...props} />,
            mapStateToProp: ["todos"],
        }*/
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />,
        },
        {
            widgetName: "javascriptQuiz",
            widgetFunc: (props) => <Quiz{...props} />,
            props: {
                questions: [
                    {
                        question: "What is closure?",
                        answer:
                            "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
                        id: 1,
                    },
                    {
                        question: "Explain prototypal inheritance",
                        answer:
                            "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
                        id: 2,
                    },
                ],
            },
        },

    ]
}

export default config
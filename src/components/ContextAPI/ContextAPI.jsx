import React from 'react';

const ToDoContext = React.createContext();

class ContextAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    items: "can use more features of react-bootstrap"
                }
            ],
            items: ""
        };
    }

    createNewList = () => {
        this.setState(({ list, items }) => ({
            list: [
                ...list,
                {
                    items: items
                }
            ],
            items: ""
        }));
    }

    render() {
        return (
            <ToDoContext.Provider value={{ list: this.state.list }}>
                
            </ToDoContext.Provider>
        )
    }
}
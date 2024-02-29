import React from "react";
import ShowListWork from "./ShowListWork";
class todoAppComponent extends React.Component {
    state = {
        workId: "",
        workName: "",
        workDeadline: "",
        listTodo: [
            { workId: "", workName: '', workDeadline: '' },

        ]
    }
    handleOnchange(str, event) {
        if (str === "workId") {
            this.setState({
                workId: event.target.value
            })
        }
        if (str === "workName") {
            this.setState({
                workName: event.target.value
            })
        }
        if (str === "workDeadline") {
            this.setState({
                workDeadline: event.target.value
            })
        }
    }
    handleClickAdd() {

        let currentList = this.state.listTodo
        const newWork = {
            workId: this.state.workId,
            workName: this.state.workName,
            workDeadline: this.state.workDeadline
        };
        currentList.push(newWork)

        this.setState({
            workId: "",
            workName: "",
            workDeadline: "",
            listTodos: currentList
        });

        console.log(">>> check: ", this.state.listTodo)
        console.log(">>> check input:", this.state)
    }

    render() {

        return (
            <>
                <h1>Welcome to TodoApp by Lee</h1>
                <div>
                    <div>WorkId:
                        <input type="text"
                            value={this.state.workId}
                            onChange={(event) => this.handleOnchange("workId", event)}
                        ></input>

                    </div>
                    <div>WorkName:
                        <input type="text"
                            value={this.state.workName}
                            onChange={(event) => this.handleOnchange("workName", event)}
                        ></input>

                    </div>
                    <div>workDeadline:
                        <input type="text"
                            value={this.state.workDeadline}
                            onChange={(event) => this.handleOnchange("workDeadline", event)}
                        ></input>
                    </div>
                    <input type="submit" value="add" onClick={(event) => {
                        this.handleClickAdd();
                    }}></input>
                </div>





                <ShowListWork
                    listJob={this.state.listTodo} />


            </>
        )
    }
}
export default todoAppComponent; 
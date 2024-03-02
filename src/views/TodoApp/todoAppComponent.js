import React from "react";
import ShowListWork from "./ShowListWork";
import "./todoCss.scss"
import { toast } from 'react-toastify';
import Color from "../HOC/color";
class todoAppComponent extends React.Component {
    state = {
        workId: "",
        workName: "",
        workDeadline: "",
        listTodo: [

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
    checkId = (workId) => {
        return workId % 1 !== 0 || this.state.listTodo.some(item => workId === item.workId);
    }
    handleClickAdd() {
        if (this.checkId(this.state.workId) || !this.state.workId) {
            alert("Id đã tồn tại hoặc không hợp lệ")
        }
        else {
            toast.success("oke")
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

        }
    }
    delJob = (workId) => {
        let currentWork = this.state.listTodo
        const index = currentWork.findIndex(work => work.workId === workId);
        if (index !== -1) {
            currentWork.splice(index, 1);

        }
        else {
            alert("There is no suitable content")
        }

        this.setState({
            listTodo: currentWork
        })
    }

    editWork = (workId) => {
        let currentWork = this.state.listTodo;
        const index = currentWork.findIndex(work => work.workId === workId);

        if (index !== -1) {
            const editedWork = currentWork[index];

            this.setState({
                workId: editedWork.workId,
                workName: editedWork.workName,
                workDeadline: editedWork.workDeadline
            });


            this.delJob(workId);
        } else {
            alert("There is no suitable content");
        }
    }



    render() {

        return (
            <>
                <h1>Welcome to TodoApp by Lee</h1>
                <div className="input_container">
                    <div className="title">WorkId:
                        <input className="input_text"
                            type="text"
                            value={this.state.workId}
                            onChange={(event) => this.handleOnchange("workId", event)}
                        ></input>
                    </div>

                    <div className="title">WorkName:
                        <input className="input_text"
                            type="text"
                            value={this.state.workName}
                            onChange={(event) => this.handleOnchange("workName", event)}
                        ></input>
                    </div>

                    <div className="title">workDeadline:
                        <input className="input_text"
                            type="text"
                            value={this.state.workDeadline}
                            onChange={(event) => this.handleOnchange("workDeadline", event)}

                        ></input>
                    </div>

                    <button className="click-Add" onClick={(event) => {
                        this.handleClickAdd();
                    }}>add</button>
                </div>

                <ShowListWork
                    listJob={this.state.listTodo}
                    delJob={this.delJob}
                    editWork={this.editWork}
                />
            </>
        )
    }
}
export default Color(todoAppComponent); 
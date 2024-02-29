import React from "react";

class addComponent extends React.Component {

    state = {
        id: "",
        title: "",
        salary: ""
    }
    handleSubmit = (event) => {
        event.preventDefault()
        // console.log("check input", this.state)
        if (!this.state.title || !this.state.salary) {
            alert("Missing required params")
            return
        }
        else {
            if (this.props.checkId(this.state.id)) {
                alert("id already exists or is invalid")
            }
            else {
                this.props.addNewJob({
                    id: this.state.id,
                    title: this.state.title,
                    salary: this.state.salary
                })
                this.setState({
                    id: "",
                    title: "",
                    salary: ""
                })
            }
        }
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleChangeId = (event) => {
        this.setState({
            id: event.target.value
        })
    }
    render() {
        return (

            <form>
                {this.props.id} : <input type="text"
                    value={this.state.id}
                    onChange={(event) => { this.handleChangeId(event) }}
                /> <br></br>
                Job's Title: <input type="text"
                    value={this.state.title}
                    onChange={(event) => { this.handleChangeTitleJob(event) }}
                /> <br></br>
                salary: <input type="text" value={this.state.salary}
                    onChange={(event) => { this.handleChangeSalary(event) }}
                /> <br></br>
                <input type="submit" value="add" onClick={(event) => {
                    this.handleSubmit(event);
                }}></input>
            </form>

        )
    }
}
export default addComponent;
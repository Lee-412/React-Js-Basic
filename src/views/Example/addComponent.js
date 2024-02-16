import React from "react";

class addComponent extends React.Component {

    state = {
        titleJob: "",
        salary: ""
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log("check input", this.state)
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    render() {
        return (

            <form>
                titleJob: <input type="text"
                    value={this.state.titleJob}
                    onChange={(event) => { this.handleChangeTitleJob(event) }}
                /> <br></br>
                salary: <input type="text" value={this.state.salary}
                    onChange={(event) => { this.handleChangeSalary(event) }}
                /> <br></br>
                <input type="submit" onClick={(event) => {
                    this.handleSubmit(event);
                }}></input>
            </form>

        )
    }
}
export default addComponent;
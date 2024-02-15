import React from "react";
class DemoForm extends React.Component {

    state = {
        Name: "",
        PassWord: ""
    }
    handleSubmid = () => {
        alert("Name: " + this.state.Name + "\n" + "PassWord: " + this.state.PassWord)
    }

    handleChangeName = (event) => {
        this.setState({
            Name: event.target.value
        })
    }
    handleChangePassWord = (event) => {
        this.setState({
            PassWord: event.target.value
        })
    }
    render() {
        return (
            <>
                <form>
                    Name: <input type="text"
                        value={this.state.Name}
                        onChange={(event) => { this.handleChangeName(event) }}
                    /> <br></br>
                    PassWord: <input type="text" value={this.state.PassWord}
                        onChange={(event) => { this.handleChangePassWord(event) }}
                    /> <br></br>
                    <input type="submit" onClick={() => {
                        this.handleSubmid();
                    }}></input>
                </form>
            </>
        )
    }
}
export default DemoForm;
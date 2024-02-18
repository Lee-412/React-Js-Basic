import React from "react";
class deleteComponent extends React.Component {
    state = {
        id: ""
    }
    handleDeleteClick = () => {
        this.props.delJob(this.state.id)

        this.setState({
            id: ""
        })
    }
    handleChangeID = (event) => {
        this.setState({
            id: event.target.value
        })
    }
    render() {
        return (
            <div>
                Job's Id delete: <input type="text"
                    value={this.state.id}
                    onChange={(event) => { this.handleChangeID(event) }}></input>
                <button onClick={() => {
                    this.handleDeleteClick()
                }}>delete</button>
            </div >
        )
    }
}

export default deleteComponent;
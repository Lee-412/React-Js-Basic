
import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./addComponent";
class MyComponent extends React.Component {

    /*
    JSX 
    */

    state = {
        name: "Lee",
        PassWord: "",
        age: "19",
        greeting: "Hello",
        arrJobs: [
            { id: "0", title: 'Web developers', salary: '100' },
            { id: "1", title: 'Data Analyst', salary: '1000' },
            { id: "2", title: 'AI Enginerr', salary: '2000' }
        ]
    }

    addNewJob = (job) => {

        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        });
    }
    checkId = (id) => {
        return id % 1 !== 0 || this.state.arrJobs.some(item => id === item.id);
    }

    render() {


        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                    checkId={this.checkId}
                />
                < ChildComponent
                    name={this.state.name}
                    age={this.state.age}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;

import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./addComponent";
import DeleteComponent from "./deleteComponent";
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

        let currentJob = this.state.arrJobs
        currentJob.push(job)
        // this.setState({
        //     arrJobs: [...this.state.arrJobs, job]
        // });
        this.setState({
            arrJobs: currentJob
        })
    }
    checkId = (id) => {
        return id % 1 !== 0 || this.state.arrJobs.some(item => id === item.id);
    }
    delJob = (id) => {
        let currentJob = this.state.arrJobs
        const index = currentJob.findIndex(job => job.id === id);
        if (index !== -1) {
            currentJob.splice(index, 1);

        }
        else {
            alert("There is no suitable content")
        }
        // Array filter
        // currentJob = currentJob.filter(item => item.id !== id)
        this.setState({
            arrJobs: currentJob
        })
    }

    render() {


        return (
            <>

                <AddComponent
                    addNewJob={this.addNewJob}
                    checkId={this.checkId}
                />
                <DeleteComponent
                    delJob={this.delJob} />
                < ChildComponent
                    name={this.state.name}
                    age={this.state.age}
                    arrJobs={this.state.arrJobs}
                    delJob={this.delJob}
                />


            </>
        )
    }
}

export default MyComponent;
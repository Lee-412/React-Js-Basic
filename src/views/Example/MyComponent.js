
import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./addComponent";
import DemoForm from "./DemoForm";
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


    render() {


        return (
            <>
                <AddComponent />

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
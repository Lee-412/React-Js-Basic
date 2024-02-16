
import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    /*
    JSX 
    */

    state = {
        name: "Lee",
        age: "19",
        greeting: "Hello",
        arrJobs: [
            { id: "0", title: 'Web developers', salary: '100' },
            { id: "1", title: 'Data Analyst', salary: '1000' },
            { id: "2", title: 'AI Enginerr', salary: '2000' }
        ]
    }

    handleInputName = (event) => {
        this.setState({
            name: event.target.value
        });

    };

    handleInputAge = (event) => {
        this.setState({
            age: event.target.value
        });

    };
    handleClick = () => {
        console.log("hit the button")
        alert(" My Name : " + this.state.name + "\n" + " My Age : " + this.state.age);

    }

    render() {


        return (
            <>
                <div className='first'>
                    Change Your Name:
                    <input
                        id='nameId'
                        value={this.state.name}
                        type='text'
                        onChange={(event) => {
                            this.handleInputName(event);
                        }}
                    />
                    <h1>
                        {this.state.greeting}
                        My name is {this.state.name}
                    </h1>

                    Change Your age:
                    <input

                        value={this.state.age}
                        type='text'
                        onChange={(event1) => {
                            this.handleInputAge(event1);
                        }}
                    />
                    <p>I'm {this.state.age} year's old </p>
                </div>
                <div className='second'>
                    <button id='clickId'
                        onClick={(event) => {
                            this.handleClick()
                        }
                        }> click me</button>
                </div >

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
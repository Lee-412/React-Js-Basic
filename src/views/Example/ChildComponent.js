
import React from "react";


class ChildComponent extends React.Component {

    /*
    JSX 
    */



    render() {

        console.log("check Props", this.props);
        let { name, age, arrJobs } = this.props;
        let a = '';
        return (
            <>
                <div>
                    ChildComponent              <br />
                    Name :  {name}   <br />
                    Age  :  {age}    <br />
                </div>
                <div className="job-lists">
                    {
                        a = arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    Job{item.id}:  {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                    {console.log("Check map array", a)}
                </div>

            </>
        )
    }
}

export default ChildComponent;
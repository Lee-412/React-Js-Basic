
import React from "react";
import "./ChillComponentCss.scss"

class ChildComponent extends React.Component {

    state = {
        showJob: false
    }
    handleClickShow = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleClickHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    order(a, b) {
        return a < b ? -1 : (a > b ? 1 : 0);
    }

    handleClickDel(job) {
        console.log(">>> handle Delete", job)
        this.props.delJob(job.id)
    }

    render() {

        let { arrJobs } = this.props;
        let { showJob } = this.state;
        let check = showJob === true ? 'showJob = true' : 'showJob = false';
        console.log(check)
        let a = '';
        return (
            <>
                {showJob === false ?
                    <div>
                        {/* // style={{ color: "red" }} */}
                        <button className="btn-show"
                            onClick={() => {
                                this.handleClickShow()
                            }}>show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10))
                                    .map((item, index) => (
                                        <div key={item.id}>
                                            Job {item.id}: {item.title} - {item.salary} $  <></>
                                            <span onClick={() => { this.handleClickDel(item) }}>x</span>
                                        </div>
                                    ))
                            }
                            {console.log("Check map array", a)}
                        </div>
                        <div>
                            <button className="btn-hide"
                                onClick={() => {
                                    this.handleClickHide()
                                }}>hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

//function component

// const ChildComponent = (props) => {
//     console.log("check Props", props);
//     let { name, age, arrJobs } = props;
//     let a = '';
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     a = arrJobs.map((item, index) => {
//                         {
//                             if (item.salary >= 500) {
//                                 return (
//                                     <div key={item.id}>
//                                         Job{item.id}:  {item.title} - {item.salary} $

//                                     </div>
//                                 )
//                             }
//                         }
//                     })
//                 }
//                 {console.log("Check map array", a)}
//             </div>
//         </>
//     )
// }

export default ChildComponent;
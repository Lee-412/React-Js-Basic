
import React from "react";


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
                        <button onClick={() => {
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
                                            Job {item.id}: {item.title} - {item.salary} $
                                        </div>
                                    ))
                            }
                            {console.log("Check map array", a)}
                        </div>
                        <div>
                            <button onClick={() => {
                                this.handleClickHide()
                            }}>hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

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
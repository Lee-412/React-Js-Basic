import React from 'react';

class ShowListWork extends React.Component {
    handleClickDel(item) {
        this.props.delJob(item.workId)
    }
    handleClickEdit(item) {
        this.props.editWork(item.workId)

    }
    render() {
        let { listJob } = this.props;
        return (
            <div className="lists">
                {
                    listJob && listJob.length > 0 &&
                    listJob.sort((a, b) => parseInt(a.workId, 10) - parseInt(b.workId, 10))
                        .map((item, index) => (
                            <div key={item.workId}>
                                Job {item.workId}: {item.workName} - {item.workDeadline}
                                <input className='click-del' type='submit' value="del" onClick={() => { this.handleClickDel(item) }} ></input>
                                <input className='click-edit' type='submit' value="edit" onClick={() => { this.handleClickEdit(item) }}></input><></>

                            </div>
                        ))
                }
            </div>
        );
    }
}

export default ShowListWork;

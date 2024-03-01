import React from 'react';
import "./todoCss.scss"
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
            <div className="list_todo">
                {
                    listJob && listJob.length > 0 &&
                    listJob.sort((a, b) => parseInt(a.workId, 10) - parseInt(b.workId, 10))
                        .map((item, index) => (
                            <div className='todo_child' key={item.workId} >
                                work {item.workId}: {item.workName} - {item.workDeadline}
                                <button className='click-del' onClick={() => { this.handleClickDel(item) }} >delete</button>
                                <button className='click-edit' onClick={() => { this.handleClickEdit(item) }}>edit</button><></>

                            </div>
                        ))
                }
            </div>
        );
    }
}

export default ShowListWork;

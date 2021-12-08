import React, {useEffect, useState} from 'react'
import { getUsers, deleteUser} from '../Service/api';
import { AddTask } from './AddTask'
import { Link } from "react-router-dom"

export const Tasks = () => {

    const [flag, setFlag] = useState(true)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getAllUsers();
    }, [flag]);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async() => {
        let res = await getUsers()
        setTasks(res.data)
        const sorted = res.data.sort((a, b) => (a.priority > b.priority) ? 1 : (a.priority === b.priority) ? ((a.status > b.status) ? 1 : -1) : -1 )
        setTasks([...sorted])
    }   

    return (
        <div className="container row">
        <AddTask flag={flag} setFlag={setFlag}/>

        <h2>All Tasks</h2>

        <h4 className="col-md-2">ID</h4>    
        <h4 className="col-md-2">Name</h4>
        <h4 className="col-md-2">End Date</h4>
        <h4 className="col-md-1">Priority</h4>
        <h4 className="col-md-1">Status</h4>

        {tasks.map((task) => {
            return <div className="container row" key={task._id}>
            <p className="col-md-2">{task._id}</p>
            <p className="col-md-2">{task.name}</p>
            <p className="col-md-2">{task.deadline}</p>
            <p className="col-md-1">{task.priority}</p>
            <p className="col-md-1">{task.status}</p>
            <Link className="col-md-2" to={`/edit/${task._id}`}><button  color="secondary">Edit</button></Link>
            <div className="col-md-2"><button  color="secondary" onClick={() => deleteUserData(task._id)}>Delete</button></div> 
            </div>
        })}
        </div>
    )
}

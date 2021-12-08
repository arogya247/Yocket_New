import React, {useState, useEffect} from 'react'
import { addUser } from '../Service/api'

export const AddTask = (props) => {

    const [title, setTitle] = useState("")
    const [deadline, setDeadline] = useState("")
    const [priority, setPriority] = useState("")
    const [status, setStatus] = useState("")

    const submit = async(e) => {
        e.preventDefault();
        if(!title || !deadline){
            alert("Title or description cannot be blank")
        }
        else{
        console.log(title)
        console.log(deadline)
        console.log(priority)
        console.log(status)
        const temp = {
            name: title,
            deadline: deadline,
            priority: priority,
            status: status
        }
        
        await addUser(temp)
        setTitle("")
        setDeadline("")
        props.setFlag(!(props.flag))

        } 
    }

    const priority_arr = ["P1","P2","P3","P4"]
    const status_arr = ["Complete", "Incomplete"]

    return (
        <div className="container">
            <form className="row" onSubmit={submit} >
            <div class="col-md-3">
                <label for="taskname" class="form-label">Name of Task</label>
                <input type="text" autoComplete="off" value={title}
                        onChange = {
                            (e)=>{setTitle(e.target.value)}
                        }
                class="form-control" id="taskname" aria-describedby="emailHelp" />
            </div>
            <div className="col-md-3">
                    <label htmlFor="deadline" className="form-label">Due Date</label>
                    <input type="date" value={deadline}
                        onChange = {
                        (e)=>{setDeadline(e.target.value)}
                        }
                    className="form-control" id="deadline" />
            </div>
            <div className="col-md-3">
                <label htmlFor="priority" className="form-label">Priority</label>
                <select onChange = {
                            (e)=>{
                                setPriority(e.target.value)
                            }
                        } 
                        id="priority" className="form-select">
                <option>Choose the Priority...</option>
                {priority_arr.map((value) => (
                            <option value={value} key={value}>
                                {value}
                            </option>
                ))}
                </select>
            </div>

            <div className="col-md-3 ">
                <label htmlFor="status" className="form-label">Status</label>
                <select onChange = {
                            (e)=>{
                                setStatus(e.target.value)
                            }
                        } 
                        id="status" className="form-select">
                <option>Choose the Status...</option>
                {status_arr.map((value) => (
                            <option value={value} key={value} >
                                {value}
                            </option>
                ))}
                </select>
            </div>
            
            <button type="submit" class="btn btn-primary my-3">Create Task</button>
            </form>
        </div>
    )
}

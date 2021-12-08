import React,{useState, useEffect} from 'react'
import { getUsers, editUser} from '../Service/api';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
export const EditTask = () => {

    const [task, setTask] = useState({});
    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setTask(response.data);
        console.log(task)
    }

    const editUserDetails = async(e) => {
        e.preventDefault()
        const response = await editUser(id, task);
    }

    const priority_arr = ["P1","P2","P3","P4"]
    const status_arr = ["Complete", "Incomplete"]

    return (
        <div className="container">
            <form onSubmit={editUserDetails} >
            <div class="mb-3">
                <label for="name" class="form-label">Name of Task</label>
                <input type="text" value={task.name}
                        onChange = {
                            (e)=>setTask({...task, [e.target.name]:e.target.value})
                        }
                class="form-control" name="name" id="name" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="deadline" class="form-label">End Date</label>
                <input type="date" value={task.deadline}
                    onChange = {
                        (e)=>setTask({...task, [e.target.name]:e.target.value})
                    }
                class="form-control" name="deadline" id="deadline" />
            </div>
            <div className="mb-3 ">
                <label htmlFor="priority" className="form-label">Priority</label>
                <select value={task.priority} 
                    onChange = {
                            (e)=>setTask({...task, [e.target.name]:e.target.value})
                        } 
                        id="priority" name="priority" className="form-select">
                <option>Choose the Priority...</option>
                {priority_arr.map((value) => (
                            <option value={value} key={value}>
                                {value}
                            </option>
                ))}
                </select>
            </div>
            <div className="mb-3 ">
                <label htmlFor="priority" className="form-label">Status</label>
                <select value={task.status} 
                    onChange = {
                            (e)=>setTask({...task, [e.target.name]:e.target.value})
                        } 
                        id="status" name="status" className="form-select">
                <option>Choose the Priority...</option>
                {status_arr.map((value) => (
                            <option value={value} key={value}>
                                {value}
                            </option>
                ))}
                </select>
            </div>
            
            <button type="submit" className="btn btn-primary ">Save the changes..!</button>
            <Link to="/"><button  className="btn btn-primary mx-3" color="secondary">View All Tasks</button></Link>
            </form>
        </div>

    )
}

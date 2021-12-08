import React, {useState} from 'react'
import { registerUser } from '../Service/api'
import { Link } from 'react-router-dom'
export const Register = () => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const submit = async (e) => {
        e.preventDefault()

        if(!username || !password){
            alert("Title or description cannot be blank")
        }
        else{
            const temp = {
                username: username, 
                password: password
            }
    
            await registerUser(temp)
            setpassword("")
            setusername("")
        }

    }
    
    return (
        <div>
            This is Register
            <form onSubmit={submit} id="reg-form">
                <input type="text" onChange = {
                            (e)=>{setusername(e.target.value)}
                        } autoComplete="off" id="username" placeholder="username..." />

                <input type="text" onChange = {
                            (e)=>{setpassword(e.target.value)}
                        } autoComplete="off" id="password" placeholder="password..." />

                <button type="submit" class="btn btn-primary my-3">Register</button>
                <Link class="btn btn-primary my-3" to="/"><button type="submit" >Go to Login Page</button></Link>
            </form>
        </div>
    )
}

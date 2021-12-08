import React, {useState} from 'react'
import { loginUser } from '../Service/api'
import { Link } from 'react-router-dom'

export const Login = ({token, setToken}) => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const submit = async (e) => {
        e.preventDefault()

        if(!username || !password){
            alert("Name or Password cannot be blank")
        }
        else{
            const temp = {
                username: username, 
                password: password
            }
    
        const token = await loginUser(temp)
        setToken(token.data)
        console.log("Out", token)
        if(token.data === null){
            alert("Invalid Credentials")
        }
        else{

        }
            
        }

    }
    
    return (
        <div>
            This is Login
            <form onSubmit={submit} id="reg-form">
                <input type="text" onChange = {
                            (e)=>{setusername(e.target.value)}
                        } autoComplete="off" id="username" placeholder="username..." />

                <input type="text" onChange = {
                            (e)=>{setpassword(e.target.value)}
                        } autoComplete="off" id="password" placeholder="password..." />

                <button type="submit" class="btn btn-primary my-3 mx-3">Login</button>
                <Link class="btn btn-primary my-3" to="/reg"><button type="submit" >Go to Registration Page</button></Link>
            </form>
        </div>
    )
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   };
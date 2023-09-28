import React  , {useEffect, useRef, useState}from 'react'
import '../css/Login.css'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
import { login } from '../redux/actions/auth';

const Login = () => {
    document.title='NoteApp | Login'
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isloading,message,token} = useSelector((state)=>state.auth)
    const loginstate = useRef('Log In')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const postdata = (e)=>{
        e.preventDefault()
        dispatch(login({email,password}))
     }
     
     if(isloading){
         loginstate.current='logging....'
     }
 
     useEffect(()=>{
       if(message==='logged in successful'){
        localStorage.setItem('token', token)
         navigate('/')
         dispatch({
             type:"clearmessage"
         })
       }
       else{
         if(message){
             toast.error(message)
             loginstate.current='Log In'
             dispatch({
                 type:"clearmessage"
             })
         }
       }
     },[dispatch,navigate,message,token])
    return (
       <>
        <div className='maincon'>
            <div>
                <img src="https://cdn.apptorium.com/products/noteapp/images/icon-512@2x.png" alt="" />
            </div>
            <div>
            <h1 className='mb-4'>Log In</h1>
            </div>
            <div>
                <form onSubmit={postdata}>
                    <input type="email" className='mb-2' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} required/>
                    <input type="password" className='mb-2' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/>
                    <button className='my-2 loginbtn'>{loginstate.current}</button>
                </form>
            </div>
            <div className='d-flex flex-row mx-2'>
            <p>Dont't have an account ?</p>
            <Link className='nav-link mx-2' to='/sign'>Sign Up</Link>
            </div>
            <Toaster/>
        </div>
       </>
    )
}

export default Login

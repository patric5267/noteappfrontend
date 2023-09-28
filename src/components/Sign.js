import React  , {useEffect, useRef, useState}from 'react'
import '../css/Login.css'
import { Link , useNavigate } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import { signup } from '../redux/actions/auth'
import toast, { Toaster } from 'react-hot-toast';

const Sign = () => {
    document.title='NoteApp | SignUp'
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isloading,message} = useSelector((state)=>state.auth)
    const signupstate = useRef('Sign Up')
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const postdata = (e)=>{
       e.preventDefault()
       dispatch(signup({username,email,password}))
    }
    
    if(isloading){
        signupstate.current='Signing....'
    }

    useEffect(()=>{
      if(message==='user saved'){
        navigate('/login')
        dispatch({
            type:"clearmessage"
        })
      }
      else{
        if(message){
            toast.error(message)
            signupstate.current='Sign up'
            dispatch({
                type:"clearmessage"
            })
        }
      }
    },[dispatch,navigate,message])
    return (
        <>
            <div className='maincon'>
                <div>
                    <img src="https://cdn.apptorium.com/products/noteapp/images/icon-512@2x.png" alt="" />
                </div>
                <div>
                    <h1 className='mb-4'>Sign Up</h1>
                </div>
                <div>
                    <form onSubmit={postdata}>
                        <input type="text" className='mb-2' placeholder='Username' onChange={(e)=>setUsername(e.target.value)} required/>
                        <input type="email" className='mb-2' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} required/>
                        <input type="password" className='mb-2' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/>
                        <button className='my-2 loginbtn'>{signupstate.current}</button>
                    </form>
                </div>
                <div className='d-flex flex-row mx-2'>
                    <p>Already have an account ?</p>
                    <Link className='nav-link mx-2' to='/login'>Log In</Link>
                </div>
                <Toaster />
            </div>
        </>
    )
}

export default Sign

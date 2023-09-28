import React, { useRef, useState } from 'react'
import '../css/Setting.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { updatepassword} from '../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';

const Setting = () => {
  document.title='NoteApp | Setting'
  const {message}  = useSelector((state)=>state.auth)
  const change = useRef('Update')
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const [dis2, setDis2] = useState('none')
  const [oldpassword, setOldpassword] = useState('')
  const [newpassword, setNewpassword] = useState('')
  const[confirmpassword,setConfirmpassword]=useState('')
  
  const openhide2 = () => {
    if (dis2 === 'none')
      setDis2('block')
    else {
      setDis2('none')
    }
  }
  const postpassword = (e)=>{
    e.preventDefault()
   if(!oldpassword || !newpassword || !confirmpassword){
    toast.error('Plz fill the fields properly')
   }
   else if(newpassword!==confirmpassword){
     toast.error('Password does not match')
   }
   else{
    dispatch(updatepassword({id,oldpassword,newpassword}))
    change.current='Updating...'
   }
  }
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    navigate('/login')
  }
  
  if(message){
    if(message==='Old password does not match'){
    toast.error(message)
    dispatch({
      type:'clearmessage'
    })
    change.current='Update'
  }
  else{
    dispatch({
      type:'clearmessage'
    })
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    navigate('/login')
  }
  }
 
  return (
    <>
      <div className='maincon'>
        <h2 className='mb-3'>Account</h2>
        <div className='passwordcon mt-3'>
          <div className='font'>
            PASSWORD
          </div>
          <div onClick={openhide2} className='font' style={{cursor:'pointer'}}>
            EDIT
          </div>
        </div>
        <div className='line'></div>
        <div className="emailform" style={{ display: dis2 }}>
          <form onSubmit={postpassword}>
           
            <input type="password" className='mt-3' placeholder='Old password' onChange={(e)=>setOldpassword(e.target.value)}/>
           
            <input type="password" className='mt-3' placeholder='New password'  onChange={(e)=>setNewpassword(e.target.value)}/>
            <input type="password" className='mt-3' placeholder='Confirm Newpassword'  onChange={(e)=>setConfirmpassword(e.target.value)} />
            <button className='my-2'>{change.current}</button>
          </form>
        </div>
      </div>
      <Link className='nav-link' to='/'>
        <p className='text-center my-4'>Return to Notes</p>
      </Link>
      <div className='d-flex justify-content-center'>
        <button className='logoutbtn' onClick={logout}>Logout</button>
      </div>
      <Toaster />
    </>
  )
}

export default Setting

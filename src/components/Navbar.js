import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const id = useRef()
  const {data} = useSelector((state)=>state.auth)
  if(data){
    id.current=data._id
  }
  return (
    <div className='navs'>
     <div className="list">
        <div>
           <ul>
            <Link to={`/setting/${id.current}`}>
            <li className='setting'>
            <i className="fa fa-gear"></i>
            </li>
            </Link>
            <Link to='/addnote'>
            <li className='addnote'>
            <i className='fa fa-edit edit'></i>
            </li>
            </Link>
           </ul>
        </div>
     </div>
    </div>
  )
}

export default Navbar

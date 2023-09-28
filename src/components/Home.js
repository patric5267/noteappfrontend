import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../css/Home.css'
import { getuser, fetchnote } from '../redux/actions/auth'
import Navbar from './Navbar';

const Home = () => {
  document.title='NoteApp | Home'
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [data2, setData2] = useState([])
  const [a, setA] = useState(null)
  const { data, isloadingnote, email, dataarray , isloading } = useSelector((state) => state.auth)
  if (data) {
    localStorage.setItem('email', email)
  }
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      dispatch(getuser(token))
    }
    else {
      navigate('/login')
    }
  }, [dispatch, token, navigate])
  useEffect(() => {
    if (email) {
      dispatch(fetchnote(email))
    }
  }, [dispatch, email])

  useEffect(() => {
    if (dataarray) {
      if (dataarray.length === 0) {
        setA(0)
        dispatch({
          type: 'cleardataarray'
        })
      }
      else {
        setData2(dataarray)
        dispatch({
          type: 'cleardataarray'
        })

      }
    }
  }, [dispatch,dataarray])

  const opennote = (id, back, color, desc, title, lastupdated, createddate) => {
    navigate('/update', { state: { id: id, back: back, color: color, title: title, desc: desc, lastupdated: lastupdated, createddate: createddate } })
  }
  if (isloadingnote || isloading) {
    return <div className='d-flex justify-content-center' >
      <img src="https://cdn.dribbble.com/users/2609408/screenshots/5818379/loadercyan.gif" alt="" style={{ width: "15rem", height: '15rem', marginTop: '11rem' }} />
    </div>
  }
   else{
     return (
       <>
         <Navbar />
         <div className='maincon' >
           {
             a === 0 ? <div className='d-flex justify-content-center'><Link to='/addnote' className='nav-link click' >Click to add note</Link></div> :
               ''
           }
           <div className="con" >
             {
               data2.map((val) => {
                 return (
                   <div className="con2" key={val._id} style={{
                     backgroundColor: val.back, color: val.color,
                     padding: '0.2rem', borderRadius: '1rem', cursor: 'pointer'
                   }} onClick={() => opennote(val._id, val.back, val.color, val.description, val.title, val.LastUpdated, val.Createddate)}>{val.description}</div>
                 )
               })
             }
           </div>
         </div >
       </>
     )
   }
}

export default Home

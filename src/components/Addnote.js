import React, { useState , useRef} from 'react'
import '../css/Addnote.css'
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch , useSelector } from 'react-redux'
import { addnote } from '../redux/actions/auth';

const Addnote = () => {
    document.title='NoteApp | AddNote'
    const titlep = useRef()
    const descp = useRef()
    const add = useRef('Add Note')
    const dispatch = useDispatch()
    const {message , isloading} = useSelector((state)=>state.auth)
    if(isloading){
        add.current='Adding....'
    }
    if(message){
        add.current='Add Note'
        toast.success(message)
        titlep.current.value=''
        descp.current.value=''
        descp.current.style.backgroundColor='white'
        titlep.current.style.color='black'
        dispatch({
            type:'clearmessage'
        })
    }
    const email = localStorage.getItem('email')
    const [color, setColor] = useState('')
    const [back, setBack] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const postdata = () => {
        if (!title || !description) {
            toast.error('Plz fill the fields properly')
        }
        else if (title.length < 5 || description.length < 5) {
            toast.error('plz enter a valid text')
        }
        else {
            if (!back && !color) {
                const back = 'black'
                const color = 'white'
                dispatch(addnote({ email, title, description, back, color }))
               
              
                
            }
            else if (!back) {
                const back = 'black'
                dispatch(addnote({ email, title, description, back, color }))
               
            }
            else if (!color) {
                const color = 'white'
                dispatch(addnote({ email, title, description, back, color }))
              
            }
            else {
                dispatch(addnote({ email, title, description, back, color }))
              
            }
        }
    }
    return (
        <div className='mainconadd my-5 container'>
            <div>

                <h2>Add note.....</h2>
            </div>
            <div className='div'>
                <form>
                    <input type="text" placeholder='Enter title' ref={titlep} className='inputtitle my-2' onChange={(e) => setTitle(e.target.value)} />
                </form>
                <textarea name="" id="desc" cols="30" rows="10" className='textarea my-4' ref={descp} placeholder='Enter some text' style={{ color: color, backgroundColor: back }} onChange={(e) => setDescription(e.target.value)}></textarea>
                <div className='textcolor'>
                    <h5 className='mx-2'>Text Color</h5>
                    <div className='colornumbers'>
                        <div style={{ backgroundColor: "red" }} onClick={() => setColor('red')}></div>
                        <div style={{ backgroundColor: "green" }} onClick={() => setColor('green')}></div>
                        <div style={{ backgroundColor: "Yellow" }} onClick={() => setColor('yellow')}></div>
                        <div style={{ backgroundColor: "blue" }} onClick={() => setColor('blue')}></div>
                        <div style={{ backgroundColor: "pink" }} onClick={() => setColor('pink')}></div>
                        <div style={{ backgroundColor: "black" }} onClick={() => setColor('black')}></div>
                        <div style={{ backgroundColor: "grey" }} onClick={() => setColor('grey')}></div>
                        <div style={{ backgroundColor: "orange" }} onClick={() => setColor('orange')}></div>
                        <div style={{ backgroundColor: "violet" }} onClick={() => setColor('violet')}></div>
                    </div>
                </div>
                <div className='backgroundcolor'>
                    <h5 className='mx-2'>Background Color</h5>
                    <div className='colornumbers'>
                        <div style={{ backgroundColor: "red" }} onClick={() => setBack('red')}></div>
                        <div style={{ backgroundColor: "green" }} onClick={() => setBack('green')}></div>
                        <div style={{ backgroundColor: "Yellow" }} onClick={() => setBack('yellow')}></div>
                        <div style={{ backgroundColor: "blue" }} onClick={() => setBack('blue')}></div>
                        <div style={{ backgroundColor: "pink" }} onClick={() => setBack('pink')}></div>
                        <div style={{ backgroundColor: "black" }} onClick={() => setBack('black')}></div>
                        <div style={{ backgroundColor: "grey" }} onClick={() => setBack('grey')}></div>
                        <div style={{ backgroundColor: "orange" }} onClick={() => setBack('orange')}></div>
                        <div style={{ backgroundColor: "violet" }} onClick={() => setBack('violet')}></div>
                    </div>
                </div>
            </div>
            <button className='addbtn' onClick={postdata}>{add.current}</button>
            <Toaster />
        </div>
    )
}

export default Addnote

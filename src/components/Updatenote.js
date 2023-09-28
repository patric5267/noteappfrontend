import React, { useRef, useState } from 'react'
import '../css/Update.css'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { updatenote, deletenote } from '../redux/actions/auth';

const Updatenote = () => {
    document.title='NoteApp | Updatenote'
    const cdate = useRef()
    const cmonth = useRef()
    const cyear = useRef()
    const ldate = useRef()
    const lmonth = useRef()
    const lyear = useRef()
    const words = useRef()
    const characters = useRef()
    const[dis , setDis]=useState('none')
    const showclose = ()=>{
        if(dis==='none'){
            setDis('block')
        }
        else{
            setDis('none')
        }
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const { message } = useSelector((state) => state.auth)
   
    const id = location.state.id


    let char = ''
    let a = location.state.desc
    let space = ''
    let i
    for (i = 0; i < a.length; i++) {
        if (a[i] === ' ') {
            space = space + a[i]
        }
        else {
            break
        }
    }
    let c = a.replace(space, '')
    let b = c + ' '
    let arr = []
    if (a === '') {
        console.log('write something...');
    }
    else {
        for (i = 0; i < b.length; i++) {
            if (b[i] === ' ') {
                arr.push(char)
                char = ''
            }
            else {
                char = char + b[i]
            }
        }
        let arr2 = []
        for (i = 0; i < arr.length; i++) {
            if (arr[i] !== '') {
                arr2.push(arr[i])
            }
        }
        words.current = arr2.length

    }

    const m = location.state.desc
    let spacep = 0
    let sum = 0
    //let wordsp = 0
    for (i = 0; i < m.length; i++) {
        sum = sum + 1
        if (a[i] === ' ') {
            spacep = spacep + 1
        }
    }
    characters.current=sum-spacep

    if (location.state.createddate) {
        const d = new Date(location.state.createddate)
        const day1 = d.getDate()
        const month1 = d.getMonth() + 1
        const year1 = d.getFullYear()
        cdate.current = day1
        cmonth.current = month1
        cyear.current = year1
    }
    if (location.state.lastupdated) {
        const d = new Date(location.state.lastupdated)
        const day2 = d.getDate()
        const month2 = d.getMonth() + 1
        const year2 = d.getFullYear()
        ldate.current = day2
        lmonth.current = month2
        lyear.current = year2
    }
    const [color, setColor] = useState(location.state.color)
    const [back, setBack] = useState(location.state.back)
    const [title, setTitle] = useState(location.state.title)
    const [description, setDescription] = useState(location.state.desc)
    const updatenotep = () => {
        if (!title || !description) {
            toast.error('Plz fill the fileds properly')
        }
        else if (title.length < 5 || description.length < 5) {
            toast.error('Plz enter a valid text')
        }
        else {
            const LastUpdated = new Date()
            dispatch(updatenote({ title, description, back, color, id, LastUpdated })) 
        }
    }
    const deletenotep = () => {
        dispatch(deletenote(id))
       
    }
    if (message) {
        dispatch({
            type: 'clearmessage'
        })
        navigate('/')
    }
    return (
        <>
            <div className='bigcon'>
                <div className='mainconupdate my-2'>
                    <div className='smallconupdate '>
                        <div className='mx-5'>
                            <i className="fa fa-trash-o" onClick={deletenotep} ></i>
                        </div>
                        <div className='mx-5 mt-2'>
                            <i className='fa fa-edit editupdate' onClick={updatenotep}></i>
                        </div>
                        <div className='mx-5' onClick={showclose}>
                            <i className="fa fa-info-circle " ></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className='titledescon my-4'>
                <div className='model my-2' style={{display:dis}}>
                    <div className="curentdata d-flex flex-row mt-2">
                        <div>
                            CreatedAt :
                        </div>
                        <div className='mx-2'>
                            {`${cdate.current}-${cmonth.current}-${cyear.current}`}
                        </div>
                    </div>
                    <div className="lastupdate d-flex flex-row mt-2">
                        <div>
                            LastUpdated :
                        </div>
                        <div className='mx-2'>
                            {`${ldate.current}-${lmonth.current}-${lyear.current}`}
                        </div>
                    </div>
                    <div className="lastupdate d-flex flex-row mt-2">
                        <div>
                            Total words :
                        </div>
                        <div className='mx-2'>
                            {words.current}
                        </div>
                    </div>
                    <div className="lastupdate d-flex flex-row mt-2">
                        <div>
                            Total characters :
                        </div>
                        <div className='mx-2'>
                            {characters.current}
                        </div>
                    </div>
                </div>
                <div className='titlecon'>
                    <h2>Title : </h2>
                    <input type="text" maxLength={41} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='descon my-2'>
                    <h2>Description : </h2>
                    <textarea name="" id="" cols="30" rows="10" className='textdes' style={{ color: color, backgroundColor: back }} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <div className="colorupdate">
                        <h5>Text Color</h5>
                        <div className="textcolorupdate">
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
                    <div className='backcolorupdate'>
                        <h5>Background color</h5>
                        <div className="backupdate">
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
                <Toaster />
            </div>

        </>
    )
}

export default Updatenote

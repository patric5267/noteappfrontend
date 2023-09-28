import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../css/Overviewpage.css'

const Overviewpage = () => {
    document.title='NoteApp | Overview'
    const [lines, setLines] = useState('block')
    const[dis,setDis]=useState('none')
    const[dis2,setDis2]=useState('none')
    const show = () => {
        setLines('none')
        setDis('block')
        setDis2('block')
    }
    const close = ()=>{
        setLines('block')
        setDis('none')
        setDis2('none')
    }
    return (
        <>
            <div className="headercon my-4">
                <div className="headerconleft">
                    <div>
                        <img src="https://cdn.apptorium.com/products/noteapp/images/icon-512@2x.png" alt="" />
                    </div>
                    <div>
                        <h2 className='mx-1'>Simplenote</h2>
                    </div>
                </div>
                <div className="headerconright">
                    <div>
                        <ul className='my-1'>
                            <li>Contact Us</li>
                            <li>Help</li>
                            <li>Support Forum</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                      <Link to='/login'>
                      <button className='mx-2  btn'>Log In</button>
                      </Link>  
                       <Link to='/sign'>
                        <button className='mx-2  btn'>Sign Up</button>
                       </Link>
                    </div>
                </div>
                <div className="hamburger">
                    <div className="hamlines" onClick={show} style={{ display: lines }}>
                        <div className='lines'></div>
                        <div className='lines'></div>
                        <div className='lines'></div>
                    </div>
                    <div className="close" onClick={close}>
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/kqt/close-116.png" alt="" style={{display:dis}} />
                    </div>
                    <div className="listflex" style={{display:dis2}}>
                        <ul>
                            <li>Contact Us</li>
                            <li>Help</li>
                            <li>Support Forum</li>
                            <li>Blog</li>
                           <Link to='/login' className='nav-link'>
                           <li>Log In</li>
                           </Link>
                           <Link to='/sign' className='nav-link'>
                           <li>Sign Up</li>
                           </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="maincon my-8">
                <div className='container cons'>
                    <h1 className='text-center'>The simplest way to</h1>
                    <h1 className='text-center'>keep notes</h1>
                </div>
                <div className='midcon'>
                <div className="my-5 ">
                    <p className='text-center para para1'>All your notes, synced on all your devices. Get Simplenote now for iOS,</p>
                    <p className='text-center para para2'>Android, Mac, Windows, Linux, or in your browser.</p>
                </div>
                </div>
                
                <div>
                    <Link to='/sign'>
                    <button className="btns">Sign up now</button>
                    </Link>
                </div>
                <div className='cards my-5 container'>
                    <div class="card mx-2 bottom" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Use it everywhere</h5>
                            <p class="card-text">Notes stay updated across all your devices, automatically and in real time. There’s no “sync” button: It just works.</p>
                        </div>
                    </div>
                    <div class="card mx-2 bottom" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Stay organized</h5>
                            <p class="card-text">Add tags to find notes quickly with instant searching.</p>
                        </div>
                    </div>
                    <div class="card mx-2"
                        style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Work together</h5>
                            <p class="card-text">Share a to-do list, post some instructions, or publish your notes online.</p>
                        </div>
                    </div>
                </div>
                <div className='cards container secon'>
                    <div class="card mx-2 bottom" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Go back in time</h5>
                            <p class="card-text">Notes are backed up with every change, so you can see what you noted last week or last month.</p>
                        </div>
                    </div>
                    <div class="card mx-2 bottom" style={{ width: '18rem' }}>
                        <div class="card-body ">
                            <h5 class="card-title">Markdown support</h5>
                            <p class="card-text">Write, preview, and publish your notes in Markdown format.</p>
                        </div>
                    </div>
                    <div class="card mx-2"
                        style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">It’s free</h5>
                            <p class="card-text">Apps, backups, syncing, sharing – it’s all completely free.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overviewpage

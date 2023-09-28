export const signup = (data2)=>async(dispatch)=>{
    try {
        const {username,email,password}=data2
        dispatch({
            type:'signuppending'
        })

        const data = await fetch('https://noteappp-aohm.onrender.com/createuser' , {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username,email,password
            })
        })
        const res = await data.json()
        dispatch({
            type:'signupsuccess',
            payload:res.message
        })
    } catch (error) {
        dispatch({
            type:'signupfailure',
            payload:error
        })
    }
}

export const login = (data2)=>async(dispatch)=>{
    try {
        const {email,password}=data2
        dispatch({
            type:'loginpending'
        })

        const data = await fetch('https://noteappp-aohm.onrender.com/login' , {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,password
            })
        })
        const res = await data.json()
        dispatch({
            type:'loginsuccess',
            payload:[res.message,res.token]
        })
    } catch (error) {
        dispatch({
            type:'loginfailure'
        })
    }
}


export const getuser = (token)=>async(dispatch)=>{
    try {
        dispatch({
            type:'getuserpending'
        })

        const data = await fetch('https://noteappp-aohm.onrender.com/getuser' , {
            method:'GET',
            headers:{
                'token':token,
                Accept:'application/json',
                'Content-Type':'application/json'
            },
        })
        const res = await data.json()
        dispatch({
            type:'getusersuccess',
            payload:res
        })
    } catch (error) {
        dispatch({
            type:'getuserfailure'
        })
    }
}

export const addnote = (data2)=>async(dispatch)=>{
    try {
        const{email,title,description,back,color}=data2
        dispatch({
            type:'addnotepending'
        })

        const data = await fetch('https://noteappp-aohm.onrender.com/createnote' , {
           method:'POST',
           headers:{
            'Content-type':'application/json'
           },
           body:JSON.stringify({
            email,title,description,back,color
           })
        })
        const res = await data.json()
        dispatch({
            type:'addnotesuccess',
            payload:res.message
        })
    } catch (error) {
        dispatch({
            type:'addnotefailure'
        })
    }
}

export const fetchnote = (email)=>async(dispatch)=>{
    try {
        dispatch({
            type:'fetchnotepending'
        })

        const data = await fetch('https://noteappp-aohm.onrender.com/fetchnotes' , {
           method:'POST',
           headers:{
            'Content-type':'application/json'
           },
           body:JSON.stringify({
            email
           })
        })
        const res = await data.json()
        dispatch({
            type:'fetchnotesuccess',
            payload:res
        })
    } catch (error) {
        dispatch({
            type:'fetchnotefailure'
        })
    }
}

export const updatenote = (data2)=>async(dispatch)=>{
    try {
        const{title,description,color,back,id , LastUpdated}=data2
        dispatch({
            type:'updatenotepending'
        })

        const data = await fetch(`https://noteappp-aohm.onrender.com/updatenote/${id}` , {
           method:'PATCH',
           headers:{
            'Content-type':'application/json'
           },
           body:JSON.stringify({
            title,description,color,back,LastUpdated
           })
        })
        const res = await data.json()
        dispatch({
            type:'updatenotesuccess',
            payload:res.message
        })
    } catch (error) {
        dispatch({
            type:'updatenotefailure'
        })
    }
}

export const updatepassword = (data2)=>async(dispatch)=>{
    try {
        const{id,oldpassword,newpassword}=data2
        dispatch({
            type:'updatpasswordpending'
        })

        const data = await fetch(`https://noteappp-aohm.onrender.com/updatepassword/${id}` , {
           method:'PATCH',
           headers:{
            'Content-type':'application/json'
           },
           body:JSON.stringify({
            oldpassword,newpassword
           })
        })
        const res = await data.json()
        dispatch({
            type:'updatepasswordsuccess',
            payload:res.message
        })
    } catch (error) {
        dispatch({
            type:'updatepasswordfailure'
        })
    }
}


export const deletenote = (id)=>async(dispatch)=>{
    try {
        dispatch({
            type:'deletenotepending'
        })

        const data = await fetch(`https://noteappp-aohm.onrender.com/deletenote/${id}` , {
           method:'DELETE',
           headers:{
            Accept:'application/json',
            'Content-type':'application/json'
           }
        })
        const res = await data.json()
        dispatch({
            type:'deletenotesuccess',
            payload:res.message
        })
    } catch (error) {
        dispatch({
            type:'deletenotefailure'
        })
    }
}

export const deleteaccount = (id)=>async(dispatch)=>{
    try {
        dispatch({
            type:'deleteaccountpending'
        })

        const data = await fetch(`https://noteappp-aohm.onrender.com/deleteaccount/${id}` , {
           method:'DELETE',
           headers:{
            Accept:'application/json',
            'Content-type':'application/json'
           }
        })
        const res = await data.json()
        dispatch({
            type:'deleteaccountuccess',
            payload:res.message
        })
    } catch (error) {
        dispatch({
            type:'deleteaccountfailure'
        })
    }
}

export const deleteallnotes = (email)=>async(dispatch)=>{
    try {
        dispatch({
            type:'deleteallnotespending'
        })

        const data = await fetch(`https://noteappp-aohm.onrender.com/deletenotes` , {
           method:'POST',
           headers:{
            'Content-type':'application/json'
           },
           body:JSON.stringify({
            email
           })
        })
        const res = await data.json()
        dispatch({
            type:'deleteallnotessuccess',
            payload:res.message
        })
    } catch (error) {
        dispatch({
            type:'deleteallnotesfailure'
        })
    }
}
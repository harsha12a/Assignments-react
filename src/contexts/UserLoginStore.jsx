import { UserLoginContext } from './userLoginContext'
import { useState } from 'react'
function UserLoginStore({children}) {
    let [curr,setcurr]=useState(null)
    let [stat,setstat]=useState(false)
    let [err,seterr]=useState('')
    async function loginuser(obj){
        try{
            let res=await fetch(`http://localhost:3000/users?username=${obj.username}`)
            let users=await res.json()
            if(users.length===0||users[0].password!=obj.password){
                console.log('invalid user');
                setcurr(null)
                setstat(false)
                seterr('Invalid Username or password')
            }
            else{
                setcurr(users[0])
                setstat(true)
                seterr('')
            }
        }catch(errs){
            seterr(errs.message)
        }
    }
    function logoutuser(){
        setcurr({})
        setstat(false)
    }
  return (
    <UserLoginContext.Provider value={{loginuser,logoutuser,stat,err,curr,setcurr}}>
        {children}
    </UserLoginContext.Provider>
  )
}

export default UserLoginStore
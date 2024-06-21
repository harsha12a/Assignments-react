import { UserLoginContext } from './userLoginContext'
import { useState } from 'react'
function UserLoginStore({children}) {
    let [curr,setcurr]=useState(null)
    let [stat,setstat]=useState(false)
    async function loginuser(obj){
        let res=await fetch(`http://localhost:3000/users?username=${obj.username}`)
        let users=await res.json()
        if(users.length===0||users[0].password!=obj.password){
            console.log('invalid user');
            setcurr(null)
            setstat(false)
        }
        else{
            setcurr(users[0])
            setstat(true)
        }
    }
    function logoutuser(){
        setcurr({})
        setstat(false)
    }
  return (
    <UserLoginContext.Provider value={{loginuser,logoutuser,stat}}>
        {children}
    </UserLoginContext.Provider>
  )
}

export default UserLoginStore
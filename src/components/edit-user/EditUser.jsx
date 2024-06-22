import './EditUser.css'
import { useContext } from 'react'
import { UserLoginContext } from '../../contexts/userLoginContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
function EditUser() {
    let {curr,setcurr}=useContext(UserLoginContext)
    let {register,handleSubmit,setValue}=useForm()
    let navigate=useNavigate()
    async function onsave(obj){
        let res=await fetch(`http://localhost:3000/users/${curr.id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(obj)
        })
        console.log(res);
        if(res.status===200){
            obj.id=curr.id
            setcurr(obj)
            navigate('/user-profile')
        }
    }
  return (
    <div>
        <div className='row'>
        <div className='col-11 col-sm-10 col-md-6 mx-auto'>
          <form className='mx-auto mt-5 bg-light p-3' onSubmit={handleSubmit(onsave)}>
            <div className="mb-3">
              <label className='form-label' htmlFor="username">Username</label>
              <input className='form-control' type="text" {...register('username',{required:true})} value={setValue('username',curr?.username)} id="username" />
            </div>
            <div className="mb-3">
              <label className='form-label' htmlFor="password">Password</label>
              <input className='form-control' type="password" {...register('password',{required:true})} value={setValue('password',curr?.password)} disabled id="password" />
            </div>
            <div className="mb-3">
              <label className='form-label' htmlFor="email">Email</label>
              <input className='form-control' type="email" {...register('email',{required:true})} value={setValue('email',curr?.email)} id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="contact" className="form-label">Contact number</label>
              <input type="number" {...register('contact',{required:true})} value={setValue('contact',curr?.contact)} id="contact" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="profile" className="form-label">Paste profile img url</label>
              <input type="url" {...register('profile',{required:true})} id="profile" disabled value={setValue('profile',curr?.profile)} className="form-control" />
            </div>
            <button type="submit" className='btn btn-success'>Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditUser
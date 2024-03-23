import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';


const Create = () => {

    const dispatch = useDispatch();
    const users =  useSelector((state) => state.users)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser({id: users[users.length - 1].id + 1, name, email}))
        navigate('/')
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center alighn-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h1>Create New User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' className='form-control' placeholder='enter name' onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='name'>Email:</label>
                    <input type='email' name='email' className='form-control' placeholder='enter email' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <button className='btn btn-primary mt-3'>submit</button>
            </form>
        </div>
        
    </div>
  )
}

export default Create
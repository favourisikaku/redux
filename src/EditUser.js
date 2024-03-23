
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from './UserReducer';

const EditUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const existingUser = users.find((user) => user.id === parseInt(id));
  
  const [updatedName, setUpdatedName] = useState(existingUser ? existingUser.name : '');
  const [updatedEmail, setUpdatedEmail] = useState(existingUser ? existingUser.email : '');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser({
      id: parseInt(id),
      name: updatedName,
      email: updatedEmail
    }));
    navigate('/');
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h1>Edit Existing User</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter name' value={updatedName} onChange={(e) => setUpdatedName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter email' value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)}/>
          </div>
          <button className='btn btn-primary mt-3'>Update</button>
        </form>
      </div>    
    </div>
  );
};

export default EditUser;

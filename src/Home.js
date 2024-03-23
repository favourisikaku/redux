import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from './UserReducer'
import { Link } from 'react-router-dom'

const Home = () => {
	const dispatch = useDispatch();
    const users =  useSelector((state) => state.users)
    console.log(users);
  return (
		<div>
			<div className='d-flex justify-content-end me-5'>
			<Link to='/CreateUser' className='btn btn-success mt-5 mb-3'>Create +</Link>
			</div>
			
			<table className='table'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, i) => (
						<tr key={i}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>
								<Link to={`/EditUser/${user.id}`} className='btn btn-secondary me-3'>Edit</Link>
								<button className='btn btn-danger' onClick={() => dispatch(deleteUser({id:user.id}))}>Delete</button>
							</td>
						</tr>
					))}
			</tbody>
			</table>		
		</div>
  )
}

export default Home
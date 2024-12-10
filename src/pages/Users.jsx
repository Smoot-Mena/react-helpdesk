import React from 'react';
import users from "../json/users.json";
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useNavigate, Link } from 'react-router-dom';

const Users = () => {

    // const navigate = useNavigate();

  return (
    <>
        <NavBar />

            <Stack gap={3} className='user-list w-auto px-4'
            style={{margin: "15vh auto"}}>
                {users && users.map((user, index) => (
                    <Stack 
                    className='user' 
                    key={index}
                    style={{borderBottom: "2px solid dodgerblue", 
                    margin: "0 auto", padding: "1vh"}}>
                        <p style={{textAlign: "center", fontSize: "1.5em"}}>
                            <strong>{user.name}</strong>
                        </p>
                        <p>
                            <code style={{color: "dodgerblue"}}>{user.email}</code>
                        </p>
                        <p><strong>Employee ID:</strong> {user.employeeId}</p>
                        <section>
                            <p>
                                <em>Employee status is..?</em>
                            </p>
                            <Form>
                                <Form.Group className='d-flex justify-content-evenly mb-4'>
                                    <Form.Check name='employee-status' type='radio' label="Active" isValid/>
                                    <Form.Check name='employee-status' type='radio' label="Terminated" isInvalid/>
                                </Form.Group>

                                <Form.Group className='d-flex justify-content-between mb-2'>
                                    <Link state={ {user: user} } to={`/users/edit-user/${user.employeeId}`}>
                                        <Button variant='warning'>Edit User</Button>
                                    </Link>
                                    <Button variant='outline-danger'>Delete User</Button>
                                </Form.Group>
                            </Form>
                        </section>
                    </Stack>
                ))}
            </Stack>

        <Footer />
    </>
  )
}

export default Users;

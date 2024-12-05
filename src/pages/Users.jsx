import React from 'react';
import users from "../json/users.json";
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";

const Users = () => {
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
                        <p style={{textAlign: "center"}}>
                            <strong>{user.name}</strong>
                        </p>
                        <p>
                            <code style={{color: "dodgerblue"}}>{user.email}</code>
                        </p>
                        <section>
                            <p>
                                <em>Employee status is..?</em>
                            </p>
                            <Form>
                                <Form.Group className='d-flex justify-content-evenly'>
                                    <Form.Check name='employee-status' type='radio' label="Active" isValid/>
                                    <Form.Check name='employee-status' type='radio' label="Terminated" isInvalid/>
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

{/* <label name="active-terminated">Active: </label>
                                <input name="active-terminated" type="radio" value={"active"} />

                                <label name="active-terminated">Terminated: </label>
                                <input name="active-terminated" type="radio" value={"terminated"}/> */}
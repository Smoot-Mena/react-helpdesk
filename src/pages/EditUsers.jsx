import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import { IoReturnDownBack } from "react-icons/io5";

const EditUsers = ( {user} ) => {

    const details = useLocation();
    user = details.state.user;

    const navigate = useNavigate();

    const [input, setInput] = useState({
        usersId: user.employeeId,
        usersName: user.name,
        usersEmail: user.email
    });

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

  return (
    <section>
        {user && (
            <Form style={{margin: "10vh auto", width: "max-content"}}>
                <Stack direction='horizontal' gap={3} className='mb-4'>
                    <Form.Group>
                        <Form.Label>Employee ID: </Form.Label>
                        <Form.Control type='number' min={1} onChange={handleChange} name='usersId' value={input.usersId}/>
                    </Form.Group>

                    <Button  
                        variant='outline-danger'
                        style={{alignSelf: "end"}}
                        onClick={() => {navigate("/users")}}>
                            <IoReturnDownBack style={{width: "25px", height: "25px"}} />
                    </Button>
                </Stack>
                

                <Form.Group className='mb-4'>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type='text' onChange={handleChange} name='usersName' value={input.usersName}/>
                </Form.Group>

                <Form.Group className='mb-4'>
                <Form.Label>Email: </Form.Label>
                <Form.Control type='email' onChange={handleChange} name='usersEmail' value={input.usersEmail} />
                </Form.Group>

                <Form.Group>
                    <Button>Save Changes</Button>
                </Form.Group>
            </Form>
        )}
    </section>
  )
}

export default EditUsers;
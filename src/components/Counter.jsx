import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';

import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

const Counter = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

  return (
    <section className='counter'>
        <p>{count}</p>

        <Stack direction='horizontal' gap={3}>
            <Button variant='success' onClick={() => dispatch(increment())}>+</Button>
            <Button variant='danger' onClick={() => dispatch(decrement())}>-</Button>
        </Stack>
    </section>
  )
}

export default Counter;
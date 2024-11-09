import React from 'react';
import users from "../json/users.json";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Users = () => {
  return (
    <>
        <Navbar />
        
            <section>
                {users && users.map((user, index) => (
                    <section className='user' key={index}>
                        <p>
                            <strong>{user.name}</strong>
                        </p>
                        <p>
                            <code>{user.email}</code>
                        </p>
                        <section>
                            <p>Employee status is..?</p>
                            <form>
                                <label name="active-terminated">Active: </label>
                                <input name="active-terminated" type="radio" value={"active"} />

                                <label name="active-terminated">Terminated: </label>
                                <input name="active-terminated" type="radio" value={"terminated"}/>
                            </form>
                        </section>
                    </section>
                ))}
            </section>

        <Footer />
    </>
  )
}

export default Users
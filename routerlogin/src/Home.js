import React from 'react'
import { Login } from './auth/Login'
import { Signup } from './auth/Signup'
import { Routes, Route, Link } from 'react-router-dom';
import'./App.css'

export default function Home() {
    return (
        <div className='container'>
            <div className='row '>
            <h1 className='text-center md-4'>Welcome to React Forms</h1>
                <div className='col-12 authentication '>
                    
                    {/* include the signup and login components here to access */}
                    {/* <div className='col-6 mb-3'> */}
                    {/* <h2>If you already have an account please login.</h2> */}
                    <Link to='./Login'>
                            <button className='btn btn-primary '>Login</button>
                        </Link><br></br>
                    
                    {/* </div> */}
                    {/* <h2>If you don't have an account please SignUp/Register.</h2> */}
                    {/* <div className='col-6'> */}
                        <Link to='./Signup'>
                            <button className='btn btn-primary'>Signup</button>
                        </Link>
                    {/* </div> */}

                    {/* <Login />
                     <Signup /> */}
                </div>

            </div>
        </div>
    )
}

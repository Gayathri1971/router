import React from 'react'

export const Signup = () => {
    return (
        <div className="container" id='signup-container'>
            <div className='row'>
            <div className="col-md-6  p-4 " id='signup-card'>

            <h2 className="text-center">SignUp</h2>           
                 <div className="card">
                 {/* <a href='./'>
                    <i class="fa-solid fa-house fa-2xl"></i>
                    </a> */}
                    {/* <div className='col-12 mb-3'> */}
                    <label htmlFor="email">First Name:</label>
                    <input type="text" className='form-control' />
                    {/* </div> */}
                    {/* <div className='col-12 mb-3'> */}
                    <label htmlFor="email">Last Name:</label>
                    <input type="text" className='form-control' />
                    {/* </div> */}
                    {/* <div className='col-12 mb-3'> */}
                    <label htmlFor="email">Email:</label>
                    <input type="text" className='form-control' />
                    {/* </div> */}
                    {/* // <div className='col-12 mb-3'> */}
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className='form-control' />
                    {/* </div> */}
                    {/* // <div className='col-12 mb-3'> */}
                    <label htmlFor="pwd">Confirm Password:</label>
                    <input type="password" className='form-control' />
                    {/* </div> */}
                    {/* // <div className='col-12 mb-3'> */}
                    {/* <button className='btn btn-primary'>Signup</button> */}
                    <button id='login-btn' className="btn btn-success w-100 mt-3">Signup</button>

                    {/* </div> */}


                    {/* include the home page and login page */}

                    {/* <div className='col-12 mb-3'> */}
                    <a href='/'>Home</a>
                    {/* </div> */}

                    {/* <div className='col-12 mb-3'> */}
                    <p>Already have an account?
                        <a href='/Login'>Login</a>
                    </p>
                </div>
            </div>
        </div>

         </div >
    )
}

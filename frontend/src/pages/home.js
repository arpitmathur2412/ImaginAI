import React from 'react';
import { NavBar } from '../components/NavBar';
import imginput from '../images/mri1.jpg'
import imgexpected from '../images/mri8.jpg'
import imgoutput from '../images/predicted.jpg'
export const Home = () => {
    return (
        <>
            <NavBar />
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <blockquote className='blockquote'>
                            <p className='mb-0'>A well-known quote, contained in a blockquote element.</p>
                        </blockquote>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className='col-lg-8'>
                        <p>An example of the input and output:</p>
                        <img src={imginput} style={{marginTop:"40px", marginRight:"40px"}} className='img-fluid float-left' alt='...' />
                        <img src={imgexpected} style={{marginTop:"40px"}} className='img-fluid float-left' alt='...' />
                        <img src={imgoutput} width={"260px"} style={{marginTop:"40px"}} className='img-fluid rounded float-right' alt='...' />
                    </div>
                    <div className='col-lg-12 text-center'>
                        <blockquote className='blockquote'>
                            <p className='mb-0 '>Made By:</p>
                            <footer className='blockquote-footer my-2'>Team <cite title='Source Title'>Byte Hogs</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

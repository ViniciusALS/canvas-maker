import React from 'react';
import Header from "../components/Header";
import canvasBackground from '../../public/canvas_background.svg'

function Home() {

    return (
        <>
            <Header/>
            <div>
                <h1>Start planning your new business </h1>
                <h2>Easy. Quick. Inexpensive. </h2>

                <p>Canvas Maker is  a tool based on the BMC business model template to help you structure your business idea into reality  by pin pointing key aspects of your business model and operations.</p>

                <img src={canvasBackground} />
            </div>
            
            <div>
                <h2>Create an Account for Free</h2>

                <form>
                    <input type='text' placeholder='Username'/>
                    <input type='text' placeholder='Email'/>
                    <input type='text' placeholder='Password'/>
                    <input type='text' placeholder='Confirm password'/>

                    <input type='checkbox'/> <p>When creating a new account, you agree to our terms of policy and data privacy.</p>

                    <input type='button' value='Create account'/>
                </form>

                <p>Already have an account? Log in</p>
            </div>
        </>
    );
}

export default Home;
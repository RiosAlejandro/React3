import React, { useState } from 'react';
import './Formulario.css'

const Formulario = () => {

    const [form, setForm] = useState({});

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <h1>REGISTER</h1>
                <div className="campoNombre">
                    <input 
                        placeholder="First name"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={form.name}
                        onChange={handleChange}
                    />
                    <input 
                        placeholder="Last name"
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="campoInput">
                    <input 
                        placeholder="Email"
                        type="email"
                        id="email"
                        name="email"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="campoInput">
                    <input 
                        placeholder="Password"
                        type="password"
                        id="password"
                        name="password"
                        value={form.name}
                        onChange={handleChange}
                        /* poner un patron a la validacion de este campo */
                    />
                </div>
                <div className="campoInput">
                    <input 
                        placeholder="Confirm password"
                        type="password"
                    />
                </div>
                <div className="campoRadio">
                    <input type="checkbox" />
                    <p>I accept <span>Terms of Use</span></p>
                </div>
                <div className="campoBotton">
                    <button>REGISTER NOW</button>
                </div>
            </form>
        </>
     );
}
 
export default Formulario;
import React, {Fragment} from 'react';
import './Formulario.css'

const Formulario = () => {
    return ( 
        <Fragment>
            <form>
                <h1>REGISTER</h1>
                <div className="campoNombre">
                    <input 
                        placeholder="First name"
                    />
                    <input 
                        placeholder="Last name"
                    />
                </div>
                <div className="campoInput">
                    <input 
                        placeholder="Email"
                    />
                </div>
                <div className="campoInput">
                    <input 
                        placeholder="Password"
                    />
                </div>
                <div className="campoInput">
                    <input 
                        placeholder="Confirm password"
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
        </Fragment>
     );
}
 
export default Formulario;
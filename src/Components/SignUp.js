import React from "react";
import { Link } from "react-router-dom";

function SignUp(props) {

    
    return (
        <>

            <div id="login" className="cointainer">
                <div className="row opacity-75">
                    <div id="login-form" className="col-5 offset-6 border border-dark rounded-4 bg-light text-center mb-5">
                        <form>
                        <h1 className="mb-0"> My Kart </h1>
                        <p> The Product Store</p>
                        <h6 className="mt-4">Name</h6>
                        <input type="text" id="n_name" className="rounded-2 w-50" required />
                        <h6 className="mt-4">Mail</h6>
                        <input type="mail" id="n_mail" className="rounded-2 w-50" required />
                        <h6 className="mt-4">Password</h6>
                        <input id="pass" type="password" className="rounded-2 w-50" required />
                        <p></p>
                        <Link to='/home' ><input value="Signup"  type="submit" className="btn btn-dark mb-1" /> </Link>
                            <p className="mb-5"> Already Have an Account? <Link to='/'>Login</Link> </p>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SignUp;


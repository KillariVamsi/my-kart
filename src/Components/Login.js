import React from "react";
import { Link } from "react-router-dom";

function Login(props) {

    

    function clicked(){
        if(props.name != "" && props.mail != "" ){ 
            props.setIsLoggedIn(true)
        } 
        else{  
            window.alert("Enter Correct Details to Login")
        }
    }


    return (
        <>

            <div id="login" className="cointainer">
                <div className="row opacity-75">
                    <div id="login-form" className="col-5 offset-6 border border-dark rounded-4 bg-light text-center">
                        <form>
                        <h1 className="mb-0"> My Kart</h1>
                        <p> The Product Store</p>
                        <h6 className="mt-4">Name</h6>
                        <input
                        value={props.name}
                        onChange={
                            (e) => { props.setName(e.target.value) }
                        } type="text" id="name" className="rounded-2 w-50" required />
                        <h6 className="mt-4">Mail</h6>
                        <input 
                        value={props.mail}
                        onChange={
                            (e) => { props.setMail(e.target.value) }
                        } type="mail" id="mail" className="rounded-2 w-50" required />
                        <h6 className="mt-4">Password</h6>
                        <input id="pass" type="password" className="rounded-2 w-50" required />
                        <p></p>
                        <Link to='/home' ><input onClick={ () => { clicked(props) }} value="Login"  type="submit" className="btn btn-dark mb-1" /> </Link>
                            <p className="mb-5"> Don't Have Account yet? <Link to='/signup'>SignUp</Link> </p>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Login;



import React from "react";
import { useNavigate , Link } from "react-router-dom";

function RenderButton(props) {
    if(props.loginStatus == true){
        return <Link to='/' ><button  onClick={() => { props.setLoginStatus(false) }} class="btn btn-outline-dark mt-4 ms-5"> Logout</button></Link>
    }
    
}

function Profile(props) {

    let navigate = useNavigate()

    return (
        <>

            <div className="container profile" >
                <div className="row" >
                    <div className="col border border-warning mt-4">
                        <h1 className="text-center mt-4"> Hello, {props.name} </h1>
                        <p className="mt-4"> <b>Phone Number : </b> {`+91 9876543210`}</p>
                        <p className="mt-4"> <b>Mail ID : </b> {props.mail}</p>
                        <ul class="list-group">
                            <li onClick={() => { navigate('/wishlist') }} className="list-group-item mt-5 navi">Your WishList</li>
                            <li onClick={() => { navigate('/cart') }} className="list-group-item mt-5 mb-5 navi" >Your Cart</li>
                        </ul>
                        <div className="text-center mb-4">
                        <RenderButton loginStatus={props.isLoggedIn} setLoginStatus={props.setIsLoggedIn} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Profile;
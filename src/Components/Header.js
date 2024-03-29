import React from "react";
import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



function Header( props ) {

    let navigate = useNavigate()

    let cartItems = useSelector( (state) => {
        return state.cartItems;
    } )

    return (
        <>
            <div className="container-fluid bg-danger-subtle" id="main-header">
                <div className="row">
                    <div onClick={ () => {navigate('/home')} } 
                    className="col-3 text-center logo">
                        <h1> {`My Kart : )`}</h1>
                        <p> The Product Store</p>
                    </div>
                    { props.isLoggedIn == true ? <> { props.productPage == true ? <Search searchProduct = {props.searchProduct} setSearchProduct = {props.setSearchProduct} searchedProducts = {props.searchedProducts} setSearchedProducts = {props.setSearchedProducts} /> : <div className="col-5">  </div> } 
                    
                    <div className="col-2 offset-2">
                    <Link id="p-btn" to='/wishlist' onClick={ () => {props.setProductPage(false)}} ><button  className="btn border-dark rounded-5 mt-4"><i class="fa-regular fa-heart"></i></button></Link>
                    { props.isLoggedIn == true ? 
                    <>
                    <svg 
                    
                    onClick={ () => {navigate('/cart')
                       props.setProductPage(false) } } 
                     
                     xmlns="http://www.w3.org/2000/svg"  width="34" height="34" fill="currentColor" className="bi bi-cart4 mt-4 ms-5 cart-icon" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                    </svg><sup style={{fontSize : "13px"}}>{cartItems.length}</sup></>
                    : "" }
                        <Link id="p-btn" to='/profile' onClick={ () => {props.setProductPage(false)}} ><button  className="btn border-dark rounded-5 mt-4 ms-5"><i class="fa-regular fa-user"></i></button></Link>
                    </div> </>
                    : <div className="col-5 text-center offset-1 pt-4">   

                    <h3> Get Lowest Price ever, Login below </h3>

                    </div> }
                    
                </div>
            </div>
        </>

    )
}


export default Header;



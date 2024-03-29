import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "./Reducer";


function Products(props) {

    let dispatch = useDispatch()
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((res) => {
                props.setProducts(res.data.products)
            })
    }, [])





    return (

        <>
            <div className="container-fluid" id="product-wrapper">
                <div className="row m-2 mt-5" >


                    {props.searchProduct == "" ?

                        props.products.map((product, i) => {


                            return (<div className="col-lg-3 p-2 col-sm-6 col-md-4 text-center p-1">
                                <div className="border border-dark" >
                                    <Link to={`/products/${product.id}`} id="card" style={{ color: "black" }}  >
                                        <div onClick={() => { props.setProductPage(false) }}>
                                            <img src={product.thumbnail} style={{ height: "200px", width: "100%" }} />
                                            <p> Title : <b>{product.title}</b> </p>
                                            <p> Price : $ {product.price} </p>
                                            <p> Rating : <i class="fa-solid fa-star"></i> {product.rating} </p>
                                        </div>
                                    </Link>
                                    <div className="p-2 d-flex">
                                    <button className="btn btn-outline-danger m-1" 
                                    onClick={
                                        () => {

                                            let wishedItem = {
                                                Name: product.title,
                                                Price: product.price,
                                                Image: product.thumbnail
                                            }

                                            dispatch(addToWishlist({ wishedItem }))
                                            console.log()
                                        }
                                    } >Add to WishList <i class="fa-regular fa-heart"></i></button>
                                    <button className="btn btn-outline-dark m-1 ms-3" onClick={
                                        () => {

                                            let cartItem = {
                                                Name: product.title,
                                                Price: product.price,
                                                Image: product.thumbnail
                                            }

                                            dispatch(addToCart({ cartItem }))
                                            console.log()
                                        }
                                    } >Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-cart4 mb-1" viewBox="0 0 16 16">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                        </svg></button>
                                </div>
                                </div>
                            </div>


                            )
                        }) :

                        props.products.map((product, i) => {
                            if (product.title.toLowerCase().includes(props.searchProduct.toLowerCase())) {
                                return (
                                    <div className="col-lg-3 p-2 col-sm-6 col-md-4 text-center p-1">
                                <div className="border border-dark" >
                                    <Link to={`/products/${product.id}`} id="card" style={{ color: "black" }}  >
                                        <div onClick={() => { props.setProductPage(false) }}>
                                            <img src={product.thumbnail} style={{ height: "200px", width: "100%" }} />
                                            <p> Title : <b>{product.title}</b> </p>
                                            <p> Price : $ {product.price} </p>
                                            <p> Rating : <i class="fa-solid fa-star"></i> {product.rating} </p>
                                        </div>
                                    </Link>
                                    <div className="p-2 d-flex">
                                    <button className="btn btn-outline-danger m-1" 
                                    onClick={
                                        () => {

                                            let cartItem = {
                                                Name: product.title,
                                                Price: product.price,
                                                Image: product.thumbnail
                                            }

                                            dispatch(addToCart({ cartItem }))
                                            console.log()
                                        }
                                    } >Add to WishList <i class="fa-regular fa-heart"></i></button>
                                    <button className="btn btn-outline-dark m-1 ms-3" onClick={
                                        () => {

                                            let cartItem = {
                                                Name: product.title,
                                                Price: product.price,
                                                Image: product.thumbnail
                                            }

                                            dispatch(addToCart({ cartItem }))
                                            console.log()
                                        }
                                    } >Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-cart4 mb-1" viewBox="0 0 16 16">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                        </svg></button>
                                </div>
                                </div>
                            </div>
                                )
                            }

                        })

                    }


                </div>
            </div>

        </>

    );
}
export default Products;


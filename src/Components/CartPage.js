import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./Reducer";

function Cart() {

    let dispatch = useDispatch();

    let cartItems = useSelector((state) => {
        return state.cartItems
    })

    console.log(cartItems)

    return (
        <>
        { cartItems.length > 0 ? 

            <div>
                <h1> Your Cart</h1>
                <div className="container mt-5" >
                    <div className="row">

                    {cartItems.map((Item, i) => {
                        console.log(Item)
                        return (
                                    <div className="col-3 p-3 border border-dark text-center mt-3 mb-3">
                                        <img src={Item.cartItem.Image} style={{ height: "200px", width: "100%" }} />
                                        <p> Title : <b>{Item.cartItem.Name}</b> </p>
                                        <p> Price : $ {Item.cartItem.Price} </p>
                                        {/* <p> Rating : <i class="fa-solid fa-star"></i> {product.rating} </p> */}
                                        <button className="btn btn-outline-secondary"
                                        onClick={ () => {
                                            dispatch( removeFromCart(i) )
                                        } }
                                        > Remove from Cart</button>

                            </div>)
                    })}
                    </div>
                    
                </div>
            </div> : 
            
            <h1 style={{ textAlign : "center" , marginTop : "200px" }}> Your Cart is Empty </h1>
            
            }

        </>
    );
}

export default Cart;
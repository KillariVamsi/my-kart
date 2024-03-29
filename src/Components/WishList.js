import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "./Reducer";


function Wishlist() {

    let dispatch = useDispatch();

    let wishItems = useSelector((state) => {
        return state.wishItems
    })

    return (

        <>

{ wishItems.length > 0 ? 

<div>
    <h1> Your Cart</h1>
    <div className="container mt-5" >
        <div className="row">

        {wishItems.map((Item, i) => {
            console.log(Item)
            return (
                        <div className="col-3 p-3 border border-dark text-center mt-3 mb-3">
                            <img src={Item.wishedItem.Image} style={{ height: "200px", width: "100%" }} />
                            <p> Title : <b>{Item.wishedItem.Name}</b> </p>
                            <p> Price : $ {Item.wishedItem.Price} </p>
                            {/* <p> Rating : <i class="fa-solid fa-star"></i> {product.rating} </p> */}
                            <button className="btn btn-outline-secondary"
                            onClick={ () => {
                                dispatch( removeFromWishlist(i) )
                            } }
                            > Remove from WishList</button>

                </div>)
        })}
        </div>
        
    </div>
</div> : 

<h1 style={{ textAlign : "center" , marginTop : "200px" }}> Your WishList is Empty </h1>

}

        </>

    );
}

export default Wishlist;
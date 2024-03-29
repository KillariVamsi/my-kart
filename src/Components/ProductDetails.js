import React, {useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { addToCart } from "./Reducer";
import { useNavigate } from "react-router-dom";


function ProductDetails(props) {


    let dispatch = useDispatch()
    let navigate = useNavigate()

    let obj = useParams();


    useEffect( () => {
        axios.get(`https://dummyjson.com/products/${obj.id}`)
        .then( (res) => {
            setProductData(res.data)
        })
    }, [])


    let [productData , setProductData] = useState(null)
    let [activeImageId, setActiveImageId] = useState(null)


    return (
        <>

        <div className="container" id="product-details">
            <div className="row">
                <div onClick={() => { navigate('/products')
            props.setProductPage(true)
            }} id="arrow" className="col-3 offset-10 mb-3">
                    <h5> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-bar-left mb-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"/>
</svg> Go back to Products</h5>
                </div>
            </div>
        </div>

        { productData != null ?
            <div className="container border border-dark p-4" >
                <div className="row">
                    <div className="col-4">
                        <img src={productData.thumbnail} width="350px" height= "100%" className="p-2" alt="hello" />
                    </div>
                    <div className="col-8">
                        <h2> {productData.title} </h2>
                        <h6> <b>Brand :</b> {productData.brand}</h6>
                        <p> <b>Price :</b> $ {productData.price} </p>
                        <p> <b>Rating :</b> {productData.rating} </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis quos, necessitatibus deserunt eaque sapiente laborum quis officiis consequatur eveniet facilis nihil totam delectus, doloribus vitae est corporis quasi rerum at dicta distinctio adipisci rem. Minima eos adipisci dolorem aspernatur ut aut nobis architecto repudiandae, inventore recusandae. Tempora, consequatur asperiores?
                        </p>
                        <h6 className="ms-2"> Product Preview :</h6>
                        <div>
                            { productData.images.map( (image, i)=> {
                               return <img onClick={() => {setActiveImageId(i)}} 
                               src={image} height="100px" width="100px" className="ms-2 me-2 border border-dark" />
                            })}
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-6">
                    <button className="btn btn-outline-dark w-100"  
                    onClick={
                        () => {

                            let cartItem = {
                                Name: productData.title,
                                Price: productData.price,
                                Image: productData.thumbnail
                            }

                            dispatch(addToCart({ cartItem }))
                            console.log()
                        }
                    }> Add to Cart </button>
                    </div>
                    <div className="col-6">
                    <button className="btn btn-warning w-100"> Buy Now </button>
                    </div>
                </div>
            </div> : "" }

        </>
    );
}

export default ProductDetails;
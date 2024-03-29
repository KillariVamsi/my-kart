import React, {useState} from 'react';
import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Products from './Components/Products';
import Login from './Components/Login';
import Header from './Components/Header';
import ProductDetails from './Components/ProductDetails';
import Profile from './Components/Profile';
import Wishlist from './Components/WishList';
import Cart from './Components/CartPage';
import SignUp from './Components/SignUp';


function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false)
  const [productPage, setProductPage] = useState(false)
  const [products, setProducts] = useState([])
  const [searchProduct, setSearchProduct] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([])
  let [mail, setMail] =useState("")
  let [name, setName] =useState("")


  return (
    <>
    <BrowserRouter>
    <Header isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} productPage = {productPage} setProductPage = {setProductPage} searchProduct = {searchProduct} setSearchProduct = {setSearchProduct} />
    <Routes>
      <Route path='/' element = {<Login name = {name} setName = {setName} mail = {mail} setMail = {setMail} isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} /> }/>
      <Route path='/home' element =  { isLoggedIn == true ?   <Home productPage = {productPage} setProductPage = {setProductPage} /> : <Navigate to='/' /> } />
      <Route path='/profile' element = {isLoggedIn == true ?  <Profile name = {name} setName = {setName} mail = {mail} setMail = {setMail} isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} productPage = {productPage} setProductPage = {setProductPage} /> : <Navigate to='/' /> } />
      <Route path='/wishlist' element = { isLoggedIn == true ?  <Wishlist productPage = {productPage} setProductPage = {setProductPage} /> : <Navigate to='/' />} />
      <Route path='/products' element= {  isLoggedIn == true ?   <Products productPage = {productPage} setProductPage = {setProductPage} products = {products} setProducts = {setProducts} searchProduct = {searchProduct} setSearchProduct = {setSearchProduct} filteredProducts = {filteredProducts}  setFilteredProducts = {setFilteredProducts}/> : <Navigate to='/' />} />
      <Route path='/products/:id' element= {  isLoggedIn == true ?   <ProductDetails productPage = {productPage} setProductPage = {setProductPage} /> : <Navigate to='/' />} />
      <Route path='/cart' element = {<Cart />} />
      <Route path='/signup' element= {<SignUp  isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />} />
      <Route path='*' element = { <h1 className='m-5 text-center'> 404 Page Not Found </h1>} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

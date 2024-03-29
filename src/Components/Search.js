import React from "react";

function Search(props) {





    return ( 
        <>
        <div className="col-5 text-center pt-4">
                        <input 
                        value={props.searchProduct}
                        onChange={ (e)=> { props.setSearchProduct(e.target.value) }}
                        type="text" placeholder="Search for Products...." className="w-75 h-50 rounded-3" />
                        </div>
                        
                    </>

     );
}

export default Search;
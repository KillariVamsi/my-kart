import { Link } from "react-router-dom";

function Home(props) {
    return ( 
        <>
        
        <div id="home-comp" className="container text-center" >
            <div className="row">
            
            

            <h1>Welcome to MyKart!</h1>
            <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam maxime aspernatur possimus officia labore neque laborum asperiores, atque harum voluptate nihil beatae optio maiores quae, delectus reiciendis amet corporis, quos voluptatibus? Vel veniam cum quae saepe odio tempore inventore blanditiis beatae. Necessitatibus ad quas ratione architecto suscipit voluptate corporis pariatur?
            </p>

            <Link to='/products'><button onClick={ ()=> { props.setProductPage(true) }} className="btn btn-outline-dark">{`Products `}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
            </button></Link>
            </div>
        </div>
        
        </>
     );
}

export default Home;
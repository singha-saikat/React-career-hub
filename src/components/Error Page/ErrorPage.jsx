import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div >
            <div className="flex justify-center items-center h-screen ">
               <h1>Oops!! Not Found</h1> 
               <Link to='/'>
                <button className="border p-1 ml-2">Go back to Home</button>
                </Link>
            </div>
            
           
        </div>
    );
};

export default ErrorPage;
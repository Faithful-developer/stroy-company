import './ErrorPage.scss'
import {Helmet} from "react-helmet";

const ErrorPage = () =>{
    return(
       <>
           <Helmet>
               <title>
                   Error Page
               </title>
           </Helmet>
           <div className="error-wrapper">
               <div className="container">
                   <h1>Page was not found</h1>
               </div>
           </div>
       </>
    )
}

export default ErrorPage;
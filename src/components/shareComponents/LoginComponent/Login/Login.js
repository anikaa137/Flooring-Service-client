import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../../../App';
import logo from '../../../../images/logo.png'
import { useHistory, useLocation } from 'react-router';
import './Login.css'


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext (userContext)
const  history = useHistory()
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
          const { displayName, email,photoURL } = result.user;
          const signedInUser = {
            isSignedIn : true,
              name: displayName,
            email,
            image:photoURL

          }
        setLoggedInUser(signedInUser)
        history.replace(from);
        console.log(result.user )
      }).catch((error) => {
         const errorMessage = error.message;
        console.log(errorMessage)
      });
    }

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            const signdOutUser = {
                isSignedIn : false,
                name: '',
                email: ""
            }
          setLoggedInUser(signdOutUser)
          history.replace('/home');
          }).catch((error) => {
            console.log(error)
          });
        }
    return (
        // <div>
        //     {/* {
        //        loggedInUser.isSignedIn?<button onClick={handleSignOut}> sign out</button>

        //             : <button onClick={handleSignIn}>Sign In</button>
        //    } */}
        // <button onClick={handleSignIn}>Sign In</button>
        // </div>
        <div className="login-container">
        <div className="align-items-center" >
            <div className="text-center my-5">
                <img src={logo}alt=""/>
            </div>
          <div className="shadow p-5 m-auto">
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-danger">Forgot your password?</label>
            </div>
            <div className="d-flex justify-content-center cursor-pointer"onClick={handleGoogleSignIn}>
                <div className="from-group mt-5 d-flex align-items-center bg-danger w-50 rounded text-white justify-content-center py-2">
                    <i class="fab fa-google me-3 fs-2"></i>
                    <h6 className="text-white mb-0 ms-1 ">Google Sign in</h6>
                </div>
            </div>
          </div>

        </div>
      </div>
    );
};

 export default Login;


// import React, { useContext } from 'react';
// import { useHistory, useLocation } from 'react-router';
// import { UserContext } from '../../../App';
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
// import logo from '../../../images/logo2.png'
// import './login.css'
// const Login = () => {
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     const history = useHistory();
//     const location = useLocation();
//     const { from } = location.state || { from: { pathname: "/" } };
//     if (firebase.apps.length === 0) {
//       firebase.initializeApp(firebaseConfig);
//     }

//     const handleGoogleSignIn = () => {
//       var googleProvider = new firebase.auth.GoogleAuthProvider();
//       firebase.auth().signInWithPopup(googleProvider)
//       .then(result => {
//         const { displayName, email,photoURL } = result.user;
//         const signedInUser = { displayName, email, photoURL }
//         setLoggedInUser(signedInUser);
//         storeAuthToken();
//       })
//       .catch(function (error) {
//         console.log(error.message);
//       });
//     }

//   const storeAuthToken = () => {
//     firebase.auth().currentUser.getIdToken(true)
//       .then(function (idToken) {
//         sessionStorage.setItem('token', idToken);
//         history.replace(from);
//       }).catch(function (error) {
//         console.log(error)
//       });
//   }

//     return (
//         <div className="login-container">
//         <div className="align-items-center" >
//             <div className="text-center my-5">
//                 <img src={logo}alt=""/>
//             </div>
//           <div className="shadow p-5 m-auto">
//             <div className="form-group">
//               <label htmlFor="">User Name</label>
//               <input type="text" className="form-control" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="">Password</label>
//               <input type="password" className="form-control" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="" className="text-danger">Forgot your password?</label>
//             </div>
//             <div className="d-flex justify-content-center cursor-pointer"onClick={handleGoogleSignIn}>
//                 <div className="from-group mt-5 d-flex align-items-center bg-danger w-50 rounded text-white justify-content-center py-2">
//                     <i class="fab fa-google me-3 fs-2"></i>
//                     <h6 className="text-white mb-0 ms-1 ">Google Sign in</h6>
//                 </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     );
// };

// export default Login;





// <nav className="navbar navbar-expand-lg navbar-light">

// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
// </button>

// <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav ml-auto">
//         <li className="nav-item active">

//             <Link to="/" className="nav-link mr-5">Home</Link>
//         </li>
//         <li className="nav-item">

//             <Link to="/home/about" className="nav-link mr-5">About</Link>
//         </li>
//         <li className="nav-item">
//             {/* <a className="nav-link mr-5" href="#">Dental Services</a> */}
//             <Link to="/services" className="nav-link mr-5">Services</Link>
//         </li>
//         <li className="nav-item">
//             {/* <a className="nav-link mr-5 text-white" href="#">Reviews</a> */}
//             <Link to="/review" className="nav-link mr-5 ">Reviews</Link>

//         </li>
//         <li className="nav-item">


//             <Link to="/blogs" className="nav-link mr-5  "  >Blogs</Link>


//         </li>
//         <li className="nav-item">
//         <Link to="/dashboard" className="nav-link mr-5 " >Dashboard </Link>
//         </li>
//                       <li className="nav-item">
//                       {
//                                     loggedInUser.email ? ""
//                                         : <Link to="/login" className="nav-link mr-5 "  >Login</Link>

//                                 }
//                                 {
//                                     loggedInUser.email ? <Link  className="nav-link mr-5 "  onClick={() => setLoggedInUser({})} > Logout</Link>
//                                         : <p></p>

//                                 }
//     </li>
//     </ul>
// </div>
// </nav>
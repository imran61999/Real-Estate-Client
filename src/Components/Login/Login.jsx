import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { FcGoogle } from "react-icons/fc";
import { GithubAuthProvider } from "firebase/auth";
import { GrGithub } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();


  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(res =>{
      Swal.fire("You logged In successfully");
      navigate(location?.state ? location.state : '/');
    })
    .catch(error =>{
      const msg = error.message;
      Swal.fire("Provide real email and password",msg);


    })
  }

  const handleGoogleLogin =()=>{
    signInWithPopup(auth, googleProvider)
    .then(result =>   {
      const user = result.user;
      console.log(user)
    })
    .catch(error =>{
      console.log(error.message)
    })
  }

  const handleGithubSignIn = ()=>{
    signInWithPopup(auth, githubProvider)
    .then( result => {
      const loggedUser = result.user;
      console.log(loggedUser)
    })
    .catch( error =>{
      console.log(error)
    })
  }
    return (
        <>
        <Helmet>
          <title>Real Estate | Login</title>
        </Helmet>
          <div className="hero md:min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-2xl md:text-5xl font-semibold md:font-bold">Login now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
       <div className="flex gap-3 justify-center  mb-5">
          <button className="text-3xl" onClick={handleGoogleLogin}><FcGoogle /></button>
          <button className="text-3xl" onClick={handleGithubSignIn}><GrGithub /></button>
       </div>
       <p className="text-center mb-3">New here? <Link className="text-blue-500 font-bold" to="/register">Create an account</Link></p>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;
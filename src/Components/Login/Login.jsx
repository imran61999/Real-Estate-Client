import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { FcGoogle } from "react-icons/fc";
import { GithubAuthProvider } from "firebase/auth";
import { GrGithub } from "react-icons/gr";




const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

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
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
       <div className="flex mb-5">
          <button className="text-3xl mx-auto mb-3" onClick={handleGoogleLogin}><FcGoogle /></button>
          <button className="text-3xl mx-auto mb-3" onClick={handleGithubSignIn}><GrGithub /></button>
       </div>
    </div>
  </div>
</div>
    );
};

export default Login;
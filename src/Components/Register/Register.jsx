import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState('');

  const handleRegister = e =>{
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const photo = form.get('photo');
    const password = form.get('password');

    // console.log(name, email, photo, password);

        // reset error
        setRegisterError('');

    if(password.length < 6)
    {
      setRegisterError('Password should be at least 6 characters or longer');
      return;
    }
    else if(!/[A-Z]/.test(password)){
      setRegisterError('Your Password should have at least one upper case character');
      return;
    }
    else if(!/[a-z]/.test(password)){
      setRegisterError('Your Password should have at least one lower case character');
      return;
    }

    // create user
    createUser(email, password)
    .then(result =>{
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your registration successful",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(error =>{
      console.log(error)
      setRegisterError(error.message)
    })
  }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      {
        registerError && <p className="text-red-700 mb-3">{registerError}</p>
      }
      <p className="text-center mb-3">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
     
    </div>
  </div>
</div>
    );
};

export default Register;
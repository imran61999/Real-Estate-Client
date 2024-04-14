import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";


const Register = () => {
  const { createUser } = useContext(AuthContext);
  const { register, handleSubmit, watch, formState: { errors },} = useForm()

const onSubmit = data =>{
  // console.log(data);
  createUser(data.email, data.password)
  .then(res =>{
    const loggedUser = res.user;
    console.log(loggedUser);
  })
  .catch(error => console.log(error))
}
    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register('name', {required:true})} placeholder="name" className="input input-bordered" />
                {
                  errors.name && <span className="text-red-500">Name is required</span>
                }
              </div>
              <div className="form-control">
                <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register('email',{required: true})}  placeholder="email" className="input input-bordered" />
              {
                errors.email && <span className="text-red-500">Email is required</span>
              }
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input type="text" {...register('photoURL',{required: true})} placeholder="Photo URL" className="input input-bordered" />
              {
                errors.photoURL && <span className="text-red-500">Photo URL is required</span>
              }
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register('password',{required:true, minLength:6, pattern:/(?=.*[A-Z])(?=.*[a-z])/})} placeholder="password" className="input input-bordered" />
              {
                errors.password?.type === 'required' && <p className="text-red-500">Password must be required</p>
              }
              {
                errors.password?.type ==='minLength' && <p>Password must be at least six character</p>
              }
              {
                errors.password?.type ==='pattern' && <p>Password must be at least one upper case , one lower case</p>
              }
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
      <p className="text-center mb-3">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
     
    </div>
  </div>
</div>
    );
};

export default Register;
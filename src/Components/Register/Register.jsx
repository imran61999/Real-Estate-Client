import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Register = () => {
  const [showPassword, setShowPassword]= useState(false)
  const { createUser,updateUserProfile } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors },} = useForm()

const onSubmit = data =>{
  // console.log(data);
  createUser(data.email, data.password)
  .then(res =>{
    const loggedUser = res.user;
    console.log(loggedUser);
    updateUserProfile(data.name, data.photoURL)
    Swal.fire("User created successfully");

  })
  .catch(error => console.log(error))
}
    return (
     <>
      <Helmet>
          <title>Real Estate | Register</title>
        </Helmet>
      <div>
        <div className="mx-auto md:w-1/2">
            <h2 className="text-3xl mb-8">Please Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name', {required:true})} placeholder="name" className="mb-4 w-full py-2 px-4 border" />
                 {
                   errors.name && <span className="text-red-500">Name is required</span>
                  }
            <br />
            <input type="text" {...register('photoURL',{required: true})} placeholder="Photo URL"  className="mb-4 border w-full py-2 px-4"/>
              {
                errors.photoURL && <span className="text-red-500">Photo URL is required</span>
              }
              <br />
            <input type="email" {...register('email',{required: true})}  placeholder="email" className="mb-4 w-full border py-2 px-4" />
               {
                 errors.email && <span className="text-red-500">Email is required</span>
              }
              <br />
              <div className="mb-4 relative">
              <input 
              type={ showPassword ? "text": "password" } 
              {...register('password',
              {required:true, minLength:6, pattern:/(?=.*[A-Z])(?=.*[a-z])/})} 
              placeholder="password"
              className=" w-full py-2 px-4 border" />
               <span className="absolute top-3 right-2" onClick={()=>setShowPassword(!showPassword)}>
                {
                  showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
               </span>
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
              <br />
              <input className="btn btn-secondary mb-4 w-full" type="submit" value="Register"/>
            </form>
            <p className="text-center mb-3">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>

        </div>
      </div>
     </>
    );
};

export default Register;
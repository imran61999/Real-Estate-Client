import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Update = () => {
    
    const { user,updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit } = useForm()
  
  const onSubmit = data =>{

      updateUserProfile(data.name, data.photoURL)
      Swal.fire("Your profile is updated");
  }
    return (
        <div>
            <>
        <Helmet>
            <title>Real Estate | Update</title>
        </Helmet>
      <div>
        <div className="mx-auto md:w-1/2">
            <h2 className="text-3xl mb-8 text-center">Update Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            Name:<input type="text" {...register('name', {required:true})} defaultValue={user?.displayName} className="mb-4 w-full py-2 px-4 border" />
            <br />
            Photo URL: <input type="text" {...register('photoURL',{required: true})} defaultValue={user?.photoURL}  className="mb-4 border w-full py-2 px-4"/>
            Email: <input type="text" {...register('email',{required: true})} defaultValue={user?.email} disabled className="mb-4 border w-full py-2 px-4"/>
              
              <input className="btn btn-secondary mb-4 w-full" type="submit" value="Save"/>
            </form>
           
        </div>
      </div>
     </>
        </div>
    );
};

export default Update;
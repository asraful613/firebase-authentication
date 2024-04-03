import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const {register}=useContext(AuthContext)
    const [error,setError]=useState('')
    const handleRegisterForm=e=>{
      setError('')
        e.preventDefault()
     const name=e.target.name.value;
     const photo=e.target.photo.value;
     const email=e.target.email.value;
     const password=e.target.password.value;
     const confirmPassword=e.target.confirmPassword.value;
     if(password.length<6){
       setError('Password must be at least 6 characters')
       return
     }
     if(password!==confirmPassword){
       setError('Passwords do not match')
        return
     }
        console.log(name,photo,email,password,confirmPassword);
     register(email,password)
    }
    return (
        <div>
             <div>
               <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Register Now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleRegisterForm}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="name" placeholder="name" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input name="photo" type="photo" placeholder="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input name="confirmPassword" type="confirm-password" placeholder="confirmPassword" className="input input-bordered" required />
          {
            error && <small>{error}</small>
          }
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Register;
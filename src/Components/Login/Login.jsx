import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const {login}=useContext(AuthContext)
    const handleRegisterForm=e=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        login(email,password)
    }
    return (
        <div>
           <div>
             <div>
               <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold mb-2">Register Now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleRegisterForm}>
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
         
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">login</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
        </div>
    );
};

export default Login;
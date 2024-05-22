
import { signInWithPopup } from "firebase/auth";
import google from "../assets/google.png";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.config";


const Login = () => {
 
 const provider = new GoogleAuthProvider();

  const handleGoogleProvider = () => {
    signInWithPopup(auth, provider)
    .then((result)=>{
      const user = result.user;
      console.log(user);
    })
    .catch((error)=>{
      console.log("error", error.message);
    })
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content lg:w-[800px] lg:h-[500px]">
        <div className="card  w-full h-full max-w-lg shadow-2xl bg-base-100">
          <h2 className="text-center font-bold text-2xl py-2">Please Login </h2>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <button
            className="flex justify-center"
            onClick={handleGoogleProvider}
          >
            <img className=" rounded mb-6 text-center" src={google} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

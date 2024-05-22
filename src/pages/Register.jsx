import google from '../assets/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';
const Register = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleGoogleLogin=()=>{
    signInWithGoogle();
  }
  console.log(user,error, loading)

    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content lg:w-[800px] lg:h-[600px]">
        <div className="card  w-full h-full max-w-lg shadow-2xl bg-base-100">
        <h2 className="text-center font-bold text-2xl py-2">Please Registration Here</h2>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control mt-10">
              <button className="btn btn-primary">Registration</button>
            </div>
          </form>
          <button onClick={handleGoogleLogin}
            className="flex justify-center"
          >
            <img className=" rounded mb-6 text-center" src={google} alt="" />
          </button>
        </div>
      </div>
    </div>
    );
};

export default Register;
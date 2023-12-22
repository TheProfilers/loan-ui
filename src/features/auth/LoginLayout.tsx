import { Link } from "react-router-dom";

export default function LoginLayout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <div className="form-control mt-6">
            <Link to="/register" className="text-blue-600">
              <span className="text-xs text-gray-400">
                Do not have account?
              </span>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

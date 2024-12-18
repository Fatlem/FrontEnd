const Login = () => {
  return (
    <div className="bg-purple-100 min-h-screen flex items-center justify-center">
      <div className="container p-5">
        <div className="max-w-md mx-auto p-6 rounded-2xl bg-white shadow-md flex flex-col items-center gap-5">
          <h1 className="text-2xl sm:text-3xl text-purple-600 font-bold">
            Login
          </h1>

          <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1">
              <label className="font-bold text-purple-600" htmlFor="email">
                Email
              </label>
              <input
                required
                name="email"
                className="px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 border border-gray-300 outline-none transition duration-200 w-full"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-bold text-purple-600" htmlFor="password">
                Password
              </label>
              <input
                required
                name="password"
                className="px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 border border-gray-300 outline-none transition duration-200 w-full"
                type="password"
                placeholder="Password"
              />
            </div>

            <button
              className={`bg-purple-500 px-4 py-3 rounded-xl text-white font-bold hover:bg-purple-600 transition-all duration-200`}
              type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

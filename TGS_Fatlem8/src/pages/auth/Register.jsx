const Register = () => {
  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center">
      <div className="container p-5">
        <div className="max-w-lg mx-auto p-8 rounded-xl shadow-md bg-white flex flex-col items-center gap-6">
          <h1 className="text-2xl sm:text-3xl text-purple-600 font-bold">
            Register
          </h1>

          <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-purple-600" htmlFor="name">
                Nama
              </label>
              <input
                required
                name="name"
                id="name"
                className="px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-600 border border-gray-300 outline-none transition duration-200"
                type="text"
                placeholder="Nama"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-purple-600" htmlFor="email">
                Email
              </label>
              <input
                required
                name="email"
                id="email"
                className="px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-600 border border-gray-300 outline-none transition duration-200"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-purple-600" htmlFor="password">
                Password
              </label>
              <input
                required
                name="password"
                id="password"
                className="px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-600 border border-gray-300 outline-none transition duration-200"
                type="password"
                placeholder="Password"
              />
            </div>

            <button
              className={`bg-purple-500 w-full py-3 rounded-xl text-white font-bold hover:bg-purple-600 transition-all duration-200`}
              type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

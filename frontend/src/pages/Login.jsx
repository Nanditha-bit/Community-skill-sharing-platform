export default function Login() {
  return (
    <div className="bg-hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-card border border-gray-100 p-8 sm:p-10">
          <h1 className="text-3xl font-extrabold text-center">Welcome Back</h1>
          <p className="text-gray-600 text-center mt-2">Sign in to your SkillShare account</p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"/>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input type="password" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"/>
            </div>
            <button className="w-full rounded-md bg-gray-900 text-white py-3 font-medium hover:bg-black">Sign In</button>
            <p className="text-center text-sm text-gray-600">
              Don’t have an account? <a href="/signup" className="text-brand-600 hover:underline">Sign up here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

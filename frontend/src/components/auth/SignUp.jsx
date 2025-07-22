import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('https://transfinittebackend-gthljbkll-divyanship19-gmailcoms-projects.vercel.app/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          name,
          phone
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Sign up successful! Please sign in.');
        navigate('/signin');
      } else {
        const errorMessage = data.error || data.message || `Error: ${response.status} ${response.statusText}`;
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Network error. Please try again.');
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 bg-black z-0"></div>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none z-0"></div>
      <div className="fixed left-1/2 top-[5%] -translate-x-1/2 h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] pointer-events-none z-0"></div>
        
      <div className="relative z-10 bg-[rgba(255,255,255,0.15)] p-6 rounded-xl flex justify-center items-center flex-col h-120 w-100 mx-auto mt-30 backdrop-blur-md shadow-3xl border border-white/20">
        <h2 className="text-lg font-bold text-white mb-4" style={{textShadow: "0 0 1px white, 0 0 10px white", fontSize: '1.9rem'}}>SIGN-UP</h2>
        
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col space-y-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              required
              className="p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-gray-300"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="p-3 border border-white/30 rounded-lg text-white bg-white/10 placeholder-gray-300"
            />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              required
              className="p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-gray-300"
            />
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="text"
              placeholder="Phone"
              required
              className="p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-gray-300"
            />
            <button type="submit" className="bg-neutral-800/75 hover:bg-neutral-700/85 text-white p-3 rounded-lg font-semibold hover:shadow-lg">Sign Up</button>
          </div>
        </form>
        <span className="text-white mt-4 text-sm">Already have an account?</span>
        <Link to="/signin" className="text-white underline hover:text-gray-300 transition-colors">Sign In.</Link>
      </div>
    </div>
  );
};

export default SignUp;
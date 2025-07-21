import React from 'react'

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white space-y-4 relative">
        <div className="fixed inset-0 bg-black z-0"></div>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none z-0"></div>
      <div className="fixed left-1/2 top-[5%] -translate-x-1/2 h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] pointer-events-none z-0"></div>

    <button className="bg-neutral-800/75 hover:bg-neutral-700/85 text-white p-3 rounded-lg font-semibold hover:shadow-lg relative z-10">make team</button>
    <button className="bg-neutral-800/75 hover:bg-neutral-700/85 text-white p-3 rounded-lg font-semibold hover:shadow-lg relative">join team</button>
    </div>
  )
}

export default Register

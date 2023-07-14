import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className=' w-5/6 sm:w-4/6 h-fit py-6 px-8 flex flex-col justify-center items-start gap-4 bg-neutral-100 border-2 border-neutral-200 rounded-xl'
      >
        <h1 className='text-3xl font-bold'>Login</h1>

        <label className='text-xl'>Email:</label>
        <input
          className='text-lg p-2 w-full rounded-md border border-neutral-300'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label className='text-xl'>Password:</label>
        <input
          className='text-lg p-2 w-full rounded-md border border-neutral-300'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button
          type='submit'
          className='w-fit h-fit px-4 py-2 bg-indigo-700 text-white rounded-xl hover:bg-indigo-900 transition-all ease-linear duration-300'
        >
          Login
        </button>
      </form>
    </div>
  );
};

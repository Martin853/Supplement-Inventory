import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
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
          disabled={isLoading}
          type='submit'
          className='w-fit h-fit px-4 py-2 bg-indigo-700 text-white rounded-xl hover:bg-indigo-900 transition-all ease-linear duration-300'
        >
          Login
        </button>
        {error && (
          <div className='w-full h-fit bg-red-200 mt-2 p-4 rounded-lg border-2 border-red-700 text-red-700 flex justify-center items-center'>
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

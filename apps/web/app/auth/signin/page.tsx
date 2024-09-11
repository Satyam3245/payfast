"use client"
import axios from 'axios';
import { Loader } from '@repo/ui/loader'; 
import { useRouter } from 'next/navigation';
import { useState } from 'react'
export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading , setLoading] = useState<boolean|React.ReactNode>(false);
  const [error , setError] = useState<string|null>('');
  const handleSignIn = async ()=>{}
  if(error){
    return <div>
      <h1>{error}</h1>
    </div>
  }
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-500">Payfast</h1>
          <p className="text-gray-400 mt-2">India's Most-loved Payments App</p>
        </div>
        <div className="bg-gray-800 shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Sign In</h2>
          <form onSubmit={handleSignIn} className="space-y-6">
            <div className="space-y-2 flex flex-col">
              <label htmlFor="email" className="text-gray-300">Email</label>
              <input 
                id="email" 
                type="email" 
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 p-1 rounded-md"
                required 
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="password" className="text-gray-300">Password</label>
              <input 
                id="password" 
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 p-1 rounded-md"
                required 
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2" onClick={handleSignIn}>
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-blue-400 hover:underline">Forgot Password?</a>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-400">Don't have an account?</p>
            <a href="#" className="text-blue-400 hover:underline">Create an account</a>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            By signing in, you agree to our <a href="#" className="text-blue-400 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  )
}
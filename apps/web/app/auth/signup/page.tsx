"use client"
import { CreditCard } from "lucide-react"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react'
export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [username ,setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading , setLoading] = useState<boolean>(false);
  const [error , setError] = useState<string|null>('');
  const handleSignIn = async  (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/api/signup',{email,password,username})
      console.log(response)
      console.log(response.status);
      if(response.status === 200){
        setLoading(false)
        router.push('/')
      }
      if (response.status === 400) {
        setLoading(false);
        setError(response.data.error);
      }
      if(response.status === 500){
        setLoading(false);
        setError('Something went wrong ! Please Come Back after some time');
      }
    } catch (error) {
        setLoading(false);
        setError('Something went wrong ! Our Backend is down');
    }
    console.log('Sign in attempted with:', email, password)
  }
  if(error){
    return <div>
      <h1>{error}</h1>
    </div>
  }
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex items-center text-2xl font-semibold text-green-500 mb-8">
            <CreditCard className="h-8 w-8 mr-2" />
            PayFast
          </div>
          <h2 className="mt-6 text-3xl font-extrabold">Sign in to your account</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e)=>{setEmail(e.target.value)}}
                  className="mt-1 block w-full bg-gray-800 border-gray-700 text-gray-100 px-2 py-1 rounded-md"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="username" className="block text-sm font-medium">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  onChange={(e)=>{setUsername(e.target.value)}}
                  className="mt-1 block w-full bg-gray-800 border-gray-700 text-gray-100 px-2 py-1 rounded-md"
                  placeholder="johndoe"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e)=>{setPassword(e.target.value)}}
                  className="mt-1 block w-full bg-gray-800 border-gray-700 text-gray-100 px-2 py-1 rounded-md"
                  placeholder="••••••••"
                />
              </div>
            </div>
            <div>
              <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white p-1 rounded-md">
                {loading ? 'Loading...' : 'Sign in'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 h-full w-full bg-gray-800 flex items-center justify-center p-8">
          <blockquote className="text-2xl font-semibold italic text-center text-gray-300">
            "Simplify your payments, amplify your business. With PayFast, every transaction is a step towards success."
          </blockquote>
        </div>
      </div>
    </div>
  )
}
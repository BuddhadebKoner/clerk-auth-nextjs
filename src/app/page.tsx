import Link from "next/link";
import { currentUser } from '@clerk/nextjs/server'

export default async function Page() {
  const user = await currentUser()


  return (
    <>
      {/* home page */}
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-center font-semibold text-2xl">Home</h1>
        {
          !user ? (
            <p className="text-center font-normal text-xl">Sign in or sign up , you are not loged in</p>
          ) : (
            <p className="text-center font-normal text-xl">Welcome {user?.username}</p>
          )
        }
        {/* sign in and sign up */}
        <div className="mt-6 flex space-x-4">
          <Link href="/sign-in" className="text-blue-500 px-5 border-2 border-blue-500 rounded-md">
            Sign In
          </Link>
          <Link href="/sign-up" className="text-black px-5 border-2 border-black rounded-md">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  )
}
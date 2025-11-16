import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-10">
   
      <div className=" wrapper   flex flex-col md:flex-row">
    

    
      <div className="hidden md:block md:w-1/2 bg-gray-100">
        <div className="h-full w-full relative">
          <Image
            src="/img/top-new-banner.jpg"
            alt="Login visual"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-xl border  border-[#78367A]"
          />
        </div>
      </div>
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900">Parfum De Paris</h1>
          <h2 className="mt-6 text-xl font-semibold text-gray-900">Yenidən xoş gəldiniz</h2>
          <p className="mt-2  text-sm text-gray-600">
           Hesabınız yoxdu ?
            <Link href="/register" className="font-medium text-[#78367A]  ml-5 inline-block hover:underline">
              Qeydiyyatdan keç
            </Link>
          </p>

          <div className="mt-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    defaultValue="name@company.com"
                    required
                    className="appearance-none block w-full p-3 border border-gray-300   rounded-sm    placeholder-gray-400 focus:outline-none focus:ring-[#78367A] focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    defaultValue="**********"
                    required
                    className="appearance-none block w-full p-3 border border-gray-300   rounded-sm    placeholder-gray-400 focus:outline-none focus:ring-[#78367A] focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#78367A] focus:ring-[#78367A] border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-[#78367A] hover:text-[#78367A]">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent   rounded-sm    text-sm font-medium text-white bg-base  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#78367A]"
                >
                  Sign in to your account
                </button>

                <div className="space-y-3">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300   rounded-sm    text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#78367A]"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                    </svg>
                    Sign in with Google
                  </button>

                  <button
                    type="button"
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300   rounded-sm    text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#78367A]"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M11.673 0H2.327C1.042 0 0 1.042 0 2.327v9.346C0 12.958 1.042 14 2.327 14h9.346C12.958 14 14 12.958 14 11.673V2.327C14 1.042 12.958 0 11.673 0zM7 12.5c-3.038 0-5.5-2.462-5.5-5.5S3.962 1.5 7 1.5s5.5 2.462 5.5 5.5-2.462 5.5-5.5 5.5z" />
                    </svg>
                    Sign in with Apple
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
};

export default page;



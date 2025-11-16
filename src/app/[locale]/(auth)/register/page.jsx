"use client";
import React, { useState } from "react";
import { Eye, EyeOff} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="min-h-screen bg-gray-50 pt-10">
      <div className="wrapper flex flex-col md:flex-row">
        {/* Left side - Form */}
        

        {/* Right side - Image */}
        <div className="hidden md:block md:w-1/2 bg-gray-100">
          <div className="h-full w-full relative">
            <Image
              src="/img/top-new-banner.jpg"
              alt="Register visual"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 rounded-xl border border-[#78367A]"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-900">Parfum De Paris</h1>
            <h2 className="mt-6 text-xl font-semibold text-gray-900">Yeni hesab yaradın</h2>
            <p className="mt-2 text-sm text-gray-600">
              Artıq hesabınız var?
              <Link href="/login" className="font-medium text-[#78367A] ml-1 hover:underline">
                Daxil olun
              </Link>
            </p>

            <div className="mt-8">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      Ad
                    </label>
                    <div className="mt-1">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="appearance-none block w-full p-3 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-[#78367A] focus:border-[#78367A] sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Soyad
                    </label>
                    <div className="mt-1">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="appearance-none block w-full p-3 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-[#78367A] focus:border-[#78367A] sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Telefon
                  </label>
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="appearance-none block w-full p-3 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-[#78367A] focus:border-[#78367A] sm:text-sm"
                    />
                  </div>
                </div>

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
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="appearance-none block w-full p-3 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-[#78367A] focus:border-[#78367A] sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Şifrə
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="appearance-none block w-full p-3 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-[#78367A] focus:border-[#78367A] sm:text-sm pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-[#78367A] focus:ring-[#78367A] border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                    İstifadəçi şərtləri ilə razıyam
                  </label>
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-sm text-sm font-medium text-white bg-[#78367A] hover:bg-[#5e2a60] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#78367A]"
                  >
                    Qeydiyyatdan keç
                  </button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-gray-50 text-gray-500">və ya</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      type="button"
                      className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#78367A]"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                      </svg>
                      Google ilə qeydiyyat
                    </button>

                    <button
                      type="button"
                      className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#78367A]"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M11.673 0H2.327C1.042 0 0 1.042 0 2.327v9.346C0 12.958 1.042 14 2.327 14h9.346C12.958 14 14 12.958 14 11.673V2.327C14 1.042 12.958 0 11.673 0zM7 12.5c-3.038 0-5.5-2.462-5.5-5.5S3.962 1.5 7 1.5s5.5 2.462 5.5 5.5-2.462 5.5-5.5 5.5z" />
                      </svg>
                      Apple ilə qeydiyyat
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

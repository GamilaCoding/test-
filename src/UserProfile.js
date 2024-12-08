import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { HiOutlinePhotograph } from 'react-icons/hi';

const UserProfile = () => {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("/default-avatar.png");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        <div className="px-6 py-8 flex-1 space-y-8">
          {/* User Profile */}
          <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
            <div className="flex justify-between items-center">
              {/* Profile Image */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
                  />
                  <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-200">
                    <HiOutlinePhotograph size={18} />
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="hidden"
                      accept="image/*"
                    />
                  </label>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">User Name</h2>
                  <p className="text-blue-600">Premium Plan</p>
                </div>
              </div>

              <div className="text-right">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Form to Update Email and Password */}
            <form className="space-y-6 mt-8">
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default UserProfile;

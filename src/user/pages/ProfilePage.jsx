import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ImUser } from "react-icons/im";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { getUserProfileAPI, updateUserProfileAPI } from "../../services/allAPI";
import { toast, ToastContainer } from "react-toastify";
import ConfirmModal from "../../components/ConfirmModal";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);


  const getUserProfile = async () => {
    const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
    if (existingUser) {
      setUserDetails(existingUser);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const handleUpdate = () => {
    const { username, phone, address } = userDetails;
    if (!username || !phone || !address) {
      toast.info("Please fill all fields");
      return;
    }
    
    // Simple 10-digit phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.warning("Please enter a valid 10-digit phone number");
      return;
    }

    setIsConfirmModalOpen(true);
  };

  const confirmUpdate = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      const reqbody = userDetails;
      try {
        const result = await updateUserProfileAPI(reqbody, reqHeader);
        if (result.status === 200) {
          toast.success("Profile Updated Successfully");
          setUserDetails(result.data);
          sessionStorage.setItem("existingUser", JSON.stringify(result.data));
        } else {
          toast.error("Failed to update profile");
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <Header />
      <div className="bg-background px-6 md:px-12 pt-6 transition-colors duration-300">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
        >
          <IoArrowBackOutline className="text-xl" /> Back
        </button>
      </div>
      <section className="grow py-10 px-6 md:px-12 bg-background transition-colors duration-300">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg shadow-xl p-8 space-y-12">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center overflow-hidden">
              <FaRegCircleUser className="text-8xl text-muted-foreground" />
            </div>
            <h1 className="mb-2">
              {userDetails.username}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              {userDetails.email}
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-lg md:text-2xl font-semibold text-foreground">
              Edit Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label
                  className="block text-xs md:text-sm font-medium text-muted-foreground mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="block w-full px-4 py-2 bg-muted/30 text-foreground border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  id="name"
                  type="text"
                  value={userDetails.username || ""}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, username: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <label
                  className="block text-xs md:text-sm font-medium text-muted-foreground  mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="block w-full px-4 py-2 bg-muted/50 text-muted-foreground border border-border rounded-md cursor-not-allowed"
                  id="email"
                  type="email"
                  value={userDetails.email || ""}
                  readOnly
                  disabled
                />
              </div>
              <div className="relative">
                <label
                  className="block text-xs md:text-sm font-medium text-muted-foreground  mb-1"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="block w-full px-4 py-2 bg-muted/30 text-foreground border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  id="phone"
                  type="tel"
                  value={userDetails.phone || ""}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, phone: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <label
                  className="block text-xs md:text-sm font-medium text-muted-foreground mb-1"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="block w-full px-4 py-2 bg-muted/30 text-foreground border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  id="address"
                  type="text"
                  value={userDetails.address || ""}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, address: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-end gap-2 justify-end pt-4">
              <Link to={"/"}>
                <button className="btn-outline">
                  Cancel
                </button>
              </Link>
              <button
                onClick={handleUpdate}
                className="btn-primary"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer theme="colored" position="top-center" autoClose={3000} />
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={confirmUpdate}
        title="Update Profile"
        message="Are you sure you want to save these changes to your profile?"
        confirmText="Save"
        type="success"
      />
    </div>
  );
};
export default ProfilePage;

import React from "react";
import Signin from "./Signin";

function Profile() {
  // State to hold user data
  const [user, setUser] = React.useState(null);
  const handleLogout = async () => {
    try {
        const response = await fetch("https://new-rep-uw0m.onrender.com/api/v1/users/logout", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        });

        // Check if the response is not successful
        if (!response.ok) {
            const errorText = await response.text(); // Read the response body as text
            console.error("Error Response:", errorText);
            throw new Error("Failed to log out");
        }

        // Parse response as JSON if successful
        const data = await response.json();
        console.log("Logout successful:", data);

        // Clear user data from localStorage and reset state
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        alert("Logged out successfully");
    } catch (error) {
        console.error("Error logging out:", error);
        alert("Failed to log out. Please try again.");
    }
};

  const updateAvatar = async () => {
    try {
      // Open a file picker dialog
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
      fileInput.onchange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
  
        // Create FormData to send the file
        const formData = new FormData();
        formData.append("avatar", file);
  
        // Send the file to the backend
        const response = await fetch("https://new-rep-uw0m.onrender.com/api/v1/users/updateAvatar", {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, 
          },
          body: formData,
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Update user avatar in local state and localStorage
          const updatedUser = { ...user, avatar: data.data.avatar };
          setUser(updatedUser);
          localStorage.setItem(
            "user",
            JSON.stringify({ currentUser: updatedUser })
          );
          alert("Avatar updated successfully!");
        } else {
          throw new Error(data.message || "Failed to update avatar");
        }
      };
  
      // Trigger file selection dialog
      fileInput.click();
    } catch (error) {
      console.error("Error updating avatar:", error);
      alert("Failed to update avatar. Please try again.");
    }
  };
  
  // Fetch user data from localStorage on component mount
  React.useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser.currentUser);
      } else {
        console.warn("No user data found in localStorage.");
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }, []);

  // Display message if user is not signed in or data is unavailable
  if (!user) {
    return <>
    <Signin/>
    <p className="text-center">Don't Have an account? Click here to <a href="/sign-up" className="text-blue-600">Sign-Up</a></p>
    </>;
  }

  return (
    <div className="flex h-screen">
      {/* Left Section: User Details */}
      <div className="w-1/2 border-2 flex flex-col items-center justify-center text-white text-2xl">
        {/* User Profile Image */}
        <div className="image bg-gray-500 w-full h-1/4 flex items-center justify-center"
             onClick={updateAvatar}>
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="Profile Avatar"
              className="h-full w-auto object-cover"
            />
          ) : (
            "Click to Upload your Avatar"
          )}
        </div>

        {/* User Details */}
        <div className="details flex flex-col justify-evenly h-3/4 w-full">
          <div className="fullname border-2 text-center">
            {user.fullName || "Full Name"}
          </div>
          <div className="scholar_id border-2 text-center">
            {user.scholar_ID || "Scholar ID"}
          </div>
          <div className="username border-2 text-center">
            {user.username || "Username"}
          </div>
          <div className="email border-2 text-center">
            {user.email || "Email"}
          </div>
          <div className="mobile_no border-2 text-center">
            {user.Mobile_No || "Mobile Number not provided"}
          </div>
          <div>
            <button onClick={handleLogout}>Logout </button>
          </div>
        </div>
      </div>

      {/* Right Section: Events */}
      {/* <div className="w-1/2 border-2 flex flex-col items-center justify-center text-white text-2xl">
        <div className="events">
          <h2 className="mb-4">Events Registered</h2>
          {user.eventsRegistered && user.eventsRegistered.length > 0 ? (
            <ul>
              {user.eventsRegistered.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          ) : (
            "No events registered yet."
          )}
        </div>
      </div> */}
    </div>
  );
}

export default Profile;

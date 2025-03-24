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
        </div>
      </div>
import React, { useContext } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import Signin from '../Signin';
import "./dashboard.css";
import { AuthContext } from '../../context/authContext';

const Dashboard = () => {
    const [user, setUser] = React.useState(null);
    const fileInputRef = React.useRef(null);

    const isLoggedIn=useContext(AuthContext)
    const updateAvatar = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = async (event) => {
        try {
            const file = event.target.files[0];
            if (!file) return;

            const formData = new FormData();
            formData.append("avatar", file);

            const response = await fetch("https://ecs-website.onrender.com/api/v1/users/updateAvatar", {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accesstoken")}`, 
                },
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
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
        } catch (error) {
            console.error("Error updating avatar:", error);
            alert("Failed to update avatar. Please try again.");
        }
    };

    const handleLogout = async () => {
        try {
            const response = await fetch("https://ecs-website.onrender.com/api/v1/users/logout", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accesstoken")}`, 
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to log out");
            }

            // Clear localStorage and reset state
            localStorage.removeItem("accesstoken");
            localStorage.removeItem("user");
            isLoggedIn.setIsLoggedIn(false);
            setUser(null);
            
            

            alert("Logged out successfully!");
            window.location.href = "/sign-in"; // Redirect to sign-in page
        } catch (error) {
            
            console.error("Error logging out:", error);
            alert("Failed to log out. Please try again.");
        }
    };

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

    if (!user) {
        return (
            <>
                <Signin />
                <p className="text-center">
                    Don't Have an account? Click here to{' '}
                    <a href="/sign-up" className="text-blue-600">Sign-Up</a>
                </p>
            </>
        );
    }

    return (
        <section className="vh-100 flex justify-center pt-20">
            <MDBContainer className="h-100 m-auto">
                <MDBRow className="flex justify-content-center align-items-center h-100">
                    <MDBCol lg="6" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3 mt-5" style={{ borderRadius: '.5rem' }}>
                            <MDBRow className="flex w-screen mobile:flex-col g-0 justify-center mobile:mx-3 mobile:items-center">
                                <MDBCol md="4" className="dashboard-glow w-1/5 rounded-l-md mobile:rounded-t-md mobile:rounded-b-none mobile:w-full gradient-custom text-center text-white flex flex-col mobile:flex-row pc:flex-col gap-5 justify-center pt-4 pb-4"
                                    style={{ display: 'flex', flexDirection: 'none', borderTopLeftRadius: '.5rem' }}>
                                    {user.avatar ? (
                                        <MDBCardImage
                                            onClick={updateAvatar}
                                            src={user.avatar}
                                            alt="Avatar"
                                            className="mx-auto rounded-full border-4 border-blue-800"
                                            style={{ width: '150px', cursor: 'pointer' }}
                                            fluid
                                        />
                                    ) : (
                                        <p onClick={updateAvatar} style={{ cursor: 'pointer' }}>
                                            Click to Upload your Avatar
                                        </p>
                                    )}
                                    <div className="topography-container">
                                        <MDBTypography tag="h5">{user.username || "Username"}</MDBTypography>
                                        <MDBCardText>{user.scholar_ID || "Scholar ID"}</MDBCardText>
                                        <MDBIcon far className="text-red-400" icon="edit mb-5" />
                                        <button onClick={handleLogout}>Logout</button>
                                    </div>
                                </MDBCol>
                                <MDBCol md="8" className="w-3/5 dashboard-glow text-black rounded-r-md mobile:rounded-tr-none mobile:w-full mobile:mx-3 mobile:rounded-b-md" style={{ backgroundColor: '#457eef' }}>
                                    <MDBCardBody className="p-4">
                                        <MDBTypography tag="h6">Information</MDBTypography>
                                        <div className="mt-0 mb-4 h-1 rounded-xl w-full bg-black" />
                                        <MDBRow className="pt-1 flex justify-start gap-2 flex-col">
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Full Name</MDBTypography>
                                                <MDBCardText className="text-muted">{user.fullName || "Full Name"}</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Phone</MDBTypography>
                                                <MDBCardText className="text-muted">{user.Mobile_No || "Mobile Number not provided"}</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Email</MDBTypography>
                                                <MDBCardText className="text-muted">{user.email || "Email"}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>

                                        <MDBTypography tag="h6">Events Registered</MDBTypography>
                                        <div className="mt-0 mb-4 h-1 rounded-xl w-full bg-black" />
                                        <MDBRow className="pt-1">
                                            {user.eventsRegistered && user.eventsRegistered.length > 0 ? (
                                                <ul>
                                                    {user.eventsRegistered.map((event, index) => (
                                                        <li key={index}>{event}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                "No events registered yet."
                                            )}
                                        </MDBRow>

                                        <div className="d-flex justify-content-start">
                                            <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                                            <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                                            <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                                        </div>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleFileChange}
            />
        </section>
    );
};

export default Dashboard;


import React from "react";
import { useEffect,useState } from "react";
import AdminSideBar from "./AdminSideBar";
import '../assets/css/AdminSidebar.css';

const DashBoard = ({ activePage }) => {
    const UserList = () => {
        // State to store the fetched data
        const [users, setUsers] = useState([]);
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            // Fetch the user data
            fetch("http://localhost:3000/api/users")
                .then((response) => response.json())
                .then((data) => {
                    setUsers(data); // Set the fetched data in state
                    setLoading(false); // Set loading to false
                })
                .catch((error) => {
                    console.error("Error fetching users:", error);
                    setLoading(false); // Stop loading even if there’s an error
                });
        }, []); // Empty dependency array ensures this runs once on mount
    
        return (
            
                <div className="row">
                    <div className="col-md-12">
                        <div className="dashboard-card">
                            <div className="card-body">
                                <h5 className="card-title">User List</h5>
                                {loading ? (
                                    <p>Loading...</p>
                                ) : (
                                    <ul>
                                        {users.map((user) => (
                                            <li key={user.id}>{user.name}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
        );
    };

    return (
        <div className="container" style={{ display: "flex", flexDirection: "row", justifyContent: "normal", alignItems: "normal", width: "100%" }}>
            <AdminSideBar/>
            <div className="row">
                <div className="col-md-12">
                    {/* Conditionally render UserList component based on activePage */}
                    {activePage === "user-management" ? <UserList /> : null}
                </div>
            </div>
        </div>
    );
};

export default DashBoard;

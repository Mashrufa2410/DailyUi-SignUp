import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { auth } from "../firebase.init";
import { onAuthStateChanged } from "firebase/auth";
import Footer from "../Components/Footer";

const HomeLayout = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); 
        });

   
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <div className="pb-20"> <Navbar user={user} /> </div>
             <Outlet />
             <div className="pt-10"> <Footer /> </div>
        </div>
    );
};

export default HomeLayout;

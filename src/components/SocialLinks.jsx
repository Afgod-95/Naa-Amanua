import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { useMediaQuery } from 'react-responsive';

const SocialLinks = () => {
    //mobile devices
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
            <Link to="https://www.instagram.com/naaamanuawulomei?igsh=MXh1dWtsZjBjNHB4aw==" target="_blank" className="icons">
                <FaInstagram size={isMobile ? 24 : 30} />
            </Link>
            <Link to="https://www.facebook.com/share/195MwiuQPb/?mibextid=LQQJ4d" target='_blank' className="icons">
                <FaSquareFacebook size={isMobile ? 24 : 30} />
            </Link>
            <Link to="https://www.youtube.com/@MaryNaaAmanuaDodoo-Wulomei" target="blank" className="icons">
                <IoLogoYoutube size={isMobile ? 24 : 35} style={{ fontSize: "30px" }} />
            </Link>
        </div>
    )
}

export default SocialLinks

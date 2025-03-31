import React from "react";

function Footer() {
    const socialLinks = [
        { name: "Facebook", url: "https://www.facebook.com" },
        { name: "Twitter", url: "https://www.twitter.com" },
        { name: "Instagram", url: "https://www.instagram.com" },
    ];

    const footerStyle = {
        backgroundColor: "#282c34",
        color: "red",
        padding: "20px",
        textAlign: "center",
    };

    const linkStyle = {
        margin: "0 10px",
        color: "lightblue",
        textDecoration: "none",
    };

    return (
        <div className="foot">
        <footer style={footerStyle} className="myc">
            <h4>&copy; {new Date().getFullYear()} Your Website Name</h4>
            <p>Follow us on:</p>
            
                {socialLinks.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={linkStyle}
                    >
                        {link.name}
                    </a>
                ))}
          
        </footer>
        </div>
    );
}

export default Footer;


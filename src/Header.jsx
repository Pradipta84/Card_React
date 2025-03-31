function Header() {
    return (
        <div className="header">
            <h1 className="test">🌐Welcome to my website🌐</h1>
            <marquee behavior="alternate" direction="left" className="marq">Hello, Everyone! I hope you are doing well.</marquee>

            {/* "foot" section moved inside the main structure */}
            <div className="head2">
                {/* Uncomment the footer below if needed */}
                {/* <footer className="myc"> */}
                    {/* <h4>@Copyright {new Date().getFullYear()} Your website name</h4> */}
                {/* </footer> */}
                <nav>
                    <ul className="nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;


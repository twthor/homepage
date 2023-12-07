import React from "react";

function Footer({ footerText }) {
    return (
        <div> 
            <footer class="footer">&copy; {new Date().getFullYear()}
            {footerText}
            </footer>
        </div>
        
    );
}

export default Footer;
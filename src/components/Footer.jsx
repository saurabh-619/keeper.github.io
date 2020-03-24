import React from 'react';

const currentYear = new Date().getFullYear(); 

const Footer = () => {
    return(
        <footer>
            <p>&copy; Saurabh Bomble {currentYear}</p>
        </footer>
    )
}

export { Footer };
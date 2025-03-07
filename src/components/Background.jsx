import React from 'react';
import img1 from '../images/img1.png'; // Import the image
 // Import the Home component
import './Background.css'

export default function Background() {
    return (
        <div style={{ position: 'relative', width: '100%' }}>
            {/* Background image */}
            <img className='image1' src={img1} alt="Background" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                objectFit: 'cover', // Ensures the image covers the entire background area
                zIndex: -1, // Places the background image behind other content,
            }} />
        </div>
    );
}

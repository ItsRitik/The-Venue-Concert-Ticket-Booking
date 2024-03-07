import React from 'react';

const Location = () => {
    return(
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.6059498723876!2d-73.97799052345403!3d40.682650539410936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sus!4v1709777792738!5m2!1sen!2sus" 
                width="100%" 
                height="500px" 
                frameBorder="0"
                title="gglemaps" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>

        </div>
    )
}

export default Location;

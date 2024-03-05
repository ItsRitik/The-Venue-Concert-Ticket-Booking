import React from 'react';

const Location = () => {
    return(
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4768436189465!2d-74.05923132415509!3d40.75153577138776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c257139c4e93d1%3A0x50d8c39fa85ba7fe!2s156%20Terrace%20Ave%2C%20Jersey%20City%2C%20NJ%2007307!5e0!3m2!1sen!2sus!4v1705482686348!5m2!1sen!2sus" 
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

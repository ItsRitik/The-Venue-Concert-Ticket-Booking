import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Description = () => {
    return (
        <Fade triggerOnce>
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Highlights</h2>
                <div className="highlight_description text-gray-700">
                    Developed a static web page using ReactJS. Integrate
                    popular third-party libraries to enrich the project.
                    Implement smooth transitions on reveal and create an engaging
                    carousel component. Enhance the UI with carefully selected
                    Material UI components for a polished and modern design.
                </div>
            </div>
        </Fade>
    );
};

export default Description;

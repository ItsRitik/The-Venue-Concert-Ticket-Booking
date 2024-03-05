import React, { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const Discount = () => {
    const end = 30;
    const [start, setStart] = useState(0);

    const porcentage = () => {
        if (start < end) {
            setStart(prevCount => prevCount + 1);
        }
    };

    useEffect(() => {
        if (start > 0 && start < 30) {
            setTimeout(() => {
                setStart(prevCount => prevCount + 1);
            }, 30);
        }
    }, [start]);

    return (
        <div className="container mx-auto">
            <div className="discount_wrapper flex justify-between items-center p-8">
                <Fade
                    triggerOnce
                    onVisibilityChange={inView => {
                        if (inView) {
                            porcentage();
                        }
                    }}
                >
                    <div className="discount_porcentage text-4xl font-bold">
                        <span>{start}%</span>
                        <span className="ml-2">OFF</span>
                    </div>
                </Fade>

                <Slide right triggerOnce>
                    <div className="discount_description ml-8">
                        <h3 className="text-xl font-bold mb-4">
                            Purchase ticket before 20th June
                        </h3>
                        <p className="text-gray-700">
                            Sed ut perspiciatis unde omnis iste natus error
                            sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo.
                        </p>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Discount;

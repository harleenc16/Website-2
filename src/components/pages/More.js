import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import ImageSlider from '../ImageSlider';
import { ImageDataSet }  from '../ImageDataSet';

export default function More() {
    return (
            <div className='more-container'>
                <p className='heading-text-second'> "There is no such thing as work-life balance-it is all life. 
                    The balance has to be within you." ~ Sadhguru.
                </p>

                <p className='heading-text-second'> Other than programming, I also enjoy 
                    photography, economics, chess, cooking, hiking, going on long walks, and reading. Check out some of my photography below! 
                </p>
             
                <ImageSlider slides={ImageDataSet} />;
             
                <Footer />
            </div>
    )
}

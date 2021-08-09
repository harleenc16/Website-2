import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function More() {
    return (
            <div className='more-container'>
                <p className='heading-text-second'> "There is no such thing as work-life balance-it is all life. 
                    The balance has to be within you." ~ Sadhguru.
                </p>

                <p className='heading-text-second'> Other than programming, I also enjoy 
                    photography, cooking, hiking, going on long walks, and reading. Check out some of my photography below! 
                </p>
             
                <div className='img-container'> 

                
                <img  className='more-im' width={796}
                 height={504} src='/images/h8.jpg' />

                <img  width={796}
                 height={504} src='/images/h6.jpg' />

                <img  width={796}
                 height={504} src='/images/h9.jpg' />

                 <img  width={896}
                 height={604} src='/images/h3.jpg' />

                <img  width={496}
                 height={604} src='/images/h5.jpg' />

                <img  width={400}
                 height={604} src='/images/lordes.jpg' />
                
                </div>
                <Footer />
            </div>
    )
}

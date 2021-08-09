import React from 'react';
import './Style.css';
import Footer from '../Footer';

export default function Hack() {
    return (
        <div> 
        <div className='style-container'>
             <div className='style-img'>
                 <img src='/images/CEhack.png' />
            </div>

            <div className='style-con'>
                <p className='style-heading'>Summary</p>
                 <p className='style-body'>CE Hack is a web application built in android studio. It is a platform for people interested in learning how to code in C++. It contains tutorials for basic topics in the coding language
                  and allows users to navigate the topics that they are interested in. The app also offers a four to five question quiz at the end of each tutorial through which the user can track their progress. The app’s simple and 
                  straightforward nature is what makes it extremely beneficial for beginners learning how to code. Not only does it give the user a basic understanding of C++, but also tests their knowledge on the topics. The target audience
                  of this app would be prospective high school students, interested in pursuing engineering. Similar to other apps that offer tutorials for learning coding, CE Hack contains simple, basic tutorials and knowledge 
                  about C++. On the other hand, unlike other apps, CE Hack is not highly detailed or descriptive; most tutorials on the app are fairly simple and quick to use, ranging from just two to five minutes long videos.  
                 </p>
                 
          
          </div>  
         
  </div>
  <Footer /> 
  </div>
  
    )
}

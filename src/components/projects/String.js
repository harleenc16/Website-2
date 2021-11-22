import React from 'react'
import './Style.css';
import Footer from '../Footer';

export default function String() {
    return (
        <div> 
        <div className='style-container'>
             <div className='style-img'>
                 <img src='/images/sita3.png' />
            </div>

            <div className='style-con'>
                <p className='style-heading'>Summary</p>
                 <p className='style-body'> SITA (Speech Indirect Therapy for Autism) is a useful resource to help children practice their communication skills under any circumstances. It includes both verbal and non-verbal exercises aiming to develop their communication skills, particularly with spoken language.
For verbal exercise, the app is customizable by the therapists. In other words, they will be able to upload their own videos of pronouncing the words based on children’s needs. All the videos are saved locally on the device. Once videos are successfully uploaded, children will have access to the video through the app to hear and see
 the pronunciation outside of the therapy session.
When the child clicks on the video, it will be repeated ten times with volume decreasing logarithmically, and he/she will attempt to echo the therapist’s pronunciation while the video is playing. Based on a built-in speech recognition algorithm, the child will gets a certain score on the accuracy of their attempt. Once they pass a certain score, they are rewareded with playtime. 
While the SITA app was created for children with ASD, it can also be useful to other people with speech difficulties.
                 
                 </p>
                
      
        
          </div>  
         </div> 
         <Footer /> 
  </div>
    )
}

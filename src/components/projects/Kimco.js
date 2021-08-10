import React from 'react';
import './Style.css';
import Footer from '../Footer';

export default function Kimco() {
    return (
        <div> 
        <div className='style-container'>
             <div className='style-img'>
                 <img src='/images/kim2.png' />
            </div>

            <div className='style-con'>
                <p className='style-heading'>Summary</p>
                 <p className='style-body'> I am summer intern in the IT department of a REIT
                    (Real Esate Investment Trust) called Kimco(NYSE: KIM). Kimco is one of North America's 
                     largest publicly traded owners and operators of open air commercial real estate and 
                     mixed assets.
                 </p>
                 <p className='style-body'> I have always been interested in the intersection between buisness and technology and 
                     interning at Kimco matched my interests perfectly. So far, I have worked on Salesforce, API integration,
                     Azure CLI, Azure Pipelies, Data Encryption and Decryption, .NET projects and SSMS. I will update this page shortly with all
                     the details. </p>
          
          </div>  
  </div>
 <Footer /> 
</div>
  
    )
}

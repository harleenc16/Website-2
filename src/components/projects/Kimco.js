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
                 <p className='style-body'> I was the summer software engineering intern at a REIT
                    (Real Esate Investment Trust) called Kimco(NYSE: KIM). Kimco is one of North America's 
                     largest publicly traded owners and operators of open air commercial real estate and 
                     mixed assets.
                 </p>
                 <p className='style-body'> I have always been interested in the intersection between business and technology and 
                     interning at Kimco matched my interests perfectly. During my internship, the biggest project I participated in was the 
                     $4 billion merger with Weingarten Realty. That required data mapping, data validation, project management, documenting, etc. 
                     Apart from that, I also worked on maintaining APIs to manage data flow between Kimco Core Systems and third-party apps 
                     such as ERP(MRI), ADP, Salesforce and automated tasks for users. I assisted to develop a .NET Console application to process 
                     high volumes of invoices for the Accounts Payable team. On the development team, I additionally worked on SSMS: data encryption of tables 
                     and columns, created views, stored procedures and functions for the custom REST API processes. I also developed various DB objects - stored procedures, 
                     triggers, tables, views and functions as per user requests. Kimco uses Salesforce as their CRM, and therefore I gained a lot of exposure 
                     in the systems side of the company. On the Salesforce side, I created, deployed and promoted change sets to various instances within Salesforce to 
                     fulfil specific business needs. Additionally, I also worked on and edited apex classes, triggers and controllers. One of the huge projects I worked on was data loading high 
                     volumes of data into Salesforce as a part of the Weingarten merger.</p>
          
          </div>  
  </div>
 <Footer /> 
</div>
  
    )
}

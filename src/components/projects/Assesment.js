import React from 'react';
import './Style.css';
import Footer from '../Footer';

export default function Assesment() {
    return (
        <div>
        <div className='style-container'>
             <div className='style-img'>
                 <img src='/images/audio.png' />
            </div>

            <div className='style-con'>
                <p className='style-heading'>Summary</p>
                 <p className='style-body-asses'>The security assessment performed on the website www.audioteceg.com.
                 Audio Technology is an engineering system integrator firm based in Egypt
                  specialized in light current services and integrated CCTV systems. The firm has an online store to
                   sell a variety of their partners' products in Egypt, like Bose, JBL, Pioneer DJ, Shure and Soundcraft. 
                 
                 </p>
                 <p className='style-body-asses'> In this security assessment, various Kali Linux tools were used, like Nmap, Nikto, Dirbuster and Skipfish, 
                 to find information on any vulnerabilities and how to improve the website to prevent potential cybersecurity attacks while 
                 not disturbing the website traffic and damaging any information in the database. Some of the techniques that were used include 
                 finding open ports and trying to connect to them in order to access and gain information on the server, performing light server 
                 side includes and SQL injections, using non-malicious cross site scripting attacks, examining source code, and searching for public 
                 directories to find any hidden and vulnerable pages. 
                </p>
                 <p className='style-body-asses'> During the process, no vulnerable information was found via the scans. However,
                    while navigating through the source code of the website, I was examining the network requests on the web console. In particular, I looked at the XHR requests and was able to navigate to the backend login page
                    of the website. I examined the network requests even further by entering random values in the login
                    page to see where they were being sent, and was able to get access to a URL. That URL was a gateway to a lot of vulnerable information
                    hiding under the company's website. I was able to find the API keys, web auth encryption keys, DB login information, 
                    server information, usernames, passwords, and host information. The company was notified about this huge vulnerability and have 
                    thus removed public visibility to that URL. 
                </p>
          
          </div>  
    </div>
    <Footer /> 
  </div> 
    )
}

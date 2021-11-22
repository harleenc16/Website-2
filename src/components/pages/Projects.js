import React from 'react';
import '../Projects.css';
import Footer from '../Footer';
import '../Skills.css';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <div>
        <body className='main'>
            <div className='heading'>
                <p className='heading-text'>
                    Some of my Work and Experience: 
                </p>
            </div>

    <section className='project-row'>
         <div className='project-col'>

               
                    <div className='project'>
                        <Link
                        to='/kimco'> 
                         <div className='overlay'>       
                            <img className='image' src="./images/kimco.jpg"/>
                                <div className='description'>
                                    <p className='body-text'>
                                    Internship at Kimco Realty
                                    </p>
                                </div>
                         </div>
                         </Link>
                    </div>
                  

                <div className='project'>
                <Link
                        to='/string'> 
                     <div className='overlay'>
                        <img className='image' src="./images/sit.png"/>
                            <div className='description'>
                                 <p className='body-text'>
                                 Speech Therapy App </p>
                            </div>
                     </div>
                     </Link> 
                </div>

            <div className='project'>
                <Link to='/assesment'> 
                <div className='overlay'>
                    <img className='image' src="./images/audio.png"/>
                        <div className='description'>
                             <p className='body-text'>
                                Security Assesment 
                            </p>
                         </div>
                </div>
                </Link>
           </div>

        </div>


        <div className='project-col-second'>

            <div className='project'>
                <Link to='/hack'> 
                 <div className='overlay'>
                    <img className='image' src="./images/CEhack.png"/>
                        <div className='description'>
                            <p className='body-text'>
                            Web Application 
                            </p>
                         </div>
                    </div>
                    </Link>
            </div>

           <div className='project'>
               <Link to='/'> 
                 <div className='overlay'>
                    <img className='image' src="./images/App.PNG"/>
                         <div className='description'>
                            <p className='body-text'>
                            Web Design and Development
                            </p>
                         </div>
                </div>
                </Link>
            </div>

        <div className='project'>
            <Link to='/routing'> 
            <div className='overlay'>
                 <img className='image' src="./images/routing.png"/>
                    <div className='description'>
                         <p className='body-text'>
                         Intra Domain Routing Algorithm
                          </p>
                    </div>
             </div>
             </Link>
          </div>

        </div>

    
    </section>

    <div className='skills-container'>
            <h3 className='heading'> SKILLS: </h3>
            <p className='skills-body'> IDE: Visual Studio, Visual Studio Code, Eclipse,
                Sublime, Azure Data Studio, Android Studio
            </p>
            <p className='skills-body'> Languages: C#, C++, C, Java, Javascript, React JS,
                Next JS, Verilog, Python
            </p>
            <p className='skills-body'> DB: MSSQL, Azure SQL
            </p>
            <p className='skills-body'> Others: Microsoft Excel, Microsoft Word, Agile, 
                Jira, Git
           
            </p>
        </div>
    
     </body>
     
     <Footer /> 
     </div>
    )
}


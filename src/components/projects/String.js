import React from 'react'
import './Style.css';
import Footer from '../Footer';

export default function String() {
    return (
        <div> 
        <div className='style-container'>
             <div className='style-img'>
                 <img src='/images/string.png' />
            </div>

            <div className='style-con'>
                <p className='style-heading'>Summary</p>
                 <p className='style-body'> This is one of my assignments from my data structures and algorithms class.
                 I implemented three extremely efficient string matching algorithms written in C++. All of them require a file name to be provided as user input. 
                 The first one reads from the file and finds all the ID's in a file whose digits add to a number 
                 between 31 and 68. An ID in the file is a
                 a string with nine characters starting with the letter U followed by seven digits. The algorithm
                 finds all the ID's and then returns all the ID's who's digits add to a number between 31 and 68. I added
                 a bool function that checks if it is a valid ID, and if true, then the count variable is incremented and at last, the value of the count variable is returned. 

                 The second part of the problem reads from the same file and compares it to another file(in the code) and returns a count of all the 
                 words that do not begin with the letter of your first name(in this case-it's H). I implemented KMP algorithm to 
                 complete this task, as it is one of the more efficient algorithms for a heavy data set. 
                 The third part iterates through the file and finds the longest palindrome. I did this by setting up various nested for
                 loops inside my code. The link to this code can be found <a className='style-link' href='https://github.com/harleenc16/String-Matching-algorithm'>here </a>. 
                 
                 </p>
                
      
        
          </div>  
         </div> 
         <Footer /> 
  </div>
    )
}

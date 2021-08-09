import React from 'react'
import './Style.css';
import Footer from '../Footer';

export default function Routing() {
    return (
        <div> 
        <div className='style-container'>
        <div className='style-img'>
            <img src='/images/routing.png' />
       </div>

       <div className='style-con'>
           <p className='style-heading'>Summary</p>
            <p className='style-body'> This was an assignment for EC441: Computer Networking. I implemented 
            linked state routing algorithm for clients and routers in python. The algorithm forwards 
            data packets along the shortest or lowest cost path through the network. Each router keeps its own 
            link state and other node's link states that it receives. The link state of a router contains the links
            and their weights between the router and its neighbour's. When a router receives a link state from it's neighbor, it updates
            the stored link state and the forwarding table. It then broadcasts the link state to other neighbors. 
            A sequence number is added to each link state message to distinguish between old and new link state messages. 
            Each router stores the sequence number together with the link state. If a router receives a link state message with a 
            smaller sequence number (i.e., an old link state message), the link state message is simple disregarded.

            </p>
          
     
     </div>  
     </div>
     <Footer /> 
</div>
    )
}

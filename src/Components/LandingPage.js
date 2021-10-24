import React from "react";
import {useHistory} from "react-router-dom";
import PrevProjectLoader from "./PrevProjectLoader";
import Navbar from "./Navbar";



const LandingPage = ({}) => {
    const history = useHistory()


    return (
        <div className= "">
            <img className=' h-44 !important mt-28  w-48 bg-back animate-bounce '  src={"https://cerebro.iiitvadodara.ac.in/media/cover/helmet.png"}/>

            <div className='flex flex-col ... container mx-auto flex items-center justify-between '>


           <div className='flex flex-row... w-full bg-back '>
                <PrevProjectLoader/>
             </div>


       </div>

        </div>



    );
};

export default LandingPage;

import React from "react";
import {useHistory} from "react-router-dom";
import PrevProjectLoader from "./PrevProjectLoader";
import Navbar from "./Navbar";



const LandingPage = ({}) => {
    const history = useHistory()


    return (
       <div className='flex flex-col ... container mx-auto flex items-center justify-between  border-2'>


           <div className='flex flex-row... w-full bg-gray-200 '>
                <PrevProjectLoader/>
             </div>

        </div>



    );
};

export default LandingPage;

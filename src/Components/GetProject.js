import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import PrevProjectLoader from "./PrevProjectLoader";
import Navbar from "./Navbar";
import {SetProjectData} from "../Redux/Actions/ProjectDataAction";
import {connect} from "react-redux";
import firestoreDb from "../index";


const GetProject = ({projectData}) => {
    const history = useHistory()
    const [events, setEvents] = useState(null);
    const {id} = useParams();




    useEffect(() => {
        console.log(id)
        fetchEvents();
    },[] );


    const makeChanges = ()=>{


        history.push(`/Projects/${id}/makeChanges`)

    }


    function fetchEvents() {


        firestoreDb.collection("projects").doc(id).get().then((res) => {
            const events = res.data();
            setEvents(events);
            console.log(events)



        })
            .catch((err) => {
                throw err
            });


    }





    return (



        <div classNameName="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">

            {events  ? (
                   
                    <section className="font-mono bg-white container mx-auto px-5">
                        <div className="flex flex-col items-center py-8">
                            <div className="flex flex-col w-full mb-12 text-left">
                                <div className="w-full mx-auto lg:w-1/2">
                                    <h1 className="mx-auto mb-6 text-2xl font-semibold text-black lg:text-3xl">{events.name}</h1>
                                    <img className="rounded-sm" src={events.downloadURL} />
                                    <h2 className="mx-auto mt-4 mb-4 text-xl font-semibold text-black">Project Description:</h2>
                                    <p className="mx-auto text-base font-medium leading-relaxed text-gray-800">{events.description}</p>
                                </div>
<br/>
                                <div className="p-4 mt-4 bg-white border rounded-lg w-full mx-auto lg:w-1/2">
                                    <div className="flex py-2 mb-4 w-full">
                                        <div>
                                            <p className="text-sm font-semibold tracking-tight text-black cursor-pointer" onClick={()=>{
                                                history.push('/Home')

                                            }}>Back to Projects</p>
                                            <p className="text-sm font-normal tracking-tight text-gray-600"> </p>
                                        </div>
                                    </div>
                                    <span  className="w-full inline-block px-4 py-2  cursor-pointer mt-4 text-white transition duration-500 ease-in-out transform bg-blue-500 border-blue-500 rounded-md focus:shadow-outline focus:outline-none hover:bg-blue-700" onClick={()=>{makeChanges()}}> Make Changes</span>
                                </div>
                            </div>
                        </div>
                    </section>


            ):
                (

                    <div>

                        <div classNameName=" flex justify-center items-center">
                            <div classNameName="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-800 mt-20"> </div>
                        </div>
                    </div>

            )}


        </div>


    )
}

const mapStateToProps = (state, ownProps) => {


    return {

        projectData:state.projectData

    };
};


const mapDispatchToProps = {
    SetProjectData,
};

export default connect(mapStateToProps, mapDispatchToProps)(GetProject);



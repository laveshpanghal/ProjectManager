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



        <div >

            {events  ? (


                <section className="font-mono  container mx-auto px-5  bg-back  rounded-3xl  ">
                    <h1 className="mx-auto mb-6 text-2xl pt-4 text-left!important font-semibold text-white  lg:text-3xl">{events.name}</h1>
                        <div className="flex flex-col  py-8 ">
                            <div className="flex flex-col w-full mb-12 text-left ">
                                <div className="w-full mx-auto lg:w-1/2">
                                    <img className=" rounded rounded border-4 border-purple-200" src={events.downloadURL} />

                                    <br/>

                                    <div className='bg-back rounded-3xl  '>
                                    <h2 className="mx-auto pl-2 text-white mt-4 mb-4 text-xl font-semibold text-black">Project Description:</h2>
                                        <br/>
                                    <p className="mx-auto pl-2 text-white  font-medium leading-relaxed ">{events.description}</p></div>
                                </div>
<br/>

                                <img className="  h-64 w-64 bg-back" src={"https://cdn-icons-png.flaticon.com/512/2909/2909678.png"}/>
                                <div className="p-4 mt-4 bg-white border rounded-lg w-full mx-auto lg:w-1/2">
                                    <div className="flex py-2 mb-4 w-full">
                                        <div>
                                            <p className="text-lg font-bold tracking-tight text-black cursor-pointer" onClick={()=>{
                                                history.push('/Home')

                                            }}>Back to Projects</p>
                                            <p className="text-lg font-normal tracking-tight text-gray-600"> </p>
                                        </div>
                                    </div>
                                    <span  className="w-full font-xl inline-block px-4 py-2  cursor-pointer mt-4 text-white transition duration-500 ease-in-out transform bg-blue-500 border-blue-500 rounded-md focus:shadow-outline focus:outline-none hover:bg-blue-700" onClick={()=>{makeChanges()}}> Make Changes</span>
                                </div>
                            </div>
                        </div>

                </section>


            ):
                (

                    <div>

                        <div className=" flex justify-center items-center">
                            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-800 mt-20"> </div>
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



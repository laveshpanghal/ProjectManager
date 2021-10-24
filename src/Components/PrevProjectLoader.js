import React, {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import firestoreDb from "../index";
import firebase from "firebase/compat";
import {getStorage, ref, uploadBytesResumable, getDownloadURL,deleteObject} from "firebase/storage"
import {connect} from "react-redux";
import {SetProjectData} from "../Redux/Actions/ProjectDataAction";




const PrevProjectLoader = ({SetProjectData}) => {
    const firestoreDb = firebase.firestore()
    const history = useHistory();
    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        fetchEvents();
    }, []);

    function fetchEvents() {
        setLoading(true);

        firestoreDb.collection("projects").get().then((res) => {
            const events = res.docs;
            setEvents(events);
            console.log(events)
            setLoading(false);

        })
            .catch((err) => {
                throw err
            });


    }

    const storage = getStorage();
    var storageis = firebase.storage();

    const viewClick = (value)=>{

firestoreDb.collection('projects').doc(value.id).get().then((doc)=>{

    SetProjectData(doc.data())

    history.push(`/Projects/${value.id}`)

})

    }


    const Delete = (value)=>{
        console.log(value)
        const storageRef = storageis.refFromURL(value.data().downloadURL)
        // const storageRef = ref(storage, "/ProjectImages/"+value.data().name +"/" + "gg.jpg")

            deleteObject(storageRef)

     .then(()=>{  firestoreDb.collection('projects').doc(value.id).delete().then(()=>{

            window.location.reload()}
        )})




        }




    return (


       <div className='w-full'>


            {events ? (

                <div className="container flex flex-col mx-auto items-center justify-center">

                {events.map((value, key) => {
                    return (
                        <div className='w-full'>


                            <ul className="flex flex-col items-center ">
                                <li className="border-gray-400 w-1/2 justify-center flex flex-row  mb-2">
                                    <div
                                        className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none  bg-primary dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">

                                        <div className="flex-1 pl-1 md:mr-16">
                                            <div className="font-medium dark:text-white">
                                                {value.data().name}

                                            </div>
                                            <br/>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                    <button onClick={()=>{Delete(value)}}>Delete project</button>
                                            </div>
                                        </div>

                                        <button onClick={()=>{viewClick(value)}} className="w-24 text-right flex justify-end ">
                                            <span className='pr-8 pb-2 pt-0 text-top' >
                                                 View
                                            </span>

                                            <svg width="12" fill="currentColor" height="12"
                                                 className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                                                 viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                            <br/>
                        </div>



                    )
                })}
                </div>)
                : (<div>

                    <div className=" flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-800 mt-20"></div>
                    </div>
                </div>)
            }



        </div>


    )
};

const mapStateToProps = (state, ownProps) => {


    return {

        projectData:state.projectData

    };
};


const mapDispatchToProps = {
    SetProjectData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrevProjectLoader);




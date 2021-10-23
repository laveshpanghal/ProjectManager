import React from "react";
import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
;
import firestoreDb from "../index";


const fileInput = React.createRef();
const AddProject = ({}) => {
    const history = useHistory()


    const [data, setData] = useState(
        {
            name: "404",
            description: "",


        }
    )

    function onChange(e) {
        e.persist();
        setData(() => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    }
    const initialdocs = []

    function removeDocObj(id) {
        initialdocs.forEach((doc) => {
            if (doc.name === id) {
                // console.log(doc)
                // console.log(initialdocs.indexOf(doc))
                initialdocs.splice(initialdocs.indexOf(doc), 1)
            }


        })

    }



    function onDocsChange(e) {
        e.persist();
        removeDocObj(e.target.id)



        if ( fileInput.current.files[0].name.split('.').pop() !== 'jpg' && fileInput.current.files[0].name.split('.').pop() !== 'JPG' && fileInput.current.files[0].name.split('.').pop() !== 'jpeg' && fileInput.current.files[0].name.split('.').pop() !== 'JPEG' && fileInput.current.files[0].name.split('.').pop() !== 'png' && fileInput.current.files[0].name.split('.').pop() !== 'PNG'){
            alert("File format must be pdf or png or jpg or jpeg");
            e.target.value = null;
            return;
        }

        initialdocs.push(
            {
                "name": e.target.id,
                "file": fileInput.current.files[0]
            })

        console.log(initialdocs)


    }

    const storage = getStorage();


    const upload = async (e) => {

        e.preventDefault()


        try {

                const storageRef = ref(storage, "/ProjectImages/"+data.name+"/" + ".jpg")
                const uploadTask = uploadBytesResumable(storageRef, initialdocs[0])


            await    uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                            case 'paused':
                                console.log('Upload is paused');
                                break;
                            case 'running':
                                console.log('Upload is running',);
                                break;
                        }
                    },
                    (error) => {},
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                            console.log('File available at',downloadURL);

                            const datais= {
                                "documentName" : 'ProjectImage',
                                "downloadURL":downloadURL,
                            }
                            console.log(datais)
                            firestoreDb.collection('projects').doc().set({...data,...datais}).then(()=>{

                            })

                        });
                    },

                );

            setTimeout(() => {
                history.push('/Home')

            }, 3570)



        }
        catch (err){
            console.log(err)
        }




    }






    return (

        <div className=" items-center justify-center px-5 py-12 lg:px-20">
            <form className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transhtmlForm bg-white border rounded-lg lg:w-1/2 ">
                <section className="flex flex-col w-full h-full p-1 overflow-auto">
                    <label htmlFor="name" className="text-base leading-7 text-blueGray-500 mb-5">Project Image</label>

                        <p className="flex flex-wrap justify-center mb-3 text-base leading-7 text-blueGray-500">
                            <input type="file" className=' flex-auto items-center text-center justify-center py-12 text-base text-blueGray-500 transition duration-500 ease-in-out transhtmlForm bg-white border border-dashed rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2'  accept='application/pdf' id="projectImage" onChange={onDocsChange}  ref={fileInput}/>

                        </p>

                </section>
                <div className="relative pt-4">
                    <label  htmlFor="name" className="text-base leading-7 text-blueGray-500">Project Title</label>
                    <input type="text" id="name" name="name" placeholder="name" onChange={onChange} className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transhtmlForm rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"/>
                </div>

                <div className="flex flex-wrap mt-4 mb-6 -mx-3">
                    <div className="w-full px-3">
                        <label className="text-base leading-7 text-blueGray-500" htmlFor="description"> Project Description</label>
                        <textarea onChange={onChange} className="w-full h-32 px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transhtmlForm bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand" id="description" type="text" name="description" placeholder="This project is about . . ." required=""/>
                    </div>
                </div>
                <div className="flex">
                    <label className="flex items-center" >
                        <input type="checkbox" className="htmlForm-checkbox " />
                            <span className="ml-2 text-blueGray-500">I am a Cool Guy </span>
                    </label>
                </div>
                <div className="flex items-center w-full pt-4 mb-4">
                    <button className="w-full py-3 text-base text-white transition duration-500 ease-in-out transhtmlForm bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 " onClick={(e)=>{upload(e).then()}}
                      > Add-Project </button>
                </div>
                <hr className="my-4 border-gray-200"/>


            </form>
        </div>



    );
};

export default AddProject;

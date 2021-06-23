import React,{useState} from 'react';
import pictures from '../img/CheckList.jpg';
import store from '../img/Store.png';
import Modal from 'react-modal';
import List_Holding from "../components/list-hold";
import {db} from "../sdk_firebase";
import isLoading from "is-loading";


function Create_list(){
   

    // const {isLoading,errorMessage,docRef} = queryState;

    // let contents;
    // if(isLoading) contents = "Loading...";
    // else if(errorMessage) contents = <p>{errorMessage}</p>
    // else if (docRef === null) contents = <p></p>
    // else contents = 
}


const Dashboard = (props)=>{

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const {handleLogout} = props
    
    /////////////////////////////////////////////////////////////////////////////////
    //Mostly for the database connection
   
    const [queryState,setQueryState] = useState({
        isLoading:false,
        errorMessage:"",
        docRef:null
    });

    const [listDescription,setListDescription] = useState(String);
    const [listTitle,setListTitle] = useState(String);

    const Clicking = async () =>{
        try {
            setQueryState({
                isLoading:true,
                errorMessage:"",
                docRef:null
            })
            const docRef = await db.collection("lists").add
            ({
                listTitle,
                listDescription
            });
            alert(`List has been added`);
        } catch (err) {
            setQueryState({
                isLoading:false,
                errorMessage:"Can't connect to the database",
                docRef:null
            })
            console.error(err);
        }
    }

    return(
        <section className="w-full min-h-screen bg-white">
            <nav className=" bg-gradient-to-bl  from-red-500 to-yellow-500 ... w-full p-10 flex items-center justify-between">
                <h2 className=" text-white">Dashboard</h2>
                <button onClick={handleLogout}
                        className="text-white leading-5 w-20 p-2 transition duration-500 ease-in-out bg-purple-700 hover:bg-blue-700 rounded-lg">Logout</button>
            </nav>

            <main className="bg-white ml-280 w-full p-10 flex justify-between mb-8 min-h-screen">
                <div className="blog-slider">
                <div className="blog-slider__item swiper-slide">
                <div className="blog_slider__img">
                    <img src= {pictures} alt="checklist" className="rounded"/>
                </div>

                <div className="blog-slider__content">
                    <div className="blog-slider__title">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div className="blog-slider__text">
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Nostrum, dicta?
                    </div>
                    
                    
                    <button 
                    //Adding the Modal of the form where user can add a new list
                    onClick={()=>setModalIsOpen(true)}
                    className="text-white p-2 transition duration-500 ease-in-out bg-blue-700 hover:bg-purple-700 rounded-lg">
                        Add A List
                    </button>
                    
                
                        <Modal 
                            className="ReactModal__Overlay"
                            isOpen={modalIsOpen}
                            shouldCloseOnOverlayClick={true} 
                            onRequestClose={()=>setModalIsOpen(false)}
                            style={
                                {
                                    overlay:{
                                        background: 'light-grey'
                                    },
                                    content:{
                                        color: 'black',
                                        borderRadius:'5px',
                                        
                                        borderColor: 'orange',
                                        top: '50%',
                                        left: '50%',
                                        right: 'auto',
                                        bottom: 'auto',
                                        marginLeft: '50%',
                                        transform: 'translate(-50%, 90%)',
                                        backgroundColor:'lightpink'
                                    }

                                }
                            }>
                            
                            <h2 className=" text-xl text-center p-3 bottom-2">Add Your List</h2>

                            <div>
                                <label htmlFor="name" className=" text-black m-px14 block text-base leading-none">Title:</label>
                                <input 
                                type="text" 
                                name="title" 
                                value={listTitle} 
                                onChange={(e)=> setListTitle(e.target.value)}/>
                            </div>
                            
                                <div>
                                    <label htmlFor="name" className=" text-black m-px14 block text-base leading-none">Description:</label>
                                    <input 
                                    type="text" 
                                    name="Description:" 
                                    value={listDescription} 
                                    onChange={(e)=> setListDescription(e.target.value)} />
                                </div>
                                
                               
                                <div className="justify-between flex bottom-3">
                                <button onClick={Clicking}>
                                    Save
                                </button>
                                
                                <button 
                                onClick={()=>setModalIsOpen(false)}>
                                    Close
                                </button>
                                </div>
                                
                        </Modal>
                    
                    
                </div>
               </div>
                </div>


                <div className="blog-slider2">
                <div className="blog-slider__item swiper-slide2">
                <div className="blog_slider__img2">
                    <img src= {store} alt="checklist" className="rounded"/>
                </div>

                <div className="blog-slider__content2">
                    <div className="blog-slider__title2">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div className="blog-slider__text2">
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Nostrum, dicta?
                    </div>
                    <button 
                    href="#" 
                    className="text-white p-2 transition duration-500 ease-in-out bg-blue-700 hover:bg-purple-700 rounded-lg">
                        See Stores
                    </button>
                </div>
                

                        <List_Holding/>
               
                
                
               </div>
                </div>
               


            </main>

            <main className="">
           
            </main>
        </section>

        
    )
}
export default Dashboard;
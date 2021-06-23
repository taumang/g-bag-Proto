import { useState,useEffect } from "react";
import {db} from "../sdk_firebase";
import isLoading from "is-loading";

function Display_list({data}){
    const [queryState,setQueryState] = useState({
        isLoading:false,
        errorMessage:"",
        docSnapshots:null
    });
  
    
    const [listTitle,setListTitle] = useState(String);
    const [listDescription,setListDescription] = useState(String);
  
    const Clicking = async ()=>{
        try {
            setQueryState({
                isLoading:true,
                errorMessage:"",
                docSnapshots:null
            })
            const docSnapshots = await db.collection("lists").doc(listTitle,listDescription).delete();
            setQueryState({
                isLoading:false,
                errorMessage:"",
                docSnapshots
            })
        } catch (err) {
            setQueryState({
                isLoading:false,
                errorMessage:"",
                docSnapshots:null
            })
            console.error(err)
        }
    }
  
    const {
        isLoading,
        errorMessage,
        docSnapshots
    }=queryState;
    //Deleting the data of the list collection:
    let contents2;
    if(isLoading) contents2 = "Loading....";
    else if(errorMessage) contents2 = <p>{errorMessage}</p>;
    else if(docSnapshots==null) contents2 = "";
    else contents2 = <Display_list data={docSnapshots.data()} />
    
    
    return(
    <div>

        <table className="">
    
        
    {/* Header of the table. */}
            <tr>
            <th>Title</th>
            <th>Description</th>
            <th></th>
            </tr>
            
    {/* Data of the table(under the header.) */}
            <tr>  
                 
                <td>{contents2}</td>
                <td><button onClick={Clicking} onChange={(e)=>setListTitle(e.target.value)}>Delete</button></td>
                
            </tr>
    
        </table>
                
    </div>
    )
}

export default Display_list;
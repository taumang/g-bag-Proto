import { useState,useEffect } from "react";
import {db} from "../sdk_firebase";
import isLoading from "is-loading";
import Display_list from "./list-hold-displayed";



function List_Holding() {
  const [queryState,setQueryState] = useState({
      isLoading:false,
      errorMessage:"",
      docSnapshots:null
  });

//Displaying and holding the data of lists created:
  useEffect(()=>{
      async function Get_ALL_Lists(){
          try{
              setQueryState({
                  isLoading:true,
                  errorMessage:"",
                  docSnapshots:null
              })

              const snapshot= await db.collection("lists").get();
              const docSnapshots = snapshot.docs;
              setQueryState({
                isLoading:false,
                errorMessage:"",
                docSnapshots
            })
          }catch(err){
              setQueryState({
                  isLoading:false,
                  errorMessage:"cannot connect",
                  docSnapshots:null,
              });
              console.error(err)
          }

      }
      Get_ALL_Lists();
  },[])


const {
    isLoading,
    errorMessage,
    docSnapshots
}=queryState;
  //Displaying the data of the lists collection:

  let contents1;
  if(isLoading) contents1 = "Loading..";
  else if(errorMessage) contents1 = <p>{errorMessage}</p>;
  else if(docSnapshots==null) contents1 = "";
  else contents1 = docSnapshots.map((doc)=> <Display_list key={doc.id} data={doc.data()} />)

    return(
        <div>

           <p>
               {contents1}
           </p>
    


        </div>
    )
}

export default List_Holding;
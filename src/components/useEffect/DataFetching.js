

//Excellent example of useEffect
import React ,{useEffect,useState} from 'react'
import axios from 'axios';
const DataFetching = () => {
   const[posts,setPosts] = useState([]);
   const [id,setId] = useState(1)
   const[idFromButtonClick ,setIdFromButtonClick]= useState(1);

   useEffect(()=>{
     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
     .then((resp) => {
        console.log(resp);
        setPosts(resp && resp.data);
    })
     .catch((err) =>{
        console.log(err)
    });

   },[idFromButtonClick]);

   const handleClick=()=>{
      setIdFromButtonClick(id);
   }
   
  return (
    <div>
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
         <button type="button" onClick={handleClick}>Fetch Post</button> 
        <div>{posts.title}</div>
    </div>
  )
}

export default DataFetching
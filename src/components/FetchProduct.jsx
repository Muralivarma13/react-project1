
import { useEffect, useState } from "react";
import { CustomSpinner } from "./customSpinner";
import { Link } from "react-router";


function FetchProducts(){
    const [recipes,setrecipes]=useState("")
    useEffect(()=>{
        fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then((jsondata)=>{
  console.log(jsondata.recipes)
  setrecipes(jsondata.recipes) // own code
});
    },[])
    return(<>
    {recipes.length>0?<>
     {recipes.map(e=><Link to={`/recipe/${e.id}`}><img src={e.image} style={{width:"250px"}}/></Link>)}
    </>:<CustomSpinner/>}
    </>)
}
export default FetchProducts

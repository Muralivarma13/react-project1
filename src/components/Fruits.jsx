let fruits=["Apple", "kiwi", "oranges","banana"]
function FruitsList(){
    return(
        <>
     {fruits.map((val,index)=> <h1 key={index}><Greeting fruits={val} /></h1>)}

        </>
    )
}
export default FruitsList

function Greeting(props){
    return(
        <>

      {props.fruits}
        </>
    )
}
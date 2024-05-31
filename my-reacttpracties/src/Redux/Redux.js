import { useReducer } from "react"


function counterReducer(state,vaL){
    console.log(state,vaL)
    return state+vaL

}
let sai=12

export function Redux(){

    const[counter,dispatch]=useReducer(counterReducer,sai)
    return(
        <div className="container-fluid mt-4">
            <button onClick={()=>{dispatch(-1)}} className="btn btn-primary mt-2">-</button>
            <h2>{counter}</h2>
            <button onClick={()=>{dispatch(+1)}} className="btn btn-primary mt-2">+</button>
        </div>
    )
}

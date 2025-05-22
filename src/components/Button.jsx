

function Button({title,deleteFunctionHo}){
  
    return(
        <button onClick={deleteFunctionHo}  className="bg-green-400">{title}</button>
    )
}

export default Button 
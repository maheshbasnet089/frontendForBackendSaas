
import {  Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"
import Button from "../components/Button"


function SinglePage(){
   const navigate =  useNavigate()
    const {id} = useParams() // used to get the parameter of route ..
    const [book,setBook] = useState({})
    const fetchBook = async ()=>{
       const response = await axios.get("http://localhost:4000/api/books/" + id)
       setBook(response.data.datas)// response.data.hello
    }
    useEffect(()=>{
        fetchBook()
    },[])

    const deleteBook = async ()=>{
        const response = await axios.delete("http://localhost:4000/api/books/" + id)
        if(response.status === 200){
            // home page ma navigation gardim
            navigate("/")
        }else{
            alert("Something went wrong")
        }
        // console.log("Delete trigered vayo hai function ....")
    }
    return(
        <>
       <Navbar />
        <h1>{book.bookName}</h1>
        <p>{book.price}</p>
        <p>{book.bookAuthor}</p>
        <button onClick={deleteBook}>Delete Me</button>
        <Link to={`/edit-page/${book.id}`}><button>Edit Me</button></Link>
        
        </>
    )
}

export default SinglePage
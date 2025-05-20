import { useEffect, useState } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from 'axios'

function HomePage(){
  const [books,setBooks] = useState([])
  const fetchBooks  = async ()=>{
   const response = await axios.get("http://localhost:4000/api/books/")
   setBooks(response.data.datas)
  }
   useEffect(()=>{
    fetchBooks()
   },[])


    return(
       <>
      <Navbar />
      <div className="flex flex-wrap">
        {
          books.map(function(book){ // books vanne state lai loop garyo using map higher order function, arrayToLoop.map(function(arrayKoEachItem){ return ()})
            return (
              <Card book={book} />
            )
          })
        }
      </div>
       </>
    )
}

export default HomePage
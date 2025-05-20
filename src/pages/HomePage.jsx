import { useEffect, useState } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from 'axios'

function HomePage(){
  const [books,setBooks] = useState([])
  // let books = []
  const fetchBooks  = async ()=>{
   const response = await axios.get("http://localhost:4000/api/books/") // call api 
   setBooks(response.data.datas) // store coming response on above books state
  //  books.push(response.data.datas)
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
              <Card book={book} key={book.id} />
            )
          })
        }
      </div>
       </>
    )
}

export default HomePage
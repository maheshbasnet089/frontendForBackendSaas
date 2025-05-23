import { useParams } from "react-router-dom"
import Form from "../components/Form"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"


function EditPage(){
    const {id} = useParams()
    const [book,setBook] = useState({})
    const fetchBook = async ()=>{
       const response = await axios.get("http://localhost:4000/api/books/" + id)
       setBook(response.data.datas)// response.data.hello
    }
    useEffect(()=>{
        fetchBook()
    },[])
    const handleChange = (event)=>{
        let {name,value} = event.target 
        setBook({
            ...book,
            [name] : value
        })
    }
    console.log(book,"Book hooo")
    const editBook = async (event)=>{
        event.preventDefault()
        const response = await axios.patch("http://localhost:4000/api/books/" + id,book)
        if(response.status == 200){
            alert("Edited successfully")
        }else{
            alert("Something went wrong")
        }
    }
    return(
        <>
       <Navbar />
       <div className="bg-white border border-4 rounded-lg shadow relative m-10">
  <div className="flex items-start justify-between p-5 border-b rounded-t">
    <h3 className="text-xl font-semibold">
      Edit Book
    </h3>
    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
    </button>
  </div>
  <div className="p-6 space-y-6">
    <form onSubmit={editBook}>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3"> 
          <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Book Name</label>
          <input onChange={handleChange} value={book.bookName} type="text"  name="bookName" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Rich dad poor dad”" required />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Book Genre</label>
          <input onChange={handleChange} value={book.bookGenre} type="text" name="bookGenre" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Fictional" required />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">Book Author</label>
          <input onChange={handleChange} value={book.bookAuthor} type="text" name="bookAuthor" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Robert T. Kiyosaki" required />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
          <input onChange={handleChange} value={book.price}  type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required />
        </div>
      </div>
      <div className="p-6 border-t border-gray-200 rounded-b">
    <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit" >Edit all</button>
  </div>
    </form>
  </div>
 
</div>
        </>
    )
}

export default EditPage
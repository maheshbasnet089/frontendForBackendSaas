import { Link } from "react-router-dom"


function Card({book}){
    return(
<Link to={`/single-page/${book.id}`}>
    <div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{book.bookName}</div>
        <p className="text-gray-700 text-base">
            {book.bookAuthor}
        </p>
        </div>
        <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{book.price}</span>
        </div>
    </div>
    </div>
</Link>

    )
}

export default Card
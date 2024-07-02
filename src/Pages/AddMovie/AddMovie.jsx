import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addMovie } from "../../Redux/slices/moviesSlice"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"


const AddMovie = () => {

    const formRef = useRef()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [imgLink, setImgLink] = useState("")

    const handleAddMovie = (e) => {
        e.preventDefault()

        const details = {
            title: formRef.current.title.value,
            description: formRef.current.description.value,
            img: formRef.current.imgLink.value,
            releaseYear: formRef.current.releaseYear.value,
            genre: formRef.current.genre.value
        }
        if (details.title) {
            dispatch(addMovie(details))
            toast.success("Movie Added Successfully")
            navigate("/")
        }
        else {
            toast.error("Complete the form")
        }

    }

    return (
        <div className="min-h-[calc(100vh-60px)] flex justify-center items-center overflow-clip">

            <form onSubmit={handleAddMovie} ref={formRef} className="flex flex-col items-center gap-4">


                <div className="w-[140px] h-[100px] border border-gray-400 flex justify-center items-center overflow-clip">
                    {imgLink ?
                        <img className="object-contain" src={imgLink} alt="Link is not correct" /> :
                        <p className="">No Image link Provided</p>
                    }
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex flex-col justify-center">
                        <label className="text-lg font-medium text-gray-600" htmlFor="imgLink">Image Link</label>
                        <input
                            id="imgLink"
                            name="imgLink"
                            type="text"
                            placeholder="Enter Link for any image from the movie"
                            className="min-w-[400px] outline-none px-2 py-4 bg-inherit border border-gray-300 rounded-lg mt-1"
                            value={imgLink}
                            onChange={(e) => { setImgLink(e.target.value) }}
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <label className="text-lg font-medium text-gray-700" htmlFor="title">Title</label>
                        <input
                            required="This field is required"
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Enter Your title"
                            className="min-w-[400px] outline-none px-2 py-4 bg-inherit border border-gray-300 rounded-lg mt-1"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex flex-col justify-center">
                        <label htmlFor="releaseYear" className="text-lg font-medium text-gray-700" >Release Year</label>
                        <input
                            required="This field is required"
                            id="releaseYear"
                            name="releaseYear"
                            type="Number"
                            placeholder="Release Year (Eg: 2022)"
                            className="min-w-[400px] outline-none px-2 py-4 bg-inherit border border-gray-300 rounded-lg mt-1"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="genre" className="text-lg font-medium text-gray-700" >Genre</label>
                        <input
                            required="This field is required"
                            id="genre"
                            name="genre"
                            type="test"
                            placeholder="Enter genre"
                            className="min-w-[400px] outline-none px-2 py-4 bg-inherit border border-gray-300 rounded-lg mt-1"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center w-full">
                    <label className="text-lg font-medium text-gray-700" htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Enter some details about the movie... "
                        rows={8}
                        className="min-w-[400px] outline-none px-2 py-4 bg-inherit border border-gray-300 rounded-lg mt-1"
                    />
                </div>

                <button className="w-full text-center bg-red-600 rounded-xl px-2 py-4 text-white font-semibold text-lg" type="submit">Add Movie</button>
            </form>

        </div>
    )
}

export default AddMovie

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovie } from '../../Redux/slices/moviesSlice'; // Adjust the import path according to your project structure
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateMovie = ({ movieId }) => {
    const dispatch = useDispatch();
    const params = useParams()
    const navigate = useNavigate()

    const movie = useSelector(state => state.movie[params.movieId])

    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        releaseYear: '',
        img: '',
        description: '',
        rating: '',
        reviews: []
    });

    useEffect(() => {
        if (movie) {
            setFormData({
                title: movie.title,
                genre: movie.genre,
                releaseYear: movie.releaseYear,
                img: movie.img,
                description: movie.description,
                rating: movie.rating || '',
                reviews: movie.reviews || []
            });
        }
    }, [movie]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'releaseYear' || name === 'rating' ? Number(value) : value
        });
    };

    const handleReviewChange = (index, field, value) => {
        const updatedReviews = formData.reviews.map((review, i) =>
            i === index ? { ...review, [field]: value } : review
        );
        setFormData({ ...formData, reviews: updatedReviews });
    };

    const addReview = () => {
        setFormData({
            ...formData,
            reviews: [...formData.reviews, { name: '', review: '' }]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateMovie({ ...formData, id: movie.id }));
        toast.success("Updated Successfully")
        navigate("/")
    };

    return (
        <div className="max-w-[700px] mx-auto bg-antiquewhite p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Update Movie</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                    <label className="block mb-1 font-semibold">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 "
                    />
                </div>
                <div className="form-group">
                    <label className="block mb-1 font-semibold">Genre:</label>
                    <input
                        type="text"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                    />
                </div>
                <div className="form-group">
                    <label className="block mb-1 font-semibold">Release Year:</label>
                    <input
                        type="number"
                        name="releaseYear"
                        value={formData.releaseYear}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                    />
                </div>
                <div className="form-group">
                    <label className="block mb-1 font-semibold">Image URL:</label>
                    <input
                        type="text"
                        name="img"
                        value={formData.img}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                    />
                    {formData.img && (
                        <img
                            src={formData.img}
                            alt="Movie"
                            className="mt-4 w-full h-64 object-cover rounded-lg"
                        />
                    )}
                </div>
                <div className="form-group">
                    <label className="block mb-1 font-semibold">Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label className="block mb-1 font-semibold">Rating (out of 10):</label>
                    <input
                        type="number"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                        min="0"
                        max="10"
                    />
                </div>
                <div className="form-group">
                    <label className="block mb-1 font-semibold">Reviews:</label>
                    {formData.reviews.map((review, index) => (
                        <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg">
                            <div className="mb-2">
                                <label className="block mb-1 font-semibold">Reviewer Name:</label>
                                <input
                                    type="text"
                                    value={review.name}
                                    onChange={(e) => handleReviewChange(index, 'name', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Review:</label>
                                <textarea
                                    value={review.review}
                                    onChange={(e) => handleReviewChange(index, 'review', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                                ></textarea>
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addReview}
                        className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-75"
                    >
                        Add Review
                    </button>
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-75"
                >
                    Update Movie
                </button>
            </form>
        </div>
    );
};

export default UpdateMovie;

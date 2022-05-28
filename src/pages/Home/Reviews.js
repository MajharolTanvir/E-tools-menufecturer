import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const Reviews = () => {

    const { data: reviews, isLoading } = useQuery('review', () => fetch('https://e-tools-manufacturer.herokuapp.com/ratings').then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="container mx-auto">
            <div className='mb-20'>
                <div className='mb-1 mt-20 text-center'>
                    <h3 className='text-3xl mb-12 border-b-4 rounded-lg inline-block border-accent font-semibold text-slate-100'>Clients Reviews</h3>
                </div>
                <div>
                    <h3 className='text-3xl text-center text-slate-100 my-3 font-medium'>Our happy Clients Feedbacks in their....</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:gap-y-0'>
                        {
                            reviews?.slice(reviews?.length - 3, reviews?.length).map(review =>
                                <div key={review._id} className="card w-full bg-base-100 pt-8 shadow-xl my-6">
                                    <div className="avatar mx-auto">
                                        <div className="w-24 mask mask-squircle">
                                            <img src={review.image} alt='' />
                                        </div>
                                    </div>
                                    <div className="card-body items-center text-center">
                                        <h6 className='font-bold'>{review.name}</h6>
                                        <p>{review.country}</p>
                                        <p>{review?.Comment}</p>
                                        <div>
                                            {
                                                review.rating === 5 && <div className="rating">
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                            }
                                            {
                                                review.rating === 4 && <div className="rating">
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                                </div>
                                            }
                                            {
                                                review.rating === 3 && <div className="rating">
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                            }
                                            {
                                                review.rating === 2 && <div className="rating">
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                            }
                                            {
                                                review.rating === 1 && <div className="rating">
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews; 
import React from 'react';

const Reviews = () => {
    const ratings = [
        {
            'id': 1,
            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKgf1btqasr29ElrKVN80RPZxRDi4qTMnwQ&usqp=CAU',
            'Comment': "This company have the most strong tools in others company tools",
        },
        {
            'id': 2,
            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvO6ew76HbLIH3b14xqvUEcq-dFdlKPzwQWQ&usqp=CAU',
            'Comment': "This is a great company to deal with their and fast forward to fast shipping",
        },
        {
            'id': 3,
            'image': 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=1',
            'Comment': "This is a great opportunity to buy their each product as a safe price",
        }
    ]

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
                            ratings.map(rating =>
                                <div key={rating.id} className="card w-full bg-base-100 pt-8 shadow-xl">
                                    <div className="avatar mx-auto">
                                        <div className="w-24 mask mask-squircle">
                                            <img src={rating.image} alt='' />
                                        </div>
                                    </div>
                                    <div className="card-body items-center text-center">
                                        <p>{rating?.Comment}</p>
                                        <div>
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            </div>
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
import React from 'react';

const Blogs = () => {
    return (
        <div className="accordion mx-20 my-10" id="accordionExample">
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne">
                    <button className=" accordion-button relative flex items-center w-full py-4 px-5
        text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                        aria-controls="collapseOne">
                        1. How will you improve the performance of a React Application?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-10 md:px-20">
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingTwo">
                    <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo">
                        2. What are the different ways to manage a state in a React application?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-10 md:px-20">
                        <p>There are four main types of state you need to properly manage in your React apps:
                            <ul>
                                <li className='list-disc ml-10'>
                                    Local state
                                </li>
                                <li className='list-disc ml-10'>
                                    Global state
                                </li>
                                <li className='list-disc ml-10'>
                                    Server state
                                </li>
                                <li className='list-disc ml-10'>
                                    Url state
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                        aria-controls="collapseThree">
                        3. How does prototypical inheritance work?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-10 md:px-20">
                        <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingFour">
                    <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5
        text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                        aria-controls="collapseFour">
                        4. Why you do not set the state directly in React?
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-10 md:px-20">
                        <p>One should never update the state directly because of the following reasons:
                            <ul>
                                <li className='list-disc ml-10'>
                                    If you update it directly, calling the setState() afterward may just replace the update you made.
                                </li>
                                <li className='list-disc ml-10'>
                                    When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                                </li>
                                <li className='list-disc ml-10'>
                                    You will lose control of the state across all components.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingFive">
                    <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                        aria-controls="collapseFive">
                        5. You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?
                    </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-10 md:px-20">
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingSix">
                    <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5
        text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                        aria-controls="collapseSix">
                        6. What is a unit test? Why should write unit tests?
                    </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-10 md:px-20">
                        <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
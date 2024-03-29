import React from "react";
import { MdOutlineLocalShipping, MdOutlinedFlag } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";

const BusinessSummery = () => {
  return (
    <div className="mb-20">
      <div className="mb-20 my-20 text-center">
        <h3 className="text-2xl md:text-3xl border-b-4 rounded-lg inline-block border-secondary font-semibold text-primary p-1">
          Business Summery
        </h3>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-20 sm;gap-y-0 justify-between items-center mb-10">
          <div className="text-center">
            <MdOutlinedFlag className="mx-auto text-secondary text-4xl mb-3" />
            <h4 className="font-bold text-2xl text-primary">30+</h4>
            <p className="text-secondary font-medium">Shipping Countries</p>
          </div>
          <div className="text-center">
            <MdOutlineLocalShipping className="mx-auto text-secondary text-4xl mb-3" />
            <h4 className="font-bold text-2xl text-primary">50K+</h4>
            <p className="text-secondary font-medium">Complete delivery</p>
          </div>
          <div className="text-center">
            <FaUsers className="mx-auto text-secondary text-4xl mb-3" />
            <h4 className="font-bold text-2xl text-primary">3k+</h4>
            <p className="text-secondary font-medium">Happy clients</p>
          </div>
          <div className="text-center">
            <VscFeedback className="mx-auto text-secondary text-4xl mb-3" />
            <h4 className="font-bold text-2xl text-primary">2k+</h4>
            <p className="text-secondary font-medium">Feedbacks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;

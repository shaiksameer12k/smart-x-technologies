import React from "react";
import DynamicIcon from "./IconComponent";

const CourseCard = ({imgLink}) => (
  <div className="shadow-lg bg-white rounded-lg mt-8 ">
    <div className="relative">
      <a href="course-single.html">
        <img
          src={imgLink}
          alt="Courses"
          className="w-full h-auto rounded-tr-md rounded-tl-md"
        />
      </a>
      <div className="absolute top-6 left-6">
        <div className="tag bg-green-300 text-black px-2 py-1 rounded">
          <a href="#">Business</a>
        </div>
      </div>

      <div className="bg-white rounded-md absolute top-6 right-6 p-2">
        <DynamicIcon iconName="FaRegBookmark" color="#ff1f59c4" size={16} />
      </div>
    </div>

    <div className="pl-8 pr-8 pt-0 pb-5">
      <div className="flex items-center pt-4">
        <img
          src="https://raistheme.com/html/gostudy/gostudy/assets/images/courses/author-1.jpg"
          alt="author"
          className="rounded-full w-10 h-10 mr-2"
        />
        <h4 className="name text-lg font-normal text-iconLightGray">
          <a href="#">Mick Harris</a>
        </h4>
      </div>
      <h3 className="title text-sm max-sm:text-xl font-bold text-gray-900 mt-3">
        <a href="course-single.html">Learn React JS Tutorial For Beginners</a>
      </h3>
    </div>

    <div className="flex justify-between items-center p-2 border-t">
      <div className="flex items-center space-x-2">
        <p className="flex items-center gap-1 text-gray-600">
          <DynamicIcon iconName="FaRegUser" color="#ff1f59c4" size={16} /> 4
        </p>
        <p className="flex items-center gap-1 text-gray-600">
          <DynamicIcon iconName="FaRegStar" color="#ff1f59c4" size={16} /> 1
        </p>
      </div>
      <div className="price font-bold text-gray-600">
        <span>£59.99</span>
      </div>
    </div>
  </div>
);

export default CourseCard;

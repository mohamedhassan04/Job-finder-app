import React from "react";
import { BiTimeFive } from "react-icons/bi";
import logo1 from "../../Assets/logo1.png";
import logo2 from "../../Assets/logo2.png";
import logo3 from "../../Assets/logo3.png";
import logo4 from "../../Assets/logo4.png";
import logo5 from "../../Assets/logo5.png";
import logo6 from "../../Assets/logo6.png";
import logo7 from "../../Assets/logo7.png";
import logo8 from "../../Assets/logo8.png";

const data = [
  {
    id: 1,
    image: logo1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Dignissimos nobis ipsam ipsa dicta dolore aliquam!",
    company: "Huawei Mobile Co.",
  },
  {
    id: 2,
    image: logo2,
    title: "Software Eng",
    time: "14Hrs",
    location: "USA",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Dignissimos nobis ipsam ipsa dicta dolore aliquam!",
    company: "EA Sports Co.",
  },
  {
    id: 3,
    image: logo6,
    title: "Waiter",
    time: "10Hrs",
    location: "Egypt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Dignissimos nobis ipsam ipsa dicta dolore aliquam!",
    company: "Star Bucks Co.",
  },
  {
    id: 4,
    image: logo8,
    title: "Delivery Person",
    time: "1Hrs",
    location: "London",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Dignissimos nobis ipsam ipsa dicta dolore aliquam!",
    company: "Rapid Delivery Co.",
  },
  {
    id: 5,
    image: logo3,
    title: "DevOps",
    time: "9Hrs",
    location: "Washinton DC",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Dignissimos nobis ipsam ipsa dicta dolore aliquam!",
    company: "Meta Co.",
  },
  {
    id: 6,
    image: logo4,
    title: "Tester Aut",
    time: "15Hrs",
    location: "Madrid",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Dignissimos nobis ipsam ipsa dicta dolore aliquam!",
    company: "Steam Co.",
  },
  {
    id: 7,
    image: logo5,
    title: "Eng AI",
    time: "5Hrs",
    location: "New York",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Dignissimos nobis ipsam ipsa dicta dolore aliquam!",
    company: "Google Co.",
  },
  {
    id: 8,
    image: logo7,
    title: "Peasant",
    time: "6Hrs",
    location: "Suisse",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Dignissimos nobis ipsam ipsa dicta dolore aliquam!",
    company: "First Co.",
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {data &&
          data.map((el) => {
            return (
              <div
                key={el.id}
                className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
              >
                <span className="flex justify-between items-center gap-4 ">
                  <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                    {el.title}
                  </h1>
                  <span className="flex items-center text-[#ccc] gap-1">
                    <BiTimeFive />
                    {el.time}
                  </span>
                </span>
                <h6 className="text-[#ccc]">{el.location}</h6>

                <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                  {el.desc}
                </p>

                <div className="company flex items-center gap-2">
                  <img src={el.image} alt="Company logo" className="w-[15%]" />
                  <span className="text-[14px] py-[1rem] block group-hover:text-white">
                    {el.company}
                  </span>
                </div>

                <button
                  className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor
           hover:bg-white group-hover/item:text-textColor "
                >
                  Check Now
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Jobs;

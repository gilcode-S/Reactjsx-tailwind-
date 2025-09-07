import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

const OurWorks = () => {
  const workData = [
    {
      title: "Mobile App Marketing",
      description:
        "We turn bold taste into powerful digital solutions that drive success.",
      image: assets.work_mobile_app,
    },
    {
      title: "Web Design",
      description:
        "We turn bold taste into powerful digital solutions that drive success.",
      image: assets.work_fitness_app,
    },
    {
      title: "E-commerce Development with Dashboard management",
      description:
        "We turn bold taste into powerful digital solutions that drive success.",
      image: assets.work_dashboard_management,
    },
  ];

  return (
    <div
      id="works"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our lastest Works"
        description="From strategy to execution, we craft digital solutions that move your business forward."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
            <div key={index} className="hover:scale-102 duration-500 transition-all cursor-pointer">
                <img src={work.image} alt="" className="w-full rounded-xl" />
                <h3 className="mt-3 text-lg font-semibold">{work.title}</h3>
                <p className="text-sm opacity-60 w-5/6">{work.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;

import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioData = [
    {
      id: 1,
      img: "./public/assets/Project1.png", // Replace with your image URL
      fullImg: './public/assets/PROJECT1FULL.png',
      heading: "Personal Portfolio Website",
      shortPara:
        "A modern and responsive personal portfolio website to showcase my skills and projects.",
      link: "Fardin3202a/github.io/portfolio", // Replace with actual project link
    },
    {
      id: 2,
      img: null,
      heading: "No Project",
      shortPara: "No project available for this slot.",
      link: null,
    },
    {
      id: 3,
      img: null,
      heading: "No Project",
      shortPara: "No project available for this slot.",
      link: null,
    },
  ];


  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div
      id="portfolio-section"
      className=" w-screen h-screen bg-MainSecondary relative flex justify-center items-center overflow-hidden"
    >
      <img
        className=" overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1213px] has-[767px] blur-[200px]"
        src="https://github.com/Fardin3202a/vite-project/blob/main/src/assets/SecondaryBg.png?raw=true"
        alt=""
      />
      <div className=" w-screen h-[0.0625rem] bg-white opacity-60 absolute top-72"></div>
      <div className=" w-10/12 h-5/6 z-50">
        <div className=" w-full h-36">
          <h1 className=" text-white text-5xl font-poppins font-semibold h-16">
            Projects below
          </h1>
          <p className=" text-xl text-white w-2/5 opacity-80">
            Showcasing the best of my work, combining creativity with
            cutting-edge web technologies.
          </p>
        </div>
        <div className="nav text-xl w-full h-16 flex justify-center items-center text-white font-poppins">
          <ul className=" flex flex-row gap-6">
            <li>
              <a className="cursor-default">Portfolio</a>
            </li>
          </ul>
        </div>
        <div className="Carts w-full h-3/4 mt-1 flex justify-center items-center gap-5">
          {portfolioData.map((Data) => (
            <div
              key={Data.id}
              className="w-1/4 h-3/4 bg-MainSecondary/30 rounded-3xl relative backdrop-blur-sm flex justify-between flex-col"
            >
              {Data.img ? (
                <img
                  className="w-full h-52 rounded-t-xl cursor-pointer"
                  src={Data.img}
                  alt={Data.heading}
                />
              ) : (
                <div className="w-full h-52 bg-gray-700 rounded-t-xl flex justify-center items-center">
                  <p className="text-white opacity-80">No Image Available</p>
                </div>
              )}
              <div>
                <h1 className="text-2xl text-white font-poppins font-semibold m-5">
                  {Data.heading}
                </h1>
                <p className="text-sm font-roboto text-white opacity-80 ml-5">
                  {Data.shortPara}
                </p>
                {Data.link ? (
                  <Button
                    extraStyle={
                      "font-poppins m-5 bg-gray-800 w-44 h-12 text-white"
                    }
                    handlClick={() => handleOpenModal(Data)}
                  >
                    View Project{" "}
                    <FontAwesomeIcon
                      className="ml-2 text-white"
                      icon={faArrowUpRightFromSquare}
                    />
                  </Button>
                ) : (
                  <div className=" rounded-full font-poppins m-5 bg-gray-800 w-44 h-12 text-white flex justify-center items-center">
                    No Project
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-3/5 bg-MainSecondary/50 backdrop-blur-xl p-10 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={handleCloseModal}
            >
              ✖
            </button>
            <div className="h-[32rem] overflow-y-auto scrollbar-hide rounded-lg mb-5"> {/* Set a fixed height */}
              <img
                src={selectedProject.fullImg}
                alt={selectedProject.heading}
                className="w-full"
              />
            </div>
            <h2 className="text-3xl font-poppins text-white mb-3 font-semibold">
              {selectedProject.heading}
            </h2>
            <p className="text-white opacity-80 mb-3">
              {selectedProject.shortPara}
            </p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visit Project
            </a>
          </div>
        </div>

      )}
    </div>
  );
};

export default Portfolio;

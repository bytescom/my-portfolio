"use client"
import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const categories = [
  {
    id: 1,
    title: "CREATIVE",
    skills: ["Art Direction", "Creative Director"],
  },
  {
    id: 2,
    title: "DESIGN",
    skills: [
      "Digital Design",
      "UX/UI Design",
      "Web Design",
      "Graphic Design",
      "3D Design",
      "Interactive Design",
      "Illustration Design",
      "Brand Design",
    ],
  },
  {
    id: 3,
    title: "ANIMATION",
    skills: [
      "2D Animation",
      "3D Animation",
      "Motion Graphics",
      "Experimental Animation",
      "Typography Animation",
    ],
  },
  {
    id: 4,
    title: "TECHNOLOGY",
    skills: [
      "Development",
      "Implementation",
      "Creative Coding",
      "Prototyping",
      "Quality Assurance",
      "Testing",
    ],
  },
  {
    id: 5,
    title: "PROJECT DELIVERY",
    skills: [
      "Production Strategy",
      "Project Management",
      "Team Direction",
    ],
  },
  {
    id: 6,
    title: "EXAMPLE PRODUCTS",
    skills: [
      "Display Ads (Html5, Static, Rich Media)",
      "Websites",
      "AR Filters and Experiences",
      "Social Ads",
      "Digital Out of Home",
      "Static and Animated Assets",
      "Digital Installations",
      "Design Toolkits",
    ],
  },
];

const HowIHelp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      <div 
      onClick={() => setIsOpen(!isOpen)}
        >
        {categories.map((categoryItem) => (
          <div key={categoryItem.id}>
            <div className='accordion_title'>
              <h3>{categoryItem.title}</h3>
              <span className='border-gray-700 hover:border-white border-[2px] rounded-2xl py-1 px-4'>
                {!isOpen ? (
                  <FiPlus/>
                ) : (
                  <FiMinus/>
                )}
              </span>
            </div>
            {isOpen && (
              <div>
                {categoryItem.skills.map((skill, index) => (
                  <p key={index}>{skill}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowIHelp;

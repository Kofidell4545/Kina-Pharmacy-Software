import React from "react";
import { Helmet } from 'react-helmet';
import male from "../../assets/male.png";
import malaria from "../../assets/malaria.png";
import menstral from "../../assets/menstral.png";
import child from "../../assets/child.png";

const education = [
  {
    id: 1,
    image: malaria,
    title: "TREAT MALARIA ",
    text: "To quickly  treat malaria visiting the pharmarcy,take antimalarial medication if available, such as chloroquine or ACTs. Rest in a cool, dark place, stay hydrated, and seek medical attention promptly for proper diagnosis and further treatment.  ",
  },
  {
    id: 2,
    image: menstral,
    title: "MENSTRUAL CARE  ",
    text: "To alleviate menstrual pain before visiting the pharmacy, try applying a heating pad to your lower abdomen. Stay hydrated with water and herbal teas like chamomile or ginger. Gentle exercise, such as walking or yoga, and a balanced diet with anti-inflammatory foods can also help reduce pain.  ",
  },
  {
    id: 3,
    image: child,
    title: "CHILD CARE  ",
    text: "If a child ingests medication accidentally, stay calm and act quickly. Check for symptoms, call emergency services or poison control, and follow their guidance. Do not induce vomiting unless advised. Keep the medication packaging for reference. ",
  },
];

const Education = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>Education</title>
      </Helmet>
      <div
        className="pt-16 flex flex-col justify-center items-center mx-auto"
        style={{ width: "100%", maxWidth: 763 }}
      >
        {/**Header Section */}
        <p className="font-bold text-[24px] text-center">
          Education Proposition
        </p>
        <p className="text-center">
          Explore our comprehensive educational resources designed to enhance
          your knowledge and
        </p>
        <p className="text-center">empower your health decisions.</p>
      </div>

      {/**Image Section */}
      <div className="p-10 flex justify-center items-center">
        <img src={male} alt="Pharmacist" />
      </div>
      {/**Educational section */}
      <div className="p-10">
        <div>
          {education.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col lg:flex-row mb-10 lg:justify-between ${
                item.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="w-full lg:w-auto">
                <img
                  src={item.image}
                  alt="picture"
                  className="object-cover w-full h-auto lg:w-[550px] lg:h-[400px]"
                />
              </div>
              <div className="flex flex-col justify-center w-full lg:w-[600px]">
                <p className="text-center font-bold text-lg mb-5">
                  {item.title}
                </p>
                <p className="text-center">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Education;


import React from "react";
import male from "../../assets/male.png";
import malaria from "../../assets/malaria.png";
import menstral from "../../assets/menstral.png";
import child from "../../assets/child.png";

const education = [
  {
    id: 1,
    image: malaria,
    title: "TREAT MALARIA",
    text: "To quickly treat malaria, visit the pharmacy and take antimalarial medication if available, such as chloroquine or ACTs. Rest in a cool, dark place, stay hydrated, and seek medical attention promptly for proper diagnosis and further treatment.",
  },
  {
    id: 2,
    image: menstral,
    title: "MENSTRUAL CARE",
    text: "To alleviate menstrual pain before visiting the pharmacy, try applying a heating pad to your lower abdomen. Stay hydrated with water and herbal teas like chamomile or ginger. Gentle exercise, such as walking or yoga, and a balanced diet with anti-inflammatory foods can also help reduce pain.",
  },
  {
    id: 3,
    image: child,
    title: "CHILD CARE",
    text: "If a child ingests medication accidentally, stay calm and act quickly. Check for symptoms, call emergency services or poison control, and follow their guidance. Do not induce vomiting unless advised. Keep the medication packaging for reference.",
  },
];

const Education = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="pt-16 flex flex-col justify-center items-center mx-auto text-center">
        <p className="font-bold text-3xl mb-2">Education Proposition</p>
        <p className="text-lg text-gray-700">
          Explore our comprehensive educational resources designed to enhance
          your knowledge and empower your health decisions.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center p-10">
        <img src={male} alt="Pharmacist" className="w-48 h-48 rounded-full shadow-lg" />
      </div>

      {/* Educational Section */}
      <div className="p-10 space-y-12">
        {education.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col lg:flex-row items-center mb-10 ${
              item.id % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full lg:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-72 lg:h-96 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 lg:pl-10 mt-6 lg:mt-0 text-center lg:text-left">
              <p className="text-2xl font-bold mb-4">{item.title}</p>
              <p className="text-gray-700 text-lg">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Education;
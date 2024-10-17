import React, { useState } from "react";
import { treatments } from "./treatmentsData";
import TreatmentCard from "./TreatmentCard";

const Treatment = () => {
  const [selectedCategory, setSelectedCategory] = useState("Dermatology");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <header className=" p-4 text-blue-900 text-center">
        <h1 className="text-lg lg:text-2xl font-bold">TREATMENT</h1>
      </header>

      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8 mx-5">
          <h2 className="text-m sm:text-xl md:text-xl font-semibold mx-5">
            Available Treatments
          </h2>
          {/* <select
            className="border border-gray-300 px-4 py-2 rounded-md mx-8 text-sm"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="Dermatology">Dermatology</option>
            <option value="Cosmetic">Cosmetic</option>
            <option value="Dental">Dental</option>
          
          </select> */}
          <div className="self-end ">
            <select
              className="border border-gray-300 px-4 py-2 rounded-md  mx-auto text-xs sm:text-sm w-fit"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="Dermatology">Dermatology</option>
              <option value="Cosmetic">Cosmetic</option>
              <option value="Dental">Dental</option>
              {/* Add more categories if needed */}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 overflow-y-auto">
          {treatments
            .filter((treatment) => treatment.category === selectedCategory)
            .map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Treatment;

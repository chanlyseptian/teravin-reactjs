import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseContextProvider } from "../contexts/StepperContext";
import {
  Stepper,
  StepperControl,
  PersonalData,
  Education,
  WorkExperiences,
  Skills,
  Final,
} from "../components/";

const SubmissionPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const steps = [
    "Data Personal",
    "Riwayat Pendidikan",
    "Pengalaman Kerja",
    "Keahlian",
    "Complete"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalData />;
      case 2:
        return <Education />;
      case 3:
        return <WorkExperiences />;
      case 4:
        return <Skills />;
      case 5:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="container mx-auto p-5 2xl:px-28">
      <button
        className="mb-4 flex items-center font-semibold text-gray-600 hover:text-gray-900 hover:font-bold"
        onClick={() => navigate('/')}
      >
        {"<"} Back
      </button>
      <h1 className="text-2xl font-semibold text-center text-gray-600 mb-8">
        Submission Form
      </h1>

      <div className="mx-auto rounded bg-gray-50 p-8 shadow-xl ">
        {/* Stepper */}
        <div className="horizontal container ">
          <Stepper steps={steps} currentStep={currentStep} />

          <div className="mt-8 p-10 ">
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
          </div>
        </div>

        {/* navigation button */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
    </div>
  );
};

export default SubmissionPage;

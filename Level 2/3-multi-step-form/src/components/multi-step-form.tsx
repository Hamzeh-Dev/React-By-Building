"use client";

import { useState } from "react";
import Step1 from "./steps/step-1";
import Step2 from "./steps/step-2";
import Step3 from "./steps/step-3";

export type FormData = {
    name: string,
    email: string,
    city: string,
    country: string,
};

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    // State to store all form input values
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        city: "",
        country: "",
    });
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

    const updateData = (newData: Partial<FormData>) => {
        setFormData((prev) => ({ ...prev, ...newData }));
    };

    // Validate the fields for the current step
    const validateStep = () => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        
        if (step === 1) { // Step 1 validation (Name and Email)
            if (!formData.name.trim()) newErrors.name = "Name is required";
            if (!formData.email.trim()) newErrors.email = "Email is required";
            else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format";
        } else if (step === 2) { // Step 2 validation (City and Country)
            if (!formData.city.trim()) newErrors.city = "City is required";
            if (!formData.country.trim()) newErrors.country = "Country is required";
        }

        setErrors(newErrors);
        // Return true if no errors
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep()) setStep((prev) => prev + 1);
    };

    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const submitForm = () => {
        if (validateStep()) alert("Form submitted successfully!");
    };

    const totalSteps = 3;
    // Render the step indicator dots
    const renderDots = () => (
        <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: totalSteps }).map((_, i) => (
                <span key={i} className={`w-2 h-2 rounded-full transition-all ${i + 1 === step ? "bg-blue-500" : "bg-gray-300" }`}></span>
            ))}
        </div>
    );

    return (
        <div className="max-w-md w-full bg-white shadow-md rounded-xl p-6 space-y-6">
            <h1 className="text-xl font-semibold text-center">Multi-Step Form</h1>

            {/* Step dots */}
            {renderDots()}

            {step === 1 && <Step1 data={formData} setData={updateData} errors={errors} />}
            {step === 2 && <Step2 data={formData} setData={updateData} errors={errors} />}
            {step === 3 && <Step3 data={formData} />}

            <div className="flex justify-between mt-4">
                <button onClick={prevStep} disabled={step === 1}
                    className={`px-4 py-2 rounded cursor-pointer ${step === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
                >
                    Back
                </button>

                {/* Long way */}
                {/* {step < 3 ? (
                    <button onClick={nextStep} className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer">
                        Next
                    </button>
                ) : (
                    <button onClick={submitForm} className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 cursor-pointer">
                        Submit
                    </button>
                )} */}

                {/* Short way */}
                <button onClick={step < 3 ? nextStep : submitForm} className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer
                        ${step < 3 ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"}
                    `}
                >
                    {step < 3 ? "Next" : "Submit"}
                </button>
            </div>
        </div>
    );
};

export default MultiStepForm;

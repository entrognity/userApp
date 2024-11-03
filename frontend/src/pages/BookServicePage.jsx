import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SpiralBindingForm from '../components/ServiceForms/SpiralBindingForm';
import ThermalBindingForm from '../components/ServiceForms/ThermalBindingForm';
import FileUpload from '../components/ServiceForms/FileUpload';
// Import other service forms similarly...

const BookServicePage = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [formData, setFormData] = useState({
        // file: null,
        noOfPages: 0
        // Other form data attributes depending on service
    });
    const [searchParams] = useSearchParams();
    const serviceID = parseInt(searchParams.get('serviceID'), 10); // Convert serviceID to a number

    // Set selected service when the component mounts or serviceID changes
    useEffect(() => {
        if (serviceID) {
            setSelectedService(serviceID);
        }
    }, [serviceID]);

    // Set selected service when the component mounts or serviceID changes
    useEffect(() => {
        console.log(formData);
    }, [formData]);

    // Declare input change handler function
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Declare file change handler function
    const handleFilesChange = (files) => {
        const sumOfPages = files.reduce((sum, file) => 
            {
                return sum + (file.noOfPages || 0)
            }, 0);
        setFormData((prevData) => ({
            ...prevData,
            files, // Update formData with the new files array
            noOfPages: sumOfPages
        }));
    };

    const handleSubmit = () => {
        console.log('Submitted form data:', formData);
        // Add your form submission logic here
    };

    const servicesComponents = {
        1: {
            name: 'Spiral Binding',
            component: <SpiralBindingForm formData={formData} handleInputChange={handleInputChange} />
        },
        2: {
            name: 'Thermal Binding',
            component: <ThermalBindingForm formData={formData} handleInputChange={handleInputChange} />
        }
    };

    const renderForm = () => (
        <div className="p-4 mt-16">
            {/* Uncomment the Back button if needed */}
            {/* <button className="inline-flex items-center mb-4 px-2 py-1 text-sm border rounded" onClick={() => setCurrentStep(1)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span className="ml-1 font-bold text-lg">Back</span>
            </button> */}
            <h2 className="text-xl font-semibold mb-4">
                Fill in the details for {selectedService ? servicesComponents[selectedService].name : 'Service'}
            </h2>
            <form>
                {/* Common File Upload */}
                <FileUpload formData={formData} onFilesChange={handleFilesChange} />

                {/* Dynamically render the service-specific form component */}
                {selectedService && servicesComponents[selectedService]?.component}

                {/* Submit Button */}
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg"
                >
                    Add to cart
                </button>
            </form>
        </div>
    );

    return renderForm();
    
};

export default BookServicePage;

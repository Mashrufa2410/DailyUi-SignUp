import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "../../info.json";

const Details = () => {
  const { id } = useParams();
  const service = servicesData.services.find((_, index) => index + 1 === parseInt(id));

  if (!service) {
    return (
      <div className="text-center text-red-500 text-lg mt-20">
        Service not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl shadow-md hover:shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center">{service.name}</h1>
      <div className="shadow-lg rounded-lg overflow-hidden mb-6">
        <img
          src={service.image_url}
          alt={service.name}
          className="w-full h-96 object-cover"
        />
      </div>
      <p className="text-lg text-gray-700 mb-6">{service.description}</p>
      <div className="bg-white rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <strong className="text-gray-800">Pricing:</strong>
          <span className="text-gray-600">{service.pricing}</span>
        </div>
        <div className="flex items-center justify-between">
          <strong className="text-gray-800">Duration:</strong>
          <span className="text-gray-600">
            {service.duration.date} - {service.duration.time}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <strong className="text-gray-800">Counselor:</strong>
          <span className="text-gray-600">{service.counselor}</span>
        </div>
        <div className="flex items-center justify-between">
          <strong className="text-gray-800">Rating:</strong>
          <span className="text-gray-600">{service.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;

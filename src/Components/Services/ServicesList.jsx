import React from "react";
import ServiceCard from "./ServiceCard";
import servicesData from "../../info.json";

const ServicesList = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.services.map((service, index) => (
          <ServiceCard key={index} service={{ ...service, id: index + 1 }} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;

import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={service.image_url}
          alt={service.name}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.name}</h2>
        <p className="line-clamp-3 text-gray-600">{service.description}</p>
        <div className="mt-4">
          <p className="text-sm">
            <strong>Pricing:</strong> {service.pricing}
          </p>
          <p className="text-sm">
            <strong>Duration:</strong> {service.duration.date} - {service.duration.time}
          </p>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link to={`/details/${service.id}`} className="btn bg-black text-white btn-sm hover:text-black">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

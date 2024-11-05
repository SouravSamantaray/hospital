import React, { useState } from "react";
import CardImages from "../assets/Appointment-icon (1).png";

const CardSection = () => {
  const products = [
    {
      id: 1,
      name: "Rectangular Tube - 76mm x 38mm - 1.6mm - Mild Steel",
      stock: "In Stock",
      price: 1179,
      originalPrice: 1749,
      salesCount: 258,
      rating: 3.5,
      imageUrl:
        "https://res.cloudinary.com/datf6laqn/image/upload/v1728758763/b3lihb93bhzoe9mmrzf7.jpg",
      description:
        "This is a high-quality mild steel rectangular tube, ideal for construction projects.",
    },
    {
      id: 2,
      name: "Rectangular Tube - 76mm x 38mm - 1.6mm - Mild Steel",
      stock: "In Stock",
      price: 1179,
      originalPrice: 1749,
      salesCount: 258,
      rating: 3.5,
      imageUrl:
        "https://res.cloudinary.com/datf6laqn/image/upload/v1728758763/b3lihb93bhzoe9mmrzf7.jpg",
      description:
        "Durable rectangular tube for structural purposes, made from mild steel.",
    },

    {
      id: 3,
      name: "Rectangular Tube - 76mm x 38mm - 1.6mm - Mild Steel",
      stock: "In Stock",
      price: 1179,
      originalPrice: 1749,
      salesCount: 258,
      rating: 3.5,
      imageUrl:
        "https://res.cloudinary.com/datf6laqn/image/upload/v1728758763/b3lihb93bhzoe9mmrzf7.jpg",
      description:
        "Durable rectangular tube for structural purposes, made from mild steel.",
    },

    {
      id: 4,
      name: "Rectangular Tube - 76mm x 38mm - 1.6mm - Mild Steel",
      stock: "In Stock",
      price: 1179,
      originalPrice: 1749,
      salesCount: 258,
      rating: 3.5,
      imageUrl:
        "https://res.cloudinary.com/datf6laqn/image/upload/v1728758763/b3lihb93bhzoe9mmrzf7.jpg",
      description:
        "Durable rectangular tube for structural purposes, made from mild steel.",
    },

    {
      id: 5,
      name: "Rectangular Tube - 76mm x 38mm - 1.6mm - Mild Steel",
      stock: "In Stock",
      price: 1179,
      originalPrice: 1749,
      salesCount: 258,
      rating: 3.5,
      imageUrl:
        "https://res.cloudinary.com/datf6laqn/image/upload/v1728758763/b3lihb93bhzoe9mmrzf7.jpg",
      description:
        "Durable rectangular tube for structural purposes, made from mild steel.",
    },

    {
      id: 6,
      name: "Rectangular Tube - 76mm x 38mm - 1.6mm - Mild Steel",
      stock: "In Stock",
      price: 1179,
      originalPrice: 1749,
      salesCount: 258,
      rating: 3.5,
      imageUrl:
        "https://res.cloudinary.com/datf6laqn/image/upload/v1728758763/b3lihb93bhzoe9mmrzf7.jpg",
      description:
        "Durable rectangular tube for structural purposes, made from mild steel.",
    },

    {
      id: 7,
      name: "Rectangular Tube - 76mm x 38mm - 1.6mm - Mild Steel",
      stock: "In Stock",
      price: 1179,
      originalPrice: 1749,
      salesCount: 258,
      rating: 3.5,
      imageUrl:
        "https://res.cloudinary.com/datf6laqn/image/upload/v1728758763/b3lihb93bhzoe9mmrzf7.jpg",
      description:
        "Durable rectangular tube for structural purposes, made from mild steel.",
    },

    {
      id: 8,
      name: "Rectangular Tube - 76mm x 38mm - 1.6mm - Mild Steel",
      stock: "In Stock",
      price: 1179,
      originalPrice: 1749,
      salesCount: 258,
      rating: 3.5,
      imageUrl:
        "https://res.cloudinary.com/datf6laqn/image/upload/v1728758763/b3lihb93bhzoe9mmrzf7.jpg",
      description:
        "Durable rectangular tube for structural purposes, made from mild steel.",
    },
  ];

  return (
    <div className="mx-auto px-16 py-11">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3   gap-6">
        <div className="border  rounded-lg p-4 items-center  shadow-lg group relative transition-transform transform hover:scale-105 duration-500">
          <div className="py-8">
            <img src={CardImages} alt="" className="mx-auto" />
            <p className="text-center ">Easy Appointment</p>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamu
            </p>
          </div>
        </div>

        <div className="border  rounded-lg p-4 items-center  shadow-lg group relative transition-transform transform hover:scale-105 duration-500">
          <div className="py-8">
            <img src={CardImages} alt="" className="mx-auto" />
            <p className="text-center ">Easy Appointment</p>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamu
            </p>
          </div>
        </div>


        <div className="border  rounded-lg p-4 items-center  shadow-lg group relative transition-transform transform hover:scale-105 duration-500">
          <div className="py-8">
            <img src={CardImages} alt="" className="mx-auto" />
            <p className="text-center ">Easy Appointment</p>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;

import React from "react";
import { IoIosMenu } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";

export const TopBarDetail = () => {

  const {id} = useParams()
  return (
    <div className="flex items-center">
      <section className="flex items-center gap-4">
        <IoIosMenu className="lg:hidden block text-2xl cursor-pointer" />

        <Link to="/" className="rounded-xl bg-custom-violet p-3 mr-4">
          <IoArrowBackSharp className="text-white" />
        </Link>
      </section>
      <h1 className="text-xl">Home</h1>
      <h2 className="text-xl text-gray-500">/ {id}</h2>
    </div>
  );
};

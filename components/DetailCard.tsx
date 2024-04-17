import React from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { FcRating, FcRatings } from "react-icons/fc";
import CommentRecipe from "./CommentRecipe";

interface propsTypes {
  img: string;
  title: string;
  Ingredients: string[];
  directions: string[];
}

const DetailCard: React.FC<propsTypes> = ({
  img,
  title,
  Ingredients = [],
  directions = [],
}) => {
  return (
    <div className="p-4 m-8 border-large grid lg:grid-cols-2 gap-2 bg-slate-100 rounded-xl max-w-[1000px]">
      <div>
        <Image
          className="w-full h-auto lg:h-[614px] rounded-xl"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-blue-900 bg-white rounded-xl p-3 mb-4 font-extrabold">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex gap-2 items-center bg-blue-400 p-2 rounded-xl">
            <CgProfile className="text-white" />
            <h1 className="text-white font-semibold">Supun Madusankha</h1>
          </div>
          <div className="flex gap-4 items-center bg-blue-400 p-2 rounded-xl">
            <h1 className="text-white font-semibold">Rating</h1>
            <div className="flex gap-1">
              <FcRating />
              <FcRating />
              <FcRating />
              <FcRating />
              <FcRating />
            </div>
          </div>
        </div>
        <div className="p-2">
          <h1 className="text-gray-500 font-semibold bg-white text-center rounded-xl py-1">
            Ingredients
          </h1>
          {Ingredients.map((ingredient, index) => (
            <p key={index}>{ingredient}</p>
          ))}
        </div>

        <div className="p-2">
          <h1 className="text-gray-500 font-semibold bg-white text-center rounded-xl py-1">
            Directions
          </h1>
          {directions.map((directions, index) => (
            <p key={index}>{directions}</p>
          ))}
        </div>
        <div>
          <br />
          <CommentRecipe />
        </div>
      </div>
    </div>
  );
};

export default DetailCard;

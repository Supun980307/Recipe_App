"use client";
import React, { useState, useEffect } from "react";
import ButtonBlue from "./Button/ButtonBlue";

const AddRecipe: React.FC = () => {
  const [formData, setFormData] = useState({
    category: "",
    recipeName: "",
    description: "",
    ingredients: "",
    directions: "",
    image: null as File | null,
  });

  const [categories, setCategories] = useState<Category[]>([]);
  // const {data: session} = useSession();

  //console.log(session, 'session');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/category");

        if (response.ok) {
          const data = await response.json();

          console.log(data);

          setCategories(data);
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log(e);
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    console.log(formData);

    

    try {
      const response = await fetch("/api/addRecipe", {
        method: "POST",
        body: JSON.stringify(formData),
      });
    //   console.log("Response status:", response.status);

    // const responseBody = await response.text();
    // console.log("Response body:", responseBody);

    if (response.ok) {
      //const resBody = JSON.parse(responseBody);

      console.log("Recipe added successfully:");
        // Reset form fields
        setFormData({
          category: "",
          recipeName: "",
          description: "",
          ingredients: "",
          directions: "",
          image: null,
        });
      } else {
        console.error("Failed to add recipe.....");
      }
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };
  return (
    <div className="p-4 max-w-2xl mx-auto border-large rounded-xl items-center mt-10">
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-8">
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-bold mb-2"
          >
            Category:
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleCategoryChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Category</option>
            {categories.map((x) => (
              <option key={x.cat_id} value={x.cat_id}>
                {x.category_name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="recipeName"
            className="block text-gray-700 font-bold mb-2"
          >
            Recipe Name:
          </label>
          <input
            type="text"
            id="recipeName"
            name="recipeName"
            value={formData.recipeName}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-bold mb-2"
          >
            Ingredients:
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="directions"
            className="block text-gray-700 font-bold mb-2"
          >
            Directions:
          </label>
          <textarea
            id="directions"
            name="directions"
            value={formData.directions}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <ButtonBlue text="Submit" />
      </form>
    </div>
  );
};

export default AddRecipe;

interface Category {
  category_name: string;
  cat_id: string;
}

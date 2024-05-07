"use client";
import React, { useState, useEffect } from "react";
import ButtonBlue from "./Button/ButtonBlue";

export default function AddRecipe () {
  const [categories, setCategories] = useState<Category[]>([]);
  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [category, setCategory] = useState('');
  const [directions, setDirections] = useState('');
  const [image, setImage] = useState<File | null>(null); // Updated state type for image

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Use optional chaining to handle potential null or undefined
    setImage(file || null); // Set image state to file or null
  };

 

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', recipeName || '');
    formData.append('description', description || '');
    formData.append('directions', directions || '');
    formData.append('ingredients', ingredients || '');
    formData.append('category', category || '');
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch('/apit', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Upload successful:', data);
      // Handle success, e.g., show a success message to the user
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error, e.g., set an error message state
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCategory(value)
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
            value={category}
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
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}

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
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            
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
            value={directions}
            onChange={(e) => setDirections(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <ButtonBlue text="Submit" />
      </form>
    </div>
  );
};


interface Category {
  category_name: string;
  cat_id: string;
}

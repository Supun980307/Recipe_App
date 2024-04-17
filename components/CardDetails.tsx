import React from 'react'
import RecipeCard from './RecipeCard';


const details = [
    {
        category: "Dessert",
        img: "/Recipe-1.jpg",
        title: "Red, White and Blue Panna Cotta",
        description: "It's a perfect treat for any occasion.",
        detail: "Get the recipe now!!!",
    },
    {
        category: "Dessert",
        img: "/Recipe-1.jpg",
        title: "Red, White and Blue Panna Cotta",
        description: "It's a perfect treat for any occasion.",
        detail: "Get the recipe now!!!",
    },
    {
        category: "Dessert",
        img: "/Recipe-1.jpg",
        title: "Red, White and Blue Panna Cotta",
        description: "It's a perfect treat for any occasion.",
        detail: "Get the recipe now!!!",
    },
    {
        category: "Dessert",
        img: "/Recipe-1.jpg",
        title: "Red, White and Blue Panna Cotta ",
        description: "It's a perfect treat for any occasion.",
        detail: "Get the recipe now!!!",
    },
    {
        category: "Dessert",
        img: "/Recipe-1.jpg",
        title: "Red, White and Blue Panna Cotta",
        description: "It's a perfect treat for any occasion.",
        detail: "Get the recipe now!!!",
    },
];

const CardDetails = () => {
  return (
    <>
    <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4'>
        {details.map((item, index) => (
            <RecipeCard
            key={index}
            category={item.category}
            img={item.img}
            title={item.title}
            Description={item.description}
            detail={item.detail}
            />
        ))}
    </div>
   
</>
  )
}

export default CardDetails
import React from 'react'
import DetailCard from './DetailCard'

const details = [
    {
        img: "/Recipe-1.jpg",
        title: "Red, White and Blue Panna Cotta Mousse Dessert Recipe",
        ingredients: ["15  graham crackers (8 ounces)",
        "1 stick unsalted butter, melted",
        "3 tablespoons granulated sugar",
        "Salt",
        "2  bars (8 ounces each) cream cheese, room temperature",
        "¾ cup confectioners' sugar",
        "1 cup Greek yogurt (full-fat)",
        "2 teaspoons pure vanilla extract",
        "1 cup heavy cream, whipped",
        "2 cups fresh berries",],
        directions: ["Step 1", "In a food processor, pulse graham crackers until finely ground (you should have about 2 cups)..."]
    },
]

const CardView = () => {
  return (
    <div className='grid grid-cols-1 place-items-center'>
    {details.map((item, index) => (
        <DetailCard
        key={index}
        img={item.img}
        title={item.title}
        Ingredients={item.ingredients}
        directions={item.directions}
        />
    ))}
</div>
  )
}

export default CardView
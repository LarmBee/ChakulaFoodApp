import React from "react";
import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
	{
		id: "m1",
		name: "Pan-Seared Scallops",
		description:
			"Freshly caught scallops pan-seared to perfection with garlic butter and served with a side of seasonal vegetables.",
		price: 30.99,
	},
	{
		id: "m2",
		name: "Grilled Ribeye Steak",
		description:
			"A juicy, marbled ribeye steak grilled to your preference and served with garlic mashed potatoes and sautéed mushrooms.",
		price: 35.99,
	},
	{
		id: "m3",
		name: "Lobster Bisque",
		description:
			"A creamy and decadent soup made with fresh lobster meat, heavy cream, and a touch of brandy.",
		price: 15.99,
	},
	{
		id: "m4",
		name: "Truffle Risotto",
		description:
			"Creamy Arborio rice cooked to perfection with white wine, mushrooms, and truffle oil, topped with shaved parmesan cheese.",
		price: 25.99,
	},
	{
		id: "m5",
		name: "Seared Foie Gras",
		description:
			"A delicacy made from the liver of a fattened duck or goose, seared to perfection and served with a sweet fruit compote.",
		price: 45.99,
	},
];

const AvailableMeals = () => {
	return (
		<section className="meals">
			<Card>
				<ul>
					{DUMMY_MEALS.map((meals) => (
						<MealItem key={meals.id} name={meals.name} description={meals.description} price={meals.price}/>
					))}
				</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;

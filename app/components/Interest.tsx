import React from "react";
import Card from "./Card";
const arr = Array(3).fill({ liked: false }); // Initial array

const Interest = () => {
	return (
		<div className="w-full flex flex-col justify-center items-start gap-5">
			{/* header */}
			<div className="w-full flex justify-between items-center">
				<div className="font-semibold text-xl">
					Ces produits pourraient vous intéresser
				</div>
				<a className="font-semibold text-black uppercase">
					Voir toute la collection
				</a>
			</div>

			{/* cards container */}
			<div className="w-full overflow-x-auto flex gap-3 justify-evenly items-center no-scrollbar">
				{arr.map((item, index) => (
					<Card key={index} size={"32"} />
				))}
			</div>
		</div>
	);
};

export default Interest;

import React from "react";
import Card from "./Card";
const arr = Array(11).fill({ liked: false }); // Initial array

const Similar = () => {
	return (
		<div className="w-full flex flex-col justify-center items-start gap-5">
			{/* header */}
			<div className="w-full flex justify-between items-center">
				<div className="font-bold text-lg">Articles similaires</div>
				<a className="font-semibold text-black uppercase">
					Voir toute la collection
				</a>
			</div>

			{/* cards container */}
			<div className="w-full overflow-x-auto flex gap-3 justify-start items-center no-scrollbar">
				{arr.map((item, index) => (
					<Card key={index} size={"20"} />
				))}
			</div>
		</div>
	);
};

export default Similar;

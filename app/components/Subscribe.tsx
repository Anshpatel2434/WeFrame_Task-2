import React from "react";
import image from "../assets/sofa.jpg";
import { BsArrowRight } from "react-icons/bs";

const Subscribe = () => {
	return (
		<div className="w-full flex justify-center items-center gap-3">
			{/* left image part  */}
			<div className="w-[48%] h-[20rem] flex items-center justify-center">
				<img
					src={image.src}
					className="h-full w-full object-cover rounded-xl"
				/>
			</div>

			{/* right info part  */}

			<div className="w-[48%] h-[20rem] flex flex-col justify-center items-start p-5 bg-[#FFF3F9] rounded-xl gap-8">
				<p className="w-full font-semibold text-4xl">
					S'inscrire & économiser <span className="text-[#5CD2DD]">10%</span>{" "}
				</p>
				<p className="w-full text-base text-[#BDA2B0]">
					Office ipsum you must be muted. Synergize helicopter prioritize anyway
					job due harvest most opportunity didn't. Yet busy any meeting shark
					light marginalised 4-blocker message. Productize corporate nail caught
					synergy highlights lunch. Company another pushback items dear or any.
				</p>
				<div className="w-full flex justify-between items-center">
					<input
						type="email"
						placeholder="john@doe.com"
						className="w-[68%] p-4 rounded-xl"
					/>
					<div className="flex justify-center items-center w-[25%] p-5 bg-[#5CD2DD] gap-5 rounded-xl">
						<p className="text-white font-bold">S'inscrire</p>
						<BsArrowRight className="text-white" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;

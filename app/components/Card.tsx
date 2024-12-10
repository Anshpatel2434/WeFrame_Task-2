import React, { useState } from "react";
import table from "../assets/table.jpg";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

const Card = ({ size }: { size: string }) => {
	const [liked, setLiked] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [quantity, setQuantity] = useState(1);

	const toggleLike = () => {
		setLiked(!liked);
	};

	const incrementQuantity = () => {
		setQuantity((prev) => prev + 1);
	};

	const decrementQuantity = () => {
		setQuantity((prev) => Math.max(1, prev - 1));
	};

	return (
		<div
			className={`
                relative flex flex-col justify-center items-center gap-2 
                transition-all duration-300 ease-in-out`}
			style={{ minWidth: `${size}%` }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* overlap */}
			<div className="absolute top-2 w-[90%] flex justify-between items-center z-10">
				{liked ? (
					<FaHeart
						className="text-3xl text-pink-600 cursor-pointer transition-colors duration-300 hover:text-pink-700"
						onClick={toggleLike}
					/>
				) : (
					<CiHeart
						className="text-3xl cursor-pointer transition-colors duration-300 hover:text-gray-600"
						onClick={toggleLike}
					/>
				)}
				<p className="p-1 text-xs bg-white">Art de la table</p>
			</div>

			{/* quantity overlap - now appears on hover */}
			{isHovered && (
				<div className="absolute bottom-20 w-[90%] flex justify-between items-center p-1 z-10 bg-white rounded-lg shadow-lg">
					<div>QTÉ</div>
					<div className="w-[40%] flex justify-between items-center p-3 rounded-lg bg-gray-100">
						<button
							className="text-xl font-bold text-gray-700 hover:text-black"
							onClick={decrementQuantity}
						>
							-
						</button>
						<p className="mx-2">{quantity}</p>
						<button
							className="text-xl font-bold text-gray-700 hover:text-black"
							onClick={incrementQuantity}
						>
							+
						</button>
					</div>
					<div className="bg-[#EE4197] text-white p-2 px-3 rounded-lg cursor-pointer hover:bg-[#d1368a]">
						Ajouter
					</div>
				</div>
			)}

			{/* image container */}
			<div
				className={`
                    w-full h-[20rem] bg-[#F9F7F5] flex items-center justify-center`}
			>
				<Image
					src={table.src}
					className={`w-[60%] object-contain
                        transition-transform duration-300 ease-in-out
                        ${isHovered ? "scale-105" : ""}
                    `}
					alt="Table"
				/>
			</div>

			{/* title and price */}
			<div className="flex w-full justify-between items-center">
				<p>Title</p>
				<p>
					0 <sup>€</sup>
				</p>
			</div>

			{/* details */}
			<div className="flex w-full justify-between items-center">
				<p className="text-[#9C9C9C]">0,35€/Pièce · RÉF : VABGN5</p>
				<p className="bg-[#F1F4F6] text-[#546A7D] text-sm p-2 rounded-full">
					20 pièces
				</p>
			</div>
		</div>
	);
};

export default Card;

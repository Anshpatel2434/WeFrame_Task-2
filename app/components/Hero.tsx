import React from "react";
import machine from "../assets/machine.jpg";
import table from "../assets/table.jpg";
import { CiHeart } from "react-icons/ci";
import { TfiRulerAlt } from "react-icons/tfi";
import { LuCircleSlash2 } from "react-icons/lu";

const arr = [1, 2, 3, 4];

const Hero = () => {
	return (
		<div className="w-full min-h-full flex flex-col justify-center items-center gap-5">
			{/* upper part  */}
			<div className="relative w-full h-[38rem] flex justify-center items-center gap-2">
				{/* left image container  */}
				<div className="w-[50%] h-full bg-[#F8F6F4] flex justify-center items-center">
					{/* main image  */}
					<div className="relative w-[50%]">
						<img
							src={machine.src}
							className="min-w-full min-h-full object-contain"
						/>
					</div>

					{/* four overlapping images  */}
					<div className="absolute top-4 left-4 w-[5%] flex flex-col justify-center items-center gap-2">
						{arr.map((item, index) => (
							<div key={index} className="w-full">
								<img src={table.src} className="w-full object-contain" />
							</div>
						))}
					</div>
				</div>

				{/* right info container  */}
				<div className="w-[48%] min-h-full flex flex-col justify-between items-center">
					{/* upper right part  */}
					<div className="w-full flex flex-col justify-center items-center gap-4">
						<div className="w-full flex flex-col justify-start items-center pb-2 border-b-2 border-[#9C9C9C]">
							<div className="w-full flex justify-between items-center">
								<div className=" font-bold text-lg">
									Cheese - appareil à raclette 1/2 roue
								</div>
								<CiHeart />
							</div>
							<div className="w-full flex gap-2 justify-start items-start">
								<span className="font-semibold text-lg">39,50€</span>{" "}
								<span className="text-[#9C9C9C]">/pièce</span>
							</div>
						</div>

						<div className="w-full flex justify-between items-center pb-2 border-b-2 border-[#9C9C9C]">
							{/* measures  */}
							<div className="flex gap-5 justify-center items-center">
								<div className="flex justify-center items-center gap-2">
									<TfiRulerAlt className="text-[#9C9C9C]" />
									<p>
										20 <sup>cm</sup>
									</p>
								</div>
								<div className="flex justify-center items-center gap-2">
									<LuCircleSlash2 className="text-[#9C9C9C]" />
									<p>
										50 <sup>cm</sup>
									</p>
								</div>
							</div>

							{/* ref  */}
							<div className="text-[#9C9C9C]">RÉF : VABGN5</div>
						</div>

						<div className="w-full flex flex-col justify-start items-start">
							<p className="text-[#5D5D5D]">
								Location appareil à raclette - Raclette traditionnelle 1/2 roue{" "}
								<br />
								Réglable en hauteur
								<br /> Appareil à raclette professionnel
								<br /> Boîtier de chauffe horizontal réglable en hauteur
								<br />
								<br /> 220V <br />
								900W
							</p>
						</div>
					</div>

					{/* lower right part  */}
					<div className="w-full pt-4 border-t-2 border-[#9C9C9C] flex gap-2">
						<div className="w-[28%] flex justify-between items-center p-3 border-2 rounded-lg">
							<p>-</p>
							<p>1</p>
							<p>+</p>
						</div>
						<div className="w-[68%] flex justify-center items-center p-3 bg-[#5CD2DD] text-white rounded-lg">
							Ajouter au panier
						</div>
					</div>
				</div>
			</div>

			{/* lower part  */}
			<div className="relative w-full flex justify-center items-center gap-2">
				{/* description  */}
				<div className="w-[48%] flex flex-col justify-center items-start gap-3">
					<p className="font-semibold w-full">Description produit</p>
					<p className="w-full text-[#9C9C9C]">
						Festi vous propose à la location un/une "Jewel - grand couteau/10pc"
						pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit
						pour votre mariage, une fête d'anniversaire ou du personnel, ce
						produit a fait l'objet d'une sélection rigoureuse par notre équipe.
						Il est en location chez nous sous la référence "VAJGC". Nous sommes
						à votre disposition pour que les événements de nos clients, même en
						last-minute, soient toujours une réussite. Vous pourrez trouver tout
						une série d'autre produit à louer de ce type dans la catégorie "Art
						de la Table".
					</p>
				</div>

				{/* option  */}
				<div className="w-[48%]">
					<div className="w-full bg-[#FBF9F899] flex justify-between items-center p-4">
						<p className=" uppercase">Livraisons</p>
						<p>+</p>
					</div>
					<div className="w-full bg-[#FBF9F899] flex justify-between items-center p-4">
						<p className=" uppercase">Livraisons</p>
						<p>+</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

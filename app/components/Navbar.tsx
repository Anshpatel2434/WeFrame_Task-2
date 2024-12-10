import Navigator from "./Navigator";
import image from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { SlBulb } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
	return (
		<div className="fixed top-0 z-50 w-[97%] flex-col justify-center items-center bg-white pt-5">
			{/* upper nav container */}
			<div className="w-full flex justify-between items-start gap-[1%]">
				<div className="w-[57%] flex gap-[1%] justify-start items-start ">
					{/* image  */}
					<div className="w-[20%]">
						<img src={image.src} alt="Logo" className="w-full object-contain" />
					</div>

					{/* search container  */}
					<div className="w-[100%] flex justify-between items-center bg-[#F9FAFB] p-[1%] text-wrap text-lg">
						<input
							type="text"
							placeholder="Rechercher un produit"
							className="appearance-none outline-none w-full placeholder:text-wrap bg-[#F9FAFB]"
						/>
						<CiSearch className="text-slate-400 text-3xl" />
					</div>
				</div>

				{/* buttons  */}
				<div className="flex flex-wrap justify-center items-center gap-4">
					{/* inspirations button  */}
					<div className="flex justify-center items-center gap-2 font-semibold text-xs sm:text-base md:text-lg">
						<SlBulb /> <span>Inspirations</span>
					</div>

					<div className="flex justify-center items-center gap-2 font-semibold text-xs sm:text-base md:text-lg">
						<CiHeart /> <div>Mes favoris</div>{" "}
						<span className="bg-[#CAD2D566] px-2 py-1 rounded-full text-xs">
							24
						</span>
					</div>

					<div className="flex justify-center items-center gap-2 bg-[#0093D0] text-white p-4 font-semibold rounded-md text-xs sm:text-base md:text-lg">
						<CiShoppingCart className="text-2xl" />
						<span>Panier</span>
					</div>

					<div className="flex justify-center items-center gap-3">
						{/* logo  */}
						<div className="bg-[#EAEDEE] p-5 rounded-full"></div>
						<div className="flex gap-1 justify-center items-center">
							<span>FR</span>
							<FaChevronDown />
						</div>
					</div>
				</div>
			</div>

			{/* lower navbar container */}
			<Navigator />
		</div>
	);
}

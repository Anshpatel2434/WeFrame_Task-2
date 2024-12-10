import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
	return (
		<div className="w-full flex justify-between items-center">
			{/* left part  */}
			<div className="flex items-center justify-center gap-10">
				<img src={logo.src} />
				<div className="flex flex-col justify-center items-start gap-2">
					<p className="text-xl font-bold">INFOS PRATIQUES</p>
					<p className="text-lg">À propos</p>
					<p className="text-lg">À propos</p>
					<p className="text-lg">À propos</p>
				</div>
				<div className="flex flex-col justify-center items-start gap-2">
					<p className="text-xl font-bold">INFOS PRATIQUES</p>
					<p className="text-lg">À propos</p>
					<p className="text-lg">À propos</p>
					<p className="text-lg">À propos</p>
				</div>
				<div className="flex flex-col justify-center items-start gap-2">
					<p className="text-xl font-bold">INFOS PRATIQUES</p>
					<p className="text-lg">À propos</p>
					<p className="text-lg">À propos</p>
					<p className="text-lg">À propos</p>
				</div>
			</div>

			{/* right part  */}
			<div className="flex flex-col gap-5 justify-center items-end">
				<p className="font-semibold text-xl">NOUS SUIVRE</p>
				<div className="flex justify-center items-center gap-4">
					<div className="border-2 p-2 rounded-xl">
						<FaTwitter className="text-2xl" />
					</div>
					<div className="border-2 p-2 rounded-xl">
						<CiInstagram className="text-2xl" />
					</div>
					<div className="border-2 p-2 rounded-xl">
						<FaLinkedin className="text-2xl" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

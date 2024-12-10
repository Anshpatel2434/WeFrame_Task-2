import React from "react";
import Navbar from "../components/Navbar";

export default function productsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative w-full p-[2%] flex flex-col justify-center items-center">
			<Navbar />
			{children}
		</div>
	);
}

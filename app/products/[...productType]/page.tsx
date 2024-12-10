"use client";

import Hero from "@/app/components/Hero";
import { useParams } from "next/navigation";
import names from "@/app/data/items";
import Similar from "@/app/components/Similar";
import Interest from "@/app/components/Interest";
import Extra from "@/app/components/Extra";
import Subscribe from "@/app/components/Subscribe";
import Footer from "@/app/components/Footer";

export default function Product() {
	const params = useParams();
	const productType = params.productType as string;

	// Find the correct product name
	const productName = names.filter((item) => `${item.id}` == productType);

	console.log(productName);

	return (
		<div className="w-full min-h-full flex flex-col justify-center items-start gap-20 pt-36">
			<div className="flex justify-center items-baseline gap-4">
				<p className="font-semibold text-lg">Home</p>
				<p className="flex justify-center items-center gap-4 text-[#9C9C9C]">
					<span className="inline-block w-2 h-2 bg-[#9C9C9C] rounded-full"></span>
					<p>{productName[0].name}</p>
				</p>
			</div>

			<Hero />
			<Similar />
			<Interest />
			<Extra />
			<Subscribe />
			<Footer />
		</div>
	);
}

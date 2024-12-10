"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		router.push("/products/2");
	}, []);

	return (
		<div className=" w-[95%] min-h-full flex-col justify-center items-center"></div>
	);
}

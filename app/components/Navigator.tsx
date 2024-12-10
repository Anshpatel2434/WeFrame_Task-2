"use client";
import { useParams, useRouter } from "next/navigation";
import names from "../data/items";

export default function Navigator() {
	const params = useParams();
	const router = useRouter();

	const productType = params.productType as string;

	return (
		<div className="min-w-[100%] m-0 p-0 -ml-[3%] px-[3%] flex overflow-x-scroll capitalize no-scrollbar pt-5 border-b-[1px] border-[#6B7280] gap-10">
			{names.map((item, index) => (
				<div
					key={index}
					className={`
                        text-xs
                        font-semibold 
                        text-center 
                        cursor-pointer 
                        transition-colors 
                        duration-200 
                        uppercase flex-shrink-0
                        pb-4 sm:text-sm
                        ${
													productType && productType[0] === `${item.id}`
														? "text-[#0093D0] border-[#0093D0] border-b-2"
														: "text-[#6B7280] border-[#6B7280] hover:text-[#0093D0]"
												}
                    `}
					onClick={() => {
						router.push(`/products/${item.id}`);
					}}
				>
					<div className="w-full">{item.name}</div>
				</div>
			))}
		</div>
	);
}

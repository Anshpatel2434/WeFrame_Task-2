import React from "react";
import image from "../assets/refigerator.png";

const Extra = () => {
	return (
		<div className="w-[110%] -ml-[3%] flex flex-col justify-center items-center p-10 bg-[#f6f4f4] gap-5">
			{/* text  */}
			<div className="w-full flex flex-col justify-center items-center p-5 gap-5">
				<div className="text-4xl font-semibold">
					On s&apos;occupe de <span className="text-[#5CD2DD]">tout</span>
				</div>
				<div className=" text-[#9C9C9C] text-lg  ">
					Office ipsum you must be muted. It meeting commitment busy pain.
				</div>
			</div>
			<div className="w-full relative flex justify-center items-center gap-10">
				<div className="flex flex-col justify-center items-center">
					<img src={image.src} className="w-[40%]" />
					<p>Livraison & Reprise</p>
					<p className="text-[#9C9C9C] text-sm">Selon vos besoins</p>
				</div>
				<div className="absolute h-[1px] bg-slate-400 w-[6%] top-[18%] left-[37%]"></div>
				<div className="flex flex-col justify-center items-center">
					<img src={image.src} className="w-[40%]" />
					<p>Livraison & Reprise</p>
					<p className="text-[#9C9C9C] text-sm">Selon vos besoins</p>
				</div>
				<div className="absolute h-[1px] bg-slate-400 w-[6%] top-[18%] left-[47%]"></div>
				<div className="flex flex-col justify-center items-center">
					<img src={image.src} className="w-[40%]" />
					<p>Livraison & Reprise</p>
					<p className="text-[#9C9C9C] text-sm">Selon vos besoins</p>
				</div>
				<div className="absolute h-[1px] bg-slate-400 w-[6%] top-[18%] left-[57%]"></div>
				<div className="flex flex-col justify-center items-center">
					<img src={image.src} className="w-[40%]" />
					<p>Livraison & Reprise</p>
					<p className="text-[#9C9C9C] text-sm">Selon vos besoins</p>
				</div>
			</div>
		</div>
	);
};

export default Extra;

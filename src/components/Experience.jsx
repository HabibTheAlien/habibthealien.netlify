"use client";
import { Splash } from "next/font/google";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Amazon from "./works/Amazon";
import Apple from "./works/Apple";
import Google from "./works/Google";
import ReactBD from "./works/ReactBD";

const Experience = () => {
	const [workReactBD, setWorkReactBD] = useState(true);
	const [workGoogle, setWorkGoogle] = useState(false);
	const [workApple, setWorkApple] = useState(false);
	const [workAmazon, setWorkAmazon] = useState(false);
	const [workSplash, setWorkSplash] = useState(false);

	const handleAmazon = () => {
		setWorkAmazon(true);
		setWorkApple(false);
		setWorkGoogle(false);
		setWorkReactBD(false);
		setWorkSplash(false);
	};
	const handleReactBD = () => {
		setWorkAmazon(false);
		setWorkApple(false);
		setWorkGoogle(false);
		setWorkReactBD(true);
		setWorkSplash(false);
	};
	const handleApple = () => {
		setWorkAmazon(false);
		setWorkApple(true);
		setWorkGoogle(false);
		setWorkReactBD(false);
		setWorkSplash(false);
	};
	const handleGoogle = () => {
		setWorkAmazon(false);
		setWorkApple(false);
		setWorkGoogle(true);
		setWorkReactBD(false);
		setWorkSplash(false);
	};
	const handleSplash = () => {
		setWorkAmazon(false);
		setWorkApple(false);
		setWorkGoogle(false);
		setWorkReactBD(false);
		setWorkSplash(true);
	};
	return (
		<section
			id="experience"
			className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
			<SectionTitle title="Where I have worked" titleNo=" 02" />
			<div className="w-full mt-10 flex flex-col md:flex-row gap-16">
				<ul className="md:w-32 flex flex-col">
					<li
						onClick={handleReactBD}
						className={` ${
							workReactBD
								? " border-l-textGreen text-textGreen "
								: "border-l-hoverColor text-textDark"
						} border-l-2   bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
						ReactBD
					</li>
					<li
						onClick={handleGoogle}
						className={` ${
							workGoogle
								? " border-l-textGreen text-textGreen "
								: "border-l-hoverColor text-textDark"
						} border-l-2   bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
						Google
					</li>
					<li
						onClick={handleApple}
						className={` ${
							workApple
								? " border-l-textGreen text-textGreen "
								: "border-l-hoverColor text-textDark"
						} border-l-2   bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
						Apple
					</li>
					{/* <li
						onClick={handleSplash}
						className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
						Splash
					</li> */}
					<li
						onClick={handleAmazon}
						className={` ${
							workAmazon
								? " border-l-textGreen text-textGreen "
								: "border-l-hoverColor text-textDark"
						} border-l-2   bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
						Amazon
					</li>
				</ul>
				{workAmazon && <Amazon />}
				{workApple && <Apple />}
				{workGoogle && <Google />}
				{workReactBD && <ReactBD />}
				{/* {workSplash && <Splash />} */}
			</div>
		</section>
	);
};

export default Experience;

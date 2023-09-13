"use client";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { WorkExperience } from "@/data";
import Work from "./Work";

const Experience = () => {
	const [selected, setSelected] = useState(0);

	return (
		<section
			id="experience"
			className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
			<SectionTitle title="Where I have worked" titleNo=" 02" />
			<div className="w-full mt-10 flex flex-col md:flex-row gap-16">
				<ul className="md:w-32 flex flex-col">
					{WorkExperience.map((item, index) => (
						<li
							key={index}
							onClick={() => setSelected(index)}
							className={` ${
								selected === index
									? " border-l-textGreen text-textGreen "
									: "border-l-hoverColor text-textDark"
							} border-l-2   bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
							{item.company}
						</li>
					))}
				</ul>
				<Work data={WorkExperience[selected]} />
			</div>
		</section>
	);
};

export default Experience;

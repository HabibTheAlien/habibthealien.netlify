import React from "react";

const SectionTitle = ({ title, titleNo }) => {
	return (
		<h2 className="font-titlefont text-2xl font-semibold flex items-center">
			<span
				className="text-base md:text-lg text-textGreen mr-2"
				style={{ fontFamily: "Roboto Mono" }}>
				{titleNo}.
			</span>
			{title}
			<span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
		</h2>
	);
};

export default SectionTitle;

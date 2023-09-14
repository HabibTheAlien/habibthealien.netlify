"use client";
import React from "react";
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

const ArchiveCard = ({ link, title, desc, listItem }) => {
	return (
		<a href={link} target="_blank">
			<div className="w-full  h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-transform duration-300 group">
				<div className="flex justify-between items-center">
					<FaRegFolder className="text-4xl hover:text-textGreen duration-300" />
					<RxOpenInNewWindow className="text-4xl hover:text-textGreen duration-300" />
				</div>
				<div>
					<h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
						{title}
					</h2>
					<p className="text-sm mt-3">{desc}</p>
				</div>
				<ul
					className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap"
					style={{ fontFamily: "Roboto Mono" }}>
					{listItem.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>
			</div>
		</a>
	);
};

export default ArchiveCard;

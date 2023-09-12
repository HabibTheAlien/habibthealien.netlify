import Image from "next/image";
import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const technologies = [
	{
		techName: "JavaScript(ES6+)",
	},
	{
		techName: "React",
	},
	{
		techName: "TypeScript",
	},
	{
		techName: "MongoDB",
	},
	{
		techName: "Next.js",
	},
	{
		techName: "Node.js",
	},
	{
		techName: "Express.js",
	},
	{
		techName: "Tailwindcss",
	},
];

const About = () => {
	return (
		<section
			id="about"
			className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
			<SectionTitle title="About me" titleNo="01" />
			<div className="flex flex-col lgl:flex-row gap-16">
				<div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 ">
					<p>
						I am a web developer with 4+ years of experience in
						React. I have a strong fundation in frontend & back-end
						development and am skilled in creating user-friendly and
						responsive web applications using React and its
						ecosystem. I am a web developer
						<span className="text-textGreen">
							with 4+ years of experience
						</span>
					</p>
					<p>
						I am a web developer with 4+ years of experience in
						React. I have a strong fundation in frontend & back-end
						development and am skilled in creating user-friendly and
						responsive web applications using React and its
						ecosystem. I am a web developer
						<span className="text-textGreen">
							with 4+ years of experience
						</span>
					</p>
					<p>
						I am a web developer with 4+ years of experience in
						React. I have a strong fundation in frontend & back-end
						development developer
						<span className="text-textGreen">
							with 4+ years of experience
						</span>
					</p>
					<p>
						Here are a few technologies I have beenworking with
						recenrtly:
					</p>
					<ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
						{technologies.map((item) => (
							<li
								className="flex items-center gap-2"
								key={item.techName}>
								<span className="text-textGreen">
									<AiFillThunderbolt />
								</span>
								{item.techName}
							</li>
						))}
					</ul>
				</div>
				<div className="w-full lgl:w-1/3 h-80 relative group">
					<div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
						<div className="w-full h-full pl-6 relative z-20 flex lgl:pl-0">
							<Image
								fill
								src="/20230207_092250.jpg"
								alt=""
								className="rounded-lg h-full  object-cover"
							/>
							<div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
						</div>
					</div>
					<div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 "></div>
				</div>
			</div>
		</section>
	);
};

export default About;

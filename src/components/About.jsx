"use client";
import Image from "next/image";
import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { Personal, Technologies } from "@/data";

const About = () => {
	return (
		<section
			id="about"
			className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
			<SectionTitle title="About me" titleNo="01" />
			<div className="flex flex-col lgl:flex-row gap-16">
				<div className="w-full  lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 ">
					<p>
						Hello, I&apos;m Habibur Rahman, a dedicated web
						developer with over 3 years of experience specializing
						in the{" "}
						<span className="text-textGreen">MERN Stack.</span> I
						harness the power of MongoDB, React, Next.js, Node, and
						Express to meticulously craft remarkable web
						applications, all hand-coded with care. My design
						toolkit includes Figma, Photoshop, and Illustrator, and
						I employ CSS, SASS,{" "}
						<span className="text-textGreen">Tailwind CSS</span> and
						Styled-Components to create captivating user interfaces.
					</p>
					<p>
						Beyond coding, I solve real-world problems with my web
						applications. Based in Dhaka, I share my home with{" "}
						<span className="text-textGreen">my mom </span>and{" "}
						<span className="text-textGreen">my trusty guitar</span>{" "}
						and I&apos;m an avid traveler.
					</p>
					<p>
						Additionally, I excel in{" "}
						<span className="text-textGreen">React Native</span>,
						extending my problem-solving capabilities to mobile app
						development. My love for my work is the driving force
						behind everything I create. Let&apos;s connect and bring
						your digital ideas to life!
					</p>

					<p>
						Here are a few technologies I have beenworking with
						recenrtly :
					</p>
					<ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
						{Technologies.map((item) => (
							<li className="flex items-center gap-2" key={item}>
								<span className="text-textGreen">
									<AiFillThunderbolt />
								</span>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="w-5/6 self-center  lg:w-full  lgl:w-1/3 h-80 lg:self-start relative group">
					<div className="absolute w-full h-80 -left-4 -top-4 rounded-lg">
						<div className="w-full h-full relative z-20 flex  group-hover:-translate-x-2 group-hover:-translate-y transition-transform duration-300 ">
							<Image
								fill
								src={Personal.image}
								alt=""
								className="rounded-lg  h-full object-cover"
							/>
							<div className="absolute w-full h-80 bg-textGreen/30 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
						</div>
					</div>
					<div className=" w-full h-80 border-2 border-textGreen rounded-md group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 "></div>
				</div>
			</div>
		</section>
	);
};

export default About;

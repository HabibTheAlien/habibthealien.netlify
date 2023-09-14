"use client";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TopProjects } from "@/data";

const Projects = () => {
	return (
		<section
			id="projects"
			className="max-w-container mx-auto ml-6 lgl:px-20 py-24 ">
			<SectionTitle title="Some Things I have Built" titleNo="03" />
			<div className="w-full flex flex-col items-center justify-between gap-28 mt-10 ">
				{TopProjects.map((item, index) => (
					<div
						key={index}
						className="w-full flex flex-col items-center justify-center gap-28 mt-10  ">
						<div
							className={`flex flex-col gap-6 
						${index % 2 === 0 ? "xl:flex-row  " : "xl:flex-row-reverse "}
						
						`}>
							<a
								className="w-full xl:w-1/2 h-auto relative group"
								href={item.open}
								target="_blank">
								<div className="w-full h-full object-cover">
									<Image fill alt="" src={item.image} />
								</div>
							</a>
							<div
								className={`w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xl:-ml-16 z-10 ${
									index % 2 === 0
										? "items-end  text-right xl:-ml-16"
										: "items-start text-left xl:-mr-16 "
								}`}>
								<p
									className="font-titleFont text-textGreen text-sm tracking-wide"
									style={{ fontFamily: "Roboto Mono" }}>
									Featured Project
								</p>
								<h3 className="text-2xl font-bold">
									{item.title}
								</h3>
								<p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
									{item.desc}
									<span className="text-textGreen"></span>{" "}
									<span className="text-textGreen"></span>
								</p>
								<ul
									className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark"
									style={{ fontFamily: "Roboto Mono" }}>
									{item.technologies?.map((tech) => (
										<li key={tech}>{tech}</li>
									))}
								</ul>
								<div className="text-2xl flex gap-4">
									<a
										href="http://youtube.com/habibthealien/"
										target="_blank"
										className="hover:text-textGreen duration-300">
										<AiOutlineYoutube />
									</a>
									<a
										href={item.github}
										target="_blank"
										className="hover:text-textGreen duration-300">
										<TbBrandGithub />
									</a>
									<a
										href={item.open}
										target="_blank"
										className="hover:text-textGreen duration-300">
										<RxOpenInNewWindow />
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;

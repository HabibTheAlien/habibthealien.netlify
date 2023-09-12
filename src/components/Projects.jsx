"use client";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
	return (
		<section
			id="projects"
			className="max-w-container mx-auto ml-6 lgl:px-20 py-24 ">
			<SectionTitle title="Some Things I have Built" titleNo="03" />
			<div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
				{/* PROJECT ONE */}
				<div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
					<div className="flex flex-col xl:flex-row gap-6">
						<a
							className="w-full xl:w-1/2 h-auto relative group"
							href="http://sweet16th.netlify.app"
							target="_blank">
							<div className="w-full h-full object-cover">
								<Image fill alt="" src="/1.png" />
							</div>
						</a>
						<div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
							<p className="font-titleFont text-textGreen text-sm tracking-wide">
								Featured Project
							</p>
							<h3 className="text-2xl font-bold">
								Amazon Clone 2.0
							</h3>
							<p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Accusamus incidunt
								exercitationem, natus corporis est{" "}
								<span className="text-textGreen">0-auth</span>{" "}
								suscipit, aliquam doloribus tenetur eligendi,
								culpa esse a? Repellendus quidem dolorem
								sapiente dolor iusto saepe accusamus!{" "}
								<span className="text-textGreen">strip</span>
							</p>
							<ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
								<li>Nextjs</li>
								<li>TypeScript</li>
								<li>Next-auth</li>
								<li>Stripe</li>
								<li>vercel Deployment</li>
							</ul>
							<div className="text-2xl flex gap-4">
								<a
									href="http://github.com/habibthealien/"
									target="_blank"
									className="hover:text-textGreen duration-300">
									<AiOutlineYoutube />
								</a>
								<a
									href="http://youtube.com/habibthealien/"
									target="_blank"
									className="hover:text-textGreen duration-300">
									<TbBrandGithub />
								</a>
								<a
									href="http://nextamazon.com/habibthealien/"
									target="_blank"
									className="hover:text-textGreen duration-300">
									<RxOpenInNewWindow />
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* PROJECT TWO */}
				<div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
					<div className="flex flex-col xl:flex-row-reverse gap-6">
						<a
							className="w-full xl:w-1/2 h-auto relative group"
							href="http://sweet16th.netlify.app"
							target="_blank">
							<div className="w-full h-full object-cover">
								<Image fill alt="" src="/cat2.PNG" />
							</div>
						</a>
						<div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
							<p className="font-titleFont text-textGreen text-sm tracking-wide">
								Featured Project
							</p>
							<h3 className="text-2xl font-bold">
								Amazon Clone 2.0
							</h3>
							<p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-md">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Accusamus incidunt
								exercitationem, natus corporis est{" "}
								<span className="text-textGreen">0-auth</span>{" "}
								suscipit, aliquam doloribus tenetur eligendi,
								culpa esse a? Repellendus quidem dolorem
								sapiente dolor iusto saepe accusamus!{" "}
								<span className="text-textGreen">strip</span>
							</p>
							<ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
								<li>Nextjs</li>
								<li>TypeScript</li>
								<li>Next-auth</li>
								<li>Stripe</li>
								<li>vercel Deployment</li>
							</ul>
							<div className="text-2xl flex gap-4">
								<a
									href="http://github.com/habibthealien/"
									target="_blank"
									className="hover:text-textGreen duration-300">
									<AiOutlineYoutube />
								</a>
								<a
									href="http://youtube.com/habibthealien/"
									target="_blank"
									className="hover:text-textGreen duration-300">
									<TbBrandGithub />
								</a>
								<a
									href="http://nextamazon.com/habibthealien/"
									target="_blank"
									className="hover:text-textGreen duration-300">
									<RxOpenInNewWindow />
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* PROJECT THREE */}
				<div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
					<div className="flex flex-col xl:flex-row gap-6">
						<a
							className="w-full xl:w-1/2 h-auto relative group"
							href="http://sweet16th.netlify.app"
							target="_blank">
							<div className="w-full h-full object-cover">
								<Image fill alt="" src="/3.PNG" />
							</div>
						</a>
						<div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
							<p className="font-titleFont text-textGreen text-sm tracking-wide">
								Featured Project
							</p>
							<h3 className="text-2xl font-bold">
								Amazon Clone 2.0
							</h3>
							<p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Accusamus incidunt
								exercitationem, natus corporis est{" "}
								<span className="text-textGreen">0-auth</span>{" "}
								suscipit, aliquam doloribus tenetur eligendi,
								culpa esse a? Repellendus quidem dolorem
								sapiente dolor iusto saepe accusamus!{" "}
								<span className="text-textGreen">strip</span>
							</p>
							<ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
								<li>Nextjs</li>
								<li>TypeScript</li>
								<li>Next-auth</li>
								<li>Stripe</li>
								<li>vercel Deployment</li>
							</ul>
							<div className="text-2xl flex gap-4">
								<a
									href="http://github.com/habibthealien/"
									target="_blank"
									className="hover:text-textGreen duration-300">
									<AiOutlineYoutube />
								</a>
								<a
									href="http://youtube.com/habibthealien/"
									target="_blank"
									className="hover:text-textGreen duration-300">
									<TbBrandGithub />
								</a>
								<a
									href="http://nextamazon.com/habibthealien/"
									target="_blank"
									className="hover:text-textGreen duration-300">
									<RxOpenInNewWindow />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;

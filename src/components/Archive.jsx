"use client";
import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";
import { ArchiveMoreProjects, ArchiveProjects } from "@/data";

export default function Archive() {
	const [showMore, setShowMore] = useState(false);
	return (
		<div className="max-w-contentContainer mx-auto px-4 py-24">
			<div className="w-full flex flex-col items-center">
				<h2 className="text-3xl font-titleFOnt font-semibold">
					Other Noteworthy Project
				</h2>
				<p
					className="text-sm font-titleFont text-textGreen"
					style={{ fontFamily: "Roboto Mono" }}>
					view the archive
				</p>
			</div>
			<div className="grid gird-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
				{ArchiveProjects.map((item, index) => (
					<ArchiveCard
						key={index}
						title={item.title}
						desc={item.desc}
						listItem={item.technologies}
						link={item.open}
					/>
				))}

				{showMore && (
					<>
						{ArchiveMoreProjects.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									delay: ` ${index / 10 + 0.01} `,
								}}>
								<ArchiveCard
									title={item.title}
									desc={item.desc}
									listItem={item.technologies}
									link={item.open}
								/>
							</motion.div>
						))}
					</>
				)}
			</div>
			<div className="mt-12 flex items-center justify-center">
				{showMore ? (
					<button
						onClick={() => setShowMore(false)}
						className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
						Show Less
					</button>
				) : (
					<button
						onClick={() => setShowMore(true)}
						className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
						Show More
					</button>
				)}
			</div>
		</div>
	);
}

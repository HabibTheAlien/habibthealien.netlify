"use client";
import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

export default function Archive() {
	const [showMore, setShowMore] = useState(false);
	return (
		<div className="max-w-contentContainer mx-auto px-4 py-24">
			<div className="w-full flex flex-col items-center">
				<h2 className="text-3xl font-titleFOnt font-semibold">
					Other Noteworthy Project
				</h2>
				<p className="text-sm font-titleFont text-textGreen">
					view the archive
				</p>
			</div>
			<div className="grid gird-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
				<ArchiveCard
					title="Educare English Learning Academy"
					desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, cumque enim. Possimus quasi enim, suscipit
						culpa delectus"
					listItem={["Reactjs", "Tailwindcss", "getfrom.io"]}
					link="http://www.educareenglish.com"
				/>
				<ArchiveCard
					title="Educare English Learning Academy"
					desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, cumque enim. Possimus quasi enim, suscipit
						culpa delectus"
					listItem={["Reactjs", "Tailwindcss", "getfrom.io"]}
					link="http://www.educareenglish.com"
				/>
				<ArchiveCard
					title="Educare English Learning Academy"
					desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, cumque enim. Possimus quasi enim, suscipit
						culpa delectus"
					listItem={["Reactjs", "Tailwindcss", "getfrom.io"]}
					link="http://www.educareenglish.com"
				/>
				<ArchiveCard
					title="Educare English Learning Academy"
					desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, cumque enim. Possimus quasi enim, suscipit
						culpa delectus"
					listItem={["Reactjs", "Tailwindcss", "getfrom.io"]}
					link="http://www.educareenglish.com"
				/>
				<ArchiveCard
					title="Educare English Learning Academy"
					desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, cumque enim. Possimus quasi enim, suscipit
						culpa delectus"
					listItem={["Reactjs", "Tailwindcss", "getfrom.io"]}
					link="http://www.educareenglish.com"
				/>
				<ArchiveCard
					title="Educare English Learning Academy"
					desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, cumque enim. Possimus quasi enim, suscipit
						culpa delectus"
					listItem={["Reactjs", "Tailwindcss", "getfrom.io"]}
					link="http://www.educareenglish.com"
				/>
				{showMore && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.1 }}>
							<ArchiveCard
								title="Educare English Learning Academy"
								desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, cumque enim. Possimus quasi enim, suscipit
						culpa delectus"
								listItem={[
									"Reactjs",
									"Tailwindcss",
									"getfrom.io",
								]}
								link="http://www.educareenglish.com"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}>
							<ArchiveCard
								title="Educare English Learning Academy"
								desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, cumque enim. Possimus quasi enim, suscipit
						culpa delectus"
								listItem={[
									"Reactjs",
									"Tailwindcss",
									"getfrom.io",
								]}
								link="http://www.educareenglish.com"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3 }}>
							<ArchiveCard
								title="Educare English Learning Academy"
								desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, cumque enim. Possimus quasi enim, suscipit
						culpa delectus"
								listItem={[
									"Reactjs",
									"Tailwindcss",
									"getfrom.io",
								]}
								link="http://www.educareenglish.com"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4 }}>
							<ArchiveCard
								title="Educare English Learning Academy"
								desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, cumque enim. Possimus quasi enim, suscipit
						culpa delectus"
								listItem={[
									"Reactjs",
									"Tailwindcss",
									"getfrom.io",
								]}
								link="http://www.educareenglish.com"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}>
							<ArchiveCard
								title="Educare English Learning Academy"
								desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, cumque enim. Possimus quasi enim, suscipit
						culpa delectus"
								listItem={[
									"Reactjs",
									"Tailwindcss",
									"getfrom.io",
								]}
								link="http://www.educareenglish.com"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6 }}>
							<ArchiveCard
								title="Educare English Learning Academy"
								desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, cumque enim. Possimus quasi enim, suscipit
						culpa delectus"
								listItem={[
									"Reactjs",
									"Tailwindcss",
									"getfrom.io",
								]}
								link="http://www.educareenglish.com"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.7 }}>
							<ArchiveCard
								title="Educare English Learning Academy"
								desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, cumque enim. Possimus quasi enim, suscipit
						culpa delectus"
								listItem={[
									"Reactjs",
									"Tailwindcss",
									"getfrom.io",
								]}
								link="http://www.educareenglish.com"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8 }}>
							<ArchiveCard
								title="Educare English Learning Academy"
								desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, cumque enim. Possimus quasi enim, suscipit
						culpa delectus"
								listItem={[
									"Reactjs",
									"Tailwindcss",
									"getfrom.io",
								]}
								link="http://www.educareenglish.com"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.9 }}>
							<ArchiveCard
								title="Educare English Learning Academy"
								desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, cumque enim. Possimus quasi enim, suscipit
						culpa delectus"
								listItem={[
									"Reactjs",
									"Tailwindcss",
									"getfrom.io",
								]}
								link="http://www.educareenglish.com"
							/>
						</motion.div>
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

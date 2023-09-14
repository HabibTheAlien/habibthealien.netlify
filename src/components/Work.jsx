"use client";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Work = ({ data }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.1 }}>
			<h3 className="flex gap-1 font-medium text-xl font-titleFont">
				{data.post}{" "}
				<span className="text-textGreen tracking-wide">
					@{data.company}
				</span>
			</h3>
			<p
				className="text-sm mt-1 font-medium text-textDark"
				style={{ fontFamily: "Roboto Mono" }}>
				{data.duration}
			</p>
			<ul className="mt-6 flex flex-col gap-3">
				{data.works?.map((item) => (
					<li
						key={item}
						className="text-base flex gap-2 text-textDark">
						<span className="text-textGreen mt-1">
							<TiArrowForward />
						</span>
						{item}
					</li>
				))}
			</ul>
		</motion.div>
	);
};

export default Work;

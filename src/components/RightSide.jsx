"use client";
import React from "react";
import { motion } from "framer-motion";

export default function RightSide() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
			<div className="w-full h-full flex flex-col items-center justify-end gap-20 text-textLight">
				<a href="mailto:habibthealien@gmail.com">
					<p className="text-sm rotate-90 w-72 tracking-wide text-textGreen">
						habibthealien@gmail.com
					</p>
				</a>
				<span className="w-[2px] h-32 bg-textDark inline-flex"></span>
			</div>
		</motion.div>
	);
}

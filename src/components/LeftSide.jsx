"use client";
import { motion } from "framer-motion";
import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import {
	SlSocialYoutube,
	SlSocialFacebook,
	SlSocialInstagram,
	SlSocialLinkedin,
} from "react-icons/sl";

export default function LeftSide() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
			<div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
				<div className="flex flex-col gap-4">
					<a href="https://github.com/habibthealien">
						<span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:text-textGreen">
							<TbBrandGithub />
						</span>
					</a>
					<a href="https://github.com/habibthealien">
						<span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:text-textGreen">
							<SlSocialYoutube />
						</span>
					</a>
					<a href="https://github.com/habibthealien">
						<span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:text-textGreen">
							<SlSocialLinkedin />
						</span>
					</a>
					<a href="https://github.com/habibthealien">
						<span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:text-textGreen">
							<SlSocialFacebook />
						</span>
					</a>
					<a href="https://github.com/habibthealien">
						<span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:text-textGreen">
							<SlSocialInstagram />
						</span>
					</a>
				</div>
				<div className="w-[2px] h-32 bg-textDark"></div>
			</div>
		</motion.div>
	);
}

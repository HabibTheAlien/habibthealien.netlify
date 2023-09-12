"use client";
// import { motion } from "framer-motion";
import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import {
	SlSocialYoutube,
	SlSocialFacebook,
	SlSocialInstagram,
	SlSocialLinkedin,
} from "react-icons/sl";

const Footer = () => {
	return (
		<div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
			<a href="https://github.com/habibthealien">
				<span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:text-textGreen">
					<TbBrandGithub />
				</span>
			</a>
			<a href="https://github.com/habibthealien">
				<span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:text-textGreen">
					<SlSocialYoutube />
				</span>
			</a>
			<a href="https://github.com/habibthealien">
				<span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:text-textGreen">
					<SlSocialLinkedin />
				</span>
			</a>
			<a href="https://github.com/habibthealien">
				<span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:text-textGreen">
					<SlSocialFacebook />
				</span>
			</a>
			<a href="https://github.com/habibthealien">
				<span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:text-textGreen">
					<SlSocialInstagram />
				</span>
			</a>
		</div>
	);
};

export default Footer;

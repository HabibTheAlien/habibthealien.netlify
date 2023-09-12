import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
			<LeftSide />
			<div className="h-[88vh] w-full mx-auto p-4">
				<Banner />
				<About />
				<Experience />
				<Projects />
				<Archive />
				<Contact />
				<Footer />
			</div>
			<RightSide />
		</div>
	);
}

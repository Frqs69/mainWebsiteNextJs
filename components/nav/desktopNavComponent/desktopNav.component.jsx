import Image from "next/image";
import { Link, Events } from "react-scroll";
import { useState, useEffect } from "react";

export default function DesktopNav() {
	const [activeSection, setActiveSection] = useState("home");

	const handleSetActive = (to) => {
		setActiveSection(to);
	};

	// used useEffect for better performance of changing active links, without it links change after while
	useEffect(() => {
		Events.scrollEvent.register("begin", handleSetActive);

		return () => {
			Events.scrollEvent.remove("begin");
		};
	}, []);

	return (
		<nav className='Desktop hidden md:block shadow-lg sticky top-0 bg-white z-20 py-8'>
			<div className='flex justify-between w-3/5 md:min-w-[1100px]  mx-auto  sticky top-0'>
				<a href='#'>
					<Image
						width={50}
						height={20}
						src='/logo-black.png'
						alt=''
						className='w-24'
					/>
				</a>
				<ul className='flex items-center gap-10 font-bold text-mainTextColor text-xl'>
					<li className='hover:text-thirdColor transition-colors duration-300'>
						<Link
							to='home'
							spy={true}
							offset={-100}
							onSetActive={handleSetActive}
							className={`cursor-pointer ${
								activeSection === "home" ? "text-thirdColor" : ""
							}`}>
							Home
						</Link>
					</li>
					<li className='hover:text-thirdColor transition-colors duration-300'>
						<Link
							to='aboutMe'
							spy={true}
							offset={-100}
							onSetActive={handleSetActive}
							className={`cursor-pointer ${
								activeSection === "aboutMe" ? "text-thirdColor" : ""
							}`}>
							About
						</Link>
					</li>
					<li className='hover:text-thirdColor transition-colors duration-300'>
						<Link
							to='portfolio'
							spy={true}
							offset={-100}
							onSetActive={handleSetActive}
							className={`cursor-pointer ${
								activeSection === "portfolio" ? "text-thirdColor" : ""
							}`}>
							Projects
						</Link>
					</li>
					<li className='hover:text-thirdColor transition-colors duration-300'>
						<Link
							to='contact'
							spy={true}
							offset={-100}
							onSetActive={handleSetActive}
							className={`cursor-pointer ${
								activeSection === "contact" ? "text-thirdColor" : ""
							}`}>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

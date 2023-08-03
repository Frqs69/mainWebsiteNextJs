import { Icon } from "@iconify/react";
import Image from "next/image";
import { Link, Events } from "react-scroll";
import { useState, useEffect } from "react";

export default function MobileNav() {
	const [openMenu, setOpenMenu] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	const onClick = () => {
		setOpenMenu(!openMenu);
	};

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
		<nav className='Mobile flex items-center justify-between px-5 shadow-lg sticky top-0 bg-white z-20   md:hidden py-8 '>
			<Image
				width={50}
				height={20}
				src='/logo-black.png'
				alt=''
				className='w-24'
			/>
			<div className=''>
				<Icon
					icon='iconamoon:menu-burger-horizontal'
					width='40px'
					onClick={onClick}
				/>
				<ul
					className={` gap-16 font-bold flex flex-col items-center justify-center  text-mainTextColor text-3xl absolute w-screen  h-screen top-0 left-0 bg-white  transition-transform duration-700  ${
						openMenu ? "translate-x-0" : "translate-x-full "
					}`}>
					<Icon
						icon='gg:close'
						width='40px'
						className='absolute top-7 right-5'
						onClick={onClick}
					/>
					<li>
						<Link
							onClick={onClick}
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
					<li>
						<Link
							onClick={onClick}
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
					<li>
						<Link
							onClick={onClick}
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
					<li>
						<Link
							onClick={onClick}
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

import { useState } from "react";
import { Icon } from "@iconify/react";

export default function MobileNav() {
	const [openMenu, setOpenMenu] = useState(false);

	const onClick = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<nav className='Mobile flex items-center justify-between px-5 shadow-lg sticky top-0 bg-white z-10   md:hidden py-8'>
			<img src='/logo-black.svg' alt='' className='w-24' />
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
					<li onClick={onClick}>
						<a href='#'>Home</a>{" "}
					</li>
					<li onClick={onClick}>
						<a href='#aboutMe'>About</a>
					</li>
					<li onClick={onClick}>
						<a href='#portfolio'>Project</a>
					</li>
					<li onClick={onClick}>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

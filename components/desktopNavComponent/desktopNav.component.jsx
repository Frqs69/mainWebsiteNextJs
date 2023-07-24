export default function DesktopNav() {
	return (
		<nav className='Desktop hidden md:block shadow-lg sticky top-0 bg-white z-10 py-8'>
			<div className='flex justify-between w-3/5 md:min-w-[1100px]  mx-auto  sticky top-0'>
				<a href='#'>
					<img src='/logo-black.svg' alt='' className='w-24' />
				</a>
				<ul className='flex items-center gap-10 font-bold text-mainTextColor text-xl'>
					<li className='hover:text-thirdColor transition-colors duration-300'>
						<a href='#'>Home</a>{" "}
					</li>
					<li className='hover:text-thirdColor transition-colors duration-300'>
						<a href='#aboutMe'>About</a>
					</li>
					<li className='hover:text-thirdColor transition-colors duration-300'>
						<a href='#portfolio'>Project</a>
					</li>
					<li className='hover:text-thirdColor transition-colors duration-300'>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

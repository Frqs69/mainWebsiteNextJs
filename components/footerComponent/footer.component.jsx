import { Icon } from "@iconify/react";

export default function Footer() {
	return (
		<footer className='bg-mainTextColor text-white font-bold p-10 text-center md:px-0'>
			<div className='md:w-3/5  md:min-w-[1100px]  md:mx-auto md:flex md:justify-between md:items-center'>
				<p className='mb-5 md:mb-0 md:text-xl'>
					Copyright © 2023. All rights are reserved
				</p>
				<div className='footerBox flex gap-4 justify-center items-center'>
					<a
						href='https://www.linkedin.com/in/kamil-bazyluk-3a9979174'
						target='_blank'>
						<Icon icon='bi:linkedin' width='30' />
					</a>
					<a href='https://github.com/Frqs69' target='_blank'>
						<Icon icon='mdi:github' width='30' />
					</a>
				</div>
			</div>
		</footer>
	);
}

import { Icon } from "@iconify/react";
export default function ContactList({ icon, title, description }) {
	return (
		<div className='contactBox  mb-10 md:flex md:items-center md:mb-0'>
			<div className='rounded-[50%] shadow-3xl flex justify-center items-center w-14 h-14 mx-auto mb-3 md:w-20 md:h-20'>
				<Icon icon={icon} width='30' color='#147EFB' />
			</div>
			<div className='md:ml-5'>
				<p className='contactBox-title font-bold text-mainTextColor md:mb-1 md:text-xl'>
					{title}
				</p>
				<p className='contactBox-description text-sm text-secondTextColor md:text-lg'>
					{description.includes("@") ? (
						<a
							href='mailto: kbazyluk123@gmail.com'
							className='contactBox-description text-sm text-secondTextColor md:text-lg'>
							{description}
						</a>
					) : (
						`${description}`
					)}
				</p>
			</div>
		</div>
	);
}

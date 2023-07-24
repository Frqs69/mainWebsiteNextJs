import { Icon } from "@iconify/react";

export default function Contact() {
	return (
		<div
			className='contactSection pt-8 md:w-3/5 md:min-w-[1100px]   md:mx-auto md:pt-20 md:pb-20'
			id='contact'>
			<h3 className='font-bold text-thirdColor uppercase text-center mb-3 mt-8 md:text-left md:text-xl'>
				Contact
			</h3>
			<h2 className='font-bold text-mainTextColor text-center text-2xl px-5 mb-6 md:text-left md:text-3xl md:px-0 md:mt-5'>
				Don’t be shy! Hit me up! 👇
			</h2>
			<div className='contactBoxes text-center mt-14 mb-16 md:flex md:gap-20 md:text-left'>
				<div className='contactBox  mb-10 md:flex md:items-center md:mb-0'>
					<div className='rounded-[50%] shadow-3xl flex justify-center items-center w-14 h-14 mx-auto mb-3 md:w-20 md:h-20'>
						<Icon icon='ooui:map-ltr' width='30' color='#147EFB' />
					</div>
					<div className='md:ml-5'>
						<p className='contactBox-title font-bold text-mainTextColor md:mb-1 md:text-xl'>
							Location
						</p>
						<p className='contactBox-description text-sm text-secondTextColor md:text-lg'>
							Warsaw, Poland
						</p>
					</div>
				</div>
				<div className='contactBox md:flex md:items-center'>
					<div className='rounded-[50%] shadow-3xl flex justify-center items-center w-14 h-14 mx-auto  mb-3 md:w-20 md:h-20'>
						<Icon icon='ic:outline-mail' width='30' color='#147EFB' />
					</div>
					<div className='md:ml-5'>
						<p className='contactBox-title font-bold text-mainTextColor md:mb-1 md:text-xl'>
							Mail
						</p>
						<p className='contactBox-description text-sm text-secondTextColor md:text-lg'>
							kbazyluk123@gmail.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

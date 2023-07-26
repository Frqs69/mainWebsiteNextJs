import { Icon } from "@iconify/react";
import HeaderList from "../headerListComponent/headerList.component";
import classes from "./header.module.css";
import Image from "next/image";

export default function Header() {
	return (
		<header className='bg-backgroundColor pt-10 md:pb-10 '>
			<div className='md:w-3/5 md:min-w-[1100px] mx-auto'>
				<div className='md:flex md:flex-row-reverse   mx-auto md:mt-20 md:justify-between'>
					<Image
						src='/me.png'
						alt='my photo'
						width={300}
						height={300}
						className={`mx-auto w-64 h-64 md:w-96 md:h-96 md:mx-0 ${classes.heroImg} `}
					/>

					<div className='md:w-1/2 '>
						<h1 className='font-bold text-4xl text-center my-10 px-12 leading-tight text-mainTextColor  md:text-left md:px-0 md:text-6xl'>
							Front-end React Developer
						</h1>
						<p className='text-secondTextColor text-center px-4 mb-10  md:text-left md:px-0 md:text-lg md:w-4/5'>
							Hi, I&apos;m Kamil. A passionate Front-end React Developer based
							in Warsaw, Poland. 📍
						</p>
						<div className='linkbox flex justify-center gap-3 mb-10 md:justify-normal'>
							<a href='https://github.com/Frqs69' target='_blank'>
								<Icon
									icon='mdi:github'
									width='25'
									className='hover:text-thirdColor transition-colors duration-300'
								/>
							</a>
							<a
								href='https://www.linkedin.com/in/kamil-bazyluk-3a9979174'
								target='_blank'>
								<Icon
									icon='bi:linkedin'
									width='25'
									className='hover:text-thirdColor transition-colors duration-300'
								/>
							</a>
						</div>
					</div>
				</div>
				<div className='techStackBox text-center md:flex md:text-left  md:w-max md:mt-20 md:items-center '>
					<p className='mx-auto border-b-2 w-28 text-center border-x-zinc-200 pb-4 md:text-left md:mx-0 md:border-r-2 md:border-b-0 md:pt-4'>
						Tech Stack
					</p>
					<HeaderList />
				</div>
				<div className='md:mb-80'></div>
			</div>
		</header>
	);
}

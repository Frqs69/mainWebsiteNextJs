import { Icon } from "@iconify/react";
import Image from "next/image";

export default function PortfolioCard({
	img,
	name,
	description,
	githubLink,
	liveLink,
	even,
}) {
	return (
		<div className='project bg-white p-5 rounded-xl shadow-3xl mb-10 md:grid md:grid-cols-2 md:mb-16'>
			{even && (
				<div className='w-full h-40  relative overflow-hidden rounded-xl md:h-full  '>
					<a href={liveLink} target='_blank'>
						<Image
							className='  absolute top-0 w-full transition-all duration-11000 hover:-top-[1880px] ease-linear md:top-0 '
							src={img}
							alt=''
							width={400}
							height={500}
						/>
					</a>
				</div>
			)}

			<div>
				<p className='projectTitle uppercase font-bold text-center my-5 md:text-xl'>
					{name}
				</p>
				<p className='projectDescription text-center text-secondTextColor md:px-24 md:text-lg'>
					{description}
				</p>
				<div className='techStackBox flex gap-3 justify-center my-5'>
					<p className='shadow-3xl px-3 py-2 md:text-xl'>React</p>
					<p className='shadow-3xl px-3 py-2 md:text-xl'>SCSS</p>
				</div>
				<div className='links flex justify-center gap-6 mt-8'>
					<a href={githubLink} className='flex items-center' target='_blank'>
						Code <Icon icon='mdi:github' width='30' className='ml-1' />
					</a>
					<a href={liveLink} className='flex items-center' target='_blank'>
						Live demo{" "}
						<Icon icon='akar-icons:link-out' width='20' className='ml-1' />
					</a>
				</div>
			</div>

			{!even && (
				<div className='w-full h-40  relative overflow-hidden rounded-xl md:h-full  '>
					<Image
						className='  absolute top-0 w-full transition-all duration-11000 hover:-top-[1880px] ease-linear md:top-0 '
						src={img}
						alt=''
						width={400}
						height={500}
					/>
				</div>
			)}
		</div>
	);
}

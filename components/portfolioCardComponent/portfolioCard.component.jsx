import { Icon } from "@iconify/react";
import Image from "next/image";

export default function PortfolioCard({
	img,
	name,
	description,
	githubLink,
	liveLink,
	even,
	technologies,
	isActive,
}) {
	return (
		<div className='project bg-white p-5 rounded-xl shadow-3xl mb-10 md:grid md:grid-cols-2 md:mb-16 relative'>
			{!isActive && (
				<div className='absolute bg-white/80 top-0 left-0 w-full h-full z-10 flex justify-center items-center flex-col'>
					<p className='text-2xl md:text-6xl font-bold tracking-widest text-black -rotate-12'>
						Comming Soon...
					</p>
					<p className='text-2xl md:text-6xl font-bold tracking-widest text-black -rotate-12'>
						🏗
					</p>
				</div>
			)}
			<div
				className={`w-full h-40  relative overflow-hidden rounded-xl md:h-full ${
					even && "order-last"
				} `}>
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

			<div>
				<p className='projectTitle uppercase font-bold text-center my-5 md:text-xl'>
					{name}
				</p>
				<p className='projectDescription text-center text-secondTextColor md:px-24 md:text-lg'>
					{description}
				</p>
				<div className='techStackBox flex gap-3 justify-center my-5'>
					{technologies.map((technology, id) => (
						<p className='shadow-3xl px-3 py-2 md:text-xl' key={id}>
							{technology}
						</p>
					))}
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
		</div>
	);
}

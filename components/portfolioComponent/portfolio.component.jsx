import { Icon } from "@iconify/react";

import PortfolioCard from "../portfolioCardComponent/portfolioCard.component";

export default function Portfolio() {
	return (
		<div
			className='secondSection bg-backgroundColor pt-8 pb-16 '
			id='portfolio'>
			<div className='md:w-3/5 md:min-w-[1100px]  md:mx-auto'>
				<h3 className='font-bold text-thirdColor uppercase text-center mb-3 mt-8 md:text-xl md:text-left md:mt-20'>
					Portfolio
				</h3>
				<h2 className='font-bold text-mainTextColor text-center text-2xl px-2 mb-6 md:text-left md:text-3xl md:px-0 md:mb-20'>
					Each project is a unique piece of development 🧩
				</h2>
				<div className='projectList px-5 md:px-0'>
					<PortfolioCard
						img={"/pizzaWebsiteImgEdited.png"}
						name={"Pizzaku 🍕"}
						description={
							"Pizzaku is an online platform dedicated to satisfying your cravings for delicious pizza. Our website offers a convenient  and user-friendly interface that allows you to order pizza for any occasion, whether it'/s a casual dinner at home or a gathering with friends."
						}
						githubLink={"https://github.com/Frqs69/Pizza-Website"}
						liveLink={"https://pizzasitebyme.netlify.app/"}
						even={true}
					/>
					<PortfolioCard
						img={"/pizzaWebsiteImgEdited.png"}
						name={"Pizzaku 🍕"}
						description={
							"Pizzaku is an online platform dedicated to satisfying your cravings for delicious pizza. Our website offers a convenient  and user-friendly interface that allows you to order pizza for any occasion, whether it'/s a casual dinner at home or a gathering with friends."
						}
						githubLink={"https://github.com/Frqs69/Pizza-Website"}
						liveLink={"https://pizzasitebyme.netlify.app/"}
						even={false}
					/>

					<div className='project bg-white p-5 rounded-xl shadow-3xl mb-10 md:grid md:grid-cols-2'>
						<img className='rounded-xl' src='/mobileImg1.jpg' alt='' />
						<div>
							<p className='projectTitle uppercase font-bold text-center my-5 md:text-xl'>
								car rental
							</p>
							<p className='projectDescription text-center text-secondTextColor md:px-32 md:text-lg'>
								A car rental website is an online platform that allows users to
								rent cars for personal or business use. The website provides an
								interface for searching, comparing, and reserving cars.
							</p>
							<div className='techStackBox flex gap-3 justify-center my-5'>
								<p className='shadow-3xl px-3 py-2 md:text-xl'>React</p>
								<p className='shadow-3xl px-3 py-2 md:text-xl'>SCSS</p>
							</div>
							<div className='links flex justify-center gap-6 mt-8'>
								<a href='' className='flex items-center'>
									Code <Icon icon='mdi:github' width='30' className='ml-1' />
								</a>
								<a href='' className='flex items-center'>
									Live demo{" "}
									<Icon
										icon='akar-icons:link-out'
										width='20'
										className='ml-1'
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

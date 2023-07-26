import PortfolioCard from "../portfolioCardComponent/portfolioCard.component";
import SectionDescription from "@/components/sectionDescription";
import SectionTitle from "@/components/sectionTitle.component";

export default function Portfolio() {
	return (
		<div
			className='secondSection bg-backgroundColor pt-8 pb-16 '
			id='portfolio'>
			<div className='md:w-3/5 md:min-w-[1100px]  md:mx-auto'>
				<SectionDescription>Portfolio</SectionDescription>
				<SectionTitle>
					Each project is a unique piece of development 🧩
				</SectionTitle>
				<div className='projectList px-5 md:px-0 md:mt-16'>
					<PortfolioCard
						img={"/pizzaWebsiteImgEdited.png"}
						name={"Pizzaku 🍕"}
						description={
							"Pizzaku is an online platform dedicated to satisfying your cravings for delicious pizza. Our website offers a convenient  and user-friendly interface that allows you to order pizza for any occasion, whether it'/s a casual dinner at home or a gathering with friends."
						}
						githubLink={"https://github.com/Frqs69/Pizza-Website"}
						liveLink={"https://pizzasitebyme.netlify.app/"}
						even={true}
						technologies={["React", "SCSS"]}
						isActive={true}
					/>
					<PortfolioCard
						img={"/home.png"}
						name={"Fitzone 🏋️‍♀️"}
						description={
							"FitZone - Your Online Fitness Solution. Achieve your goals with ease, at home or with friends. Fitness enthusiasts and beginners, we've got you covered. Join now and start your journey towards a healthier you! Let's make fitness happen together!"
						}
						githubLink={"#"}
						liveLink={"#"}
						even={false}
						technologies={["NextJS", "Tailwind CSS"]}
						isActive={false}
					/>
				</div>
			</div>
		</div>
	);
}

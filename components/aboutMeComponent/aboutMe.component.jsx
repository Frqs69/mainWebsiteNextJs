import Image from "next/image";

export default function AboutMe() {
	return (
		<div
			className='aboutMeSection pt-20 md:w-3/5 md:min-w-[1100px] md:mx-auto md:grid md:grid-cols-2 md:pb-32 md:pt-32'
			id='aboutMe'>
			<Image
				src='/mobileImg1.jpg'
				alt='RandomImg'
				className='rounded-[15px] w-3/4 mx-auto md:mx-0 md:w-10/12 md:h-5/6'
				width={500}
				height={300}
			/>
			<div>
				<h3 className='font-bold text-thirdColor uppercase text-center mb-3 mt-8 md:mt-0 md:text-left md:text-xl'>
					About me
				</h3>
				<h2 className='font-bold text-mainTextColor text-center text-2xl px-2 mb-6 md:text-left md:px-0 md:text-3xl'>
					A dedicated Front-end Developer based in Warsaw, Poland 📍
				</h2>
				<p className='text-secondTextColor text-center px-12 text-sm mb-16 md:text-left md:px-0 md:leading-7 md:text-lg '>
					As a Junior Front-End Developer, I possess an impressive arsenal of
					skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
					designing and maintaining responsive websites that offer a smooth user
					experience. My expertise lies in crafting dynamic, engaging interfaces
					through writing clean and optimized code and utilizing cutting-edge
					development tools and techniques. I am also a team player who thrives
					in collaborating with cross-functional teams to produce outstanding
					web applications.
				</p>
			</div>
		</div>
	);
}

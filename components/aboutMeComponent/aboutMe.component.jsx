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
					As a Junior Front-End Developer, I wield a diverse skill set
					encompassing HTML, CSS, JavaScript, React, Tailwind, and SCSS. My area
					of expertise revolves around designing and maintaining responsive
					websites that offer a seamless and delightful user experience. My
					passion lies in creating dynamic, interactive interfaces through the
					art of writing clean and optimized code, while staying at the
					forefront of cutting-edge development tools and techniques.
				</p>
			</div>
		</div>
	);
}

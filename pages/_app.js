import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "300", "700"],
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>| KiwiCode</title>
				<meta
					name='description'
					content='Explore the impressive portfolio of a skilled Frontend Developer specializing in React, Next.js, and Tailwind CSS. Witness stunning web projects that showcase cutting-edge design, seamless user experiences, and flawless functionality. Enhance your online presence with this SEO-optimized portfolio, featuring a range of dynamic applications and responsive websites. Discover the power of modern web development, brought to life by this talented developer. Visit now for inspiration and collaboration opportunities.'
				/>
				<meta
					name='keywords'
					content='NextJs, React, Tailwind, Front-end, Programmer, projects'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/icon.ico' />
			</Head>
			<main className={poppins.className}>
				<Component {...pageProps} />
			</main>
		</>
	);
}

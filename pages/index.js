import Nav from "@/components/nav/navComponent/nav.component";
import Header from "@/components/header/headerComponent/header.component";
import AboutMe from "@/components/aboutMeComponent/aboutMe.component";
import Portfolio from "@/components/portfolio//portfolioComponent/portfolio.component";
import Contact from "@/components/contact/contactComponent/contact.component";
import Footer from "@/components/footerComponent/footer.component";

export default function Home() {
	return (
		<div className="overflow-x-hidden">
			<Nav />
			<Header />
			<AboutMe />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
}

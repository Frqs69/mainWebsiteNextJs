export default function SectionDescription({ className, children }) {
	return (
		<h3
			className={`font-bold text-thirdColor uppercase text-center mb-3 mt-8 md:text-left md:text-xl ${className}`}>
			{children}
		</h3>
	);
}

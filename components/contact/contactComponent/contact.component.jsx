import SectionDescription from "@/components/sectionDescription";
import ContactListBox from "../contactListBoxComponent/contactListBox.component";
import SectionTitle from "@/components/sectionTitle.component";

export default function Contact() {
	return (
		<div
			className='contactSection pt-8 md:w-3/5 md:min-w-[1100px]   md:mx-auto md:pt-20 md:pb-20'
			name='contact'>
			<SectionDescription>Contact</SectionDescription>
			<SectionTitle>Don’t be shy! Hit me up! 👇</SectionTitle>
			<ContactListBox />
		</div>
	);
}

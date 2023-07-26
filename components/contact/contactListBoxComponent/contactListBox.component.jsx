import ContactList from "../contactListComponent/contactList.component";
export default function ContactListBox() {
	return (
		<div className='contactBoxes text-center mt-14 mb-16 md:flex md:gap-20 md:text-left'>
			<ContactList
				icon={"ooui:map-ltr"}
				title={"Location"}
				description={"Warsaw, Poland"}
			/>
			<ContactList
				icon={"ic:outline-mail"}
				title={"Mail"}
				description={"kbazyluk123@gmail.com"}
			/>
		</div>
	);
}

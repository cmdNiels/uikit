import Accordion from "./Accordion";
import AccordionContent from "./AccordionContent";
import AccordionItem from "./AccordionItem";
import AccordionTrigger from "./AccordionTrigger";

export default {
	title: "UI/Accordion",
};

export const Default = () => (
	<Accordion className="w-96">
		<AccordionItem value="item-1">
			<AccordionTrigger>Is it accessible?</AccordionTrigger>
			<AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-2">
			<AccordionTrigger>Is it styled?</AccordionTrigger>
			<AccordionContent>
				Yes. It comes with default styles that matches the other components&apos; aesthetic.
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-3">
			<AccordionTrigger>Is it animated?</AccordionTrigger>
			<AccordionContent>
				Yes. It&apos;s animated by default, but you can disable it if you prefer.
			</AccordionContent>
		</AccordionItem>
	</Accordion>
);

export const Multiple = () => (
	<Accordion multiple className="w-96">
		<AccordionItem value="item-1">
			<AccordionTrigger>Can I open multiple items?</AccordionTrigger>
			<AccordionContent>Yes! This accordion allows multiple items to be open at once.</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-2">
			<AccordionTrigger>How does it work?</AccordionTrigger>
			<AccordionContent>Just set the multiple prop to true.</AccordionContent>
		</AccordionItem>
	</Accordion>
);

export const DefaultOpen = () => (
	<Accordion defaultValue={["item-1"]} className="w-96">
		<AccordionItem value="item-1">
			<AccordionTrigger>This item is open by default</AccordionTrigger>
			<AccordionContent>
				You can control which items are open by default using the defaultValue prop.
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-2">
			<AccordionTrigger>This item is closed</AccordionTrigger>
			<AccordionContent>But you can open it by clicking the trigger.</AccordionContent>
		</AccordionItem>
	</Accordion>
);

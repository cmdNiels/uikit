import Accordion from "./Accordion";
import AccordionContent from "./AccordionContent";
import AccordionItem from "./AccordionItem";
import AccordionTrigger from "./AccordionTrigger";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Accordion",
};

export const Default: Story<Partial<ComponentProps<typeof Accordion>>> = ({ multiple }) => (
	<Accordion multiple={multiple} className="w-96">
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

Default.args = {
	multiple: false,
};

Default.argTypes = {
	multiple: {
		control: { type: "boolean" },
		defaultValue: false,
	},
};

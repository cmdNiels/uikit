import InputGroupAddon from "@/components/input-group/InputGroupAddon";
import InputGroupText from "@/components/input-group/InputGroupText";

import LinkInput from "./LinkInput";

export default {
	title: "UI/LinkInput",
};

export const Default = () => <LinkInput placeholder="Enter text..." type="text" />;

export const DefaultValue = () => (
	<LinkInput placeholder="Enter text..." type="text" defaultValue="https://example.com" />
);

export const Disabled = () => <LinkInput placeholder="Disabled input" disabled={true} />;

export const WithChildren = () => (
	<LinkInput placeholder="example.com">
		<InputGroupAddon>
			<InputGroupText>https://</InputGroupText>
		</InputGroupAddon>
	</LinkInput>
);

export const WithError = () => <LinkInput placeholder="Invalid input" aria-invalid={true} />;

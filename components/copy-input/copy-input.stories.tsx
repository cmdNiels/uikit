import InputGroupAddon from "@/components/input-group/InputGroupAddon";
import InputGroupText from "@/components/input-group/InputGroupText";

import CopyInput from "./CopyInput";

export default {
	title: "UI/CopyInput",
};

export const Default = () => <CopyInput placeholder="Enter text..." type="text" />;

export const DefaultValue = () => <CopyInput placeholder="Enter text..." type="text" defaultValue="Copy Me" />;

export const Disabled = () => <CopyInput placeholder="Disabled input" disabled={true} />;

export const WithChildren = () => (
	<CopyInput placeholder="Enter text..." type="number">
		<InputGroupAddon>
			<InputGroupText>+1</InputGroupText>
		</InputGroupAddon>
	</CopyInput>
);

export const WithError = () => <CopyInput placeholder="Invalid input" aria-invalid={true} />;

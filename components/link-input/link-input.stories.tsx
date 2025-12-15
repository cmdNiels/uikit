import LinkInput from "./LinkInput";

export default {
	title: "UI/LinkInput",
};

export const Default = () => <LinkInput placeholder="Enter text..." type="text" defaultValue="https://example.com" />;

export const Disabled = () => <LinkInput placeholder="Disabled input" disabled={true} />;

export const WithError = () => <LinkInput placeholder="Invalid input" aria-invalid={true} />;

export const File = () => <LinkInput type="file" />;

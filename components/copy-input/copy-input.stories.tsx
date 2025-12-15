import CopyInput from "./CopyInput";

export default {
	title: "UI/CopyInput",
};

export const Default = () => <CopyInput placeholder="Enter text..." type="text" />;

export const Disabled = () => <CopyInput placeholder="Disabled input" disabled={true} />;

export const WithError = () => <CopyInput placeholder="Invalid input" aria-invalid={true} />;

export const File = () => <CopyInput type="file" />;

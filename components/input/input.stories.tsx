import Input from "./Input";

export default {
	title: "UI/Input",
};

export const Default = () => <Input placeholder="Enter text..." type="text" />;

export const Email = () => <Input type="email" placeholder="Enter your email" />;

export const Password = () => <Input type="password" placeholder="Enter your password" />;

export const Number = () => <Input type="number" placeholder="Enter a number" />;

export const Disabled = () => <Input placeholder="Disabled input" disabled={true} />;

export const WithError = () => <Input placeholder="Invalid input" aria-invalid={true} />;

export const File = () => <Input type="file" />;

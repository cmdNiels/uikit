import Textarea from "./Textarea";

export default {
	title: "UI/Textarea",
};

export const Default = () => <Textarea placeholder="Type your message here..." className="w-[350px]" />;

export const WithRows = () => <Textarea placeholder="Type your message here..." rows={6} className="w-[350px]" />;

export const Disabled = () => <Textarea placeholder="Disabled textarea" disabled={true} className="w-[350px]" />;

export const WithValue = () => (
	<Textarea defaultValue="This is some example text in the textarea." className="w-[350px]" />
);

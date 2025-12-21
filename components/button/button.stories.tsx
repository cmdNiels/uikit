import { IconHome } from "@tabler/icons-react";

import Button from "./Button";

export default {
	title: "UI/Button",
};

export const Default = () => <Button variant="default">Button</Button>;

export const WithIcon = () => (
	<Button variant="default">
		<IconHome />
		Button
	</Button>
);

export const Destructive = () => <Button variant="destructive">Delete</Button>;

export const Outline = () => <Button variant="outline">Outline</Button>;

export const Secondary = () => <Button variant="secondary">Secondary</Button>;

export const Ghost = () => <Button variant="ghost">Ghost</Button>;

export const Link = () => <Button variant="link">Link</Button>;

export const Small = () => <Button size="sm">Small Button</Button>;

export const Large = () => <Button size="lg">Large Button</Button>;

export const Loading = () => <Button loading>Loading</Button>;

export const Disabled = () => <Button disabled>Disabled</Button>;

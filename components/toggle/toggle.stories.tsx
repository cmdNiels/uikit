import { IconBold } from "@tabler/icons-react";

import Toggle from "./Toggle";

export default {
	title: "UI/Toggle",
};

export const Default = () => (
	<Toggle variant="default" size="default">
		<IconBold />
	</Toggle>
);

export const Outline = () => (
	<Toggle variant="outline" size="default">
		<IconBold />
	</Toggle>
);

export const Small = () => (
	<Toggle size="sm">
		<IconBold />
	</Toggle>
);

export const Large = () => (
	<Toggle size="lg">
		<IconBold />
	</Toggle>
);

export const WithText = () => <Toggle variant="default">Toggle</Toggle>;

export const Disabled = () => (
	<Toggle disabled>
		<IconBold />
	</Toggle>
);

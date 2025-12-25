import Error from "./Error";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Error",
};

export const Default: Story<Pick<ComponentProps<typeof Error>, "title" | "message">> = ({ title, message }) => (
	<Error title={title} message={message} />
);

Default.args = {
	title: "Something went wrong",
	message: "An unexpected error occurred. Please try again later.",
};

Default.argTypes = {
	title: {
		control: { type: "text" },
		defaultValue: "Something went wrong",
	},
	message: {
		control: { type: "text" },
		defaultValue: "An unexpected error occurred. Please try again later.",
	},
};

import Image from "next/image";

import AspectRatio from "./AspectRatio";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/AspectRatio",
};

export const Default: Story<
	Pick<ComponentProps<typeof AspectRatio>, "ratio"> & {
		width: string;
	}
> = ({ ratio, width }) => (
	<AspectRatio ratio={ratio} className="overflow-hidden rounded-md" style={{ width }}>
		<Image
			src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
			alt="Photo"
			className="size-full object-cover"
		/>
	</AspectRatio>
);

Default.args = {
	ratio: 16 / 9,
	width: "384px",
};

Default.argTypes = {
	ratio: {
		control: { type: "select" },
		options: [1, 16 / 9, 4 / 3, 3 / 4, 21 / 9],
		defaultValue: 16 / 9,
	},
	width: {
		control: { type: "text" },
		defaultValue: "384px",
	},
};

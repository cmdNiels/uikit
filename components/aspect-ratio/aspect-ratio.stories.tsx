import Image from "next/image";

import AspectRatio from "./AspectRatio";

export default {
	title: "UI/AspectRatio",
};

export const Square = () => (
	<AspectRatio ratio={1} className="w-64 overflow-hidden rounded-md">
		<Image
			src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
			alt="Photo"
			className="size-full object-cover"
		/>
	</AspectRatio>
);

export const Video = () => (
	<AspectRatio ratio={16 / 9} className="w-96 overflow-hidden rounded-md bg-muted">
		<Image
			src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
			alt="Photo"
			className="size-full object-cover"
		/>
	</AspectRatio>
);

export const Portrait = () => (
	<AspectRatio ratio={3 / 4} className="w-64 overflow-hidden rounded-md">
		<Image
			src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
			alt="Photo"
			className="size-full object-cover"
		/>
	</AspectRatio>
);

export const Ultrawide = () => (
	<AspectRatio ratio={21 / 9} className="w-96 overflow-hidden rounded-md bg-muted">
		<Image
			src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
			alt="Photo"
			className="size-full object-cover"
		/>
	</AspectRatio>
);

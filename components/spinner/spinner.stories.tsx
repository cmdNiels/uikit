import Spinner from "./Spinner";

export default {
	title: "UI/Spinner",
};

export const Default = () => <Spinner />;

export const Small = () => <Spinner className="size-3" />;

export const Medium = () => <Spinner className="size-6" />;

export const Large = () => <Spinner className="size-8" />;

export const ExtraLarge = () => <Spinner className="size-12" />;

export const CustomColor = () => <Spinner className="text-blue-500" />;

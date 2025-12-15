import Checkbox from "./Checkbox";

export default {
	title: "UI/Checkbox",
};

export const Default = () => <Checkbox />;

export const Checked = () => <Checkbox defaultChecked={true} />;

export const Disabled = () => <Checkbox disabled={true} />;

export const CheckedDisabled = () => <Checkbox defaultChecked={true} disabled={true} />;

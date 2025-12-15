import Switch from "./Switch";

export default {
	title: "UI/Switch",
};

export const Default = () => <Switch size="default" />;

export const Small = () => <Switch size="sm" />;

export const Checked = () => <Switch defaultChecked={true} size="default" />;

export const Disabled = () => <Switch disabled={true} />;

export const CheckedDisabled = () => <Switch defaultChecked={true} disabled={true} />;

export const WithLabel = () => (
	<div className="flex items-center space-x-2">
		<Switch id="airplane-mode" />
		<label htmlFor="airplane-mode" className="text-sm leading-none font-medium">
			Airplane Mode
		</label>
	</div>
);

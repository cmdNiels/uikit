import Select from "./Select";
import SelectContent from "./SelectContent";
import SelectGroup from "./SelectGroup";
import SelectItem from "./SelectItem";
import SelectTrigger from "./SelectTrigger";
import SelectValue from "./SelectValue";

export default {
	title: "UI/Select",
};

export const Default = () => (
	<Select>
		<SelectTrigger>
			<SelectValue />
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="cherry">Cherry</SelectItem>
				<SelectItem value="grape">Grape</SelectItem>
				<SelectItem value="orange">Orange</SelectItem>
			</SelectGroup>
		</SelectContent>
	</Select>
);

export const Small = () => (
	<Select>
		<SelectTrigger size="sm">
			<SelectValue />
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="cherry">Cherry</SelectItem>
			</SelectGroup>
		</SelectContent>
	</Select>
);

export const WithDefaultValue = () => (
	<Select defaultValue="banana">
		<SelectTrigger>
			<SelectValue />
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="cherry">Cherry</SelectItem>
			</SelectGroup>
		</SelectContent>
	</Select>
);

export const Disabled = () => (
	<Select>
		<SelectTrigger disabled>
			<SelectValue />
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
			</SelectGroup>
		</SelectContent>
	</Select>
);

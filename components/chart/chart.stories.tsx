import {
	Area,
	AreaChart,
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	Line,
	LineChart,
	Pie,
	PieChart,
	RadialBar,
	RadialBarChart,
	XAxis,
	YAxis,
} from "recharts";

import ChartContainer from "./ChartContainer";
import { type ChartConfig } from "./ChartContext";
import ChartLegend from "./ChartLegend";
import ChartLegendContent from "./ChartLegendContent";
import ChartTooltip from "./ChartTooltip";
import ChartTooltipContent from "./ChartTooltipContent";

export default {
	title: "UI/Chart",
};

const chartData = [
	{ month: "January", desktop: 186, mobile: 80 },
	{ month: "February", desktop: 305, mobile: 200 },
	{ month: "March", desktop: 237, mobile: 120 },
	{ month: "April", desktop: 73, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
	{ month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "#2563eb",
	},
	mobile: {
		label: "Mobile",
		color: "#60a5fa",
	},
} satisfies ChartConfig;

export const Default = () => (
	<ChartContainer config={chartConfig} className="min-h-52 w-full">
		<BarChart accessibilityLayer data={chartData}>
			<CartesianGrid vertical={false} />
			<XAxis
				dataKey="month"
				tickLine={false}
				tickMargin={10}
				axisLine={false}
				tickFormatter={(value) => value.slice(0, 3)}
			/>
			<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
			<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
		</BarChart>
	</ChartContainer>
);

export const BarChartWithTooltip = () => (
	<ChartContainer config={chartConfig} className="min-h-52 w-full">
		<BarChart accessibilityLayer data={chartData}>
			<CartesianGrid vertical={false} />
			<XAxis
				dataKey="month"
				tickLine={false}
				tickMargin={10}
				axisLine={false}
				tickFormatter={(value) => value.slice(0, 3)}
			/>
			<ChartTooltip cursor={false} content={(props) => <ChartTooltipContent {...props} indicator="line" />} />
			<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
			<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
		</BarChart>
	</ChartContainer>
);

export const BarChartWithLegend = () => (
	<ChartContainer config={chartConfig} className="min-h-52 w-full">
		<BarChart accessibilityLayer data={chartData}>
			<CartesianGrid vertical={false} />
			<XAxis
				dataKey="month"
				tickLine={false}
				tickMargin={10}
				axisLine={false}
				tickFormatter={(value) => value.slice(0, 3)}
			/>
			<ChartTooltip cursor={false} content={(props) => <ChartTooltipContent {...props} />} />
			<ChartLegend content={(props) => <ChartLegendContent {...props} />} />
			<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
			<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
		</BarChart>
	</ChartContainer>
);

export const StackedBarChart = () => (
	<ChartContainer config={chartConfig} className="min-h-52 w-full">
		<BarChart accessibilityLayer data={chartData}>
			<CartesianGrid vertical={false} />
			<XAxis
				dataKey="month"
				tickLine={false}
				tickMargin={10}
				axisLine={false}
				tickFormatter={(value) => value.slice(0, 3)}
			/>
			<ChartTooltip cursor={false} content={(props) => <ChartTooltipContent {...props} />} />
			<ChartLegend content={(props) => <ChartLegendContent {...props} />} />
			<Bar dataKey="desktop" stackId="a" fill="var(--color-desktop)" radius={[0, 0, 4, 4]} />
			<Bar dataKey="mobile" stackId="a" fill="var(--color-mobile)" radius={[4, 4, 0, 0]} />
		</BarChart>
	</ChartContainer>
);

const lineChartData = [
	{ month: "January", desktop: 186, mobile: 80 },
	{ month: "February", desktop: 305, mobile: 200 },
	{ month: "March", desktop: 237, mobile: 120 },
	{ month: "April", desktop: 73, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
	{ month: "June", desktop: 214, mobile: 140 },
	{ month: "July", desktop: 267, mobile: 180 },
];

export const LineChartExample = () => (
	<ChartContainer config={chartConfig} className="min-h-52 w-full">
		<LineChart accessibilityLayer data={lineChartData}>
			<CartesianGrid vertical={false} />
			<XAxis
				dataKey="month"
				tickLine={false}
				tickMargin={10}
				axisLine={false}
				tickFormatter={(value) => value.slice(0, 3)}
			/>
			<ChartTooltip cursor={false} content={(props) => <ChartTooltipContent {...props} />} />
			<ChartLegend content={(props) => <ChartLegendContent {...props} />} />
			<Line type="monotone" dataKey="desktop" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
			<Line type="monotone" dataKey="mobile" stroke="var(--color-mobile)" strokeWidth={2} dot={false} />
		</LineChart>
	</ChartContainer>
);

export const LineChartWithDots = () => (
	<ChartContainer config={chartConfig} className="min-h-52 w-full">
		<LineChart accessibilityLayer data={lineChartData}>
			<CartesianGrid vertical={false} />
			<XAxis
				dataKey="month"
				tickLine={false}
				tickMargin={10}
				axisLine={false}
				tickFormatter={(value) => value.slice(0, 3)}
			/>
			<ChartTooltip content={(props) => <ChartTooltipContent {...props} />} />
			<ChartLegend content={(props) => <ChartLegendContent {...props} />} />
			<Line
				type="monotone"
				dataKey="desktop"
				stroke="var(--color-desktop)"
				strokeWidth={2}
				dot={{ fill: "var(--color-desktop)" }}
			/>
			<Line
				type="monotone"
				dataKey="mobile"
				stroke="var(--color-mobile)"
				strokeWidth={2}
				dot={{ fill: "var(--color-mobile)" }}
			/>
		</LineChart>
	</ChartContainer>
);

export const AreaChartExample = () => (
	<ChartContainer config={chartConfig} className="min-h-52 w-full">
		<AreaChart accessibilityLayer data={lineChartData}>
			<CartesianGrid vertical={false} />
			<XAxis
				dataKey="month"
				tickLine={false}
				tickMargin={10}
				axisLine={false}
				tickFormatter={(value) => value.slice(0, 3)}
			/>
			<ChartTooltip content={(props) => <ChartTooltipContent {...props} />} />
			<ChartLegend content={(props) => <ChartLegendContent {...props} />} />
			<Area
				type="monotone"
				dataKey="desktop"
				stroke="var(--color-desktop)"
				fill="var(--color-desktop)"
				fillOpacity={0.2}
			/>
			<Area
				type="monotone"
				dataKey="mobile"
				stroke="var(--color-mobile)"
				fill="var(--color-mobile)"
				fillOpacity={0.2}
			/>
		</AreaChart>
	</ChartContainer>
);

export const StackedAreaChart = () => (
	<ChartContainer config={chartConfig} className="min-h-52 w-full">
		<AreaChart accessibilityLayer data={lineChartData}>
			<CartesianGrid vertical={false} />
			<XAxis
				dataKey="month"
				tickLine={false}
				tickMargin={10}
				axisLine={false}
				tickFormatter={(value) => value.slice(0, 3)}
			/>
			<ChartTooltip content={(props) => <ChartTooltipContent {...props} />} />
			<ChartLegend content={(props) => <ChartLegendContent {...props} />} />
			<Area
				type="monotone"
				dataKey="desktop"
				stackId="1"
				stroke="var(--color-desktop)"
				fill="var(--color-desktop)"
				fillOpacity={0.6}
			/>
			<Area
				type="monotone"
				dataKey="mobile"
				stackId="1"
				stroke="var(--color-mobile)"
				fill="var(--color-mobile)"
				fillOpacity={0.6}
			/>
		</AreaChart>
	</ChartContainer>
);

const pieChartData = [
	{ category: "Desktop", visitors: 275, fill: "var(--color-desktop)" },
	{ category: "Mobile", visitors: 200, fill: "var(--color-mobile)" },
	{ category: "Tablet", visitors: 187, fill: "var(--color-tablet)" },
];

const pieChartConfig = {
	visitors: {
		label: "Visitors",
	},
	desktop: {
		label: "Desktop",
		color: "#2563eb",
	},
	mobile: {
		label: "Mobile",
		color: "#60a5fa",
	},
	tablet: {
		label: "Tablet",
		color: "#8b5cf6",
	},
} satisfies ChartConfig;

export const PieChartExample = () => (
	<ChartContainer config={pieChartConfig} className="mx-auto aspect-square min-h-64">
		<PieChart>
			<ChartTooltip cursor={false} content={(props) => <ChartTooltipContent {...props} hideLabel />} />
			<Pie data={pieChartData} dataKey="visitors" nameKey="category" />
		</PieChart>
	</ChartContainer>
);

export const PieChartWithLabels = () => (
	<ChartContainer config={pieChartConfig} className="mx-auto aspect-square min-h-64">
		<PieChart>
			<ChartTooltip cursor={false} content={(props) => <ChartTooltipContent {...props} hideLabel />} />
			<ChartLegend content={(props) => <ChartLegendContent {...props} />} />
			<Pie data={pieChartData} dataKey="visitors" nameKey="category" label />
		</PieChart>
	</ChartContainer>
);

export const DonutChart = () => (
	<ChartContainer config={pieChartConfig} className="mx-auto aspect-square min-h-64">
		<PieChart>
			<ChartTooltip cursor={false} content={(props) => <ChartTooltipContent {...props} hideLabel />} />
			<ChartLegend content={(props) => <ChartLegendContent {...props} />} />
			<Pie data={pieChartData} dataKey="visitors" nameKey="category" innerRadius={60} />
		</PieChart>
	</ChartContainer>
);

const radialChartData = [
	{ browser: "Chrome", visitors: 275, fill: "var(--color-chrome)" },
	{ browser: "Safari", visitors: 200, fill: "var(--color-safari)" },
	{ browser: "Firefox", visitors: 187, fill: "var(--color-firefox)" },
	{ browser: "Edge", visitors: 173, fill: "var(--color-edge)" },
];

const radialChartConfig = {
	visitors: {
		label: "Visitors",
	},
	chrome: {
		label: "Chrome",
		color: "#2563eb",
	},
	safari: {
		label: "Safari",
		color: "#60a5fa",
	},
	firefox: {
		label: "Firefox",
		color: "#f97316",
	},
	edge: {
		label: "Edge",
		color: "#8b5cf6",
	},
} satisfies ChartConfig;

export const RadialBarChartExample = () => (
	<ChartContainer config={radialChartConfig} className="mx-auto aspect-square min-h-64">
		<RadialBarChart data={radialChartData} innerRadius={30} outerRadius={110}>
			<ChartTooltip cursor={false} content={(props) => <ChartTooltipContent {...props} hideLabel />} />
			<ChartLegend content={(props) => <ChartLegendContent {...props} />} />
			<RadialBar dataKey="visitors" />
		</RadialBarChart>
	</ChartContainer>
);

const mixedChartData = [
	{ month: "January", revenue: 4000, expenses: 2400, profit: 1600 },
	{ month: "February", revenue: 3000, expenses: 1398, profit: 1602 },
	{ month: "March", revenue: 2000, expenses: 9800, profit: -7800 },
	{ month: "April", revenue: 2780, expenses: 3908, profit: -1128 },
	{ month: "May", revenue: 1890, expenses: 4800, profit: -2910 },
	{ month: "June", revenue: 2390, expenses: 3800, profit: -1410 },
];

const mixedChartConfig = {
	revenue: {
		label: "Revenue",
		color: "#10b981",
	},
	expenses: {
		label: "Expenses",
		color: "#ef4444",
	},
	profit: {
		label: "Profit",
		color: "#8b5cf6",
	},
} satisfies ChartConfig;

export const MixedBarChart = () => (
	<ChartContainer config={mixedChartConfig} className="min-h-52 w-full">
		<BarChart accessibilityLayer data={mixedChartData}>
			<CartesianGrid vertical={false} />
			<XAxis
				dataKey="month"
				tickLine={false}
				tickMargin={10}
				axisLine={false}
				tickFormatter={(value) => value.slice(0, 3)}
			/>
			<YAxis tickLine={false} axisLine={false} tickMargin={8} />
			<ChartTooltip content={(props) => <ChartTooltipContent {...props} />} />
			<ChartLegend content={(props) => <ChartLegendContent {...props} />} />
			<Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
			<Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
		</BarChart>
	</ChartContainer>
);

export const HorizontalBarChart = () => (
	<ChartContainer config={chartConfig} className="min-h-52 w-full">
		<BarChart accessibilityLayer data={chartData} layout="vertical">
			<CartesianGrid horizontal={false} />
			<YAxis
				dataKey="month"
				type="category"
				tickLine={false}
				tickMargin={10}
				axisLine={false}
				tickFormatter={(value) => value.slice(0, 3)}
			/>
			<XAxis type="number" hide />
			<ChartTooltip content={(props) => <ChartTooltipContent {...props} />} />
			<ChartLegend content={(props) => <ChartLegendContent {...props} />} />
			<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
			<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
		</BarChart>
	</ChartContainer>
);

const temperatureData = [
	{ time: "00:00", temperature: 15 },
	{ time: "04:00", temperature: 12 },
	{ time: "08:00", temperature: 18 },
	{ time: "12:00", temperature: 24 },
	{ time: "16:00", temperature: 27 },
	{ time: "20:00", temperature: 21 },
];

const temperatureConfig = {
	temperature: {
		label: "Temperature (°C)",
		color: "#f59e0b",
	},
} satisfies ChartConfig;

export const SimpleLineChart = () => (
	<ChartContainer config={temperatureConfig} className="min-h-52 w-full">
		<LineChart accessibilityLayer data={temperatureData}>
			<CartesianGrid vertical={false} />
			<XAxis dataKey="time" tickLine={false} tickMargin={10} axisLine={false} />
			<YAxis tickLine={false} axisLine={false} tickMargin={8} />
			<ChartTooltip content={(props) => <ChartTooltipContent {...props} />} />
			<Line
				type="monotone"
				dataKey="temperature"
				stroke="var(--color-temperature)"
				strokeWidth={2}
				dot={{ fill: "var(--color-temperature)", r: 4 }}
			/>
		</LineChart>
	</ChartContainer>
);

const colorfulData = [
	{ name: "A", value: 80, color: "#ef4444" },
	{ name: "B", value: 45, color: "#f59e0b" },
	{ name: "C", value: 25, color: "#10b981" },
	{ name: "D", value: 60, color: "#3b82f6" },
	{ name: "E", value: 35, color: "#8b5cf6" },
];

const colorfulConfig = {
	value: {
		label: "Value",
	},
} satisfies ChartConfig;

export const MultiColorBarChart = () => (
	<ChartContainer config={colorfulConfig} className="min-h-52 w-full">
		<BarChart accessibilityLayer data={colorfulData}>
			<CartesianGrid vertical={false} />
			<XAxis dataKey="name" tickLine={false} tickMargin={10} axisLine={false} />
			<ChartTooltip content={(props) => <ChartTooltipContent {...props} />} />
			<Bar dataKey="value" radius={4}>
				{colorfulData.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={entry.color} />
				))}
			</Bar>
		</BarChart>
	</ChartContainer>
);

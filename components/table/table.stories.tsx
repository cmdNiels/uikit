import Table from "./Table";
import TableBody from "./TableBody";
import TableCaption from "./TableCaption";
import TableCell from "./TableCell";
import TableFooter from "./TableFooter";
import TableHead from "./TableHead";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default {
	title: "UI/Table",
};

const invoices = [
	{
		invoice: "INV001",
		paymentStatus: "Paid",
		totalAmount: "$250.00",
		paymentMethod: "Credit Card",
	},
	{
		invoice: "INV002",
		paymentStatus: "Pending",
		totalAmount: "$150.00",
		paymentMethod: "PayPal",
	},
	{
		invoice: "INV003",
		paymentStatus: "Unpaid",
		totalAmount: "$350.00",
		paymentMethod: "Bank Transfer",
	},
];

export const Default = () => (
	<Table>
		<TableCaption>A list of your recent invoices.</TableCaption>
		<TableHeader>
			<TableRow>
				<TableHead className="w-[100px]">Invoice</TableHead>
				<TableHead>Status</TableHead>
				<TableHead>Method</TableHead>
				<TableHead className="text-right">Amount</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			{invoices.map((invoice) => (
				<TableRow key={invoice.invoice}>
					<TableCell className="font-medium">{invoice.invoice}</TableCell>
					<TableCell>{invoice.paymentStatus}</TableCell>
					<TableCell>{invoice.paymentMethod}</TableCell>
					<TableCell className="text-right">{invoice.totalAmount}</TableCell>
				</TableRow>
			))}
		</TableBody>
	</Table>
);

export const WithFooter = () => (
	<Table>
		<TableHeader>
			<TableRow>
				<TableHead>Item</TableHead>
				<TableHead>Quantity</TableHead>
				<TableHead className="text-right">Price</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			<TableRow>
				<TableCell>Product A</TableCell>
				<TableCell>2</TableCell>
				<TableCell className="text-right">$100.00</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>Product B</TableCell>
				<TableCell>1</TableCell>
				<TableCell className="text-right">$50.00</TableCell>
			</TableRow>
		</TableBody>
		<TableFooter>
			<TableRow>
				<TableCell colSpan={2}>Total</TableCell>
				<TableCell className="text-right">$150.00</TableCell>
			</TableRow>
		</TableFooter>
	</Table>
);

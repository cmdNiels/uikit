import Pagination from "./Pagination";
import PaginationContent from "./PaginationContent";
import PaginationEllipsis from "./PaginationEllipsis";
import PaginationItem from "./PaginationItem";
import PaginationLink from "./PaginationLink";
import PaginationNext from "./PaginationNext";
import PaginationPrevious from "./PaginationPrevious";

export default {
	title: "UI/Pagination",
};

export const Default = () => (
	<Pagination>
		<PaginationContent>
			<PaginationItem>
				<PaginationPrevious />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink isActive>1</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink>2</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink>3</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationEllipsis />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink>8</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink>9</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationNext />
			</PaginationItem>
		</PaginationContent>
	</Pagination>
);

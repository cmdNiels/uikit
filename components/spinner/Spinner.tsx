import { IconLoader } from "@tabler/icons-react";
import { type ComponentProps } from "react";

import cn from "@/cn";

export default function Spinner({ className, ...props }: ComponentProps<typeof IconLoader>) {
	return (
		<IconLoader role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...props} />
	);
}

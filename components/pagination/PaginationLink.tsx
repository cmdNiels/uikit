import cn from "@/cn";
import Button from "@/components/button/Button";

import type { ComponentProps } from "react";

type PaginationLinkProps = {
	isActive?: boolean;
} & Pick<ComponentProps<typeof Button>, "size"> &
	ComponentProps<"a">;

export default function PaginationLink({ className, isActive, size = "icon", ...props }: PaginationLinkProps) {
	return (
		<Button
			variant={isActive ? "outline" : "ghost"}
			size={size}
			className={cn(className)}
			nativeButton={false}
			render={
				<a
					aria-current={isActive ? "page" : undefined}
					data-slot="pagination-link"
					data-active={isActive}
					{...props}
				/>
			}
		/>
	);
}

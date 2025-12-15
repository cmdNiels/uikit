import cn from "@/cn";
import Button from "@/components/button/Button";

import type { ComponentProps } from "react";

export default function AlertDialogAction({ className, ...props }: ComponentProps<typeof Button>) {
	return <Button data-slot="alert-dialog-action" className={cn(className)} {...props} />;
}

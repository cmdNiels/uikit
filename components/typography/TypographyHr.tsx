import { forwardRef, type ComponentProps } from "react";

const TypographyHr = forwardRef<HTMLHRElement, ComponentProps<"hr">>(({ ...props }, ref) => (
	<hr ref={ref} className="my-4 md:my-8" {...props} />
));

TypographyHr.displayName = "TypographyHr";

export default TypographyHr;

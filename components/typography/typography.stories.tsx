import TypographyBlockquote from "./TypographyBlockquote";
import TypographyH1 from "./TypographyH1";
import TypographyH2 from "./TypographyH2";
import TypographyH3 from "./TypographyH3";
import TypographyH4 from "./TypographyH4";
import TypographyInlineCode from "./TypographyInlineCode";
import TypographyLi from "./TypographyLi";
import TypographyList from "./TypographyList";
import TypographyP from "./TypographyP";

export default {
	title: "UI/Typography",
};

export const Headings = () => (
	<div className="w-[600px] space-y-4">
		<TypographyH1>Heading 1</TypographyH1>
		<TypographyH2>Heading 2</TypographyH2>
		<TypographyH3>Heading 3</TypographyH3>
		<TypographyH4>Heading 4</TypographyH4>
	</div>
);

export const Paragraph = () => (
	<div className="w-[600px]">
		<TypographyP>
			This is a paragraph of text that demonstrates the default typography styling. It includes proper line
			height, spacing, and other typographic considerations for optimal readability.
		</TypographyP>
	</div>
);

export const Blockquote = () => (
	<div className="w-[600px]">
		<TypographyBlockquote>
			&quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so it&apos;s only fair that they should
			pay for the privilege.&quot;
		</TypographyBlockquote>
	</div>
);

export const InlineCode = () => (
	<div className="w-[600px]">
		<TypographyP>
			You can use the <TypographyInlineCode>useState</TypographyInlineCode> hook to manage component state.
		</TypographyP>
	</div>
);

export const List = () => (
	<div className="w-[600px]">
		<TypographyList>
			<TypographyLi>First item in the list</TypographyLi>
			<TypographyLi>Second item in the list</TypographyLi>
			<TypographyLi>Third item in the list</TypographyLi>
		</TypographyList>
	</div>
);

export const Combined = () => (
	<div className="w-[600px] space-y-6">
		<TypographyH2>Welcome to our UIKit</TypographyH2>
		<TypographyP>
			This is a complete typography system built with React and TypeScript. It includes all the essential elements
			you need for rich text content.
		</TypographyP>
		<TypographyH3>Features</TypographyH3>
		<TypographyList>
			<TypographyLi>Consistent styling across all text elements</TypographyLi>
			<TypographyLi>Accessible and semantic HTML</TypographyLi>
			<TypographyLi>Easy to customize with Tailwind CSS</TypographyLi>
		</TypographyList>
		<TypographyBlockquote>Good typography is invisible. Bad typography is everywhere.</TypographyBlockquote>
	</div>
);

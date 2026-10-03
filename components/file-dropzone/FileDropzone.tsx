import { IconUpload } from "@tabler/icons-react";
import { useState, type DragEvent, type RefObject } from "react";

import cn from "@/cn";

export default function FileDropzone({
	fileInputRef,
	onFileUpload,
	accept = "*/*",
	maxSize = "10MB",
	className,
}: {
	fileInputRef: RefObject<HTMLInputElement | null>;
	onFileUpload(file: File): void;
	accept?: string;
	maxSize?: string;
	className?: string;
}) {
	const [isDragActive, setIsDragActive] = useState(false);

	const handleFileSelect = (files: FileList | null) => {
		if (files?.[0]) {
			onFileUpload(files[0]);
		}
	};

	const handleBoxClick = () => {
		fileInputRef.current?.click();
	};

	const handleDragEnter = (e: DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragActive(true);
	};

	const handleDragLeave = (e: DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragActive(false);
	};

	const handleDragOver = (e: DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const handleDrop = (e: DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragActive(false);

		const files = Array.from(e.dataTransfer.files);
		if (files.length > 0) {
			onFileUpload(files[0]);
		}
	};

	return (
		<div
			className={cn(
				"flex cursor-pointer flex-col items-center justify-center rounded-lg border-border p-8 text-center transition-colors",
				isDragActive ? "border bg-card" : "border-dashed",
				className
			)}
			onClick={handleBoxClick}
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
			onDragOver={handleDragOver}
			onDrop={handleDrop}
		>
			<div className="mb-2">
				<IconUpload
					className={cn("size-8 ", isDragActive ? "text-card-foreground" : "text-muted-foreground")}
				/>
			</div>
			<p className="text-sm font-medium text-card-foreground">
				{isDragActive ? "Drop file here" : "Choose a file or drag and drop"}
			</p>
			<p className="mt-1 text-xs text-muted-foreground">({maxSize} max)</p>
			<input
				type="file"
				ref={fileInputRef}
				className="hidden"
				accept={accept}
				onChange={(e) => handleFileSelect(e.target.files)}
			/>
		</div>
	);
}

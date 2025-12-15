"use client";

import { useRef } from "react";

import FileDropzone from "./FileDropzone";

export default {
	title: "UI/FileDropzone",
};

function DefaultExample() {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileUpload = (_file: File) => {
		// File uploaded successfully
	};

	return <FileDropzone fileInputRef={fileInputRef} onFileUpload={handleFileUpload} />;
}

export const Default = () => <DefaultExample />;

function ImagesOnlyExample() {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileUpload = (_file: File) => {
		// Image uploaded successfully
	};

	return <FileDropzone fileInputRef={fileInputRef} onFileUpload={handleFileUpload} accept="image/*" />;
}

export const ImagesOnly = () => <ImagesOnlyExample />;

function CustomMaxSizeExample() {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileUpload = (_file: File) => {
		// File uploaded successfully
	};

	return <FileDropzone fileInputRef={fileInputRef} onFileUpload={handleFileUpload} maxSize="5MB" />;
}

export const CustomMaxSize = () => <CustomMaxSizeExample />;

function PDFOnlyExample() {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileUpload = (_file: File) => {
		// PDF uploaded successfully
	};

	return (
		<FileDropzone
			fileInputRef={fileInputRef}
			onFileUpload={handleFileUpload}
			accept="application/pdf"
			maxSize="20MB"
		/>
	);
}

export const PDFOnly = () => <PDFOnlyExample />;

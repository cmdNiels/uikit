import { useRef } from "react";

export default function useComboboxAnchor() {
	return useRef<HTMLDivElement | null>(null);
}

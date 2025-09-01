export type VisibilityEntry = { id: string; ratio: number };

/**
 * Given a list of entries with { id, ratio }, returns the id with the highest ratio (> 0),
 * or null if none are visible.
 */
export function pickMostVisibleId(entries: VisibilityEntry[]): string | null {
	let best: VisibilityEntry | null = null;
	for (const e of entries) {
		if (e.ratio <= 0) continue;
		if (!best || e.ratio > best.ratio) best = e;
	}
	return best ? best.id : null;
}

/**
 * Returns true when scrollY indicates the header should be considered scrolled.
 */
export function isScrolledFromY(scrollY: number, threshold = 8): boolean {
	return scrollY > threshold;
}

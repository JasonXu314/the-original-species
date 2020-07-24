export function makeStyles(...classes: (string | undefined)[]): string {
	return classes.filter((cls) => cls !== undefined).join(' ');
}

/* yields [
	occupied positions, 
	is current position of queen valid, 
	is board full and valid, 
	columns under attack, 
	left diagonals under attack, 
	right diagonals under attack
]
 */
function* solve(n, cls = [], ld = new Set(), rd = new Set(), cols = new Set()) {
	if (cls.length !== n) yield [cls, true, false, cols, ld, rd];
	if (cls.length === n) {
		yield [cls, true, true, cols, ld, rd];
	} else {
		for (let i = 0; i < n; i++)
			if (
				!cols.has(i) &&
				!ld.has(cls.length + i) &&
				!rd.has(cls.length + n - i)
			) {
				cols.add(i);
				ld.add(cls.length + i);
				rd.add(cls.length + n - i);
				yield* solve(n, [...cls, i], ld, rd, cols);
				cols.delete(i);
				ld.delete(cls.length + i);
				rd.delete(cls.length + n - i);
			} else {
				yield [[...cls, i], false, false, cols, ld, rd];
			}
	}
}
export default solve;

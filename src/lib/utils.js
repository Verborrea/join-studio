const colores = ['var(--red)', '#FF7F3A', '#FFCA3A', '#8AC926', '#1982C4', '#6A4C93', '#1C1D20'];
const delays = [0.0, 0.4, 0.6, 0.8, 1.0, 1.2, 1.6];

export function crearCopiasPath(idPath, delay = 0) {
	const pathOriginal = document.getElementById(idPath);

	if (!pathOriginal) { return }

	console.log('troste')

	let refchild = pathOriginal

	colores.forEach((color, index) => {
		const nuevoPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		nuevoPath.setAttribute('class', 'path');
		nuevoPath.setAttribute('d', pathOriginal.getAttribute('d'));
		nuevoPath.setAttribute('stroke', color);
		nuevoPath.setAttribute('stroke-width', pathOriginal.getAttribute('stroke-width') || '1');
		nuevoPath.style.setProperty('--delay', `${delays[index] + delay}s`);
		nuevoPath.style.setProperty('--len', `${pathOriginal.getTotalLength()}px`)

		refchild = pathOriginal.parentNode.insertBefore(nuevoPath, refchild.nextSibling);
	});
}
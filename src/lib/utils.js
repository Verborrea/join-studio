const delays = [0.0, 0.4, 0.6, 0.8, 1.0, 1.2, 1.6];

export function crearCopiasPath(idPath, colores, delay = 0) {
	const pathOriginal = document.getElementById(idPath);

	if (!pathOriginal) { return }

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
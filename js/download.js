
import html2pdf from 'html2pdf.js';

function createPdf() {
	const element = document.querySelector('.content');
	const button = document.getElementById('downloadCV');


	button.style.display = 'none';

	const opt = {
		margin: 1,
		filename: 'CV.pdf',
		image: { type: 'jpeg', quality: 0.98 },
		html2canvas: { scale: 2 },
		jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
	};

	html2pdf().from(element).set(opt).save().then(() => {

		button.style.display = 'block';
	});
}

document.getElementById('downloadCV').addEventListener('click', createPdf);

const characters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	'{',
	'[',
	'}',
	']',
	',',
	'|',
	':',
	';',
	'<',
	'>',
	'.',
	'?',
	'/'
];

const fieldOne = document.getElementById('generated-password-1');
const fieldTwo = document.getElementById('generated-password-2');
const generateBtnElem = document.getElementById('generate-btn');

const generatePassword = (characters) => {
	let generatedPasswords = [];

	for (i = 0; i < 2; i++) {
		let generatedPassword = '';
		while (generatedPassword.length < 15) {
			const randomIndex = Math.floor(Math.random() * characters.length);
			const randomCharacter = characters[randomIndex];
			if (!generatedPassword.includes(randomCharacter)) {
				generatedPassword += randomCharacter;
			}
		}
		generatedPasswords.push(generatedPassword);
	}
	fieldOne.innerText = generatedPasswords[0];
	fieldTwo.innerText = generatedPasswords[1];

	return generatedPasswords;
};

generateBtnElem.addEventListener('click', () => {
	generatePassword(characters);
});

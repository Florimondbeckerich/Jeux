const words = {
    crush: ['Bonjour, je me maquille et je mets du vernis.', 'Crochet', 'NOA', 'Antoine(metr0)', 'Bonjour, je suis brun et je fais du son.', 'Maxime Biaggi', 'Navenn', 'Maxence', 'Jonathan', 'Noé', 'Ryan Gosling', 'David Damiano(Maneskin)', 'Théo(immobillier)', 'Djilsi', 'Jean Baptiste Maunier', 'Bonjour, je suis un commercant d Igny de 20 ans', 'Etienne Moustache', 'James Arthur', 'Pharmacien du mercredi', 'N importe quell bassiste', 'Le primeur BIO', 'Clement(the voice)', 'Jacob Elordi', 'Flyn rider', 'Raphael (terrenoire)', 'Alexandre', 'Kovuu', 'Romain(A Calypso)', 'Raphael(A Calypso)', 'Foé', 'Orange', 'Anthony Colette', 'Léarco', 'Une Otari', 'Dereck(Teen Wolf)', 'Come, come, come', 'François(Pierre de maere)', 'Gaspard (Pierre de maere)','Théo James', 'Gabriel Attal', 'Dylan Obryan'],
    disney: ["Aladin", "Hercule", "Blanche-Neige et les Sept Nains", "Pinocchio", "Fantasia", "Dumbo", "Bambi", "Cendrillon", "Alice au Pays des Merveilles", "Peter Pan", "La Belle et le Clochard", "La Belle au bois dormant", "Les 101 Dalmatiens", "Merlin l'Enchanteur", "Le Livre de la jungle", "Les Aristochats", "Robin des Bois", "Les Aventures de Bernard et Bianca", "Rox et Rouky", "Taram et le Chaudron magique", "Basil, détective privé", "Oliver et Compagnie", "La Petite Sirène", "La Belle et la Bête", "Le Roi Lion", "Pocahontas", "Le Bossu de Notre-Dame", "Mulan", "Tarzan", "Fantasia 2000", "Dinosaur", "Kuzco, l'empereur mégalo", "La Planète au trésor", "Lilo et Stitch", "Frère des ours", "La Ferme se rebelle", "Chicken Little", "Bienvenue chez les Robinson", "Volt, star malgré lui", "La Princesse et la Grenouille", "Raiponce", "Les Mondes de Ralph", "La Reine des neiges", "Les Nouveaux Héros", "Zootopie", "Vaiana : La Légende du bout du monde", "Ralph 2.0", "La Reine des neiges 2", "Raya et le Dernier Dragon", "Encanto, la fantastique famille Madrigal", "Avalonia, l'étrange voyage"],
    chanteur: ['Abba', 'An OME', 'Bébé Brune', 'Billllie eilllish', 'Britney spears', 'Bruno mars', 'Calogéro', 'Christophe', 'Colombine', 'Come', 'David Brownie', 'Daniel Ballavoine', 'Fauve', 'Imagine Dragons', 'Indochine', 'Jean Jaque  Goldman', 'Jonny Halliday', 'MIKA', 'Kiss', 'Kio', 'Lil NAS xxx', 'L ombre', 'Maneskin', 'Maxence', 'MetrO', 'Mickeal Jackson', 'Michel Berger', 'Michel Pollnaref', 'Michel Sardou', 'Muse', 'Miley Circuit', 'Mylene Farmer', 'David Guetta', 'NiKKKKolas', 'Orelsan', 'Nirvana', '2th ', 'Lomepal', 'Angele', 'Coldplay', 'Damso', 'Luidjui', 'Telephone', 'Laptop', 'Katty Perry', 'Madonna', 'Marc Lavoine', 'Pierre de maere', 'Pink foyld', 'PLK', 'Pnl', 'Nekfeu', 'Sexion d assout', 'Pomme', 'Prince', 'Princesse', 'Queen', 'RadioHEAD', 'Renaut', 'Scorpion', 'Serge Gainsbourd', 'Sabrina Carpenter', 'Sia', 'Dua Lipa', 'Lady GAGA', 'AVA MAXXXXX', 'Stromae', 'Terre Noire', 'Théaa', 'Thérapie TAXI', 'Wham', 'YUNGBLUD', 'Big Flo et Oli', 'Foé', 'Lau Carré', 'Yoshi', 'Saint Graal', 'Adamé', 'La femme', 'Pierre Bachelet', 'ZELDA', 'ZELI', 'Joe dassin', 'Ysseult', 'Slimane', 'Claudio capeo', 'Sniper', 'Diams', 'Mael', 'Fredz', 'The week end', 'Hervé', 'Benjamain biolet', '47 terre', 'Julien doré', 'edit de pretto', 'Louane', 'Yamé', 'Lorenzo', 'Indila', 'Jokair', 'Lpee', 'Jyeuhair', 'Thomas dacosta', 'Isia', 'A-HA', 'Clara lucianni', 'Louise ATTACK', 'Colombine', 'Lomepal', 'Imagine dragons', 'Fauve', 'Lana del ray', 'Zara Larson', 'Tayc', 'Dadju', 'Gilms', 'Jonnas brothers', 'Olivia rodrigo', 'Tate mcrae', 'Chase Atlantic', 'Alec Benjamin', 'Bebe rexha', 'Taylor swift', 'Dua lipa', 'James ARTHUR', 'Adele', 'Amel Bent', 'Ariana grande', 'Ava max', 'Aya nakamura', 'Beyoncé', 'Favé', 'Camila cabello', 'Niska', 'Christina aguilera', 'Dalida ', 'Doja cat', 'Ed sherran', 'Eminem', 'Foé', 'Gazo', 'Halsey', 'Jennifer lopez', 'Katty Perry', 'Kiss', 'Kikesa', 'Labrinth', 'Viol en goupe ', 'Little mix', 'Lizzo', 'Luv Resval', 'Miley cyrus', 'Kerchak', 'NF', 'UFL', 'Zola', 'SZA', 'Solan', 'Selena Gomez', 'Rosalia', 'SDM', 'Dinos', 'Koba la d', 'Ciel bleu', 'Tomasi', 'Jeune Mort', 'Riles', 'Luther', 'Népal']
};

let usedWords = JSON.parse(localStorage.getItem('usedWords')) || {};
let currentCategory = '';

function getRandomWord(category) {
    if (!usedWords[category]) {
        usedWords[category] = [];
    }
    const availableWords = words[category].filter(word => !usedWords[category].includes(word));
    if (availableWords.length === 0) {
        alert('Plus de mots uniques disponibles dans cette catégorie.');
        return null;
    }
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const randomWord = availableWords[randomIndex];
    usedWords[category].push(randomWord);
    localStorage.setItem('usedWords', JSON.stringify(usedWords));
    return randomWord;
}

function chooseCategory(category) {
    currentCategory = category;
    const randomWord = getRandomWord(category);
    if (randomWord) {
        document.getElementById('random-word').innerText = randomWord;
        document.getElementById('category-select').classList.add('hidden');
        document.getElementById('word-display').classList.remove('hidden');
    }
}

function getNextWord() {
    const randomWord = getRandomWord(currentCategory);
    if (randomWord) {
        document.getElementById('random-word').innerText = randomWord;
    }
}

function resetGame() {
    usedWords = {};
    localStorage.removeItem('usedWords');
    document.getElementById('category-select').classList.remove('hidden');
    document.getElementById('word-display').classList.add('hidden');
}

function choose(playerChoice) {
    const choices = ['gunting', 'batu', 'kertas'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const resultElement = document.getElementById('hasil');
    resultElement.src = computerChoice + "batu.jpg"; 
    resultElement.style.display = 'block';

    setTimeout(() => {
        const playerElement = document.querySelector('.player');
        playerElement.style.pointerEvents = 'none';

        if (playerChoice === computerChoice) {
            alert('Hasil: Seri!');
        } else if (
            (playerChoice === 'gunting' && computerChoice === 'kertas') ||
            (playerChoice === 'batu' && computerChoice === 'gunting') ||
            (playerChoice === 'kertas' && computerChoice === 'batu')
        ) {
            alert('Hasil: Anda Menang!');
        } else {
            alert('Hasil: Anda Kalah!');
        }

        playerElement.style.pointerEvents = 'auto';
        resultElement.style.display = 'none';
        resultElement.src = '';
    }, 1000);
}
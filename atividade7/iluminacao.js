class Iluminacao {
    constructor(btnLigar, btnDesligar, isLigado) {
        this.btnLigar = btnLigar;
        this.btnDesligar = btnDesligar;
        this.isLigado = isLigado;

        this.btnLigar.addEventListener('click', () => this.toggleLuz());
        this.btnDesligar.addEventListener('click', () => this.toggleLuz());

        this.updateUI();
    }

    toggleLuz() {
        this.isLigado = !this.isLigado;
        this.updateUI();
    }

    updateUI() {
        if (this.isLigado) {
            this.btnLigar.style.background = 'green';
            this.btnDesligar.style.background = 'white';
        } else {
            this.btnLigar.style.background = 'white';
            this.btnDesligar.style.background = 'red';
        }
    }
}

const btnSala = document.getElementById('on-btnSala');
const btnDesligaSala = document.getElementById('off-btnSala');
const btnCozinha = document.getElementById('on-btnCozinha');
const btnDesligaCozinha = document.getElementById('off-btnCozinha');
const btnQuarto = document.getElementById('on-btnQuarto');
const btnDesligaQuarto = document.getElementById('off-btnQuarto');
const btnBanheiro = document.getElementById('on-btnBanheiro');
const btnDesligaBanheiro = document.getElementById('off-btnBanheiro');

const sala = new Iluminacao(btnSala, btnDesligaSala, false);
const cozinha = new Iluminacao(btnCozinha, btnDesligaCozinha, false);
const quarto = new Iluminacao(btnQuarto, btnDesligaQuarto, false);
const banheiro = new Iluminacao(btnBanheiro, btnDesligaBanheiro, false);
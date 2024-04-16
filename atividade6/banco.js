class ContaBancaria {
    constructor() {
        this.saldo = 0;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }
}

const conta = new ContaBancaria();

const amountInput = document.getElementById('amount');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const balanceSpan = document.getElementById('moneyViewer');

const updateBalance = () => {
    balanceSpan.textContent = `R$ ${conta.saldo.toFixed(2)}`;
}

const verificarValue = (value) => {
    if (!value) {
        console.warn("Campo valor não pode ser nulo!");
        alert("Campo valor não pode ser nulo!")
        return;
    }
}

depositBtn.addEventListener('click', () => {
    verificarValue(amountInput.value)

    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        conta.depositar(amount);
        updateBalance();
    }
    amountInput.value = '';
});

withdrawBtn.addEventListener('click', () => {
    verificarValue(amountInput.value)

    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        const success = conta.sacar(amount);
        if (success) {
            updateBalance();
        } else {
            alert('Saldo insuficiente!');
        }
    }
    amountInput.value = '';
});

updateBalance()

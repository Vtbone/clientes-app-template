class VictorBone {
    constructor(nome){
        this.nome = nome;
    }

    exibirPopup() {
        alert('Eu sou, ${this.nome}!');
    }
}

// Exibe o Popup
document.addEventListener("DOMContentLoaded", () => {
    const pessoa = new VictorBone("Victor Bone");
    pessoa.exibirPopup();
});
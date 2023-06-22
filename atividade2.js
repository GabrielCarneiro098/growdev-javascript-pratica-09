let notebook = {
    Produto: "Notebook",
    Processador: "i7",
    Memoria: "16GB",
    Preco: 5000,
    HD: "1TB",
    SSD: "256GB"
  };

console.log("Poduto: " + notebook.Produto);
console.log("Processador: " + notebook.Processador);
console.log("Memória: " + notebook.Memoria);
console.log("Preço: " + "R$"+ notebook.Preco.toFixed(2));
console.log("HD: " + notebook.HD);
console.log("SSD: " + notebook.SSD);
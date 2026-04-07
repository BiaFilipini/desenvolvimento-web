const valorConta = 120.50; 
const percentualGorjeta = 10; 
const valorGorjeta = valorConta * (percentualGorjeta / 100);
const valorTotal = valorConta + valorGorjeta;
console.log("--- CALCULADORA DE GORJETA ---");
console.log(`Valor da Conta: R$${valorConta.toFixed(2)}`);
console.log(`Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(2)}`);
console.log(`Total a pagar: R$${valorTotal.toFixed(2)}`);
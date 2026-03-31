console.log("=== Lanches Saúdaveis ==="); 
    let cliente1 = "Antonio";
    let produto = "Pizza Margarita";
    let preco = 30;
    let quantidade = 2;
    const valorTotal = preco + quantidade;
    let pedConfirmado = "Pedido realizado com sucesso !!";
    let agradecimento = "* Obrigado pela preferência *";

    console.log(`Cliente: ${cliente1}`);
    console.log(`Produto: ${produto}`);
    console.log("Preço unitário: R$ " + preco);
    console.log(`Quantidade: ${quantidade}`);
    console.log(`Total da compra: R$ ${quantidade * preco}`);
    console.log(pedConfirmado);
    console.log(agradecimento);
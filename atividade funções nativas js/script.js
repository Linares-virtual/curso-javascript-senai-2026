  // EXERCÍCIO COM FUNÇÕES NATIVAS COM  JS 

    //------------------------------------------------------------


    // Filtrar produtos com preço acima de 500 - (filter)
    
    // {id: 1, nome: 'Notebook', preco: 3500}: 
    // {id: 4, nome: 'Monitor', preco: 1200}

    let produtos = [
        { id: 1, nome: "Notebook", preco: 3500 },
        { id: 2, nome: "Mouse", preco: 150 },
        { id: 3, nome: "Teclado", preco: 200 },
        { id: 4, nome: "Monitor", preco: 1200 }
    ];

    const item = produtos.filter(produto => produto.preco > 500);
    console.log(item); 

    //------------------------------------------------------------

    
    // Encontrar o primeiro produto chamado "Mouse" - (find)
    // {id: 2, nome: 'Mouse', preco: 150}

    let produtos1 = [
        { id: 1, nome: "Notebook", preco: 3500 },
        { id: 2, nome: "Mouse", preco: 150 },
        { id: 3, nome: "Teclado", preco: 200 },
        { id: 4, nome: "Monitor", preco: 1200 }
    ];

    let item1 = produtos1.find(produto => produto.nome === "Mouse");

    console.log(item1); 


    //------------------------------------------------------------


    // Criar um array apenas com os nomes dos produtos - (map)
    // ['Notebook', 'Mouse', 'Teclado', 'Monitor']

    let produtos2 = [
        { id: 1, nome: "Notebook", preco: 3500 },
        { id: 2, nome: "Mouse", preco: 150 },
        { id: 3, nome: "Teclado", preco: 200 },
        { id: 4, nome: "Monitor", preco: 1200 }
    ];

    let item2 = produtos2.map(produto => produto.nome);

    console.log(item2);

    //------------------------------------------------------------ 

    // Somar todos os preços dos produtos usando:  (reduce)
    // 5050

    let produtos3 = [
        { id: 1, nome: "Notebook", preco: 3500 },
        { id: 2, nome: "Mouse", preco: 150 },
        { id: 3, nome: "Teclado", preco: 200 },
        { id: 4, nome: "Monitor", preco: 1200 }
    ];

    let valorTotal = produtos3.reduce((acumular, produto) => {
        return acumular + produto.preco;
    },0);

    console.log(valorTotal);
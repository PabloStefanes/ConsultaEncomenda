function myFunction() {
    var encomenda = {
        id: 763,
        numero: "QWE-67Y",
        valor: 312.21.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }),
        entregue: false,
        data: "2014-12-17T01:08:13Z",
        cliente: {
            nome: "Corporação Exemplo",
            id: 1
        },
    }

    var encomenda2 = {
        id: 312,
        numero: "QWE-72Y",
        valor: 27.00.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }),
        entregue: false,
        data: "2014-12-14T11:12:43Z",
        cliente: {
            nome: "Investidores ricos",
            id: 2
        }
    }

    encomenda3 = {
        id: 467,
        numero: "RTY-42Z",
        valor: 1731.99.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }),
        entregue: false,
        data: "2014-12-12T21:23:23Z",
        cliente: {
            nome: "Corporação Exemplo",
            id: 1
        }
    }

    encomenda4 = {
        "id": 985,
        "numero": "UTR-43Y",
        "valor": 141.00.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }),
        "entregue": false,
        "data": "2014-12-10T09:02:52Z",
        "cliente": {
            nome: "Nitro Digital",
            id: 3
        }
    }

    encomenda5 = {
        id: 235,
        numero: "UTR-42Y",
        valor: 35.00.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }),
        entregue: false,
        data: "2014-12-10T08:34:45Z",
        cliente: {
            nome: "Corporação Exemplo",
            id: 1
        }
    }

    encomenda6 = {
        id: 406,
        numero: "QWE-65Z",
        valor: 294.00.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }),
        entregue: false,
        data: "2014-12-09T12:54:56Z",
        cliente: {
            nome: "Corporação Exemplo",
            id: 1
        }
    }

    encomenda7 = {
        "id": 146,
        "numero": "YODA-67Y",
        "valor": 1430.00.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }),
        "entregue": true,
        "data": "2014-11-21T18:45:49Z",
        "cliente": {
            nome: "Nitro Digital",
            id: 3
        }
    }

    encomenda8 = {
        "id": 401,
        "numero": "YODA-83Y",
        "valor": 120.30.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }),
        "entregue": true,
        "data": "2014-11-09T15:54:18Z",
        "cliente": {
            nome: "Investidores ricos",
            id: 2
        }
    }

    encomenda9 = {
        id: 125,
        numero: "LKS-81Y",
        valor: 772.00.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }),
        entregue: true,
        data: "2014-11-02T19:23:18Z",
        cliente: {
            nome: "Corporação Exemplo",
            "id": 1
        }
    }

    encomenda10 = {
        id: 521,
        numero: "QWE-12Y",
        valor: 42.00.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }),
        entregue: true,
        data: "2014-10-12T14:27:15Z",
        cliente: {
            "nome": "Nitro Digital",
            "id": 3
        }
    }

    let produto = document.getElementById('txtBusca')
    let res = document.querySelector('.res')
    let res2 = document.querySelector('.res2')
    let res3 = document.querySelector('.res3')
    let res4 = document.querySelector('.res4')
    var res5 = document.querySelector('.res5')
    d = new Date('2014-12-17T01:08:13Z').toLocaleDateString()
    d2 = new Date('2014-12-14T11:12:43Z').toLocaleDateString()
    d3 = new Date('2014-12-12T21:23:23Z').toLocaleDateString()
    d4 = new Date('2014-12-10T09:02:52Z').toLocaleDateString()
    d5 = new Date('2014-12-10T08:34:45Z').toLocaleDateString()
    d6 = new Date('2014-12-09T12:54:56Z').toLocaleDateString()
    d7 = new Date('2014-11-21T18:45:49Z').toLocaleDateString()
    d8 = new Date('2014-11-09T15:54:18Z').toLocaleDateString()
    d9 = new Date('2014-11-02T19:23:18Z').toLocaleDateString()
    d10 = new Date('2014-11-02T19:23:18Z').toLocaleDateString()

    if (produto.value == '') {
        res.innerHTML = $('.container').remove() && 'Encomenda' + '<br>' + '<br>' + 'não encontrada!' + '<br>' + '<br>' + '<br>' + 'Procure novamente'
    } else if (produto.value == "QWE-67Y") {
        res2.innerHTML = `${encomenda.numero} - ${encomenda.cliente.nome} `
        res3.innerHTML = `${encomenda.valor}`
        res4.innerHTML = `${d}`
        res5.innerHTML = `${encomenda.entregue ? 'Entregue': 'Entregar'}`
    } else if (produto.value == "QWE-72Y") {
        res2.innerHTML = `${encomenda2.numero} - ${encomenda2.cliente.nome} `
        res3.innerHTML = `${encomenda2.valor}`
        res4.innerHTML = `${d2}`
        res5.innerHTML = `${encomenda2.entregue ? 'Entregue': 'Entregar'}`
    } else if (produto.value == "RTY-42Z") {
        res2.innerHTML = `${encomenda3.numero} - ${encomenda3.cliente.nome} `
        res3.innerHTML = `${encomenda3.valor}`
        res4.innerHTML = `${d3}`
        res5.innerHTML = `${encomenda3.entregue ? 'Entregue': 'Entregar'}`
    } else if (produto.value == "UTR-43Y") {
        res2.innerHTML = `${encomenda4.numero} - ${encomenda4.cliente.nome} `
        res3.innerHTML = `${encomenda4.valor}`
        res4.innerHTML = `${d4}`
        res5.innerHTML = `${encomenda4.entregue ? 'Entregue': 'Entregar'}`
    } else if (produto.value == "UTR-42Y") {
        res2.innerHTML = `${encomenda5.numero} - ${encomenda5.cliente.nome} `
        res3.innerHTML = `${encomenda5.valor}`
        res4.innerHTML = `${d5}`
        res5.innerHTML = `${encomenda5.entregue ? 'Entregue': 'Entregar'}`
    } else if (produto.value == "QWE-65Z") {
        res2.innerHTML = `${encomenda6.numero} - ${encomenda6.cliente.nome} `
        res3.innerHTML = `${encomenda6.valor}`
        res4.innerHTML = `${d6}`
        res5.innerHTML = `${encomenda6.entregue ? 'Entregue': 'Entregar'}`
    } else if (produto.value == "YODA-67Y") {
        res2.innerHTML = `${encomenda7.numero} - ${encomenda7.cliente.nome} `
        res3.innerHTML = `${encomenda7.valor}`
        res4.innerHTML = `${d7}`
        res5.innerHTML = `${encomenda7.entregue ? 'Entregue': 'Entregar'}`
    } else if (produto.value == "YODA-83Y") {
        res2.innerHTML = `${encomenda8.numero} - ${encomenda8.cliente.nome} `
        res3.innerHTML = `${encomenda8.valor}`
        res4.innerHTML = `${d8}`
        res5.innerHTML = `${encomenda8.entregue ? 'Entregue': 'Entregar'}`
    } else if (produto.value == "LKS-81Y") {
        res2.innerHTML = `${encomenda9.numero} - ${encomenda9.cliente.nome} `
        res3.innerHTML = `${encomenda9.valor}`
        res4.innerHTML = `${d9}`
        res5.innerHTML = `${encomenda9.entregue ? 'Entregue': 'Entregar'}`
    } else if (produto.value == "QWE-12Y") {
        res2.innerHTML = `${encomenda10.numero} - ${encomenda10.cliente.nome} `
        res3.innerHTML = `${encomenda10.valor}`
        res4.innerHTML = `${d10}`
        res5.innerHTML = `${encomenda10.entregue ? 'Entregue': 'Entregar'}`
    } else {
        res.innerHTML = $('.container').remove() && 'Encomenda' + '<br>' + '<br>' + 'não encontrada!' + '<br>' + '<br>' + '<br>' + 'Procure novamente'
    }
}
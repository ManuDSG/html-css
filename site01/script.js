function calcular () {

    var capitalinicial = window.document.getElementById('capital-inicial')
    var valormensal = window.document.getElementById("valor-mensal")
    var taxadejuros = window.document.getElementById ('taxa-de-juros')
    var periodo = window.document.getElementById('periodo')
    var resultado = window.document.getElementById("resultado")

        var ci = Number(capitalinicial.value)
        var vm = Number(valormensal.value)
        var tj = Number(taxadejuros.value)
        var p =  Number(periodo.value)
        var pa = p -1
        var r = ((ci*(1+tj)**p))

        var aporte = vm

            while (pa > 0 ) {  
            r = r +(aporte*(1+tj)**pa)
            pa = pa-1
        }
         resultado.innerText = `O montante final é igual a ${r} R$`
    }
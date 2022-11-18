// PROCURAR ENDEREÇO PELO CEP

$("#cep").blur(function () {
    var cep = this.value.replace(/[^0-9]/, "");

    if (cep.length != 8) {
        return false;
    }

    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    $.getJSON(url, function (dadosRetorno) {
        try {
            $("#logradouro").val(dadosRetorno.logradouro);
            $("#bairro").val(dadosRetorno.bairro);
            $("#cidade").val(dadosRetorno.localidade);
            $("#uf").val(dadosRetorno.uf);
        } catch (ex) {}
    });
});

// TECLA ENTER NÃO ENVIA O FORMULÁRIO

$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
});

function myFunction() {
    document.getElementById("meuDrop").classList.toggle("show");
    // console.log(document.getElementById("meuDrop").classList);
}

function myFunction2() {
    document.getElementById("meuDrop2").classList.toggle("show2");
    // console.log(document.getElementById("meuDrop").classList);
}


window.onclick = function(event) {
    if (!event.target.matches('.dropButton')) {
        var dropdowns = document.getElementsByClassName("dropMenu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function mudarParaMedium()
{
var x;
var r=confirm("Tem certeza disso ?");
if (r==true)
  {
  x= document.getElementById("botaoform2").textContent = "Adquirido";
  }
}
function mudarParaPremium()
{
var x;
var r=confirm("Tem certeza disso ?");
if (r==true)
  {
  x= document.getElementById("botaoform3").textContent = "Adquirido";
  }
}

function avisoDeMsgEnviada()
{
    window.alert('Seu Feeback foi enviado com sucesso. Obrigado por colaborar para nossa melhora.')
    document.getElementById("textoDeLoginInicial2").value = "";
}
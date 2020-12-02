var d = document;
var username = d.getElementById("user");
let storage;
let loadStorage;
var userName;
var notaaa = $('#message').val();

function reloadThePage() {
    window.location.reload();
}
var canciones;
var tempoGasto;
var desktop;


//ao clickar no ENTER
$('.enter').on('click', function () {
    desktop = window.matchMedia("(min-width: 1001px)");
    userName = $('#user').val();
    // Dar as boas vindas ao usuário e definir Anonymous                     na ausência de userName
    if (userName != "") {
        console.log("hello " + userName);
    } else {
        console.log("hello stranger");
        userName = "Anonymous";
    }
    // se não existir lista de "notas" cria um array de values; 
    if (loadStorage == null) {
        loadStorage = [];
    } else {
        //caso exista, vai buscar em string, e transforma em objeto
        loadStorage = localStorage.getItem("notas");
        loadStorage = JSON.parse(loadStorage);
        $('.lastBlockText').html("EMPTY NOTE <br> create one by pressing me, or the + on the menu below");
        $(".timeSpent").html("Set a Timer and Music to keep track");
    }
    // criar um objeto (atual) para o novo "user" e "note" (user fica já definido, mas só fica "completo" depois da note)
    storage = {
        user: userName,
        note: notaaa,
        tempo: tempoGasto,
        musica: canciones,
    };
    var notaaa = $("#message").val();
    var aux = false;
    // loop dos objetos no "sistema" à procura da propriedade "user"
    for (var i = 0; i < loadStorage.length; i++) {
        // se "user" de algum objeto do array das Notas der match para o input do usuário, abre a ultima nota e tempo deixado pelo mesmo usuário
        if (loadStorage[i].user == userName) {
            // note ligada ao user
            nota = loadStorage[i].note;
            // tempo ligado ao user
            tempoGasto = loadStorage[i].tempo;
            // musica ligada ao user
            canciones = loadStorage[i].musica;
            // substitui a nota no ultimo bloco, e na pagina de criar nota
            $('.lastBlockText').html(nota);
            $('#message').val(nota);
            //se houver registo anterior do uso do timer no Usuário, vai buscar esse dado, se nao houver, ainda nao sei o que diz
            $(".timeSpent").html("Last session you meditated for " + tempoGasto + "and you listened to " + canciones);
            aux = true;
        }
    }
    // se o usuário inserir um user novo ao sistema (e sem ser "versão anónima") puxa o objeto atual do usuario para o array de objetos das Notas
    if (!aux && userName != "Anonymous") {
        loadStorage.push(storage);
        $('.lastBlockText').css({
            'opacity': '1'
        })
        $(".timeSpent").css({
            'opacity': '1'
        })
    }
    //coverter o array de notas em string
    let saveStorage = JSON.stringify(loadStorage);
    // grava o userName no objeto novo
    localStorage.setItem("notas", saveStorage);



    // CÓDIGO DAS ANIMAÇÕES
    $('#reload').delay(3500).fadeIn(1000);
    $('#logo.logoLogin').animate({
        'width': '200px',
        'opacity': '0',
    });
    $("#greet").html("Hi there! <br>" + userName);
    //Desativar os clicks para "enter" (porque se vai transformar na base do menu)
    $(".enter").off('click');
    $(".questions").css({
        'color': '#F7D29B',
        'transition': '2.1s'
    });
    // Substitui o botão "?" pelo botão "+" 
    $(".questions").toggleClass('plus');
    //Desativa os clicks para "?"
    $(".questions").off('click');
    $(".enterr").fadeOut(300);
    //    $("input").removeAttr('placeholder');
    // substitui o texto para null basicamente, não posso apagar porque hide() ou remove() vai retirar TUDO, e perco também o "sol" em cima. Método para apagar o texto apenas, e manter o resto
    $("input").val(" ");
    $("#user").removeData();
    $(".mudarCor").show();
    $("#user").remove();
    $(".mudarCor").animate({
        'top': '-51vh',
        'padding': '0px',
        'overflow': 'hidden',
        'border-radius': '2000px',
        'border': '2px solid #3B0A35',
        'width': '1000px',
        'height': '1000px',
        'opacity': '1',
    });
     $(".questions").delay(1000).text("");
    $(".questions").prepend('<img id="logoPlus" src="imgs/plus.png" />');

    $("#logoPlus").delay(2750).fadeIn(1000);
    $(".plus").delay(2500).fadeIn(1000);
    $(".intro").fadeIn(1000);
    //media query para desktop
    if (desktop.matches) {
        $('.enter').animate({
            'margin-top': '8.6%',
            'width': '25%',
            'height': '70px',
        });
        $(".mudarCor").animate({
            'top': '-55vh',
        });
        $("#reload").animate({
            'opacity': '1',
        });
        
    $(".greet").delay(1500).fadeIn(1000);
    $(".safeSpace").delay(1500).fadeIn(1000);
    $(".moodText").delay(2000).fadeIn(1000);
    $(".mood").delay(2000).fadeIn(1000);
    $(".date").delay(2000).fadeIn(1000);
    $(".timeSpentBlock").delay(2000).fadeIn(1000);
    $(".lastBlock").delay(2500).fadeIn(1000);
    $(".clock1").delay(2500).fadeIn(1000);
    $(".music1").delay(2500).fadeIn(1000);
    $(".safeSpace").delay(2500).fadeIn(1000);
    $('.backArrowTimer').attr('src', 'imgs/backArrowTimer2.png');
    $('.backArrowMusica').attr('src', 'imgs/backArrowMusica2.png');
    $('#reload').attr('src', 'imgs/power2.png');
    } else {
        $('.enter').animate({
            'top': '80%',
            'width': '80%',
            'height': '70px',
        });
    $(".greet").delay(1500).fadeIn(1000);
    $(".safeSpace").delay(2000).fadeIn(1000);
    $(".moodText").delay(2000).fadeIn(1000);
    $(".mood").delay(2250).fadeIn(1000);
    $(".date").delay(2500).fadeIn(1000);
    $(".timeSpentBlock").delay(2500).fadeIn(1000);
    $(".lastBlock").delay(2500).fadeIn(1000);
    $(".clock1").delay(2750).fadeIn(1000);
    $(".music1").delay(2750).fadeIn(1000);
    $(".safeSpace").delay(2250).fadeIn(1000);
    }




    //INICIO CLICK +
    $('.questions.plus').on("click", function () {
        $(this).fadeOut(400);
        $('.enter').fadeOut(400);
        $('.clock1').fadeOut(400);
        $('.music1').fadeOut(400);
        $('.newNote').fadeIn(500); // bloco aparece
        $('.newNoteBlock').animate({
            'top': '5%'
        });
        $('textarea').delay(500).fadeIn(500);
        $('#logoPlus').attr('src', 'imgs/plusAmarelo.png');
        $('.backArrow').fadeIn(2000);
        $(".fullBackground").fadeIn(300);
        $(".apagar").delay(500).fadeIn(500);
        console.log("abrir nota nova")
    }); //fim

    $('.apagar').on("click", function () {
        console.log("apaga a nota");
        $("#message").val("");
    })

    // INICIO CLICK back arrow_nota
    $('.backArrow').on("click", function () {
        var notaaa = $("#message").val();
        for (var i = 0; i < loadStorage.length; i++) {
            // se o "user" de algum objeto do array das Notas der match para o input do usuário, acrescenta o valor da note no objeto
            if (loadStorage[i].user == userName) {
                loadStorage[i].note = notaaa;
            }
        }
        //coverter o array de notas em string
        let saveStorage = JSON.stringify(loadStorage);
        // grava a note no objeto novo
        localStorage.setItem("notas", saveStorage);
        $('.newNote').fadeOut(500);
        $('.newNoteBlock').animate({
            'top': '-100%'
        });
        $('#logoPlus').attr('src', 'imgs/plus.png');
        $('textarea').delay(500).fadeOut(500);
        $(".apagar").delay(500).fadeOut(500);
        $(this).delay(500).fadeOut(500);
        $(".fullBackground").fadeOut(300);
        var nota = $("#message").val();
        console.log("mensagem: " + nota);
        // Copiar a nota para o novo bloco
        $('.lastBlockText').html(nota);
        $('.questions.plus').fadeIn(400);
        $('.enter').fadeIn(400);
        $('.clock1').fadeIn(400);
        $('.music1').fadeIn(400);
    }); //fim click

    var nota = $("#message").val();
    //CLICK no ultimo bloco de texto, para editar
    $('.lastBlockText').on('click', function () {

        // se existir conteudo na nota, abre-a
        if (nota != null) {
            console.log("this should open");
            $('.newNote').fadeIn(500);
            $('.newNoteBlock').animate({
                'top': '5%'
            });
            $('textarea').delay(500).fadeIn(500);
            $('.backArrow').fadeIn(2000);
            $(".fullBackground").fadeIn(300);
            $(".apagar").delay(500).fadeIn(500);
        }
        //        else{
        //            $('.lastBlockText').html("empty");
        //        }
    }) //fim click
})


$(function () {
    // verifica o local storage do array das notas
    loadStorage = localStorage.getItem("notas");
    // se houver conteúdo, puxa o novo objeto para o array
    if (loadStorage != null) {
        loadStorage = JSON.parse(loadStorage);
    }
});

// CARA 1 - clique
$('.sad1').on('click', function () {
    $(this).attr('src', 'imgs/sad2.png');
    $('.stress1').attr('src', 'imgs/stress1.png');
    $('.middle1').attr('src', 'imgs/middle1.png');
    $('.happy1').attr('src', 'imgs/happy1.png');
    $('.veryHappy1').attr('src', 'imgs/veryHappy1.png')
})
// CARA 2 - clique
$('.stress1').on('click', function () {
    $(this).attr('src', 'imgs/stress2.png');
    $('.sad1').attr('src', 'imgs/sad1.png');
    $('.middle1').attr('src', 'imgs/middle1.png');
    $('.happy1').attr('src', 'imgs/happy1.png');
    $('.veryHappy1').attr('src', 'imgs/veryHappy1.png')
})
// CARA 3 - clique
$('.middle1').on('click', function () {
    $(this).attr('src', 'imgs/middle2.png');
    $('.sad1').attr('src', 'imgs/sad1.png');
    $('.stress1').attr('src', 'imgs/stress1.png');
    $('.happy1').attr('src', 'imgs/happy1.png');
    $('.veryHappy1').attr('src', 'imgs/veryHappy1.png')
})
// CARA 4 - clique
$('.happy1').on('click', function () {
    $(this).attr('src', 'imgs/happy2.png');
    $('.sad1').attr('src', 'imgs/sad1.png');
    $('.stress1').attr('src', 'imgs/stress1.png');
    $('.middle1').attr('src', 'imgs/middle1.png');
    $('.veryHappy1').attr('src', 'imgs/veryHappy1.png')
})
// CARA 5 - clique
$('.veryHappy1').on('click', function () {
    $(this).attr('src', 'imgs/veryHappy2.png');
    $('.sad1').attr('src', 'imgs/sad1.png');
    $('.stress1').attr('src', 'imgs/stress1.png');
    $('.middle1').attr('src', 'imgs/middle1.png');
    $('.happy1').attr('src', 'imgs/happy1.png')

})


// CLICK abrir pagina do timer
$('.clock1').on('click', function () {
    $(this).attr('src', 'imgs/clock2.png');
    $(".paginaMusica").fadeOut(300);
    $('.music1').attr('src', 'imgs/music1.png');
    $(".intro").animate({
        'left': '150%',
    });
    $('#reload').animate({
        'right': '-150%',
    });
    $('.relogio').delay(400).fadeIn(600);
    $('#timerF').delay(800).fadeIn(600);
    $('.timeControlers').delay(800).fadeIn(600);
    $(".backArrowTimer").delay(500).fadeIn(500);
    $('.go').delay(800).fadeIn(600);
    //    $(".timeControlers").off('click'); 
    //CLICK na backArrow_timer
    $(".backArrowTimer").on('click', function () {
        $(".intro").animate({
            'left': '50%',
        });
        $('#reload').animate({
            'right': '15px',
        });
        $(".backArrowTimer").fadeOut(100);
        $('.clock1').attr('src', 'imgs/clock1.png');
        $('#timerF').fadeOut(300);
        $('.relogio').fadeOut(300);
        $('.timeControlers').fadeOut(300);
        $('.go').fadeOut(300);
    }) // fim click
    $(function () {
        //    as horas nao mostram com 2 zeros, apenas com 1
        //cria objeto com horas e minutos
        let clock = {
            horas: 0,
            minutos: 0
        }
        // click on each timeControler
        checkAndUpdateClockInfoInHtml();
        $('.menosDez').click(clickedMenosDez);
        $('.menosUm').click(clickedMenosUm);
        $('.maisUm').click(clickedMaisUm);
        $('.maisDez').click(clickedMaisDez);
        // -10 minutes
        function clickedMenosDez() {
            clock['minutos'] = clock['minutos'] - 10;
            checkAndUpdateClockInfoInHtml();
            console.log("diminui10");
        }
        // -1 minute
        function clickedMenosUm() {
            clock['minutos'] = clock['minutos'] - 1;
            checkAndUpdateClockInfoInHtml();
            console.log("diminui");
        }
        // +1 minute
        function clickedMaisUm() {
            clock['minutos'] = clock['minutos'] + 1;
            checkAndUpdateClockInfoInHtml();
            console.log("aumenta");
        }
        // +10 minutes
        function clickedMaisDez() {
            clock['minutos'] = clock['minutos'] + 10;
            checkAndUpdateClockInfoInHtml();
            console.log("aumenta10");
        }
        // change the timer numbers
        function checkAndUpdateClockInfoInHtml() {
            checkMinutesBeforeUpdating();
            updateClockInfoInHtml();
        }
        // check the time before changing
        function checkMinutesBeforeUpdating() {
            //reaching 00 minutes, pulls back to 59 minutes
            if (clock['minutos'] < 0) {
                clock['minutos'] = 59;
                clock['horas'] = clock['horas'] - 1;
            }
            // reaching 59 minutes, pulls back to 00 minutes
            if (clock['minutos'] > 59) {
                clock['minutos'] = 0;
                clock['horas'] = clock['horas'] + 1;
            }
            //no negative time
            if (clock['horas'] < 0) {
                clock['horas'] = 0;
                clock['minutos'] = 0;
                clearInterval(myInterval);
                console.log("devia parar");
            }
        }
        //updates the text for minutes and hours
        function updateClockInfoInHtml() {
            $('.minutos').text(clock.minutos);
            $('.horas').text(clock.horas);
            if (clock['minutos'] < 10) {
                $('.minutos').text("0" + clock.minutos);
            }
            if (clock['horas'] < 10) {
                $('.horas').text("0" + clock.horas);
            }
        }
        var myInterval;
        //CLICK go_timer
        $('.go').on('click', function () {
            //timer goes off, decreasing 1s at the time
            myInterval = setInterval(myTimer, 1000);

            function myTimer() {
                clock['minutos'] = clock['minutos'] - 1;
                checkAndUpdateClockInfoInHtml();
            };
            //parar o timer quando chega às 00:00
            if (clock['horas'] < 0) {
                clock['horas'] = 0;
                clock['minutos'] = 0;
                clearInterval(myInterval);
            }
            var tempoGasto;
            tempoGasto = clock['horas'] + " hours and " + clock['minutos'] + " minutes";
            console.log(tempoGasto);

            for (var i = 0; i < loadStorage.length; i++) {
                // se o "user" de algum objeto do array das Notas der match para o input do usuário, acrescenta o valor do tempo no objeto
                if (loadStorage[i].user == userName) {
                    loadStorage[i].tempo = tempoGasto;
                }
            }
            //coverter o array de notas em string
            let saveStorage = JSON.stringify(loadStorage);
            // grava a note no objeto novo
            localStorage.setItem("notas", saveStorage);
        }) //fim click

    }) //fim function
}) //fim click


// MUSIC
$('.music1').on('click', function () {
    $('#reload').animate({
        'right': '150%',
    });
    $(".backArrowTimer").fadeOut(100);
    $('.clock1').attr('src', 'imgs/clock1.png');
    $('.relogio').fadeOut(300);
    $('.timeControlers').fadeOut(300);
    $('.go').fadeOut(300);
    $('#timerF').fadeOut(300);
    $(this).attr('src', 'imgs/music2.png')
    $(".intro").animate({
        'left': '-150%',
    });
    $(".paginaMusica").delay(400).fadeIn(600);
    $(".paginaMusica li").each(function (i) {
        $(this).delay(100 * i).delay(400).fadeIn(1000);
    });
    $("button.press").delay(2000).fadeIn(600);
    //CLICK na backArrow_musica
    $(".backArrowMusica").on('click', function () {
        $(".intro").animate({
            'left': '50%',
        });
        $(".paginaMusica").fadeOut(300);
        $('.music1').attr('src', 'imgs/music1.png');

        $('#reload').animate({
            'right': '15px',
            'transition': '0.05s',
        });
    }) // fim click
    
    var testao;
    var canciones;
    $('ul.musicas li.troll').on("click", function () {
        $('ul.musicas li').removeClass( "troll2" );
        $(this).toggleClass('troll2');
        testao = d.getElementsByClassName("troll2");
        for (var i = 0; i < testao.length; i++) {
            canciones = testao[i].textContent;
        };
    });
    $('.press').on("click", function () {
        for (var i = 0; i < loadStorage.length; i++) {
            if (loadStorage[i].user == userName) {
                loadStorage[i].musica = canciones;
            }
            let saveStorage = JSON.stringify(loadStorage);
            localStorage.setItem("notas", saveStorage);
        }
    })
    
    
    
    //    d.getElementsByClassName("troll2")[1].innerHTML
})


// DATA
//array com nomes dos meses
var monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
var date = new Date();
//vai buscar o mês equivalente ao mês em que estamos (de 0 a 11)
var month = monthNames[date.getMonth()];
//vai buscar o dia em que estamos
var day = date.getUTCDate();
//substitui o dia
$(".day").html(day);
//substitui o mês
$(".month").html(month);

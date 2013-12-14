/* Author: Stephen Fairbanks & Jerome bourdais*/

$(function() {
	//  Where everything has loaded
	$(window).load(function(){
		$('body').addClass('go');
        $('#Interface').addClass('go');
	});

	// VARIABLES
	// Check size of window on page load
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();


	// VARS
	var listOfNotes = "e f fs g gs a bf b c cs d ds";

	$('ul.select-scale li.scale-chromatic a').click(function(e) {
		e.preventDefault();
		$('.select-scale li').removeClass('active');
		$(this).parent().addClass('active');
		$('#current-root-scale .scale').html('Chromatic');
		changeNotes();
	});


    function NotesOct() {
        $('.note').removeClass('on root');
        var ng=$(".note-g");ng.text("g");ng.addClass('manche coul-g on');
    }


    //compteur
    myCounter = new flipCounter('myCounter', {value: 0, inc: 1, pace:1000, auto: false});

    /*********
     * Notes Info Octave
     ***********************/
    if (m480==true){

    var NotesInfoOct = document.getElementById("NotesInfoOct");
    var ctx = NotesInfoOct.getContext("2d");
    draw(ctx);

    function draw(ctx) {

    // octavez/Path
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(114.4, 134.3);
    ctx.lineTo(339.1, 229.7);
    ctx.lineWidth = 8.0;
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.lineCap = "round";
    ctx.stroke();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(581.0, 162.7);
    ctx.lineTo(782.5, 111.4);
    ctx.stroke();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(387.1, 70.1);
    ctx.lineTo(529.8, 148.2);
    ctx.fillStyle = "rgb(50, 50, 144)";
    ctx.fill();
    ctx.stroke();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(389.9, 236.1);
    ctx.lineTo(519.9, 184.6);
    ctx.stroke();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(1.1, 1.1);
    ctx.lineTo(0.0, 1.1);
    ctx.lineTo(0.0, 0.0);
    ctx.lineTo(1.1, 0.0);
    ctx.lineTo(1.1, 1.1);
    ctx.closePath();
    ctx.fillStyle = "rgb(0, 152, 116)";
    ctx.fill();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(110.9, 131.9);

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(350.0, 235.3);
    ctx.bezierCurveTo(336.8, 235.4, 324.1, 235.4, 311.1, 238.2);
    ctx.lineTo(324.2, 224.1);
    ctx.lineTo(326.7, 204.6);
    ctx.bezierCurveTo(333.2, 214.9, 341.6, 226.6, 350.0, 235.3);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(114.4, 134.6);
    ctx.lineTo(339.1, 230.1);
    ctx.lineWidth = 6.0;
    ctx.strokeStyle = "rgb(0, 130, 201)";
    ctx.stroke();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(307.4, 230.1);
    ctx.lineTo(91.9, 230.1);
    ctx.lineTo(91.9, 153.0);
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = "rgb(0, 167, 221)";
    ctx.lineCap = "butt";
    ctx.stroke();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(91.9, 181.1);
    ctx.bezierCurveTo(100.1, 181.1, 106.9, 187.9, 106.9, 196.3);
    ctx.bezierCurveTo(106.9, 204.7, 100.1, 211.5, 91.9, 211.5);
    ctx.bezierCurveTo(83.6, 211.5, 76.9, 204.7, 76.9, 196.3);
    ctx.bezierCurveTo(76.9, 187.9, 83.6, 181.1, 91.9, 181.1);
    ctx.closePath();
    ctx.fillStyle = "rgb(0, 130, 201)";
    ctx.fill();
    ctx.lineWidth = 1.0;
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.stroke();

    // octavez/3
    ctx.font = "Bold 21.0px 'Myriad Pro'";
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillText("+3", 78.9, 203.0);

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(220.8, 214.9);
    ctx.bezierCurveTo(229.1, 214.9, 235.8, 221.4, 235.8, 229.4);
    ctx.bezierCurveTo(235.8, 237.3, 229.1, 243.8, 220.8, 243.8);
    ctx.bezierCurveTo(212.5, 243.8, 205.8, 237.3, 205.8, 229.4);
    ctx.bezierCurveTo(205.8, 221.4, 212.5, 214.9, 220.8, 214.9);
    ctx.closePath();
    ctx.fillStyle = "rgb(0, 130, 201)";
    ctx.fill();
    ctx.stroke();

    // octavez/3
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillText("+3", 209.0, 236.3);

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(349.0, 234.6);
    ctx.bezierCurveTo(337.8, 233.6, 322.7, 234.7, 312.3, 237.5);
    ctx.lineTo(325.8, 224.4);
    ctx.lineTo(327.7, 205.7);
    ctx.bezierCurveTo(334.0, 220.4, 339.2, 224.4, 349.0, 234.6);
    ctx.closePath();
    ctx.fillStyle = "rgb(0, 130, 201)";
    ctx.fill();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(545.0, 173.9);
    ctx.bezierCurveTo(535.9, 183.5, 527.0, 192.6, 520.0, 203.9);
    ctx.lineTo(519.0, 184.6);
    ctx.lineTo(506.8, 169.1);
    ctx.bezierCurveTo(518.7, 171.7, 532.9, 173.9, 545.0, 173.9);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(383.9, 234.4);
    ctx.lineTo(548.9, 173.4);

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(390.1, 235.6);
    ctx.lineTo(520.1, 184.2);
    ctx.lineWidth = 6.0;
    ctx.strokeStyle = "rgb(236, 27, 35)";
    ctx.lineCap = "round";
    ctx.stroke();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(505.1, 173.4);
    ctx.lineTo(369.9, 173.4);
    ctx.lineTo(369.9, 223.3);
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = "rgb(246, 147, 29)";
    ctx.lineCap = "butt";
    ctx.stroke();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(369.9, 184.3);
    ctx.bezierCurveTo(378.2, 184.3, 384.9, 191.1, 384.9, 199.5);
    ctx.bezierCurveTo(384.9, 207.9, 378.2, 214.7, 369.9, 214.7);
    ctx.bezierCurveTo(361.6, 214.7, 354.9, 207.9, 354.9, 199.5);
    ctx.bezierCurveTo(354.9, 191.1, 361.6, 184.3, 369.9, 184.3);
    ctx.closePath();
    ctx.fillStyle = "rgb(236, 27, 35)";
    ctx.fill();
    ctx.lineWidth = 1.0;
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.stroke();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(446.4, 158.5);
    ctx.bezierCurveTo(454.7, 158.5, 461.4, 165.0, 461.4, 172.9);
    ctx.bezierCurveTo(461.4, 180.9, 454.7, 187.3, 446.4, 187.3);
    ctx.bezierCurveTo(438.1, 187.3, 431.4, 180.9, 431.4, 172.9);
    ctx.bezierCurveTo(431.4, 165.0, 438.1, 158.5, 446.4, 158.5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // octavez/2
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillText("+2", 356.9, 206.2);

    // octavez/2
    ctx.fillText("+2", 433.6, 179.8);

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(543.6, 174.5);
    ctx.bezierCurveTo(535.0, 181.8, 525.4, 193.5, 520.2, 203.0);
    ctx.lineTo(520.1, 184.2);
    ctx.lineTo(508.0, 169.8);
    ctx.bezierCurveTo(518.0, 173.6, 532.3, 174.5, 543.6, 174.5);
    ctx.closePath();
    ctx.fillStyle = "rgb(236, 27, 35)";
    ctx.fill();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(542.0, 155.7);
    ctx.bezierCurveTo(528.9, 154.4, 516.2, 153.2, 503.0, 154.6);
    ctx.lineTo(517.6, 141.9);
    ctx.lineTo(522.1, 122.7);
    ctx.bezierCurveTo(527.5, 133.7, 534.6, 146.2, 542.0, 155.7);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(387.9, 70.9);
    ctx.lineTo(530.6, 149.0);
    ctx.lineWidth = 6.0;
    ctx.strokeStyle = "rgb(50, 50, 144)";
    ctx.lineCap = "round";
    ctx.stroke();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(557.9, 153.0);
    ctx.lineTo(557.9, 61.7);
    ctx.lineTo(390.1, 61.7);
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = "rgb(0, 167, 221)";
    ctx.lineCap = "butt";
    ctx.stroke();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(485.9, 49.5);
    ctx.bezierCurveTo(494.2, 49.5, 500.9, 56.3, 500.9, 64.7);
    ctx.bezierCurveTo(500.9, 73.1, 494.2, 79.9, 485.9, 79.9);
    ctx.bezierCurveTo(477.6, 79.9, 470.9, 73.1, 470.9, 64.7);
    ctx.bezierCurveTo(470.9, 56.3, 477.6, 49.5, 485.9, 49.5);
    ctx.closePath();
    ctx.fillStyle = "rgb(50, 50, 144)";
    ctx.fill();
    ctx.lineWidth = 1.0;
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.stroke();

    // octavez/2
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillText("+2", 472.9, 71.3);

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(557.9, 89.9);
    ctx.bezierCurveTo(566.2, 89.9, 572.9, 96.4, 572.9, 104.3);
    ctx.bezierCurveTo(572.9, 112.3, 566.2, 118.7, 557.9, 118.7);
    ctx.bezierCurveTo(549.6, 118.7, 542.9, 112.3, 542.9, 104.3);
    ctx.bezierCurveTo(542.9, 96.4, 549.6, 89.9, 557.9, 89.9);
    ctx.closePath();
    ctx.fillStyle = "rgb(50, 50, 144)";
    ctx.fill();
    ctx.stroke();

    // octavez/3
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillText("+3", 546.1, 111.2);

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(541.1, 154.9);
    ctx.bezierCurveTo(530.1, 152.7, 514.9, 152.3, 504.3, 154.1);
    ctx.lineTo(519.0, 142.4);
    ctx.lineTo(522.9, 124.0);
    ctx.bezierCurveTo(527.6, 139.2, 532.4, 143.7, 541.1, 154.9);
    ctx.closePath();
    ctx.fillStyle = "rgb(50, 50, 144)";
    ctx.fill();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(800.9, 104.1);
    ctx.bezierCurveTo(791.7, 113.7, 783.6, 122.8, 776.6, 134.1);
    ctx.lineTo(774.7, 113.3);
    ctx.lineTo(762.6, 99.4);
    ctx.bezierCurveTo(774.6, 102.0, 788.8, 104.1, 800.9, 104.1);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(581.3, 162.5);
    ctx.lineTo(782.7, 111.2);
    ctx.lineWidth = 6.0;
    ctx.strokeStyle = "rgb(246, 147, 29)";
    ctx.lineCap = "round";
    ctx.stroke();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(817.6, 118.7);
    ctx.lineTo(817.6, 176.5);
    ctx.lineTo(576.1, 176.5);
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = "rgb(255, 126, 0)";
    ctx.lineCap = "butt";
    ctx.stroke();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(697.8, 160.2);
    ctx.bezierCurveTo(706.1, 160.2, 712.8, 167.0, 712.8, 175.4);
    ctx.bezierCurveTo(712.8, 183.7, 706.1, 190.5, 697.8, 190.5);
    ctx.bezierCurveTo(689.5, 190.5, 682.8, 183.7, 682.8, 175.4);
    ctx.bezierCurveTo(682.8, 167.0, 689.5, 160.2, 697.8, 160.2);
    ctx.closePath();
    ctx.fillStyle = "rgb(246, 147, 29)";
    ctx.fill();
    ctx.lineWidth = 1.0;
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.stroke();

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(817.6, 131.9);
    ctx.bezierCurveTo(825.9, 131.9, 832.6, 138.3, 832.6, 146.3);
    ctx.bezierCurveTo(832.6, 154.2, 825.9, 160.7, 817.6, 160.7);
    ctx.bezierCurveTo(809.3, 160.7, 802.6, 154.2, 802.6, 146.3);
    ctx.bezierCurveTo(802.6, 138.3, 809.3, 131.9, 817.6, 131.9);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // octavez/3
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillText("+3", 684.8, 182.0);

    // octavez/2
    ctx.fillText("+2", 804.7, 153.2);

    // octavez/Path
    ctx.beginPath();
    ctx.moveTo(799.9, 104.8);
    ctx.bezierCurveTo(791.4, 112.2, 781.7, 123.9, 776.6, 133.3);
    ctx.lineTo(776.4, 114.5);
    ctx.lineTo(764.3, 100.1);
    ctx.bezierCurveTo(774.4, 104.0, 788.7, 104.8, 799.9, 104.8);
    ctx.closePath();
    ctx.fillStyle = "rgb(246, 147, 29)";
    ctx.fill();
    ctx.restore();}

    $("#NotesInfoOct").hide();
    }
    /**************************
     *  Notes Info Octave
     **************/

    if (m480!=true){

        $( "#NotesSliderCordes" ).slider({
            orientation: "vertical",

            range: true,
            min: 1,
            max: 6,
            values: [ 1, 6 ],
            slide: function( event, ui ) {
    //            $( "#NotesAmountCordes" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
                switch (ui.values[0]){
                    case (1):ui.values[0]="Mi grave";break;
                    case (2):ui.values[0]="La";break;
                    case (3):ui.values[0]="Re";break;
                    case (4):ui.values[0]="Sol";break;
                    case (5):ui.values[0]="Si";break;
                    case (6):ui.values[0]="Mi aigu";break;
                }
                switch (ui.values[1]){
                    case (1):ui.values[1]="Mi grave";break;
                    case (2):ui.values[1]="La";break;
                    case (3):ui.values[1]="Re";break;
                    case (4):ui.values[1]="Sol";break;
                    case (5):ui.values[1]="Si";break;
                    case (6):ui.values[1]="Mi aigu";break;
                }
                $( "#NotesAmountCordes" ).val(ui.values[ 0 ] + " à " + ui.values[ 1 ] );
            }
        });
        $( "#NotesAmountCordes" ).val("de ["+ $( "#NotesSliderCordes" ).slider( "values", 0, 1) +
            "] à [" + $( "#NotesSliderCordes" ).slider( "values", 1, 2)+"]" );
        $( "#NotesAmountCordes" ).val("Mi grave à La");



        $( "#NotesSliderFrets" ).slider({
            range: true,
            min: 0,
            max: 12,
            values: [ 0, 12 ],
            slide: function( event, ui ) {
                $( "#NotesAmountFrets" ).val(ui.values[ 0 ] + " à " + ui.values[ 1 ] );
            }
        });
        $( "#NotesAmountFrettes" ).val( $( "#NotesSliderFrets" ).slider( "values", 0, 0 ) +" - " + $( "#NotesSliderFrets" ).slider( "values", 1, 12 ) );
        $( "#NotesAmountFrets" ).val("0 à 12");
}

})

// CHANGE NOTES FUNCTION
function NotesAll() {
    $('.note').removeClass('on');
    var e=$('.note-e');e.text("e");e.addClass('manche coul-e on');
    var f=$('.note-f');f.text("f");f.addClass('manche coul-f on');
    var g=$('.note-g');g.text("g");g.addClass('manche coul-g on');
    var a=$('.note-a');a.text("a");a.addClass('manche coul-a on');
    var b=$('.note-b');b.text("b");b.addClass('manche coul-b on');
    var c=$('.note-c');c.text("c");c.addClass('manche coul-c on');
    var d=$('.note-d');d.text("d");d.addClass('coul-d on');
}

/*************
 * Notes Exo
 ********************************/
var solution=0;
var firstNote="True";

noteAleatoire = function(e) {
    if (m480==false){
        $(".btnrep").removeAttr('disabled');
        $('.guitarCounter').removeClass("rotation");
        $('#flame').removeClass("flamisation");
        $("#corde").show();$("#nbCordes").show();
        if (firstNote=="false") {$('.fight')[0].play();firstNote="False";}

        var note=$('.note');
        //raz
        note.removeClass('coul-a');note.removeClass('coul-b');note.removeClass('coul-c');note.removeClass('coul-d');
        note.removeClass('coul-e');note.removeClass('coul-f');note.removeClass('coul-g');note.removeClass('on');
        note.removeClass('manche');
        note.text('');$('.btnrep').removeClass('btn-danger'); $('.btnrep').removeClass('btn-success');

        var cordes = new Array(
            "string-lowe","string-a","string-d","string-g","string-b","string-highe");
            var corddeb = $( "#NotesSliderCordes" ).slider( "values", 0 );
            var cordfin= $( "#NotesSliderCordes" ).slider( "values", 1 );
            var cordnb=cordfin-corddeb+1;

            var fretdeb = ($( "#NotesSliderFrets" ).slider( "values", 0 ))-1;
            var fretfin= $( "#NotesSliderFrets" ).slider( "values", 1 );
            var fretnb=fretfin-fretdeb;








            randcorde = cordes[corddeb-1+Math.floor( Math.random() * cordnb )];
            var randcalcfret=Math.floor((Math.random()*fretnb)+1);
            randfret = "pos"+parseInt(randcalcfret+fretdeb);
            noteCourante=$('.guitar-neck .'+randcorde+' .'+randfret);

        solution=noteCourante.addClass("on");
        var gtestnote=$(".on").attr("class");

        //SON
        if (randfret=="pos0"){
            switch (randcorde){
                case "string-highe" : $('#audio-highe')[0].play();break;
                case "string-b" : $('#audio-b')[0].play();break;
                case "string-g" : $('#audio-g')[0].play();break;
                case "string-d" : $('#audio-d')[0].play();break;
                case "string-a" : $('#audio-a')[0].play();break;
                case "string-lowe" : $('#audio-lowe')[0].play();break;
                default : alert("pas de son");
            }
        }

        $(".NoteBtnRep").show();
        $(".IntBtnRep").hide();
        $(".AccBtnRep").hide();
}

else if(m480==true){
        $(".btnrep").removeAttr('disabled');
//        $('.guitarCounter').removeClass("rotation");

        var note=$('.note');
        //raz
        note.removeClass('coul-a');note.removeClass('coul-b');note.removeClass('coul-c');note.removeClass('coul-d');
        note.removeClass('coul-e');note.removeClass('coul-f');note.removeClass('coul-g');note.removeClass('on');
        note.removeClass('manche');
        note.text('');$('.btnrep').removeClass('btn-danger'); $('.btnrep').removeClass('btn-success');

        var cordes = new Array("string-lowe","string-a","string-d","string-g","string-b","string-highe");
        var corddeb = 1;var cordfin= 6; var cordnb=cordfin-corddeb+1;

        var fretdeb = -1; var fretfin= 5; var fretnb=6;


        do{
            badnote=0;

            randcorde = cordes[corddeb-1+Math.floor( Math.random() * cordnb )];
            var randcalcfret=Math.floor((Math.random()*fretnb)+1);
            randfret = "pos"+parseInt(randcalcfret+fretdeb);
            noteCourante=$('.guitar-neck .'+randcorde+' .'+randfret);

            if (noteCourante.hasClass('note-cs'))  badnote=1;
            if (noteCourante.hasClass('note-ds'))  badnote=1;
            if (noteCourante.hasClass('note-fs'))  badnote=1;
            if (noteCourante.hasClass('note-gs'))  badnote=1;
            if (noteCourante.hasClass('note-bf'))  badnote=1;
        } while (badnote==1);

        solution=noteCourante.addClass("on");
        var gtestnote=$(".on").attr("class");

        $(".NoteBtnRep").show();
        $(".IntBtnRep").hide();
        $(".AccBtnRep").hide();

    }

}


$('#NotesExoBtn').click(noteAleatoire);

var score=0;
$("#score").text(score);

var noteFaux=0;
//        $("#gtest").append("noteFaux :"+noteFaux);

//boutons réponse
$(".C,.D,.E,.F,.G,.A,.B,.Cs,.Ds,.Fs,.As,.Gs").click(function () {

if (m480==false){
    if (solution != 0){
            var note=$(this).attr('id').toLocaleLowerCase();
            if (note=="as") note="bf";
            if (solution.hasClass("note-"+note)) {
                $(this).addClass('btn btn-success');

                score++;
                $("#score").text(score);
                myCounter.step();

                //raz
                $('.note').removeClass('on');
                $("#InterfExoRep").toggle();

                noteFaux=0;
            }

        else {
            noteFaux++;
//            $("#gtest").html("noteFaux :"+noteFaux);

//            $("#gtest").append(" faux1 : "+noteFaux );

            if (noteFaux < 2){
//                $("#gtest").html("noteFaux <2");

                //1 faute : montrer où s situe l'erreur (toute octave)
                $(this).addClass('btn-danger');
                $('#hit')[0].play();

                var noteTxt=note;
                switch (note){
                    case "cs":noteTxt="C\#";break;
                    case "ds":noteTxt="D\#";break;
                    case "fs":noteTxt="F\#";break;
                    case "gs":noteTxt="G\#";break;
                    case "bf":noteTxt="A\#";break;
                }
                $('.note-'+note).text(noteTxt);
                $('.note-'+note).addClass('manche on coul-'+note);
            }
            else {
//                $("#gtest").html("noteFaux =2");

                //2 fautes = montrer le résultat
                var indice=Math.floor((Math.random()*16));

                if (m480==false){if (indice<7) $('.soundFalse')[indice].play();

                else $('#hit')[0].play();}
//                $('#breathing')[0].play();

                if (solution.hasClass("note-a")) solution.text("a");
                if (solution.hasClass("note-b")) solution.text("b");
                if (solution.hasClass("note-c")) solution.text("c");
                if (solution.hasClass("note-d")) solution.text("d");
                if (solution.hasClass("note-e")) solution.text("e");
                if (solution.hasClass("note-f")) solution.text("f");
                if (solution.hasClass("note-g")) solution.text("g");
                if (solution.hasClass("note-cs")) solution.text("c\#");
                if (solution.hasClass("note-ds")) solution.text("d\#");
                if (solution.hasClass("note-fs")) solution.text("f\#");
                if (solution.hasClass("note-gs")) solution.text("g\#");
                if (solution.hasClass("note-bf")) solution.text("a\#");

                solution.addClass('note');
                noteFaux=0;
                $(".NoteBtnRep").hide();

                if(m480==false){ $("#InterfExoRep").hide();}
            }
        }

    }
}//desktop

if (m480==true){

    if (solution != 0){
        var note=$(this).attr('id').toLocaleLowerCase();
        if (note=="as") note="bf";
        if (solution.hasClass("note-"+note)) {
            $(this).addClass('btn btn-success');
            score++;
            $("#score").text(score);
//            myCounter.step();
            $('#soundCoin')[0].play();

            $('.note').removeClass('on');
            noteFaux=0;

            noteAleatoire();
        }

        else {
            noteFaux++;
            if (noteFaux < 2){
                //1 faute
                $(this).addClass('btn-danger');
                $('#hit')[0].play();
                var noteTxt=note;
                $('.note-'+note).text(noteTxt.toUpperCase());
                $('.note-'+note).addClass('manche on coul-'+note);
            }
            else {
                //2 fautes = -1 raz
                $('#hit')[0].play();
                score--;
                $("#score").text(score);

                noteFaux=0;
                noteAleatoire();
            }
        }
    }
}//mobile

});
/*////////////////////////
  // Notes Exo
  /////////////////

/*******************
 *  Intervalles Exo
 **************************************/
//var intervalmystere=0;
//var pointsInt=0;
var noteInt1=$('.guitar-neck .note-e .pos0');
var noteInt2=$('.guitar-neck .note-e .pos0');
var zintervalmystere=-1;
var i2fret=0;
var i2corde=0;
var randcorde2='0';
var intfaux=0;
var firstInt="True";


intervalleAleatoire = function(na) {

    if (firstInt=="True") {$('.carioca')[0].play();firstInt="False";}

    $(".btnrep").removeAttr('disabled');

    $('.guitarCounter').removeClass("rotation");
    $("#flame").removeClass("flamisation");


    intfaux=0;
    $("#corde").show();$("#nbCordes").show();

    $(".NoteBtnRep").hide();
    $(".IntBtnRep").show();
    $(".AccBtnRep").hide();

    $('.btnrep').removeClass('btn-danger');
    $('.btnrep').removeClass('btn-success');

    $('.note').removeClass('on coul-a');
    $('.NoteBtnRep').hide();
    noteInt1.text("");noteInt2.text("");

    //options slider
    var corddeb = $( "#NotesSliderCordes" ).slider( "values", 0 );
    var cordfin= $( "#NotesSliderCordes" ).slider( "values", 1 );
    var cordnb=cordfin-corddeb+1;

    var fretdeb = ($( "#NotesSliderFrets" ).slider( "values", 0 ))-1;
    var fretfin= $( "#NotesSliderFrets" ).slider( "values", 1 );
    var fretnb=fretfin-fretdeb;

    // note 1
    var cordes = new Array("string-highe","string-b","string-g","string-d","string-a","string-lowe");


    i = corddeb-1+ Math.floor( Math.random() * cordnb );
    var i1corde = 6-i;


    //    var i1fret = 1+fretdeb+Math.floor((Math.random()*fretnb)-1);
    var i1fret = Math.floor((Math.random()*fretnb)+1)+fretdeb;

    // note 2 corde
    i2 = Math.floor( Math.random() * i1corde );
    i2corde = (i2+1);
    // note2 fret

    while ((i2fret = i1fret + (Math.floor(Math.random() * 8 - 4 )))==i1fret){
        if (i2fret<0) {
            i2fret=  Math.abs(i2fret);
//            $("#gtest").append("1fret2 neg ABS</br>");
        };
        if (i1corde==i2corde){
//            $("#gtest").append("1mm crd</br>");
            if (i1fret>i2fret) {
                k=i1fret;i1fret=i2fret;i2fret=k;
//                $("#gtest").append("1fret1  fret2 inversion\</br>");
            };
        }
    }
    if (i2fret<0) {
        i2fret=  Math.abs(i2fret);
//        $("#gtest").append("2fret2 neg\</br>");
    };
    if (i1corde==i2corde){
//        $("#gtest").append("2mm crd \</br>");

    }

    if (i1corde<i2corde){k=i1corde;i1corde=i2corde;i2corde=k}

    //random corde 1
    var randcorde = cordes[i1corde-1];    var randfret = "pos"+i1fret;
    noteInt1=$('.guitar-neck .'+randcorde+' .'+randfret);
    noteInt1.addClass("on"); //affichage
    noteInt1.text("F")

    //random corde 2
    randcorde2 = cordes[i2corde-1];    var randfret2 = "pos"+i2fret;
    noteInt2=$('.guitar-neck .'+randcorde2+' .'+randfret2);
    solution2=noteInt2.addClass("on");
    noteInt2.text("?")


    var tabInterval=new Array();
    tabInterval[1]=new Array(7,8,9,10,11,0,1,2,3,4,5,6,7,8,9,10,11,0,1,2,3,4,5,6,7);
    tabInterval[2]=new Array(2,3,4,5,6,7,8,9,10,11,0,1,2,3,4,5,6,7,8,9,10,11,0,1,2,3);
    tabInterval[3]=new Array(10,11,0,1,2,3,4,5,6,7,8,9,10,11,0,1,2,3,4,5,6,7,8,9,10,11);
    tabInterval[4]=new Array(5,6,7,8,9,10,11,0,1,2,3,4,5,6,7,8,9,10,11,0,1,2,3,4,5,6);
    tabInterval[5]=new Array(0,1,2,3,4,5,6,7,8,9,10,11,0,1,2,3,4,5,6,7,8,9,10,11,0,1);
    tabInterval[6]=new Array(7,8,9,10,11,0,1,2,3,4,5,6,7,8,9,10,11,0,1,2,3,4,5,6,7,8);

    int1=tabInterval[i1corde][i1fret];
    int2=tabInterval[i2corde][i2fret];

    zintervalmystere=(int2-int1);
    if (zintervalmystere<0) zintervalmystere=zintervalmystere+12;

//    $("#gtest").html("</br>"+zintervalmystere+"</br>2 "+randcorde2+" / "+randfret2);

    //accordage guitare EADGBE
    var stringTunings = new Array(4, 9, 2, 7, 11, 4);

    positionToNote = function(string, fret) {
        return (1*fret + 1*stringTunings[string] + 12) % 12;
    }

    positionToInterval = function(rootString, rootFret, otherString, otherFret) {
        var root = this.positionToNote(rootString, rootFret);
        var other = this.positionToNote(otherString, otherFret);
        if (rootString < otherString) return ((1*other + 12) - root) % 12;
        else if (rootString > otherString) return ((1*root + 12) - other) % 12;
        else if (rootFret < otherFret) return ((1*other + 12) - root) % 12;
        else return ((1*root + 12) - other) % 12;
    }



//    alert(zintervalmystere);
    return zintervalmystere;
};

$('#gRandInt').click(intervalleAleatoire);

$(".i2m,.i2M,.i3m,.i3M,.i4j,.i4p,.i5j,.i6m,.i6M,.i7m,.i7M,.iO").click(function () {



    var reponse =$(this);

    if (zintervalmystere < 12){
        var intervalle=$(this).attr('data-int');

        if (zintervalmystere==intervalle) {
            $(this).addClass('btn btn-success');
            myCounter.step();

            //raz
            $('.note').removeClass('on');
            if (m480==0){$("#InterfExoRep").hide();}

            $('.btnrep').removeClass('btn-danger');
            $('.btnrep').removeClass('btn-success');

            intfaux=0;
        }
        else {
            intfaux++;

            if (intfaux < 2){
                //1 faute : montrer où s situe l'erreur (toute octave)
                $(this).addClass('btn-danger');
                $('#hit')[0].play();

                var classes = reponse.attr('class').split(' ');
//                $("#gtest").append("</br>cl "+classes[2]);
//
//                $("#gtest").append("</br>i2f "+i2fret);

                var ecart=parseInt(reponse.attr('data-int')-zintervalmystere);
//                $("#gtest").append("</br>diff "+ecart);
//                if((parseInt(i2fret+ecart))>0) $("#gtest").append("</br>fret err "+parseInt(i2fret+ecart));
//                if((parseInt(i2fret+ecart))<0) $("#gtest").append("</br>fret err "+parseInt(12+i2fret+ecart));

                if((parseInt(i2fret+ecart))>0){
                    var noteIntErr=$('.guitar-neck .'+randcorde2+' .pos'+parseInt(i2fret+ecart));}
                else var noteIntErr=$('.guitar-neck .'+randcorde2+' .pos'+parseInt(12+i2fret+ecart));

//                $("#gtest").append('</br> .pos'+parseInt(i2fret+ecart));

                noteIntErr.addClass("on");
                noteIntErr.text(classes[2][1]+classes[2][2]);
//                $("#gtest").append('</br> cl '+classes[2][2]);


                var classesErr = noteIntErr.attr('class').split(' ');
//                $("#gtest").append("</br>er "+classesErr[1]);
                $("."+classesErr[1]).addClass("on coul-a");
                $("."+classesErr[1]).text(classes[2][1]+classes[2][2]);

//                noteIntErr.effect("higlight");


            }
            else {
                //2 fautes = montrer le résultat
                var indice=Math.floor((Math.random()*16));
                if (indice<7) $('.soundFalse')[indice].play();
                else $('#hit')[0].play();
//                $('#breathing')[0].play();


                switch (zintervalmystere){
                    case 1:
                        noteInt2.text("2m");$(".i2m").effect("highlight");
                        break;
                    case 2:
                        noteInt2.text("2M");$(".i2M").effect("highlight");
                        break;
                    case 3:
                        noteInt2.text("3m");$(".i3m").effect("highlight");
                        break;
                    case 4:
                        noteInt2.text("3M");$(".i3M").effect("highlight");
                        break;
                    case 5:
                        noteInt2.text("4j");$(".i4j").effect("highlight");
                        break;
                   case 6:
                        noteInt2.text("4+");$(".i4p").effect("highlight");
                        break;
                    case 7:
                        noteInt2.text("5j");$(".i5j").effect("highlight");
                        break;
                    case 8:
                        noteInt2.text("6m");$(".i6m").effect("highlight");
                        break;
                    case 9:
                        noteInt2.text("6M");$(".i6M").effect("highlight");
                        break;
                    case 10:
                        noteInt2.text("7m");$(".i7m").effect("highlight");
                        break;
                    case 11:
                        noteInt2.text("7M");$(".i7M").effect("highlight");
                        break;
                    case 0:
                        noteInt2.text("O");$(".iO").effect("highlight");
                        break;
                    default:
                        noteInt2.text("?");break;
                }
                intfaux=0;
                if (m480==0){$("#InterfExoRep").hide();}
                $('.btnrep').removeClass('btn-danger');
                $('.btnrep').removeClass('btn-success');
            }
        }

    }
});

/*////////////////////////
 // Fin Intervalles
 //////////////////////////


/**************************
 * Accords Exo
 ******************************************************/
var randNoteAcc=0;
var randNote=0;
var randCoul=0;
var randMiLa=0;
var points=0;
var barr=0;

var fondfaux=0;
var coulfalse=0;

aleAccordOpen = function() {
    $('.guitarCounter').removeClass("rotation");
    $("#flame").removeClass("flamisation");

//    $("#gtest").text(" / OPEN / ");
    $("#corde").hide();$("#nbCordes").hide();
    $(".NoteBtnRep").hide();$(".IntBtnRep").hide();$(".AccBtnRep").show();

    //RAZ états boutons
    $('.btnrep').removeClass('btn-danger');
    $('.btnrep').removeClass('btn-success');

    $('.fondamentale').show();
    $('.btncoul').show();

    var corde = new Array("string-lowe","string-a","string-d","string-g","string-b","string-highe");

    note=["C","D","E","F","G","A","B"];
    couleur=["M","m","sept"];

    ///////////C Do tableau
    var tabC=new Array(); tabC[0]='C'; tabC[1]="open";
    var tab0C="x32010"; for(i=2;i<8;i++) { tabC[i]=tab0C.charAt(i-2); };
    //Cm
    var tabCm=new Array(); tabCm[0]='Cm'; tabCm[1]="";
    var tab0Cm="x35543"; for(i=2;i<8;i++) { tabCm[i]=tab0Cm.charAt(i-2); };
    //C7
    var tabC7=new Array(); tabC7[0]='C7'; tabC7[1]="";
    var tab0C7="x32310"; for(i=2;i<8;i++) { tabC7[i]=tab0C7.charAt(i-2); };

    /////////D Re tableau
    var tabD=new Array(); tabD[0]='D'; tabD[1]="open";
    var tab0D="xx0232";  for(i=2;i<8;i++) { tabD[i]=tab0D.charAt(i-2); };
    //Dm
    var tabDm=new Array(); tabDm[0]='Dm'; tabDm[1]="open";
    var tab0Dm="xx0231";  for(i=2;i<8;i++) { tabDm[i]=tab0Dm.charAt(i-2); };
    //D7
    var tabD7=new Array(); tabD7[0]='D7'; tabD7[1]="open";
    var tab0D7="xx0212";  for(i=2;i<8;i++) { tabD7[i]=tab0D7.charAt(i-2); };


    ///////////E Mi
    var tabE=new Array(); tabE[0]='E'; tabE[1]="open";
    var tab0E="022100";  for(i=2;i<8;i++) { tabE[i]=tab0E.charAt(i-2); };
    //Em
    var tabEm=new Array(); tabEm[0]='Em'; tabEm[1]="open";
    var tab0Em="022000";  for(i=2;i<8;i++) { tabEm[i]=tab0Em.charAt(i-2); };
    //E7
    var tabE7=new Array(); tabE7[0]='E7'; tabE7[1]="open";
    var tab0E7="020100";  for(i=2;i<8;i++) { tabE7[i]=tab0E7.charAt(i-2); };

    /////////////F
    var tabF=new Array(); tabF[0]='F'; tabF[1]="open";
    var tab0F="133211";  for(i=2;i<8;i++) { tabF[i]=tab0F.charAt(i-2); };
    //Fm
    var tabFm=new Array(); tabFm[0]='Fm'; tabFm[1]="open";
    var tab0Fm="133111";  for(i=2;i<8;i++) { tabFm[i]=tab0Fm.charAt(i-2); };
    //F7
    var tabF7=new Array(); tabF7[0]='F7'; tabF7[1]="open";
    var tab0F7="131211";  for(i=2;i<8;i++) { tabF7[i]=tab0F7.charAt(i-2); };

    //G
    var tabG=new Array(); tabG[0]='G'; tabG[1]="open";
    var tab0G="320003";  for(i=2;i<8;i++) { tabG[i]=tab0G.charAt(i-2); };
    //Gm
    var tabGm=new Array(); tabGm[0]='Gm'; tabGm[1]="open";
    var tab0Gm="355333";  for(i=2;i<8;i++) { tabGm[i]=tab0Gm.charAt(i-2); };
    //G7
    var tabG7=new Array(); tabG7[0]='G7'; tabG7[1]="open";
    var tab0G7="320001";  for(i=2;i<8;i++) { tabG7[i]=tab0G7.charAt(i-2); };

    //A
    var tabA=new Array(); tabA[0]='A'; tabA[1]="open";
    var tab0A="x02220";  for(i=2;i<8;i++) { tabA[i]=tab0A.charAt(i-2); };
    //Am
    var tabAm=new Array(); tabAm[0]='Am'; tabAm[1]="open";
    var tab0Am="x02020";  for(i=2;i<8;i++) { tabAm[i]=tab0Am.charAt(i-2); };
    //A7
    var tabA7=new Array(); tabA7[0]='A7'; tabA7[1]="open";
    var tab0A7="x02210";  for(i=2;i<8;i++) { tabA7[i]=tab0A7.charAt(i-2); };

    //B
    var tabB=new Array(); tabB[0]='B'; tabB[1]="open";
    var tab0B="x24442";  for(i=2;i<8;i++) { tabB[i]=tab0B.charAt(i-2); };
    //Bm
    var tabBm=new Array(); tabBm[0]='Bm'; tabBm[1]="open";
    var tab0Bm="x24432";  for(i=2;i<8;i++) { tabBm[i]=tab0Bm.charAt(i-2); };
    //B7
    var tabB7=new Array(); tabB7[0]='B7'; tabB7[1]="open";
    var tab0B7="x21202";  for(i=2;i<8;i++) { tabB7[i]=tab0B7.charAt(i-2); };

    //RAZ accord
    for(cr=0;cr<6;cr++){for(fr=0;fr<13;fr++) { $('.guitar-neck .'+corde[cr]+' .'+'pos'+fr).removeClass("on"); }};

    //Accord aleatoire
    randNote=note[(Math.floor(Math.random() * note.length))];
    randCoul=couleur[(Math.floor(Math.random() * couleur.length))];

//    $("#gtest").append("</br>randNote : "+randNote+"</br>randCoul : "+randCoul);

    /**********************************
     ** Affichage des accords
     **********************************/
    switch(randNote) {
        case "C": {
            switch(randCoul) {
                case "M" : for(c=2;c<8;c++){$('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabC[c]).addClass("on");};	break;
                case "m" : for(c=2;c<8;c++){$('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabCm[c]).addClass("on");};break;
                case "sept" : for(c=2;c<8;c++){ $('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabC7[c]).addClass("on"); }; break;
                default:alert("quelle couleur ?");break;
            }
        }break;

        case "D": {
            switch(randCoul) {
                case "M" : for(c=2;c<8;c++){$('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabD[c]).addClass("on");};break;
                case "m" :for(c=2;c<8;c++){$('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabDm[c]).addClass("on"); }; break;
                case "sept" : for(c=2;c<8;c++){ $('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabD7[c]).addClass("on"); }; break;
                default:alert("quelle couleur ?");break;
            }
        }break;

        case "E": {
            switch(randCoul) {
                case "M" : for(c=2;c<8;c++){$('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabE[c]).addClass("on");}; break;
                case "m" :for(c=2;c<8;c++){$('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabEm[c]).addClass("on"); }; break;
                case "sept" : for(c=2;c<8;c++){ $('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabE7[c]).addClass("on"); }; break;
                default:alert("quelle couleur ?");break;
            }
        }break;

        case "F": {
            switch(randCoul) {
                case "M" :for(c=2;c<8;c++){$('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabF[c]).addClass("on");}; break;
                case "m" :for(c=2;c<8;c++){$('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabFm[c]).addClass("on"); };break;
                case "sept" : for(c=2;c<8;c++){ $('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabF7[c]).addClass("on"); }; break;
                default:alert("quelle couleur ?");break;
            }
        }break;

        case "G": {
            switch(randCoul) {
                case "M" : for(c=2;c<8;c++){$('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabG[c]).addClass("on");};	break;
                case "m" :for(c=2;c<8;c++){$('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabGm[c]).addClass("on"); }; break;
                case "sept" : for(c=2;c<8;c++){ $('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabG7[c]).addClass("on"); }; break;
                default:alert("quelle couleur ?");	break;
            }
        }break;

        case "A": {
            switch(randCoul) {
                case "M" : 	for(c=2;c<8;c++){$('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabA[c]).addClass("on");};break;
                case "m" :for(c=2;c<8;c++){	$('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabAm[c]).addClass("on"); 	}; 	break;
                case "sept" : for(c=2;c<8;c++){ $('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabA7[c]).addClass("on"); }; break;
                default:alert("quelle couleur ?");break;
            }
        }break;

        case "B": {
            switch(randCoul) {
                case "M" :for(c=2;c<8;c++){	$('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabB[c]).addClass("on");}; break;
                case "m" :for(c=2;c<8;c++){$('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabBm[c]).addClass("on"); };break;
                case "sept" : for(c=2;c<8;c++){ $('.guitar-neck .'+corde[c-2]+' .'+'pos'+tabB7[c]).addClass("on"); }; break;
                default:alert("quelle couleur ?");break;
            }
        }break;

        default:alert("quel accord ?"); break;
    }
};

$('.btncoul').hide();
$(".fondamentale").hide();

aleAccordBarre = function() {

    $("#corde").hide();$("#nbCordes").hide();
    $(".NoteBtnRep").hide();$(".IntBtnRep").hide();$(".AccBtnRep").show();$(".btncoul").show();
    //RAZ
    $('.btnrep').removeClass('btn-danger');$('.btnrep').removeClass('btn-success');
    $('.fondamentale').show();

    var corde = new Array("string-lowe","string-a","string-d","string-g","string-b","string-highe");

    note=["C","D","E","F","G","A","B"];
    couleur=["XM","X7M","X7","Xm","Xm7","Xm7b5"];

    //position des notes sur les cordes Mi La
    var cordLa={"B":2,"C":3,"D":5,"E":7,"F":8,"G":10,"A":12};
    var cordMi={"F":1,"G":3,"A":5,"B":7,"C":8,"D":10,"E":12};

    //position accords en fonction cordes mi et la
    var tabMi={"XM":"022100","X7M":"021100","X7":"020100","Xm":"022000","Xm7":"020000","Xm7b5":"0100xx"};
    var tabLa={"XM":"x02220","X7M":"x02120","X7":"x02020","Xm":"x02210","Xm7":"x02010","Xm7b5":"x0101x"};

    //RAZ accord
    for(cr=0;cr<6;cr++){for(fr=0;fr<16;fr++) { $('.guitar-neck .'+corde[cr]+' .'+'pos'+fr).removeClass("on"); }};

    //Accord aleatoire
    randNoteAcc=note[(Math.floor(Math.random() * note.length))];
    randCoul=couleur[(Math.floor(Math.random() * couleur.length))];

    //random corde Mi ou La
    randMiLa=(Math.floor(Math.random()*2))+1;

    //Mi ou la choisie
    if (randMiLa==1/*Mi*/){
        var ecart =cordMi[randNoteAcc];
        var tab=tabMi[randCoul];
        var tabMig=new Array(); for(i=0;i<6;i++) { tabMig[i]=ecart+(parseInt(tabMi[randCoul].charAt(i)));
            for(c=0;c<6;c++){$('.guitar-neck .'+corde[c]+' .'+'pos'+tabMig[c]).addClass("on");};
        };
    }/*if mi*/
    else/*la*/{
        var ecart =cordLa[randNoteAcc];
        var tab=tabLa[randCoul];
        var tabLag=new Array(); for(i=0;i<6;i++) { tabLag[i]=ecart+(parseInt(tabLa[randCoul].charAt(i)));
            for(c=0;c<6;c++){$('.guitar-neck .'+corde[c]+' .'+'pos'+tabLag[c]).addClass("on");};
        };
    }
//
//    if (randMiLa==1) $("#gtest").html("</br>randNoteAcc : "+randNoteAcc+"</br>randCoul : "+randCoul);
//    else $("#gtest").html("</br>randNoteAcc : "+randNoteAcc+"</br>randCoul "+randCoul);
};

$('#randAcc').click(function(){

    fondfaux=0;
    coulfalse=0;
    randNoteAcc=0;
    randNote=0;

    $(".fondamentale").removeAttr('disabled');

    $(".note").removeClass("coul-fault on");
    $(".note").text("");

    $(".btncoul").attr('disabled','disabled');



    if (((optAcc["ouvert"])=="false")&&((optAcc["barre"]))=="false"){
//        alert("Un Accord nul Aléatoire ?");
        $('#hit')[0].play();

        if (m480==0){$("#InterfExoRep").hide();}
    }
    else if (((optAcc["ouvert"])=="true")&&((optAcc["barre"]))=="false"){aleAccordOpen();}

    else if (((optAcc["ouvert"])=="false")&&((optAcc["barre"]))=="true"){barr=1;aleAccordBarre();}

    else if (((optAcc["ouvert"])=="true")&&((optAcc["barre"]))=="true"){
        randoptacc=Math.floor((Math.random()*2)+1);
//        $("#gtest").append("rand : "+randoptacc);

        if (randoptacc==1){aleAccordOpen();}
        else {barr=1;aleAccordBarre();}
    }
});

    /**********************************
     ** 7 Boutons Tonique accord
     **********************************/


    $(".Ca,.Da,.Ea,.Fa,.Ga,.Aa,.Ba").click(function () {
        var X=$(this);
//        $("#gtest").append("</br>"+X.text());
        if((randNoteAcc!=0)||(randNote!=0)){

            //good response
            if ( (randNoteAcc == X.text()) ||(randNote == X.text() )){
//                $("#gtest").append("</br>"+X.text()+" = "+randNoteAcc);

                X.addClass('btn-success');
                X.attr('disabled','disabled');

                $('#AccBtnRep').show();$('.btncoul').show();

                if (barr==0) {$('.Maj7').hide();$('.min7').hide();$('.min7b5').hide();}

                $('.fondamentale').show();X.addClass('btn-success');
                $('.fondamentale').attr('disabled','disabled');

                score++;
                $("#score").text(score);
                myCounter.step();

                fondfaux=0;
                $(".btncoul").removeAttr('disabled');


                $(".string-lowe .note-"+x).removeClass("coul-fault on").text("");
                $(".string-a .note-"+x).removeClass("coul-fault on").text("");
                $(".string-d .note-"+x+".pos0").removeClass("coul-fault on").text("");
            }
            else{
                fondfaux++;
                //one fault => show error
                if (fondfaux<2) {
                    X.addClass('btn-danger');
                    $('#hit')[0].play();
                    var x= X.text().toLowerCase();

                    //barrchord : show strings E&A
                    if (barr==1) {
                        $(".string-lowe .note-"+x).addClass("coul-fault on").text(X.text());
                        $(".string-a .note-"+x).addClass("coul-fault on").text(X.text());
                    }
                    //Open : show fundamental error fret 0/6 string 1/3
                    else {
                        $(".string-lowe .note-"+x+".pos0").addClass("coul-fault on").text(X.text());
                        $(".string-lowe .note-"+x+".pos1").addClass("coul-fault on").text(X.text());
                        $(".string-lowe .note-"+x+".pos3").addClass("coul-fault on").text(X.text());
                        $(".string-lowe .note-"+x+".pos5").addClass("coul-fault on").text(X.text());

                        $(".string-a .note-"+x+".pos0").addClass("coul-fault on").text(X.text());
                        $(".string-a .note-"+x+".pos2").addClass("coul-fault on").text(X.text());
                        $(".string-a .note-"+x+".pos3").addClass("coul-fault on").text(X.text());
                        $(".string-a .note-"+x+".pos5").addClass("coul-fault on").text(X.text());

                        $(".string-d .note-"+x+".pos0").addClass("coul-fault on").text(X.text());
                    }
//                    $("#gtest").append(".str .note-"+x+".pos0");
                }

                //2 faults => show result
                else {
                    var indice=Math.floor((Math.random()*16));
                    if (indice<7) $('.soundFalse')[indice].play();
                    else $('#hit')[0].play();
//                $('#breathing')[0].play();
                    X.addClass('btn-danger');

//                    $("#gtest").append("</br>"+randNote+"button[title=\""+randNote+"\"]");

                    //response on buttons
                    //fundamental
                    $('.fondamentale').show();

                    //barr
                    if (barr==1){
                        $("button[title=\""+randNoteAcc+"\"]").addClass('btn-success');
                        $("button[title=\""+randNoteAcc+"\"]").attr('disabled','disabled');
                        $(".btnrep").attr('disabled','disabled');
                    }
                    else {
                        //open
                        $("button[title=\""+randNote+"\"]").addClass('btn-success');
                        $("button[title=\""+randNote+"\"]").attr('disabled','disabled');
                        $(".btnrep").attr('disabled','disabled');
                    }


                    //color
                    $("#AccBtnRepCoul").show();
                    $(".btncoul").show();
                    if (barr==1){
                        //bar
                        $("#AccBtnRepCoul ."+randCoul).addClass('btn-success');
                        $("#AccBtnRepCoul ."+randCoul).attr('disabled','disabled');
                    }
                    else {
                        //open
                        $("button[title=\""+randCoul+"\"]").addClass('btn-success');
                        $("button[title=\""+randCoul+"\"]").attr('disabled','disabled');
                    }


                    //RAZ
                    fondfaux=0;
                    $(".string-lowe .note-"+x).removeClass("coul-fault on").text("");
                    $(".string-a .note-"+x).removeClass("coul-fault on").text("");
                    $(".string-d .note-"+x+".pos0").removeClass("coul-fault on").text("");

//                    $("#gtest").append("</br>\#AccBtnRepCoul ."+randCoul);
                }
            }
        }
    });



/**********************************
 ** couleurs Majeur, mineur, 7ème**
 **********************************/

$(".Maj,.min,.Sept,.XM,.Xm,.X7,.X7M,.min7,.min7b5").click(function(){

//    $("#gtest").append("</br>randcoul "+randCoul);
//    $("#gtest").append("</br>this  "+$(this));


    switch (randCoul){
        //open
        case "M":
            if ($(this).hasClass("Maj")) {
//                $("#gtest").append("</br> entrée XM-M avec "+randCoul);
                $(this).addClass('btn-success');
                $(".btncoul").attr('disabled','disabled');
                $(".btncoul").show();$(this).show();
                score++;$("#score").text(score);myCounter.step();
                randCoul=0;randNoteAcc=0;randNote=0;randMiLa=0;points=0;barr=0;
            }
            else {
                $('#hit')[0].play();
                $(".btncoul").attr('disabled','disabled');
                $("button[title=\""+randCoul+"\"]").addClass('btn-success');

                $("button[title=\""+randCoul+"\"]").attr('disabled','disabled');
                $(".btncoul").show();
                $("button[title=\""+randCoul+"\"]").show();


            }
            break;

        case "m" :
            if ($(this).hasClass("min")) {
//                $("#gtest").append("</br> entrée Xm-m avec "+randCoul);
                $(this).addClass('btn-success');
                $(".btncoul").show();$(this).show();
                $(".btncoul").attr('disabled','disabled');
                score++;$("#score").text(score);myCounter.step();
                randCoul=0;randNoteAcc=0;randNote=0;randMiLa=0;points=0;barr=0;
            }
            else {
                $('#hit')[0].play();
                $(".btncoul").attr('disabled','disabled');
                $("button[title=\""+randCoul+"\"]").addClass('btn-success');

            }
            break;

        case "sept" :
            if ($(this).hasClass("Sept")) {
//                $("#gtest").append("</br> entrée X7-sept avec "+randCoul);
                $(this).addClass('btn-success');
//                $(".btncoul").show();$(this).show();
                $(".btncoul").attr('disabled','disabled');
                score++;$("#score").text(score);myCounter.step();
                randCoul=0;randNoteAcc=0;randNote=0;randMiLa=0;points=0;barr=0;
            }
            else {
                $('#hit')[0].play();
                $(".btncoul").attr('disabled','disabled');
                $("button[title=\""+randCoul+"\"]").addClass('btn-success');

            }
            break;

        case "XM" :
            if ($(this).hasClass("XM")) {
                $(this).addClass('btn-success');
                $(".btncoul").attr('disabled','disabled');
                myCounter.step();
                score++;$("#score").text(score);myCounter.step();
                randCoul=0;randNoteAcc=0;randNote=0;randMiLa=0;points=0;barr=0;coulfalse=0;

            }
            else {
                coulfalse++;
                //1 fault
                if (coulfalse<2) {
                    //alert("1 faute");
                    $(this).addClass('btn-danger');
                    $('#hit')[0].play();
                }
                //2 faults => result
                else {
                    $(this).addClass('btn-danger');
                    $('#hit')[0].play();
                    $(".btncoul").show();
                    $("#AccBtnRepCoul ."+randCoul).addClass('btn-success');
                    $("#AccBtnRepCoul ."+randCoul).attr('disabled','disabled');
                    coulfalse=0;
                }
            }
            break;

        case "Xm" :
            if ($(this).hasClass("Xm")) {
                $(this).addClass('btn-success');
                $(".btncoul").attr('disabled','disabled');
                myCounter.step();
                score++;$("#score").text(score);myCounter.step();
                randCoul=0;randNoteAcc=0;randNote=0;randMiLa=0;points=0;barr=0;coulfalse=0;

            }
            else {
                coulfalse++;
                //1 fault
                if (coulfalse<2) {
                    //alert("1 faute");
                    $(this).addClass('btn-danger');
                    $('#hit')[0].play();
                }
                //2 faults => result
                else {
                    $(this).addClass('btn-danger');
                    $('#hit')[0].play();
                    $(".btncoul").show();
                    $("#AccBtnRepCoul ."+randCoul).addClass('btn-success');
                    $("#AccBtnRepCoul ."+randCoul).attr('disabled','disabled');
                    coulfalse=0;
                }
            }
            break;
        case "X7" :
            if ($(this).hasClass("X7")) {
                $(this).addClass('btn-success');
                $(".btncoul").attr('disabled','disabled');
                myCounter.step();
                score++;$("#score").text(score);myCounter.step();
                randCoul=0;randNoteAcc=0;randNote=0;randMiLa=0;points=0;barr=0;coulfalse=0;

            }
            else {
                coulfalse++;
                //1 fault
                if (coulfalse<2) {
                    ////alert("1 faute");
                    $(this).addClass('btn-danger');
                    $('#hit')[0].play();
                }
                //2 faults => result
                else {
//                    alert("2 fautes");
                    $('#hit')[0].play();
                    $(".btncoul").show();
                    $("#AccBtnRepCoul ."+randCoul).addClass('btn-success');
                    $("#AccBtnRepCoul ."+randCoul).attr('disabled','disabled');
                    coulfalse=0;
                }
            }
            break;
        case "Xm7" :
            if ($(this).hasClass("Xm7")) {
                $(this).addClass('btn-success');
                $(".btncoul").attr('disabled','disabled');
                myCounter.step();
                score++;$("#score").text(score);myCounter.step();
                randCoul=0;randNoteAcc=0;randNote=0;randMiLa=0;points=0;barr=0;coulfalse=0;

            }
            else {
                coulfalse++;
                //1 fault
                if (coulfalse<2) {
                    //alert("1 faute");
                    $(this).addClass('btn-danger');
                    $('#hit')[0].play();
                }
                //2 faults => result
                else {
                    $(this).addClass('btn-danger');
                    $('#hit')[0].play();
                    $(".btncoul").show();
                    $("#AccBtnRepCoul ."+randCoul).addClass('btn-success');
                    $("#AccBtnRepCoul ."+randCoul).attr('disabled','disabled');
                    coulfalse=0;
                }
            }
            break;
        case "Xm7" :
            if ($(this).hasClass("Xm7")) {
                $(this).addClass('btn-success');
                $(".btncoul").attr('disabled','disabled');
                myCounter.step();
                score++;$("#score").text(score);myCounter.step();
                randCoul=0;randNoteAcc=0;randNote=0;randMiLa=0;points=0;barr=0;coulfalse=0;

            }
            else {
                coulfalse++;
                //1 fault
                if (coulfalse<2) {
                    //alert("1 faute");
                    $(this).addClass('btn-danger');
                    $('#hit')[0].play();
                }
                //2 faults => result
                else {
                    $(this).addClass('btn-danger');
                    $('#hit')[0].play();
                    $(".btncoul").show();
                    $("#AccBtnRepCoul ."+randCoul).addClass('btn-success');
                    $("#AccBtnRepCoul ."+randCoul).attr('disabled','disabled');
                    coulfalse=0;
                }
            }
            break;
        case "Xm7b5" :
            if ($(this).hasClass("Xm7b5")) {
                $(this).addClass('btn-success');
                $(".btncoul").attr('disabled','disabled');
                myCounter.step();
                score++;$("#score").text(score);myCounter.step();
                randCoul=0;randNoteAcc=0;randNote=0;randMiLa=0;points=0;barr=0;coulfalse=0;

            }
            else {
                coulfalse++;
                //1 fault
                if (coulfalse<2) {
                    //alert("1 faute");
                    $(this).addClass('btn-danger');
                    $('#hit')[0].play();
                }
                //2 faults => result
                else {
                    $(this).addClass('btn-danger');
                    $('#hit')[0].play();
                    $(".btncoul").show();
                    $("#AccBtnRepCoul ."+randCoul).addClass('btn-success');
                    $("#AccBtnRepCoul ."+randCoul).attr('disabled','disabled');
                    coulfalse=0;
                }
            }
            break;

        default:
            alert("?");
//            $(this).addClass('btn-danger');
//            $('#hit')[0].play();
            break;
    }
});

/*////////////////////////
  // Accords Exo
 //////////////////////////*/


/*******************
 * INTERFACE
 **********************************/

$( "#radioInfoExo" ).buttonset();
$( "#radionia" ).buttonset();

//if (m480==false){
if (m480==0){$("#InterfExoRep").hide();}
$(".IntBtnRep,.AccBtnRep").hide();
//}
//if(m480==true){
//    $(".IntBtnRep").hide();
//    $(".AccBtnRep").hide();
//}

$("#InterfInt").hide();$(".IntInfo").hide();$(".IntExo").hide();
$("#InterfAcc").hide();$(".AccInfo").hide();$(".AccExo").hide();

$(".ipInfoNotes").hide();

//NOTES
var theme="note";
var infoExo="exo";


$("input[name='radioMenu']").on("change", function () {
    if (this.id=="ipInfo"){
        infoExo="info";
        $(".ipExo").hide();$(".ipInfo").hide();$("#InterfExoQuest").hide();
        $("#InterfNotes").hide();
        $("#BtnRandNote").hide();
        $("#BtnRandInt").hide();$("#BtnRandAcc").hide();
        $("#InterNotes").hide();$(".NotesInfo").hide();
        $(".ipInfoNotes").show();

        switch (theme){
            case("note"):
                NotesAll;
                break;
            case("int"):
                $('.ipInfoNotes').hide();
                break;
            case("acc"):
                $('.ipInfoNotes').hide();
                break;
            default:NotesAll();break;
        }
    }
    if (this.id=="ipExo"){
        infoExo="exo";

        $(".ipExo").show();
        $("#InterfExoQuest").show();

        $(".ipInfo").hide();
        $(".ipInfoNotes").hide();
        $("#NotesInfoOct").hide();

        $('.note').removeClass('on');
        $('.note').removeClass('manche');
        $('.note').removeClass('coul-e');
        $('.note').removeClass('coul-f');
        $('.note').removeClass('coul-g');
        $('.note').removeClass('coul-a');
        $('.note').removeClass('coul-b');
        $('.note').removeClass('coul-c');
        $('.note').removeClass('coul-d');

        $('.note').text('');



        switch (theme){
            case("note"):
                $("#BtnRandNote").show();
                $("#BtnRandInt").hide();$("#BtnRandAcc").hide();
                $("#optionsExo").show();
                break;
            case("int"):
                $("#BtnRandInt").show();$("#cordesFrets").show();
                $("#BtnRandNote").hide();$("#BtnRandAcc").hide();
                $("#optionsExo").show();
                break;
            case("acc"):
                $("#BtnRandAcc").show();
                $("#BtnRandNote").hide();$("#BtnRandInt").hide();
                $("#optionsExo").hide();
                break;
        }
    }
});

$("input[name='radionia']").on("change", function () {

    if (this.id=="ipNotes"){
        theme="note";
        $("#BtnRandNote").show();
        if (m480==0){$("#InterfExoRep").hide();}
        $(".IntBtnRep").hide();
        $(".AccBtnRep").hide();$("#BtnRandInt").hide();$("#BtnRandAcc").hide();
        $('#optionAccord').hide();
        $("#NotesInfoOct").hide();

        switch (infoExo){
            case("info"):
                $('.ipInfoNotes').show();
                break;
            case("exo"):
                $("#optionsExo").show();
                $("#cordesFrets").show();
                $("#nbCordes").show();
                $("#nbFrets").show();
                break;
        }
    }

    if (this.id=="ipIntervalles"){
        theme="int";
        $("#BtnRandInt").show();
        if (m480==0){$("#InterfExoRep").hide();}
        $(".NotesBtnRep").hide();$(".AccBtnRep").hide();
        $("#BtnRandNote").hide();$("#BtnRandAcc").hide();
        $('#optionAccord').hide();
        $("#NotesInfoOct").hide();

        switch (infoExo){
            case("info"):
                $('.ipInfoNotes').hide();
                break;
            case("exo"):
                $("#cordesFrets").show();
                $("#nbCordes").show();
                $("#nbFrets").show();
                $("#optionsExo").show();
                break;
        }
    }

    if (this.id=="ipAccords"){
        theme="acc";
        $("#BtnRandAcc").show();
        $('#optionAccord').show();
        $("#NotesInfoOct").hide();


        if (m480==0){$("#InterfExoRep").hide();}
        $(".NotesBtnRep").hide();
        $(".NotesBtnRep").hide();$("#BtnRandNote").hide();$("#BtnRandInt").hide();

        switch (infoExo){
            case("info"):
                $('.ipInfoNotes').hide();
                break;
            case("exo"):
                $("#cordesFrets").hide();
                $("#nbCordes").show();
                $("#nbFrets").hide();
                $("#optionsExo").hide();


                break;
        }
    }
});




$("input[name='radioInfoNotes']").on("change", function (e) {
    if (this.id=="prout"){
        //RAZ
        var note=$('.note');
        $('.note').removeClass('on root');
        note.removeClass('on');
        note.removeClass('root');
        note.removeClass('manche');
        note.removeClass('coul-a');
        note.removeClass('coul-b');
        note.removeClass('coul-c');
        note.removeClass('coul-d');
        note.removeClass('coul-e');
        note.removeClass('coul-f');
        note.removeClass('coul-g');
        $("#NotesInfoOct").hide();

    }
    if (this.id=="toutes"){
        $("#NotesInfoOct").hide();

//        $("#NotesInfoOct").toggle();
        NotesAll();
    }
    if (this.id=="fret05"){
        //RAZ
        var note=$('.note');
        $('.note').removeClass('on root');
        note.removeClass('on');
        note.removeClass('root');
        note.removeClass('manche');
        note.removeClass('coul-a');note.removeClass('coul-b');note.removeClass('coul-c');note.removeClass('coul-d');note.removeClass('coul-e');
        note.removeClass('coul-f');note.removeClass('coul-g');
        $("#NotesInfoOct").hide();



    }
    if (this.id=="octaves"){
//        $(".NoteBtnRep").toggle();
        $("#NotesInfoFret").toggle();

        //RAZ
        var note=$('.note');
        $('.note').removeClass('on root');
        note.removeClass('on');
        note.removeClass('root');
        note.removeClass('manche');
        note.removeClass('coul-a');note.removeClass('coul-b');note.removeClass('coul-c');note.removeClass('coul-d');note.removeClass('coul-e');
        note.removeClass('coul-f');note.removeClass('coul-g');



        var ng=$(".note-g");
        ng.text("g");
        ng.addClass('manche coul-g on');

        e.preventDefault();
        $("#NotesInfoOct").show();
    }
});

$('#plus').hide();$('#radplus').hide();
$('#optionAccord').hide();



var optAcc=new Array();
optAcc["ouvert"]="true";
optAcc["barre"]="false";
optAcc["plus"]="false";

$("input[name='radopen']").on("change", function () {
    if (this.id=="onop"){        optAcc["ouvert"]="true";    }
    else {        optAcc["ouvert"]="false";    }
    $("#gtest").text("open : "+optAcc["ouvert"]);
});

$("input[name='radbarre']").on("change", function () {
    if (this.id=="onba"){        optAcc["barre"]="true";    }
    else {        optAcc["barre"]="false";    }
    $("#gtest").text("barre : "+optAcc["barre"]);
});

$("input[name='radplus']").on("change", function () {
    if (this.id=="onpl"){        optAcc["plus"]="true";    }
    else {        optAcc["plus"]="false";    }
    $("#gtest").text("optplus : "+optAcc["plus"]);
});




$('#NotesExoBtn').click(function(){
    $("#InterfExoRep").show();
});
$('#gRandInt').click(function(){
    $("#InterfExoRep").show();
});
$('#randAcc').click(function(){
    $("#InterfExoRep").show();
});



/*////////////////////////
 // INTERFACE
 /////////////*/


$('#noteTest').click(function(){
   alert("yo");
});

$( '#optionsExo' ).hover(function() {
//    $( "#nbFrets" ).effect( "highlight" );
    $( "#NotesSliderFrets" ).effect( "highlight" );

    $( "#NotesSliderCordes" ).effect( "highlight" );

    $( ".ui-slider-handle" ).effect( "highlight" );

});

var guitimg=0;

$("#slider").click(function() {
    $("#slider img").removeClass("opaque");
    guitimg++;

    if (guitimg>4) guitimg=0;

    $("#slider img").eq(guitimg).addClass("opaque");

});

//ver. édulcorée ,#gtest
if (window.matchMedia("(max-width:480px)").matches) {
    $("#logoRetour,#ghref,header,#exoschem,#nbFrets,#nbCordes,#flame,#coin,#champi," +
        "#carioca,#fight,#pointz,#soundFalse,#guitSd," +
        "#choixp,#interfacePrincipale," +
        "#case,#corde,#optionsExo,.vect,#NotesBtnRepSharp," +
        "#hadoken,#poxerUp,#excellent,#impressive,#accuracy,#perfect,#takenlead"
    ).remove();
    $(".btnresp").addClass("btn-large");

}


var m480=false;

//LANDSCAPE
if(window.matchMedia("screen and (orientation:landscape) and (max-width:800px)").matches) {
    m480=true;
//    $("#logoRetour,#ghref,header,#exoschem,#nbFrets,#nbCordes,#flame,#coin,#champi," +
//        "#carioca,#fight,#pointz,#soundFalse,#guitSd," +
//        "#choixp,#interfacePrincipale," +
//        "#case,#corde,#optionsExo,.vect,#NotesInfoOct,#NotesBtnRepSharp," +
//        "#hadoken,#poxerUp,#excellent,#impressive,#accuracy,#perfect,#takenlead"
//    ).remove();

}


// Fonction exécutée au redimensionnement
function redimensionnement(e) {
    var gtest = document.getElementById('gtest');
    if("matchMedia" in window) {
        if(window.matchMedia("(max-width: 800px)").matches) {
//            alert("\<800");
            m480=true;
            gtest.innerHTML = "Passez en mode paysage pour jouer !";
            $(".btnresp").addClass("btn-large");
        }
    }
    else {
        m480=false;
        $("#gtest").remove();
    }
}
window.addEventListener('resize', redimensionnement(), false);
// Exécution de cette même fonction au démarrage pour avoir un retour initial
redimensionnement();



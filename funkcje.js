function pokaz(id)
{
 var tresc="";
 switch (id)
 { case 2: tresc += pokazGalerie();break;
 case 3: tresc += pokazPost(); break;
 case 4: tresc += pokazKontakt();break;
 default: tresc += pokazOmnie();
 }
 //pobierz element o wskazanym id i ustaw jego nową zawartość:
 document.getElementById('blok').innerHTML = tresc;
}
function pokazOmnie(){
 var tresc ='<h2><br />O mnie</h2> ';
 //operator += uzupełnia łańcuch kolejną porcją znaków:
 tresc += '<p>Lorem ipsum dolor pariatur,...</p>'+
 '<p class="srodek"><img src="miniatury/baner.jpg" alt="Zdjęcie" /></p>'+
 '<article><h2>Moje hobby</h2><p>'+
 'Lorem ipsum dolor sit amet,...'+
 'mollit anim id est laborum.</p></article>';
 //przekaż wynik – gotową zawartość – do miejsca wywołania funkcji:
 return tresc;
 }
 
 function pokazGalerie()
{
 var tresc='<h2><br />Moja galeria</h2>';
 tresc+=' <div class="galeria">';
 //wygeneruj kod HTML z obrazami za pomocą pętli for:
 for(i=1;i<=10;i++)
 {
 tresc+='<div class="slajd"> <a href="zdjecia/obraz'+i+'.jpg" data-lightbox="galeria" data-title="Obraz '+i+'"> <img src="miniatury/obraz'+i+'.jpg" alt="miniatura'+i+'" /></a></div>';
 }
 return tresc+'</div>';
}
function pokazKontakt()
{
 var tresc='<h2><br />Kontakt</h2>';
tresc+='<div>Telefon: hehehehehe</div>';
 return tresc;
}
function pokazPost()
{
 //funkcja generuje kod formularza – dane wpisane w odpowiednie pola przez
 //użytkownika zostaną przekazane mailem na wskazany adres, ale najpierw po
 //zajściu zdarzenia submit (wyślij) – zostanie wywołana funkcja pokazDane()
 tresc='<h2><br />Dodaj post</h2>';
 tresc+='<article class="srodek" ><form action="mailto:adriandomanski@vp.pl" method="post" onsubmit="return pokazDane();">'+ 'Twój email:<br /> <input type="email" name="email" id="email" required /><br />'
         +'Imię:<br /> <input type="text" name="imie" id="imie" ><br />'
         +'Nazwisko:<br /> <input type="text" pattern="[a-zA-Z]{1,25}" name="nazwisko" id="nazwisko" ><br />'
         +'Komentarz: <br /><textarea rows="3" cols="20" id="wiadomosc" name="wiadomosc" required></textarea>'+ '<br /> <input type="submit" name="Hop" value="Hop" />'+'</form></article>';

 return tresc;
}
function pokazDane()
{
 //Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko
 //typu confirm do zatwierdzenia przez użytkownika:
 var dane="Następujące dane zostaną wysłane:\n";
 dane=dane+"Email: "+document.getElementById('email').value+"\n"+"Imię: "+document.getElementById('imie').value+"\n"+"Nazwisko: "+document.getElementById('nazwisko').value+"\n"+"Komentarz: "
         +document.getElementById('wiadomosc').value+"\n";
 // uzupełnij dane ...
 if (window.confirm(dane)) return true;
 else return false;
}



$(document).ready(function () {
$('h1').html('Przykład stronki z JavaScript')
.addClass('klasaZcss')
.css('display', 'none')
.fadeIn('slow');

});


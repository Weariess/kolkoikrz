var licznik = 0

var plansza =[
    [],
    [],
    []

]



function znak(id){
   licznik++
   var znaczek

   var intId = parseInt(id)-1

   if(licznik%2==0) znaczek = "O"
   else znaczek = "X"

   if(intId < 3) plansza [0][intId] = znaczek
   if(intId < 6 && intId > 2) plansza [1][intId%3] = znaczek
   if(intId >= 6) plansza [2][intId%3] = znaczek

   document.getElementById(id).innerHTML = znaczek

   document.getElementById(id).removeAttribute("onclick")

   console.log(plansza)
   czyWygrana()
}

function czyWygrana(){
    for(let i=0;i<=2;i++){
        if(plansza[i][0]==plansza[i][1] && plansza[i][0]==plansza[i][2] && plansza[i][0]!=undefined){
            console.log("Wygrana")
            blokujPlansze()
        }
    }
}

function blokujPlansze(){
    for(let i=1;i<=9;i++){
        document.getElementById(i.toString()).removeAttribute("onclick")
    }
}
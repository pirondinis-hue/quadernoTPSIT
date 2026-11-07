// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".

const input = document.getElementById("item");
const bottoneAggiungi = document.getElementById("btn-aggiungi");
const lista = document.getElementById("lista");

bottoneAggiungi.addEventListener("click", aggiungiItem);

function aggiungiItem(){
    const testo = input.value;
    
    if(testo=""){
        return;
    }

    for(const item of lista.children){
        const testoItem = item.firstChild.textContent;
        if(nuovoItem.classList.contains("done")){
            nuovoItem.classList.remove("done");
        }
        else{
            nuovoItem.classList.add("done");
        }
    }

    const nuovoItem = document.createElement("li");

    const spanTesto = document.createElement("span");
    spanTesto.textContent = testo;
    nuovoItem.append(spanTesto);

    const bottoneRimuovi = document.createElement("button");
    bottoneRimuovi.textContent = "X";
    bottoneRimuovi.addEventListener("click", () => {
        nuovoItem.remove();
    })
    nuovoItem.append(bottoneRimuovi);

    lista.append(nuovoItem);
}


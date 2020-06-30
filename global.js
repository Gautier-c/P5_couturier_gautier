// OPTIONS SELECT PAGE PRODUIT
function selectOptions(options, selection){
    for (let option of options){
        let optionElt = document.createElement("option")
        optionElt.setAttribute("value", option);
        optionElt.text = option;
        selection.appendChild(optionElt)
    }
}
// AJOUTER PRODUIT AU PANIER
function alreadyCart (specifications,cartItems,product){
    let cartObject = {
        name : product.name,
        price : product.price/100,
        id : id,
        couleur : specifications[0],
        img : product.imageUrl,
    }
    cartItems.push(cartObject);
    localStorage.setItem('panier', JSON.stringify(cartItems));
    alert('Produit ajouté au panier');
}
// CREER UN PANIER
function createCart (specification, product){
    let newBasket = new Array();
    const newobject = {
        name : product.name,
        price : product.price/100,
        id : id,
        couleur : specification[0],
        img : product.imageUrl,
    }
    newBasket.push(newobject);
    localStorage.setItem('panier',JSON.stringify(newBasket));
    alert('Produit ajouté au panier');
}
// AFFICHER COULEUR DANS LE PANIER
function displayOptions(option,pdtContainer){
    let itemOptions = document.createElement('p');
    itemOptions.textContent = option;
    pdtContainer.appendChild(itemOptions);
}

//REGEX VERIFICATION
function checkFormat(testFormat, idInfo){
    if(testFormat === false){
            document.getElementById('error').innerHTML="Les cases en rouge sont à completer obligatoirement !";
            idInfo.style.backgroundColor="red";
            idInfo.style.color="#FFF";
            return false;
        }
        else
        {
            idInfo.style.backgroundColor="#9C6";
        }
}
//recuperation de l'id de l'url
let url = new URL(document.URL);
let search_param = url.searchParams;
let id = search_param.get('id');
let article = search_param.get('item')



function Display(){
    fetch("http://localhost:3000/api/"+ article +"/" + id)
    .then(function(response){
        return response.json();
    })

    .then(function(product)
    {
        //creation container article
        const section = document.getElementById('product');
        const pdtContainer = document.createElement('article');
        pdtContainer.id = "productItem";
        section.appendChild(pdtContainer);

        //creation img
        const img = document.createElement('img');
        img.src = product.imageUrl;
        img.id = "itemImg";
        pdtContainer.appendChild(img);

        //affichage name
        const name = document.createElement('h3');
        name.textContent = product.name;
        pdtContainer.appendChild(name);

    
        //affichage price
        const price = document.createElement('p');
        price.textContent = product.price/100 +" €";
        pdtContainer.appendChild(price);

        //affichage description
        const desc = document.createElement('p');
        desc.textContent = product.description;
        pdtContainer.appendChild(desc);

        //Selection de l'option
        const selection = document.createElement('select');
        selection.id = "mySelect";
        pdtContainer.appendChild(selection);

        const ours = product.colors;
        const cameras = product.lenses;
        const meubles = product.varnish;

            if (ours){
                for (let i=0; i <product.colors.length; i++){
                    let option = document.createElement("option")
                    option.setAttribute("value", product.colors[i]);
                    option.text =product.colors[i];
                    selection.appendChild(option)
                }
            }   
            else if (cameras){
                for (let i=0; i < product.lenses.length; i++){
                    let option = document.createElement("option")
                    option.setAttribute("value", product.lenses[i]);
                    option.text =product.lenses[i];
                    selection.appendChild(option)
                }
            }    
            else if (meubles){
                for (let i=0; i < product.varnish.length; i++){
                    let option = document.createElement("option")
                    option.setAttribute("value", product.varnish[i]);
                    option.text =product.varnish[i];
                    selection.appendChild(option)
                }
            }

        //affichage bouton "ajouter au panier"
        const btn = document.createElement("button");
        btn.setAttribute('class', 'btn');
        btn.setAttribute('data-url', url);
        btn.textContent = "Ajouter au panier";
        pdtContainer.appendChild(btn);
        
         //au clic du bouton "ajouter au panier"
         btn.addEventListener('click', e =>{
            e.preventDefault();
            if (localStorage.getItem('panier')){
                let test = (localStorage.getItem('panier'));
                test = JSON.parse(test);
                if (ours){
                    let object = {
                        name : product.name,
                        price : product.price/100,
                        id : id,
                        couleur : product.colors[0],
                        img : product.imageUrl,
                    }
                    test.push(object);
                    localStorage.setItem('panier', JSON.stringify(test));
                    alert('Produit ajouté au panier');
                }
                else if (cameras){
                    let object = {
                        name : product.name,
                        price : product.price/100,
                        id : id,
                        lenses : product.lenses[0],
                        img : product.imageUrl,
                    }
                    test.push(object);
                    localStorage.setItem('panier', JSON.stringify(test));
                    alert('Produit ajouté au panier');
                }
                else if (meubles){
                    let object = {
                        name : product.name,
                        price : product.price/100,
                        id : id,
                        varnish : product.varnish[0],
                        img : product.imageUrl,
                    }
                    test.push(object);
                    localStorage.setItem('panier', JSON.stringify(test));
                    alert('Produit ajouté au panier');
                }
            }
            
                //IL n'y a rien dans le panier
            else{
                if(ours){
                    let panier = new Array();
                    const object = {
                        name : product.name,
                        price : product.price/100,
                        id : id,
                        couleur : product.colors[0],
                        img : product.imageUrl,
                    }
                    panier.push(object);
                    localStorage.setItem('panier',JSON.stringify(panier));
                    alert('Produit ajouté au panier');
                }
                if(cameras){
                    let panier = new Array();
                    const object = {
                        name : product.name,
                        price : product.price/100,
                        id : id,
                        lenses : product.lenses[0],
                        img : product.imageUrl,
                    }
                    panier.push(object);
                    localStorage.setItem('panier',JSON.stringify(panier));
                    alert('Produit ajouté au panier');
                }
                if(meubles){
                    let panier = new Array();
                    const object = {
                        name : product.name,
                        price : product.price/100,
                        id : id,
                        varnish : product.varnish[0],
                        img : product.imageUrl,
                    }
                    panier.push(object);
                    localStorage.setItem('panier',JSON.stringify(panier));
                    alert('Produit ajouté au panier');
                }
            }
        })
    })
}
Display();
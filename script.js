const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = e.target.name.value
    let price = e.target.price.value
    let color = e.target.color.value
    let size = e.target.size.value
    let inStock = e.target.inStock.value

   
    createItem(name,price,color,size,inStock)
})


function itemTemplate(name, price, color, size, inStock) {
    let li = document.createElement("li")

    let nameObj = document.createElement('strong')
    let priceObj = document.createElement('strong')
    let colorObj = document.createElement('strong')
    let sizeObj = document.createElement('strong')
    let inStockObj = document.createElement('strong')
    
    nameObj.innerText = name;
    priceObj.innerText = `$${price}`;
    colorObj.innerText = color;
    colorObj.setAttribute("style", `color: ${color}`)
    sizeObj.innerText = size;
    inStockObj.innerText = inStock;


    li.append(nameObj,document.createElement("br"))
    li.append(priceObj,document.createElement("br"))
    li.append(colorObj,document.createElement("br"))
    li.append(sizeObj,document.createElement("br"))
    li.append(inStockObj,document.createElement("br"))



    return li
}

function createItem(name, price, color, size, inStock){
    const ul = document.querySelector("ul");
    const li = itemTemplate(name,price,color,size,inStock)

    ul.append(li)
}

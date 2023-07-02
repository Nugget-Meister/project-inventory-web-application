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
    let container = document.createElement("section")
    let removeButton = document.createElement("button")
    removeButton.innerText = "Deletorade This"

    removeButton.addEventListener("click", (event) => {
        li.remove()
    })


    let nameObj = document.createElement('strong')
    let priceObj = document.createElement('strong')
    let colorObj = document.createElement('strong')
    let sizeObj = document.createElement('strong')
    let inStockObj = document.createElement('strong')
    
    nameObj.innerText = name;
    priceObj.innerText = `$${(price/100).toFixed(2)}`;
    colorObj.innerText = color;
    sizeObj.innerText = size;
    inStockObj.innerText = inStock;

    container.setAttribute("style", `background-color: ${color}`)


    li.append(container)

    container.append(nameObj,document.createElement("br"))
    container.append(priceObj,document.createElement("br"))
    container.append(colorObj,document.createElement("br"))
    container.append(sizeObj,document.createElement("br"))
    container.append(inStockObj,document.createElement("br"))
    container.append(removeButton)

    return li
}

function createItem(name, price, color, size, inStock){
    const ul = document.querySelector("ul");
    const li = itemTemplate(name,price,color,size,inStock)

    console.log(ul.children)

    ul.append(li)
}


function addToggleHidden(name) {
    let toggleList = document.getElementsByClassName(name)
    for(element of toggleList){
        element.addEventListener("click", (event) => {
            let parent = event.target.parentElement
            let form = parent.querySelector("form")
            // console.log(form)

            if(form.style.display != "none") {
                form.style.display = "none"
            } else {
                form.style.display = "block"
            }
        })
    }
}


function showHide(element) {

}
 
addToggleHidden('hide')
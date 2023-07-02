const target = document.querySelector("form")

target.addEventListener("submit", (e) => {
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

    removeButton.addEventListener("click", () => {
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
    inStockObj.innerText = inStock == "yes" ? "In Stock": "Out of Stock";

    li.setAttribute("style", `background-color: ${color}`)

    li.append(container)

    container.append(nameObj,document.createElement("br"))
    container.append(priceObj,document.createElement("br"))
    container.append(colorObj,document.createElement("br"))
    container.append(sizeObj,document.createElement("br"))
    container.append(inStockObj,document.createElement("br"))
    li.append(removeButton)

    return li
}

function createItem(name, price, color, size, inStock){
    const ul = document.querySelector("ul");
    const li = itemTemplate(name,price,color,size,inStock)

    // console.log(ul.children)

    ul.append(li)
}


function addToggleHidden(name) {
    let toggleList = document.getElementsByClassName(name)
    for(element of toggleList){
        element.addEventListener("click", (event) => {
            showHide(event)
        })
    }
}


function showHide(host) {
    let parent = host.target.parentElement
    let target = parent.children[2]

    if(target.getAttribute("class") || target.style.display){
        console.log(true)
    } else {
        console.log(false)
        target.addEventListener("animationend",() => {
            if(!target.getAttribute("class")) {
                console.log(`set ${target}to block`)
                target.style.display = "block"
            }else {
                console.log(`set ${target}to none`)
                target.style.display = "none"
            }
        })
    }
    
    if(target.getAttribute("class")) {
        target.toggleAttribute("class")
        target.style.display = "block"
    } else {
        target.setAttribute('class', "toHide")
    }

    // target.removeAttribute("style")
    



    

}
 
addToggleHidden('hide')
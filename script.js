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
    

    // Button variables and text
    let removeButton = document.createElement("button")
    removeButton.innerText = "Deletorade This"
    removeButton.addEventListener("click", () => {
        li.remove()
    })

    // Created Elements
    let nameObj = document.createElement('strong')
    let priceObj = document.createElement('strong')
    let colorObj = document.createElement('strong')
    let sizeObj = document.createElement('strong')
    let inStockObj = document.createElement('strong')
    
    // Set text for all elements
    nameObj.innerText = name;
    priceObj.innerText = `$${(price/100).toFixed(2)}`;
    colorObj.innerText = color;
    sizeObj.innerText = size;
    inStockObj.innerText = inStock == "yes" ? "In Stock": "Out of Stock";
    
    //Set classes for added elements for show/hide
    priceObj.setAttribute("class", "details")
    colorObj.setAttribute("class", "details")
    sizeObj.setAttribute("class", "details")
    inStockObj.setAttribute("class", "details")

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

    for(child of ul.children){
        let childText = child.children[0].children[0].innerText
        if(childText == name){
            messageBox(name)
            child.remove()
        }
    }
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

    console.log(host.target)
    if(host.target.innerText== '-'){
        host.target.innerText = '+'
    } else {
        host.target.innerText = "-"
    }

    if(target.getAttribute("class") || target.style.display){
    } else {
        target.addEventListener("animationend",() => {
            if(!target.getAttribute("class")) {
                // console.log(`set ${target}to block`)
                target.style.display = "block"
            }else {
                // console.log(`set ${target}to none`)
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


function messageBox(name) {
    let section = document.getElementsByClassName('form')[0]
    let newMessage = document.createElement("section")
    let prevMessage = document.getElementById("messageBox")

    newMessage.setAttribute("id", "messageBox")
    newMessage.innerText = `Modified ${name} with input information. Click on me to dismiss!`

    if(prevMessage) {
       prevMessage.remove()
    } 

    newMessage.classList.add("toAnimate","fromRight")
    
    section.append(newMessage)
    console.log(section)

    newMessage.addEventListener("click", () => {
        newMessage.addEventListener("animationend", () => {
            newMessage.remove()
        })
        newMessage.classList.toggle("fromRight")
        newMessage.classList.toggle("toRight")
    })
}
 
addToggleHidden('hide')
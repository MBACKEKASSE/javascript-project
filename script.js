
let contacts =[
 { titre:'nourriture', montant:'12000 FCFA'},
 { titre:'loyer', montant:'120000 FCFA'},
 
]
 
const table = document.querySelector('.table-expense')
const tblBody = document.createElement("tbody")
function createTable(){
    for (let element = 0; element < contacts.length; element++)
//    for (let index = 0; index < 2; index++) {
    let row = document.createElement("tr");
    
    // for (let element = 0; element < contacts.length; element++) {
    const cell = document.createElement("td")
    const cellText = document.createTextNode("Test" + element)
    cell.appendChild(cellText)
    row.appendChild(cell)
    Object.values(contacts [index](element))
        }
    
    tblBody.appendChild(row)
//    }
   table.appendChild(tblBody)

   document.body.appendChild(table)


createTable();


// const  title = querySelector("#title");
// const amount = querySelector("#amount");
// const keyButton = querySelector("#keyButton");

// modal
let modal = document.getElementById("contactModal")
let modalButton = document.getElementById("addModalButton")
let close = document.querySelector(".close")
 
modalButton.onclick = function () {
     modal.style.display="block"
    console.log('cva')

}
close.onclick = function () {
    modal.style.display="none"
};
let modale = document.getElementById("incomeModal")
let modaleButton = document.getElementById("addModaleButton")
let closee = document.querySelector(".closee")
 
modaleButton.onclick = function () {
     modale.style.display="block"
    console.log('cva')

}
closee.onclick = function () {
    modale.style.display="none"
}

let form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let myInput = document.getElementById('title');
    // let myIput = document.getElementById('amount');

    if (myInput.value.trim() == "") {
        e.preventDefault();
    }

})

let myform = document.getElementById('myform')

myform.addEventListener('submit', function (e) {
    e.preventDefault(myform);
})


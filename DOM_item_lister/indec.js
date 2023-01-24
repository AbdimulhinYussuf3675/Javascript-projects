const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter')

// form submit event
form.addEventListener('submit', addItem);
//delet event
itemList.addEventListener('click', removeItem)
//filter event
filter.addEventListener('keyup', filterItems)

// add item
function addItem(e) {
    e.preventDefault();
    //get input value
    const inputValue = document.getElementById('item').value;
    //crete new li element
    const li = document.createElement('li');
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(inputValue));
    // create delete button element
    let deleteBtn = document.createElement('button')
    //add clases to delete btn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //Append li button 
    li.appendChild(deleteBtn)
    // Append li to list
    itemList.appendChild(li)

    let saveItem = JSON.stringify(form)
    localStorage.setItem('form', saveItem)

    let getItem = JSON.parse(localStorage.getItem('form'))

}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        itemList.removeChild(li);

    }
}

// filter Items

function filterItems(e) {
    // convert to lowerCase
    let text = e.target.value.toLowerCase();
    // get list
    let items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}
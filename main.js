let arrayProduct = ['Apple', 'Lenovo', 'HP', 'Asus', 'Acer', 'Dell'];

function printProduct(array) {
    let html = "";

    for (let i = 0; i < array.length; i++) {
        // html += "<tr onclick=show(" + array[i]+ ")>";
        html += "<tr id='" + i + "' onclick=show(this)>";
        html += "<td >";
        html += i + 1;
        html += "</td>";
        html += "<td>";
        html += array[i];
        html += "</td>";
        html += "<td>";
        html += "<button id='" + i + "' onclick=editProduct(this)>Edit</button>";
        html += "</td>";
        html += "</tr>";
    }
    document.getElementById("tbody").innerHTML = html;

}

function show(a) {

    let idelement = Number(a.getAttribute('id'));
    document.getElementById("text").value = arrayProduct[idelement];
}

function addProduct() {
    let add = document.getElementById('text').value;
    arrayProduct.push(add);
    printProduct(arrayProduct);

}

function clearProduct() {
    let text = document.getElementById('text').value;
    let flag = false;
    for (let i = 0; i < arrayProduct.length; i++) {
        if (arrayProduct[i] == text) {
            flag = true;
        }
        if (flag == true) {
            arrayProduct[i] = arrayProduct[i + 1];
        }
    }
    if (flag == true) {
        arrayProduct.length--;
    }
    printProduct(arrayProduct);
}

function editProduct(element) {
    let idElement = Number(element.getAttribute('id'));
    arrayProduct[idElement] = document.getElementById('text').value;

    printProduct(arrayProduct);
}

printProduct(arrayProduct);
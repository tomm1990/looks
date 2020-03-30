const print = (data) => {
    "use strict";
    let footer = document.querySelector('.footer');
    footer.innerHTML = '';

    let table = document.createElement('table'),
        thead = document.createElement('thead'),
        tbody = document.createElement('tbody');

    let tr = thead.insertRow();
    tr.insertCell(0).innerHTML = 'Word';
    tr.insertCell(1).innerHTML = 'Count';
    table.append(thead);

    for (const [key, value] of Object.entries(data)) {
        let dtr = tbody.insertRow();
        dtr.insertCell(0).innerHTML = key;
        dtr.insertCell(1).innerHTML = value;
    }

    table.append(tbody);

    let title = document.createElement('H3');
    title.append(document.createTextNode('Word Tag'));

    footer.append(title);
    footer.append(table);
};

const mapping = async(array) => {
    "use strict";
    let asso_array = [];
    await array.map(word => {
        if (asso_array[word] == undefined)
            asso_array[word] = 0;
        asso_array[word]++;
    });
    return asso_array;
};

(() => {
    "use strict";
    const text = document.querySelector(".text p"),
        array = text.innerHTML.split(' '),
        result = mapping(array);
    result.then(data => {
        print(data);
    });
})();
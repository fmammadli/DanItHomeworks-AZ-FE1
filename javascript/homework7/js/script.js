let a = ['hello', 'world', 'Baku', 'IBA Tech Academy', '2019'],
    b = ['1', '2', '3', 'sea', 'user', 23];

function createList(array) {
    const newAraay = array.map((elem) =>`<li>${elem}</li>`),
        ul = document.createElement('ul');
    document.body.appendChild(ul);
    ul.innerHTML = newAraay.join('');

}

createList(a);
createList(b);
// Theoretical question:
//     Explain in your own words how you understand what is Document Object Model (DOM)
    // The Document Object Model (DOM) is a programming interface for HTML and XML(Extensible markup language) documents.
    // It defines the logical structure of documents and the way a document is accessed and manipulated.

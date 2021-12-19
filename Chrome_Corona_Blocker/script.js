replaceText(document.body);

function replaceText(element) {
    if(element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE){
         if(element.textContent.match(/coronavirus/gi)) {
            const  newElement = document.createElement("span")
            newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi,
            // '<span style="background-color:black;color:black;">$1</span>')
            '<span class="rainbow">$1</span>' )
             element.replaceWith(newElement)
         }
         element.textContent = element.textContent.replace(/coronavirus/gi, 'cat')
        // element.parentElement.remove()
         
    }
    
}


// Ez a function az adott szöveget feketére színezi
// function replaceText(element){
//     if(element.hasChildNodes()){
//         element.childNodes.forEach(replaceText)
//     } else if (element.nodeType === Text.TEXT_NODE){
//         if(element.textContent.match(/coronavirus/gi)) {
//             element.parentElement.style.color="black"
//             element.parentElement.style.backgroundColor="black"
//         }
//     }
// }


// az adott szót eltakarja
// function replaceText(element) {
//     if(element.hasChildNodes()) {
//         element.childNodes.forEach(replaceText)
//     } else if (element.nodeType === Text.TEXT_NODE){
//          if(element.textContent.match(/coronavirus/gi)) {
//             const  newElement = document.createElement("span")
//             newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi,
//              '<span style="background-color:black;color:black;">$1</span>')
//             //'<span class="rainbow">$1</span>' )
//              element.replaceWith(newElement)
//          }
//          element.textContent = element.textContent.replace(/coronavirus/gi, 'cat')
//         // element.parentElement.remove()
         
//     }
// }
    
// ez pedig removeolja a szavakat amiket matchelünk
// function replaceText(element) {
//     if(element.hasChildNodes()) {
//         element.childNodes.forEach(replaceText)
//     } else if (element.nodeType === Text.TEXT_NODE){
//          if(element.textContent.match(/coronavirus/gi)) {
        // //             const  newElement = document.createElement("span")
        // //             newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi,
        // //              '<span style="background-color:black;color:black;">$1</span>')
        // //             //'<span class="rainbow">$1</span>' )
        // //              element.replaceWith(newElement)
//          }
//          element.parentElement.remove()
         
//     }
// }
    
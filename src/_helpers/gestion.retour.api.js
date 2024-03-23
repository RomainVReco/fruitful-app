
let parseAddressAPI = (array) => {
    var resultat = []
    for (var i=0; i<array.length ; i++) {
        resultat.push(array[i]['properties']['label'])
    }
    console.log("ParseAddressAPI : ",resultat)
    return resultat
}

export const gestionRetourAPI = {
    parseAddressAPI
}
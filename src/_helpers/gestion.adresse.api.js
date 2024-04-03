let parseAddressAPI = (array) => {
    var resultat = []
    for (var i=0; i<array.length ; i++) {
        var addressAPI = {}
        addressAPI['label'] = array[i]['properties']['label']
        addressAPI['adresse'] = array[i]['properties']['name']
        addressAPI['codePostal'] = array[i]['properties']['postcode']
        addressAPI['ville'] = array[i]['properties']['city']
        resultat.push(addressAPI)
    }
    console.log("ParseAddressAPI : ",resultat)
    return resultat
}


export const gestionAdresseAPI = {
    parseAddressAPI
}
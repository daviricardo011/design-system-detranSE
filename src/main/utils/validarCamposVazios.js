export default function validarCamposVazios({ requiredFields, nameFields, object }) {
    var blankFields = ''
    for (var i = 0; i < requiredFields.length; i++) {
        if (object[requiredFields[i]] === undefined || object[requiredFields[i]] === '') {
            blankFields = `${blankFields} \n → ${nameFields[i]}`
        }
    }
    return blankFields
}
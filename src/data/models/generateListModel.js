import ListResponse from '../contracts/listResponse'

export default class GenerateListModel {
    listResponse = new ListResponse()

    build = ({ response, list }) => {
        if (response.codigoErro == null)
            for (var i = 0; i < response.data.length; i++) {
                list.push(this.listResponse.handle({
                    label: response.data[i].descricao,
                    value: response.data[i].codigo
                }))
            }
        return list
    }
}
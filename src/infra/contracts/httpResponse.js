export default class HttpResponse {
    handle = ({ codigoErro, mensagemErro, data }) => {
        return {
            codigoErro,
            mensagemErro,
            data
        }
    }
}
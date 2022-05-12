export default class ApiResponse {
    handle = ({ codigoErro, mensagemErro, data }) => {
        return {
            codigoErro,
            mensagemErro,
            data
        }
    }
}
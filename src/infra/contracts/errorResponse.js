import HttpResponse from './httpResponse'

export default class ErrorResponse {

    httpResponse = new HttpResponse()

    cannotConnect = ({ err }) => {
        return this.httpResponse.handle({
            codigoErro: 1,
            mensagemErro: err.message,
            data: null
        })
    }

    unableAcess = () => {
        return this.httpResponse.handle({
            codigoErro: 1,
            mensagemErro: 'Não foi possível acessar a rede Detran. Por favor, tente novamente mais tarde.',
            data: null
        })
    }
}
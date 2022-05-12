export default class ListResponse {
    handle = ({ label, value }) => {
        return {
            label,
            value,
            key: value
        }
    }
}
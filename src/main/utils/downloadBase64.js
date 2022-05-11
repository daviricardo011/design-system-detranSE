const downloadBase64 = (base, tipo) => {
    const a = document.createElement("a")
    if (tipo) {
        a.href = `data:image/${tipo};base64,${base}`
        a.download = `Arquivo.${tipo}`
    } else {
        a.href = "data:image/png;base64," + base
        a.download = "Arquivo.png"
    }
    a.click()
}

export default downloadBase64
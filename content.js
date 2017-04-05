if ((window.location.hostname).indexOf(".qubole.") !== -1) {
    sps = window.location.hostname.split(".")
    env_name = sps[0]
    document.title = "(" + env_name + ")" + document.title
}
function copyUrlBrowser() {
    const button = document.getElementById("icone")

    button.addEventListener('click', () => {
        navigator.clipboard.writeText(document.URL);
    })
}
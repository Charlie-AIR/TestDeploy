window.addEventListener("load", () => {
    console.log("Everyone say javascript");
});

const heading = document.querySelector("h1");

heading.onclick = () => {
    console.log("I'm a heading")
}
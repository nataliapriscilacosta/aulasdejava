// const handleClick = () => {
//     const body = document.querySelector("body");
//     body.innerHTML = `
//     <h1>HELLO WORLD!</h1>
//     <h2>and hello javascrip</h2>
//     `;
    
//     body.style.backgroundColor = '#000';
//     body.style.color = '#FFF';
// };
//     document.addEventListener('DOMContentLoaded', () => {
//     const el = document.getElementById("btn-start");
//     el.addEventListener('click', () => handleClick());
    
//     //Botão troll
//     //const el = document.getElementById("btn-start");
//     //el.addEventListener('mouseover', () => {
//     //    el.style.position = "absolute";
//     //    el.style.top = `${Math.floor(Math.random() * (window.innerHeight - 20))}px`;
//     //    el.style.left = `${Math.floor(Math.random() * (window.innerWidth - 40))}px`;
//     //});
// });

const handleClick = () => {
    const body = $("body");
    body.html(`
    <h1>HELLO WORLD!</h1>
    <h2>and hello javascrip</h2>
    `);
    
    body.css("background-color", "#000");
    body.css("color", "#FFF")
};
    
    $(document).ready(() => {
    const el = $("btn-start");
    el.on('click', () => handleClick());
});

    $(document).ready(() => {
    const el = $("btn-start");
    el.on("mouseover", () => {
        el.css(
            "position",
            "absolute");
        el.css("top",
            `${Math.floor(Math.random() * (window.innerHeight - 20))}px`);
         el.css("left",
            `${Math.floor(Math.random() * (window.innerWidth - 40))}px`);
    });
    el.on('click', () => handleClick());
});
const boton = document.getElementById("btnHistoria");

boton.addEventListener("click", () => {

  document.getElementById("historia").scrollIntoView({
    behavior: "smooth"
  });

});
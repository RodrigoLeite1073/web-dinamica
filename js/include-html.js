document.addEventListener("DOMContentLoaded", (e) => {
  const includeHTML = (el, url) => {
    console.log(url);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
        el.outerHTML = xhr.responseText;
      } else {
        let message =
          xhr.statusText ||
          "Error al cargar el componente, verifica si esta haciendo la peticion por http o https";
        el.outerHTML = `<div><p>Error ${xhr.status}: ${message}`;
      }
    });
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
    xhr.send();
  };

  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
});

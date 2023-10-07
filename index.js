window.onload = (e) => {
//   e.target.body.children[0].style.backgroundColor = "yellow";
  console.dir(e.target.body.children[0].style);
 
  if (localStorage.getItem("key-dark") === "v-dark") {
    nav.classList.remove("navbar-light", "bg-light");
    nav.classList.add("navbar-dark", "bg-black1");
    app.classList.add("app-bg-dark");
  }
  else{
    app.classList.add("app-bg-light");
  }
};
const nav = document.querySelector("nav");
const theme = document.querySelector(".theme");
const app=document.querySelector(".app")

theme.addEventListener("click", () => {
  storagekey();
});

const storagekey = () => {
  if (nav.classList.contains("bg-light")) {
    nav.classList.remove("navbar-light", "bg-light");
    nav.classList.add("navbar-dark", "bg-black1");

    app.classList.remove("app-bg-light");
    app.classList.add("app-bg-dark");

    localStorage.clear();
    localStorage.setItem("key-dark", "v-dark");
    return "key-dark";
  } else {
    nav.classList.remove("navbar-dark", "bg-black1");
    nav.classList.add("navbar-light", "bg-light");
    
    app.classList.remove("app-bg-dark");
    app.classList.add("app-bg-light");



    localStorage.clear();
    localStorage.setItem("key-light", "v-light");
    return "key-light";
  }
};


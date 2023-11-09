let x=document.createElement("h1");
x.innerHTML="John Mentalina";
x.classList.add("card-title");

let p=document.createElement("p");
p.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit";
p.classList.add("card-p");

var image=document.createElement("img");
image.setAttribute("src","images/card-img.jpg");
image.classList.add("card-image");

let y=document.createElement("div");
y.classList.add("row");
y.appendChild(image);
y.appendChild(x);
y.appendChild(p);



var con=document.createElement("div");
con.classList.add("container");
con.appendChild(y);

var card_section=document.getElementById("main");
card_section.appendChild(con);
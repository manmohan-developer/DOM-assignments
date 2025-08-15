 let h2 = document.querySelector("h2");
        h2.innerText = h2.innerText + "From manmohan sharma";
        console.log(h2.innerText);

         //using to change paragraph properties.
        let p1 = document.getElementById("pp");
        console.dir(p1.innerText);
        p1.style.backgroundColor = "red";
        p1.style.color = "yellow";

        //Here trying to change button's properies using DOM.
        let btn = document.getElementById("btn");
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        btn.style.fontSize = "20px";

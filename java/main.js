const button = document.querySelector("button")
const input = document.querySelector("input")
const sec = document.getElementById("sec")


button.addEventListener("click", (eo) => {

    eo.preventDefault();

    const mohsn = `
    
    <div class="list1">
    <span class="icon-star"></span>
    <p> ${input.value}</p>
    <div>
        <span class="icon-trash-o"> </span>
        <span class="icon-angry2"> </span>
    </div>
</div> `
    sec.innerHTML += mohsn;

})

sec.addEventListener("click", (eo) => {


    if (eo.target.className == "icon-trash-o") {
        eo.target.parentElement.parentElement.remove()
    }
    else if (eo.target.className == "icon-angry2") {
        eo.target.classList.add("dis")
        const heart = `<span class="icon-heart" > </span>`
        eo.target.parentElement.innerHTML += heart;
    }
    else if (eo.target.className == "icon-heart") {
        eo.target.classList.add("dis")
        const angry = `<span class="icon-angry2"> </span>`
        eo.target.parentElement.innerHTML += angry;

    }

    else if (eo.target.className == "icon-star") {
        eo.target.classList.add("rad")
        eo.target.parentElement.parentElement.prepend(eo.target.parentElement)

    }
    else if (eo.target.className == "icon-star rad") {
        eo.target.classList.remove("rad")
    }

})


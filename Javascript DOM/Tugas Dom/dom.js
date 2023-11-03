let judul = document.querySelector("section#judul p.judul");
judul.innerHTML = "insert";

let list = document.getElementById("list");
list.innerHTML = `
<div class="row">
  <div class="col-8">
    <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
       <label class="form-check-label" for="flexCheckDefault">
         Tugas Baru
        </label>
    </div>
    </div>
<div class="col-auto">
<div class="btn"><i class="bi bi-trash"></i></div>
  </div>
</div>`;

let container = document.querySelector(".container");
container.style.margin = "135px auto";
container.style.maxWidth = "550px";
container.style.background = "#fff";
container.style.borderRadius = "7px";
container.style.padding = "28px 0";

document.body.style.backgroundImage = 'linear-gradient(to right,grey,lightgreen,lightblue,lightyellow)';
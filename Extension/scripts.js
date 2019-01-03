document.getElementById("name").addEventListener("keyup",()=>{
    var name = document.getElementById("name").value
    document.getElementById("title").textContent = `Hello ${name}`
})

document.body.style.backgroundColor = "#f7f7f7"

let tag = document.getElementsByTagName("a")
for (let a = 0; a < tag.length; a++){
  tag[a].style.borderColor = "none"
}

let divs = document.getElementsByTagName("div")

for (let i = 0; i < divs.length; i++) {

  if (i == 2) continue
  if (i == 5 || i == 6) continue 
  if (i >= 10 && i <= 15) continue
  if (i == 15){
    let text = divs[i].innerHTML = `&nbsp&nbsp&nbsp${divs[i].innerHTML}`
    continue
  }
  console.log(divs[i])
  console.log(i)
  divs[i].style.marginBottom = "5px"
  divs[i].style.border = "0px"
  divs[i].style.boxShadow = "0px 0px 4px"
}
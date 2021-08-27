let inpt = document.getElementById('inpt')
let btn = document.getElementById('btn')
let sel = document.getElementById('select')
let steps = document.getElementById('stepN')

sel.addEventListener('change', function(){
  let lab = document.getElementById('stpL')
  if (sel.value === '64') {
    steps.classList.add('hidden')
    lab.classList.add('hidden')
  }
  else{
    steps.classList.remove('hidden')
    lab.classList.remove('hidden')
  }
})

btn.addEventListener('click', function(){
  let trad = ""
  let vl = inpt.value
  let passos = +steps.value
  let coding = document.getElementById('coIn').checked
  let scr = document.getElementById('scr')
  let vlSel = sel.value
  if (coding) {
    if (vlSel == 64) {
     trad = btoa(vl)
    }
    else{
      for (let i = 0; i < vl.length; i++) {
        if (vl.charCodeAt(i) >= 65 && vl.charCodeAt(i) <= 90) {
          trad+= String.fromCharCode(((vl.charCodeAt(i) - 65 + passos) % 26) + 65)
          console.log(vl.charCodeAt(i)) 
        }
        else if (vl.charCodeAt(i) >= 97 && vl.charCodeAt(i) <= 122) {
          trad+= String.fromCharCode(((vl.charCodeAt(i) - 97 + passos) % 26) + 97)
          console.log(vl.charCodeAt(i)) 
        }
        else{
          trad += vl[i]
        }
      }
    }
  }
  //DECODE
  else if(!coding){
    if (vlSel == 64) {
      trad = atob(vl)
    }
    else{
      for (let i = 0; i < vl.length; i++) {
        if (vl.charCodeAt(i) >= 65 && vl.charCodeAt(i) <= 90) {
          trad+= String.fromCharCode(((vl.charCodeAt(i) - 90 - passos) % 26) + 90)
          console.log(vl.charCodeAt(i)) 
        }
        else if (vl.charCodeAt(i) >= 97 && vl.charCodeAt(i) <= 122) {
          
          trad+= String.fromCharCode((((vl.charCodeAt(i)) - 122 - passos) % 26) + 122) 
          console.log(vl.charCodeAt(i))
          console.log(trad.charCodeAt(i))
        }
        else{
          trad += vl[i]
        }
      }
    }
  }
  scr.innerText = trad
})
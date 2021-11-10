const roulette = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];


newRoulette = [];
const init = async() =>{
    await roulette.forEach((n,i)=>{
        c = (i%2) == 0 ? '#000000' : '#f53535', c = n == 0 ? 'lightgreen': c; 
        newRoulette.push({n,c});
    });
}

const print = (e) => {
    let x = ``;
    newRoulette.forEach(n => {
        x+=`
        <div style="background:${n.c};">${n.n}</div>
        `
    })
    document.querySelector('.roulette').innerHTML = x
}

const animation = (n,c) => {
    document.querySelector('.roulette').removeChild(document.querySelector('.roulette').lastElementChild)
    document.querySelector('.roulette').insertAdjacentHTML('afterbegin',`<div class="new" style="background:${c};">${n}</div>`);
}

const spin = (e,i) => {
     let ts = 0;
    setTimeout(async function(){
        let l = e[e.length-1]
        e.pop();
        e.unshift(l);
        if (i != 0) {
            /* print(e); */
            animation(l.n,l.c)
            spin(e,(i-1));
        }    

        console.log(ts);
    },parseInt(10));
    if(i == 0){
        Swal.fire(document.querySelector('.roulette').children[13].innerText);
        console.log(document.querySelector('.roulette').children[13].innerText);
    }   
}

init();
print(newRoulette);



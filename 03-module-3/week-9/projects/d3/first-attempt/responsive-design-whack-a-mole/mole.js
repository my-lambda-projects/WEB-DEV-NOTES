window.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(popUpRandomMole, 0);
    const moleHead = document.querySelectorAll(".wgs__mole-head");
    moleHead.forEach(mole => {
        mole.addEventListener('click', e => {
            mole.classList.add("wgs__mole-head--hidden");
            mole.classList.add("wgs__mole-head--whacked");
        })
    })
});

function popUpRandomMole() {
    const moleList = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)");
    // console.log(moleList.length);
    if (moleList.length === 0) {
        alert("You won!");
        return; 
    } 
    const randomNum = Math.floor(Math.random() *  moleList.length);
    const mole = moleList[randomNum];
    mole.classList.remove("wgs__mole-head--hidden");
    setTimeout(() => {
        hideMole(mole);
    }, 2000);
};

function hideMole(element){
    element.classList.add("wgs__mole-head--hidden")
    setTimeout(popUpRandomMole, 1000);
};

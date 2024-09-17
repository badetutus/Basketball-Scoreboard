

let home = 0
let guest = 0

let homeEl = document.getElementById("Home")
let guestEl = document.getElementById("Guest")

function addguest(x) {
       if (x==1) {
        guest+=1
       }
       else if (x==2) {
        guest+=2
       }
       else {
        guest+=3
       }

       if (guest>home) {
        guestEl.classList.add('border-green');
        homeEl.classList.remove('border-green');
       }
       else {
        guestEl.classList.remove('border-green');

       }

       guestEl.textContent = guest
}

function addhome(x) {

    if (x==1) {
        home+=1
       }
       else if (x==2) {
        home+=2
       }
       else {
        home+=3
       }
       if (home>guest) {
        homeEl.classList.add('border-green');
        guestEl.classList.remove('border-green');
       }
       else {
        homeEl.classList.remove('border-green');

       }

       homeEl.textContent = home

}

function remove() {
    home = 0
    guest = 0
    guestEl.textContent = guest
    homeEl.textContent = home
    homeEl.classList.remove('border-green');
    guestEl.classList.remove('border-green');

}


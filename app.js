console.log('Funguju!');

const karticky = document.querySelectorAll('.karticka');

let otoceneKarty = [];

karticky.forEach((karticka, index) => {
  karticka.addEventListener('click', (event) => {
    karticka.classList.remove('otocena');
    otoceneKarty.push(index);

    if (otoceneKarty.length === 2) {
      const karta1 = karticky[otoceneKarty[0]];
      const karta2 = karticky[otoceneKarty[0]];
      const obrazekKarta1 = karticky[otoceneKarty[0]].querySelector('img');
      const obrazekKarta2 = karticky[otoceneKarty[1]].querySelector('img');

      if (obrazekKarta1.src != obrazekKarta2.src) {
        otoceneKarty.forEach((indexKarticky) => {
          setTimeout(() => {
            karticky[indexKarticky].classList.add('otocena');
          }, 1000);
        });
        otoceneKarty = [];
      } else {
        karta1.disabled = true;
        karta2.disabled = true;
      }
    }
  });
});

/*

const karticky = document.querySelectorAll('.karticka');
let otoceneKarty = [];

karticky.forEach((karticka) => {
  karticka.addEventListener('click', (event) => {
    event.target.classList.toggle('otocena');

    if (event.target.classList.contains('otocena')) {
      otoceneKarty.push(event.target);
      if (otoceneKarty.length === 2) {
        const [prvniKarta, druhaKarta] = otoceneKarty;
        const prvniSrc = prvniKarta.querySelector('.obrazek').src;
        const druhySrc = druhaKarta.querySelector('.obrazek').src;

        if (prvniSrc !== druhySrc) {
          setTimeout(() => {
            prvniKarta.classList.remove('otocena');
            druhaKarta.classList.remove('otocena');
          }, 1000);
        }
        otoceneKarty = [];
      }
    }
  });
});
*/

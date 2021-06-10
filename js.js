function loadData() {
  return new Promise((resolve, reject) => {
    // setTimeout не является частью решения
    // Код ниже должен быть заменен на логику подходящую для решения вашей задачи
    setTimeout(resolve, 1200);
  })
}

loadData()
  .then(() => {
    let preloaderEl = document.getElementById('preloader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
}); 


document.getElementById('ref').onclick = function() {
  let input = document.getElementById('re').value;

  if (input === 'admin') {
    window.open('https://instagram.com');
  }
  else if (input === 'dog') {
    window.open('https://instagram.com');
  }
  else {
    console.log('no');
  }
}
document.querySelector('.input_h').onclick = function () {
  let ii = document.querySelector('.hhh').value;

  if (ii === 'admin') {
    window.open('https://instagram.com');
  }
  else if (ii === 'dog') {
    window.open('https://instagram.com');
  }
  else {
    console.log('no');
  }
}

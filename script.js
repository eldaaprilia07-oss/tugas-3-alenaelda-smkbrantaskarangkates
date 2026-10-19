const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

if (localStorage.getItem('tema') === 'terang') {
  bodyHalaman.classList.add('light-mode');
  btnTema.textContent = '🌙 Mode Gelap';
}

btnTema.addEventListener('click', function() {
  bodyHalaman.classList.toggle('light-mode');
 
  if (bodyHalaman.classList.contains('light-mode')) {
    btnTema.textContent = '🌙 Mode Gelap';
    localStorage.setItem('tema', 'terang');
  } else {
    btnTema.textContent = '☀️ Mode Terang';
    localStorage.setItem('tema', 'gelap');
  }
});

// Ambil tombol Kirim Pesan
const btnBukaModal = document.querySelector('#btn-contact');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

// Event saat tombol kirim Pesan ditekan
btnBukaModal.addEventListener('click', function(event) {
  event.preventDefault(); 
  elemenModal.classList.add('show'); //Tampilkan modal 
});

// Event saat tombol Tutup ditekan
btnTutupModal.addEventListener('click', function() {
  elemenModal.classList.remove('show'); //Sembunyikan modal 
});
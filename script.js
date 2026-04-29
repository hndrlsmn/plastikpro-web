// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// WhatsApp Order Form
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const nohp = document.getElementById('nohp').value;
    const produk = document.getElementById('produk').value;
    const ukuran = document.getElementById('ukuran').value;
    const jumlah = document.getElementById('jumlah').value;
    const deskripsi = document.getElementById('deskripsi').value;
    
    const message = `Halo! Saya mau pesan sablon plastik%0A%0A` +
                   `Nama: ${nama}%0A` +
                   `No WA: ${nohp}%0A` +
                   `Produk: ${produk}%0A` +
                   `Ukuran: ${ukuran}cm%0A` +
                   `Jumlah: ${jumlah} pcs%0A` +
                   `Deskripsi: ${deskripsi}%0A%0A` +
                   `Mohon info harga dan estimasi ya! 🙏`;
    
    const waUrl = `https://wa.me/6281234567890?text=${message}`;
    window.open(waUrl, '_blank');
    
    // Reset form
    this.reset();
});
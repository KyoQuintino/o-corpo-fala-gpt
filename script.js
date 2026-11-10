// Link oficial do checkout da Hotmart.
const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/F108422325X';
const buyButton = document.getElementById('buy-button');
if (HOTMART_CHECKOUT_URL.trim()) {
  buyButton.href = HOTMART_CHECKOUT_URL;
  buyButton.target = '_blank';
  buyButton.rel = 'noopener noreferrer';
  buyButton.removeAttribute('aria-disabled');
  buyButton.classList.remove('disabled');
  buyButton.innerHTML = 'QUERO ACESSAR A OFERTA <span>↗</span>';
} else {
  buyButton.addEventListener('click', (event) => event.preventDefault());
}
document.getElementById('year').textContent = new Date().getFullYear();

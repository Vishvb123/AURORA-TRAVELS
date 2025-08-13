/* Lightbox for IMG thumbnails (with title) */
function setupLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const closeBtn = document.getElementById('lb-close');
  const lbImg = document.getElementById('lb-img');
  const lbTitle = lb.querySelector('.lb-title');

  document.querySelectorAll('[data-lightbox] img.thumb').forEach(img => {
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lbTitle.textContent = img.getAttribute('data-title') || img.alt || '';
      lb.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => lb.style.display = 'none');
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.style.display = 'none'; });
}

/* Basic contact form validation (unchanged) */
function validateForm(e) {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

  if (!name || !email || !message || !name.value.trim() || !email.value.trim() || !message.value.trim() || !emailOK) {
    alert('Please enter your name, a valid email, and a message.');
    e.preventDefault();
    return false;
  }
  alert('Thanks! Your message was submitted (demo).');
  e.preventDefault();
  return false;
}

/* Init */
document.addEventListener('DOMContentLoaded', setupLightbox);

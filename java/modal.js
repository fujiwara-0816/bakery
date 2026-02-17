document.addEventListener('DOMContentLoaded', () => {
  const openModals = document.querySelectorAll('.open-modal');
  const closeButtons = document.querySelectorAll('.close');

  openModals.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      document.getElementById(targetId).style.display = 'block';
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.modal').style.display = 'none';
    });
  });

  window.addEventListener('click', (e) => {
    document.querySelectorAll('.modal').forEach(modal => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});
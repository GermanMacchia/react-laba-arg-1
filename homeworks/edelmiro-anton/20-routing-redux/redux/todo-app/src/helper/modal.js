export const modal = () => {
  const dialog = document.querySelector('dialog');
  const closeModal = document.querySelector('.button_closeModal');
  const openModal = document.querySelector('.edit_icon');

  openModal.addEventListener('click', () => openDialog());
  closeModal.addEventListener('click', () => closeDialog());

  const openDialog = () => {
    dialog.showModal();
  };

  const closeDialog = () => {
    dialog.close();
    console.log('cerrandodialog');
  };
};

// export const {openDialog, closeDialog} = modal

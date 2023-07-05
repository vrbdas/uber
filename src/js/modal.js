function modalShow(modalBlockSelector) {
  const modalBlock = document.querySelector(modalBlockSelector); // Изначально в html стоит класс hide
  modalBlock.classList.add('show'); // display: block;
  modalBlock.classList.remove('hide'); // display: none;
  document.body.style.overflow = 'hidden'; // Предотвращает прокрутку страницы, когда открыто модальное окно
}

function modalHide(modalBlockSelector) {
  const modalBlock = document.querySelector(modalBlockSelector); // Изначально в html стоит класс hide
  modalBlock.classList.add('hide');
  modalBlock.classList.remove('show');
  document.body.style.overflow = ''; // Возвращает прокрутку страницы, когда закрыто модальное окно
}

function modal(modalBlockSelector, modalTriggerSelector) {
  const modalBlock = document.querySelector(modalBlockSelector); // Изначально в html стоит класс hide
  const modalTrigger = document.querySelectorAll(modalTriggerSelector); // Кнопка для вызова модального окна

  modalTrigger.forEach((item) => { // Показавает окно при клике на кнопки 'Связаться с нами'
    item.addEventListener('click', () => modalShow(modalBlockSelector));
  });

  modalBlock.addEventListener('click', (event) => { // Закрывает окно при клике на область вокруг .modal__dialog или на крестик
    if (event.target === modalBlock || event.target.matches('[data-close]')) {
      modalHide(modalBlockSelector);
    }
  });

  document.addEventListener('keydown', (event) => { // Закрывает окно при нажатии Esc
    if (event.code === 'Escape' && modalBlock.classList.contains('show')) {
      modalHide(modalBlockSelector);
    }
  });
}

export default modal;
export {modalShow, modalHide};
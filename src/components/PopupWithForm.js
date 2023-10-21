
function PopupWithForm ({isOpen, name, title, children, submitText, onClose}) {
  return (
    <>
      <div className={`popup popup_${name} ${isOpen ? 'popup_opened': ''}`}>
        <div className={`popup__container popup__container_${name}`}>
          <form action="#" method="POST" name={name} className={`popup__form popup__form_${name}`} noValidate>
            <h2 className="popup__title">{title}</h2>
            <fieldset className="popup__set">
              {children}
            </fieldset>
            <button type="submit"
              className={`popup__submit popup__submit_disabled ${name === 'avatar' ? 'popup__submit_place_avatar' : ''}`}
              aria-label="Кнопка сохранить">
              {submitText || 'Сохранить'}<span className="preloader">...</span>
            </button>
          </form>
          <button type="button" className="popup__exit" aria-label="Кнопка выхода" onClick={onClose}></button>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;

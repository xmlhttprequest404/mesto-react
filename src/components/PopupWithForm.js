
function PopupWithForm (props) {
  const popupOpened = `${props.isOpen ? 'popup_opened': ''}`
  return (
    <>
      <div className={`popup popup_${props.name} ${popupOpened}`}>
        <div className={`popup__container popup__container_${props.name}`}>
          <form action="#" method="POST" name={props.name} className={`popup__form popup__form_${props.name}`} noValidate>
            <h2 className="popup__title">{props.title}</h2>
            <fieldset className="popup__set">
              {props.children}
            </fieldset>
          </form>
          <button type="button" className="popup__exit" aria-label="Кнопка выхода" onClick={props.onClose}></button>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;

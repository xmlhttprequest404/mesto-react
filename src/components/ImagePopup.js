function ImagePopup (props) {
  return (
    <div className={`popup popup_element ${props.card ? 'popup_opened': ''}`}>
      <div className="popup__container popup__container_element">
        <img src={props.card.link} alt={props.card.name} className="popup__image" />
        <h2 className="popup__text">{props.card.name}</h2>
        <button type="button" className="popup__exit" aria-label="Кнопка выхода" onClick={props.onClose}></button>
      </div>
    </div>
  );
}
export default ImagePopup;

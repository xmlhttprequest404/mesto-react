import React from "react";
import Header from "./Header.js";
import Main from "./Main.js"
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAllPopupsClosed, setIsAllPopupsClosed] = React.useState(true);
  const [selectedCard, setSelectedCard] = React.useState(false);


  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
    setIsAllPopupsClosed(false);
  }

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
    setIsAllPopupsClosed(false);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
    setIsAllPopupsClosed(false);
  }

  function handleCardClick (card) {
    setSelectedCard(card);
    setIsAllPopupsClosed(false);
  }

  function closeAllPopups () {
      setIsAddPlacePopupOpen(false);
      setIsEditProfilePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
      setSelectedCard(false);
      setIsAllPopupsClosed(true);
  }

  return (
    <>
    <Header />
    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={(card) => {handleCardClick(card)}} />
    <Footer />
    <PopupWithForm title="Редактировать профиль" name="profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
      <label className="popup__field">
          <input type="text" name="name" placeholder="Имя" className="popup__input popup__input_name" id="name-input" minLength="2" maxLength="40" required />
          <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__field">
          <input type="text" name="about" placeholder="О себе" className="popup__input popup__input_occupation" id="occupation-input" minLength="2" maxLength="200" required />
          <span className="popup__input-error occupation-input-error"></span>
      </label>
      <button type="submit" className="popup__submit popup__submit_disabled" aria-label="Кнопка сохранить">Сохранить<span className="preloader">...</span></button>
    </PopupWithForm>
    <PopupWithForm title="Новое место" name="cards" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
      <label className="popup__field">
        <input type="text" name="name" placeholder="Название" className="popup__input popup__input_title" id="title-input" minLength="2" maxLength="30" required />
        <span className="popup__input-error title-input-error"></span>
      </label>
      <label className="popup__field">
        <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input_url-image" id="url-input" required />
        <span className="popup__input-error url-input-error"></span>
      </label>
      <button type="submit" className="popup__submit popup__submit_disabled" aria-label="Кнопка сохранить">Создать<span className="preloader">...</span></button>
    </PopupWithForm>
    <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
    <label className="popup__field">
      <input type="url" name="avatarUrlImage" placeholder="Ссылка на фото" className="popup__input popup__input_url-image" id="url-input-avatar" required />
      <span className="popup__input-error url-input-avatar-error"></span>
    </label>
    <button type="submit" className="popup__submit popup__submit_disabled popup__submit_place_avatar" aria-label="Сохранить">Сохранить<span className="preloader">...</span></button>
    </PopupWithForm>
    <PopupWithForm title="Вы уверены?" name="delete" onClose={closeAllPopups}>
      <p className="popup__title">Вы уверены?</p>
      <button type="submit" className="popup__submit" aria-label="Подтверждение">Да</button>
    </PopupWithForm>
    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;

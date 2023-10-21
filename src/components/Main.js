import {useEffect, useState} from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main ({onEditAvatar, onAddPlace, onEditProfile, onCardClick}) {
  const [userName, setUserName] = useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfoApi()
      .then(res => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    .catch(error => {
      console.log(error);
    });

    api.getInitialCards()
    .then(res => {
      setCards(res)
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <>
    <main className="content">
      <section className="profile">
        <button type="button" className="profile__button-img" aria-label="Редактировать аватар" onClick={onEditAvatar}>
          <div className="profile__overlay"></div>
          <div className="profile__avatar" style={{background: `url(${userAvatar}) 50%/cover no-repeat`}}></div>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" aria-label="Кнопка редактировать профиль" type="button" onClick={onEditProfile}></button>
          <p className="profile__text">{userDescription}</p>
        </div>
        <button className="profile__add-button" aria-label="Кнопка добавить" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements" aria-label="Фотографии">
        {
          cards.map((card, i) => {
            return (<Card key={card._id} card={card} onCardClick={(card) => {onCardClick(card)}} />); // Странно, вчера казалось когда смотрел в ответ от сервера id не было приватным)) Спасибо за ревью)
          })
        }
      </section>
    </main>
    </>
  );
}

export default Main;

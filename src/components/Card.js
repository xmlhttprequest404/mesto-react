function Card ({card, onCardClick}) {

  function handleClick () {
    onCardClick(card)
  }

  return (
    <article className="element" onClick={handleClick}>
      <img className="element__image" src={card.link}/>
      <button className="element__trash" aria-label="Кнопка удаления"></button>
      <div className="element__card-title">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__like-group">
          <button type="button" className="element__like" aria-label="Кнопка лайка"></button>
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;

/* eslint-disable jsx-a11y/anchor-is-valid */
import './Portfolio.css';
function Portfolio(){
  return(
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a href='https://kachmaz.nomoredomainsmonster.ru/' target='_blank' className='portfolio__link' rel="noreferrer">Статичный сайт</a>
        </li>
        <li className='portfolio__item'>
          <a href='https://kachmaz.nomoredomainsmonster.ru/' target='_blank' className='portfolio__link' rel="noreferrer">Адаптивный сайт</a>
        </li>
        <li className='portfolio__item'>
          <a href='https://kachmaz.nomoredomainsmonster.ru/' target='_blank' className='portfolio__link' rel="noreferrer">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
}
export default Portfolio
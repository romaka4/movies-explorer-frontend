/* eslint-disable jsx-a11y/alt-text */
import './SearchForm.css'
import search_icon from '../../images/search_icon.svg'

function SearchForm() {
  return(
    <div className='search'>
      <form className='search__form'>
        <input className='search__input' type="text" placeholder="Фильм" minLength={2} maxLength={40} required/>
        <button className='search__button' type="submit"><img className='search-icon' src={search_icon} alt='Поиск'/>
        </button>
        <div className='search__filter'>
          <input type="checkbox" id="toggle-checkbox" className="demo-toggle-checkbox" defaultChecked/>
          <label htmlFor="toggle-checkbox"></label>
          <p className='search__desc'>Короткометражки</p>
        </div>
        
        
      </form>

    </div>
  )
}
export default SearchForm;
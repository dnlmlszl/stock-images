import { useGlobalContext } from "./context"

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value 
    if (!searchValue) return 
    setSearchTerm(searchValue);
  }
  
  return (
    <section>
      <h1 className="title">Stock Images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input type="text" className="search-input form-input" name="search" placeholder="Doggy" />
        <button type="submit" className="btn">search</button>
      </form>

    </section>
  )
}

export default SearchForm
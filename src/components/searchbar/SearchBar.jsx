import style from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const input = form.elements.galleryUserQuery;

    if (input.value.trim() === "") {
      alert("Please enter something!");
      return;
    }

    onSearch(input.value);
    form.reset();
  };

  return (
    <header className={style.headerWrapper}>
      <form className={style.formWrapper} onSubmit={handleSubmit}>
        <input
          className={style.userInput}
          name="galleryUserQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

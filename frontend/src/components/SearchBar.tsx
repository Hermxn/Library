const SearchBar = (props: { search; setSearch }) => {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search..."
        value={props.search}
        onChange={(event) => props.setSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;

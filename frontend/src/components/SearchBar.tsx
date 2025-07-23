const SearchBar = (props: {
  search: string;
  setSearch: (value: string) => void;
}) => {
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

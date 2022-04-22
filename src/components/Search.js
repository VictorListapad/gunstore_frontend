import { useState } from "react";

const Search = ({ search }) => {
  const [searchModel, setSearchModel] = useState("");
  const handleSubmit = () => {
    search(searchModel);
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className="search-bar">
      <input
        className="form-control mb-3"
        type="text"
        value={searchModel}
        onChange={(event) => setSearchModel(event.target.value)}
        onKeyDown={handleKey}
        placeholder="Search by model"
      />
      <button onClick={handleSubmit} className="btn edit-btn mb-3">
        Search
      </button>
    </div>
  );
};

export default Search;

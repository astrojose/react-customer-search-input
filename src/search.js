import React from "react";
const SearchComponent = () => {
  const [clients] = React.useState(clientsList);
  const [suggestions, setSuggestions] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");
  const [selectedSuggestion, setSelectedSuggestion] = React.useState({});

  React.useEffect(() => {
    const matches = clients.filter((client) =>
      client.name.toLowerCase().startsWith(keyword.toLowerCase())
    );
    setSuggestions(matches);
  }, [keyword]);

  const handleSelect = (e) => {
    e.preventDefault();
    const name = e.target.innerText;
    const matches = clients.filter((client) => client.name === name);
    setKeyword("");
    setSelectedSuggestion(matches[0]);
  };

  return (
    <div className="input-group input-search">
      <input
        className="form-control"
        name="name"
        placeholder="Search Client Name"
        autoComplete="off"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div className="list-group suggestions-wrappper">
        <div className="suggestions">
          {suggestions.length == 0 && keyword.length > 0 && (
            <a href="#url" className="list-group-item list-group-item-action ">
              Add {keyword}
            </a>
          )}

          {keyword &&
            suggestions.map((suggestion) => (
              <a
                href="#url"
                className="list-group-item list-group-item-action "
                onClick={handleSelect}
              >
                {suggestion.name}
              </a>
            ))}
        </div>
      </div>
      <div className="client-details">
        <h2>{selectedSuggestion.name}</h2>
        <p className="address"> {selectedSuggestion.address} </p>
        <p className="city"> {selectedSuggestion.city} </p>
      </div>
    </div>
  );
};

export default SearchComponent;

// array of clients
const clientsList = [
  {
    name: "Joseph M.",
    address: "6th Floor, Biggest House, Azikiwe",
    city: "Dar es Salaam"
  },
  {
    name: "Khamis M.",
    address: "1st Floor, Left Wing, Magogoni",
    city: "Dar es salaam"
  },
  {
    name: "Amour K.",
    address: "building, street",
    city: "dar es salaam"
  },
  {
    name: "Dogan K.",
    address: "Anynomouse Address, street zero",
    city: "Dar es Salaam"
  },
  {
    name: "Khaled K.",
    address: "building, street",
    city: "dar es salaam"
  }
];

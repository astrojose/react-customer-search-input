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
          {/* {suggestions.length == 0 && keyword.length > 0 && (
            <a
              href="#url"
              className="list-group-item list-group-item-action"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
              Add {keyword}
            </a>
          )} */}

          {keyword &&
            suggestions.map((suggestion) => (
              <a
                href="#url"
                className="list-group-item list-group-item-action "
                onClick={handleSelect}
              >
                <span
                  class="glyphicon glyphicon-user"
                  aria-hidden="true"
                ></span>
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
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                New message
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Recipient:
                  </label>
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Message:
                  </label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
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

import Button from "../../Button/Button";

const Searchbar = ({ searchState }) => {
    const [search, setSearch] = searchState;

    const searchText = (e) => {
        e.preventDefault();
        setSearch("search this");
        console.log(search)
    }

    return (
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <Button className="btn btn-outline-success" buttonOnClick={(e) => searchText(e)}>
                <i className="bi bi-search"></i>
            </Button>
        </form>
    )
}

export default Searchbar;
import { TextField } from "@mui/material";
import useStore from "../store/useStore";
import "../styles/SearchInput.scss";

const SearchInput = () => {
  const filterById = useStore((state) => state.filterById);
  const setSearchedProductId = useStore((state) => state.setSearchedProductId);

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    filterById(Number(e.target.value));
    setSearchedProductId(Number(e.target.value));
  };

  return (
    <TextField
      onChange={onChange}
      id="outlined-basic"
      label="Product id..."
      variant="outlined"
      type="number"
      className="search-input"
    />
  );
};

export default SearchInput;

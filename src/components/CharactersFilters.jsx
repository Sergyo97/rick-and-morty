import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { charactersActions } from "../store/characters-slice";

function CharactersFilters() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.characters.nameFilter);
  const specie = useSelector((state) => state.characters.specieFilter);
  const gender = useSelector((state) => state.characters.genderFilter);
  const status = useSelector((state) => state.characters.statusFilter);

  return (
    <div className="flex flex-row gap-4">
      <TextField
        id="name-input"
        label="Name"
        value={name}
        onChange={(event) =>
          dispatch(
            charactersActions.setNameFilter({ name: event.target.value }),
          )
        }
      />
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="species-input" sx={{ color: "white" }}>
          Species
        </InputLabel>
        <Select
          labelId="species-input"
          id="species-select"
          value={specie}
          label="Specie"
          onChange={(event) =>
            dispatch(
              charactersActions.setSpecieFilter({ specie: event.target.value }),
            )
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"human"}>Human</MenuItem>
          <MenuItem value={"humanoid"}>Humanoid</MenuItem>
          <MenuItem value={"alien"}>Alien</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="gender-input" sx={{ color: "white" }}>
          Gender
        </InputLabel>
        <Select
          labelId="gender-input"
          id="gender-select"
          value={gender}
          label="Gender"
          onChange={(event) =>
            dispatch(
              charactersActions.setGenderFilter({ gender: event.target.value }),
            )
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"genderless"}>Genderless</MenuItem>
          <MenuItem value={"unknown"}>Unknown</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="status-input" sx={{ color: "white" }}>
          Status
        </InputLabel>
        <Select
          labelId="status-input"
          id="status-select"
          value={status}
          label="Status"
          onChange={(event) =>
            dispatch(
              charactersActions.setStatusFilter({ status: event.target.value }),
            )
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"alive"}>Alive</MenuItem>
          <MenuItem value={"dead"}>Dead</MenuItem>
          <MenuItem value={"unknown"}>Unknown</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default CharactersFilters;

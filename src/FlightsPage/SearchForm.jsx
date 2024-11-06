import React, { useState } from "react";
import DatePicker from "react-date-picker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import style from "./flights.module.css";
import "react-date-picker/dist/DatePicker.css";
import { Link } from "react-router-dom";

function SearchForm() {
  const [startDate, setStartDate] = useState(null);
  const [value, setValue] = useState("Economy");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [flights, setFlights] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = () => {
    // Mock data for flight details, replace with API call if available
    const mockFlights = [
      { id: 1, airline: " Indigo", price: 150, time: "10:00 AM" },
      { id: 2, airline: "AirIndia", price: 200, time: "1:00 PM" },
      { id: 3, airline: "Vistara", price: 250, time: "6:00 PM" },
    ];
    setFlights(mockFlights);
  };

  return (
    <>
      <div className={style.head}>
        <div className={style.flightformcont}>
          <div className={style.flightformoutmost}>
            <div className={style.flightformbox}>
              <div className={style.flightform}>
                <div className={style.flightformfilter}>
                  <div className={style.flightformradio}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="radio"
                        value={value}
                        onChange={handleChange}
                        name="controlled-radio-buttons-group"
                        defaultValue="One-way"
                      >
                        <FormControlLabel
                          value="Round-trip"
                          control={<Radio />}
                          label="Round-trip"
                        />
                        <FormControlLabel
                          value="One-way"
                          control={<Radio />}
                          label="One-way"
                        />
                        <FormControlLabel
                          value="Multi-city"
                          control={<Radio />}
                          label="Multi-city"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <NativeSelect>
                      <option value="Economy">Economy</option>
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Business">Business</option>
                      <option value="First-class">First-class</option>
                    </NativeSelect>
                  </FormControl>
                </div>
                <div className={style.yellowBox}>
                  <div>
                    <div className={style.inputGroup}>
                      <input
                        className={style.SearchboxInput}
                        type="text"
                        placeholder="Where from?"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                      />
                    </div>
                    <div className={style.arrow}>
                      {/* Icon code */}
                    </div>
                    <div className={style.inputGroup}>
                      <input
                        className={style.SearchboxInput}
                        type="text"
                        placeholder="Where to?"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                      />
                    </div>
                    <div className={style.DateInputGroup}>
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText="Depart"
                        className={style.date}
                      />
                    </div>
                    <button className={style.search} onClick={handleSearch}>
                      Search
                    </button>
                  </div>
                </div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Direct flights only"
                  />
                </FormGroup>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Details Section */}
      {flights.length > 0 && (
        <div className={style.flightResults}>
          <h3>Available Flights</h3>
          <ul>
            {flights.map((flight) => (
              <li key={flight.id}>
                {flight.airline} - ${flight.price} - {flight.time}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default SearchForm;

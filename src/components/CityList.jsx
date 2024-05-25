import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
// import PropTypes from "prop-types"; // Import PropTypes
/* eslint-disable react/prop-types */

export default function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on the first city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

/*
// Add PropTypes validation
CityList.propTypes = {
  cities: PropTypes.array.isRequired, // Expects an array, required
  isLoading: PropTypes.bool.isRequired, // Expects a boolean, required
};
*/

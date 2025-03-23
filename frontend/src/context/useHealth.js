import { useContext } from "react";
import HealthContext from "./HealthContext";

// A custom hook for easy context consumption.
const useHealth = () => useContext(HealthContext);

export default useHealth;
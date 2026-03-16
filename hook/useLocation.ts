import {
  getCities,
  getCountries,
  getStates,
} from "@/services/county-data-services";
import { useState } from "react";

export interface LocationItem {
  uuid: string;
  name: string;
}

export default function useLocationData() {
  const [countries, setCountries] = useState<LocationItem[]>([]);
  const [states, setStates] = useState<LocationItem[]>([]);
  const [cities, setCities] = useState<LocationItem[]>([]);

  const [loading, setLoading] = useState({
    countries: false,
    states: false,
    cities: false,
  });

  const fetchCountries = async () => {
    setLoading((s) => ({ ...s, countries: true }));
    const data = await getCountries();
    setCountries(data.results || []);
    setLoading((s) => ({ ...s, countries: false }));
  };

  const fetchStates = async (country: string) => {
    setLoading((s) => ({ ...s, states: true }));
    const data = await getStates(country);
    setStates(data.results || []);
    setLoading((s) => ({ ...s, states: false }));
  };

  const fetchCities = async (state: string) => {
    setLoading((s) => ({ ...s, cities: true }));
    const data = await getCities(state);
    setCities(data.results || []);
    setLoading((s) => ({ ...s, cities: false }));
  };

  return {
    countries,
    states,
    cities,
    loading,
    fetchCountries,
    fetchStates,
    fetchCities,
    setStates,
    setCities,
  };
}

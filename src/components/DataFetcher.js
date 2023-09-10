// DataFetcher.js

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserInput } from "../redux/slices/userInputSlice";

const DataFetcher = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch("https://json.extendsclass.com/bin/0df4b69323bc")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUserInput(data)); // Dispatch action to set user input data
      })
      .catch((error) => {
        console.error("Error fetching data from the API: ", error);
      });
  }, [dispatch]);

  return null; // This component doesn't render anything to the DOM
};

export default DataFetcher;

import { useState, useEffect } from "react";

export const UseUserInputData = () => {
  const [userInputData, setUserInputData] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch("https://api.npoint.io/8e95d54d7cb1f104a413")
      .then((response) => response.json())
      .then((data) => {
        setUserInputData(data);
      })
      .catch((error) => {
        console.error("Error fetching data from the API: ", error);
      });
  }, []);

  const saveChanges = (newData) => {
    setUserInputData(newData);
  };

  const handleWordInputChange = (id, newText) => {
    const updatedData = userInputData.map((wordData) =>
      wordData.id === id ? { ...wordData, userInput: newText } : wordData
    );
    setUserInputData(updatedData);
  };

  return { userInputData, saveChanges, handleWordInputChange };
};

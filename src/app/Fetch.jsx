import { useEffect, useState } from "react";

const fetchImage = async () => {
  const res = await fetch("https://nekos.best/api/v2/happy");
  const data = await res.json();
  return data.results[0].url;
};

// Fetch an image from the API and display it
export const Fetch = () => {
  const [imageUrl, setImageurl] = useState("");

  useEffect(() => {
    const apiCall = async () => {
      const url = await fetchImage();
      setImageurl(url);
    };
    apiCall();
  }, []);

  return <img src={imageUrl} alt="Happy anime character" />;
};

import { useState, useEffect } from "react";

const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  let token = localStorage.getItem("token");

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, {
        signal: abortCont.signal,
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          // auto catches network / connection error
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;

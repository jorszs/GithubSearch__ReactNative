import React, { useState, useEffect } from "react";
import { Alert } from "react-native";

export default function useSearch(
  queryInput,
  pageNumber,
  limitPage,
  setIsLoading
) {
  const [searchResult, setSearchResult] = useState([]);
  const expresionUppercase = /[A-Z]+/g;

  //comprobando si hay alguna letra en mayuscula
  useEffect(() => {
    let isUpperCase = [];
    isUpperCase = queryInput.match(expresionUppercase);

    if (isUpperCase) {
      if (isUpperCase.length > 0) {
        Alert.alert("", "no admite mayusculas");
        //retornando para que no haga busquedas
        return;
      }
    } else {
      setIsLoading(true);
    }
  }, [queryInput]);

  useEffect(() => {
    setIsLoading(true);
    const url = `https://api.github.com/search/repositories?q=${queryInput}&page=${pageNumber}&per_page=${limitPage}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.items) {
          setSearchResult(
            result.items.map((register) => ({
              github_url: register.clone_url,
              avatar: register.owner.avatar_url,
              owner: register.owner.login,
              repository_name: register.full_name,
              stars: register.stargazers_count,
              date: register.pushed_at,
            }))
          );
        } else {
          console.log(result);
        }
      })
      .catch((err) => {
        if (err) {
          console.log("error: ", err);
        }
      });
    setIsLoading(false);
  }, [queryInput]);

  return { searchResult };
}

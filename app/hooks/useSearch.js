import React, { useState, useEffect } from "react";
import { Alert } from "react-native";

export default function useSearch(queryInput, pageNumber, limitPage) {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const expresionUppercase = /[A-Z]+/g;

  //comprobando si hay alguna letra en mayuscula
  useEffect(() => {
    let isUpperCase = [];
    isUpperCase = queryInput.match(expresionUppercase);
    console.log(isUpperCase);

    if (isUpperCase) {
      if (isUpperCase.length > 0) {
        console.log("mayuscula");
        Alert.alert("", "no admite mayusculas");
        //retornando para que no haga busquedas
        return;
      }
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
      })
      .catch((err) => {
        if (err) {
          console.log("error: ", err);
        }
      });
    setIsLoading(false);
  }, [queryInput]);

  return { searchResult, isLoading };
}

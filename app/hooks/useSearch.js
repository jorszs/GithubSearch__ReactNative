import React, { useState, useEffect } from "react";

export default function useSearch(queryInput, pageNumber, limitPage) {
  //   const { queryInput, pageNumber, limitPage } = props;
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(queryInput);
    setIsLoading(true);
    const url = `https://api.github.com/search/repositories?q=${queryInput}&sort=help-wanted-issues&order=desc&page=${pageNumber}&per_page=${limitPage}`;
    // fetch("https://github.com/search?q=jquery+in%3Aname&type=Repositories")
    fetch(url)
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((result) => {
        console.log(result);
        // console.log(result.searchResult.items);
        //  .sort((a,b) => new Date(a.pushed_at) - new Date(b.pused_at))
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

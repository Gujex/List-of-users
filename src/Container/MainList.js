import React, { useState, useEffect, useContext } from "react";
import "./mainList.css";
import Loading from "../UI/Loading/Loading";
import Card from "../Components/Card/Card";

function MainList() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState({});
  const [size, setSize] = useState(12);
  const [page, setPage] = useState(1);

  const URL = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${size}`;

  async function fetchData(page) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      const usersCopy = { ...data };

      if (users.list) {
        usersCopy.list = [...users.list, ...data.list];
      }

      setUsers(usersCopy);
      setLoading(false);
    } catch (error) {
      console.log("error");
      setLoading(error);
    }
  }
  useEffect(() => {
    fetchData(page);
  }, []);

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // you're at the bottom of the page
      showNextPage();
    }
  };

  const showNextPage = () => {
    let pageNum = page;
    pageNum++;
    setPage(pageNum);

    fetchData(page);
  };

  console.log(users);
  console.log(loading);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="users">
          {users?.list?.map((item, index) => {
            const { id, imageUrl, lastName, name, title } = item;
            return (
              <Card
                key={index}
                id={id}
                lastName={lastName}
                name={name}
                imageUrl={imageUrl}
                title={title}
              />
            );
          })}
          {window.addEventListener("scroll", () => {
            if (window.scrollY >= 100) {
              <div>hahahha</div>;
            }
          })}
        </div>
      )}
    </div>
  );
}

export default MainList;

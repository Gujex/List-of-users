import React, { useState, useEffect, useContext } from "react";
import "./mainList.css";
import List from "./List";
import Loading from "../UI/Loading/Loading";
import Card from "../Components/Card/Card";
const URL = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/12`;

function MainList() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setList(data.list);
      setLoading(false);
    } catch (error) {
      console.log("error");
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(loading);

  return (
    <div>
    {loading ? (
      <Loading />
    ) : (
      <div className="users">
        {list.map((item, index) => {
          const { id, imageUrl, lastName, name, title } = item;
          console.log(item)
          return (
            <Card
              index={index}
              id={id}
              lastName={lastName}
              name={name}
              imageUrl={imageUrl}
              title={title}
            />
          );
        })}
      </div>
    )}
  </div>
  );
}

export default MainList;

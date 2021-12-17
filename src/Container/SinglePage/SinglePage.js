import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./singlePage.css";
import Loading from "../../UI/Loading/Loading";
import UserInfo from "../../Components/userInfo/UserInfo";
import { useSSRSafeId } from "@react-aria/ssr";
import Card from "../../Components/Card/Card";
import MainList from "../MainList";
import InfiniteScroll from "react-infinite-scroll-component";
function SinglePage() {
  const [user, setUser] = useState([]);
  const [address, setAddress] = useState([]);
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState({});
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(12);

  async function fetchData(id, page, size) {
    let URL = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`;

    if (page && size) {
      URL = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${page}/${size}`;
    }

    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (page && size) {
        const friendsCopy = { ...data };
        if (friends.list) {
          friendsCopy.list = [...friends.list, ...data.list];
        }

        setFriends(friendsCopy);
      } else {
        setUser(data);
        setAddress(data.address);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(id);
    fetchData(id, page, size);
  }, [id]);

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // you're at the bottom of the page
      fetchFriends();
    }
  };

  const fetchFriends = () => {
    let pageNum = page; //1
    pageNum++; //2
    setPage(pageNum); //2

    console.log(pageNum, size);

    fetchData(id, page, size);
    console.log("done");
  };

  return (
    <>
      <UserInfo loading={loading} user={user} address={address} />

      <div className="singlepage_div">
        {friends?.list?.map((friend, index) => {
          return (
            <Card
              key={index}
              // index={index}
              id={friend.id}
              lastName={friend.lastName}
              name={friend.name}
              imageUrl={friend.imageUrl}
              title={friend.title}
            />
          );
        })}
      </div>
    </>
  );
}

export default SinglePage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./singlePage.css";
import Loading from "../../UI/Loading/Loading";
import UserInfo from "../../Components/userInfo/UserInfo";
import { useSSRSafeId } from "@react-aria/ssr";
import Card from "../../Components/Card/Card";
import List from "../List";
import MainList from "../MainList";
function SinglePage() {
  const [user, setUser] = useState([]);
  const [address, setAddress] = useState([]);
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState([]);

  async function fetchData(id, page, size) {
    let URL = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`;

    if (page && size) {
      URL = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${page}/${size}`;
    }

    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (page && size) {
        setFriends(data);
      } else {
        setUser(data);
        setAddress(data.address);
      }

      setLoading(false);
    } catch (error) {
      console.log("error");
      setLoading(false);
    }
  }
  console.log(friends);
  useEffect(() => {
    fetchData(id);
    fetchData(id, 1, 12);
  }, []);

  console.log(user);
  console.log(address);
  return (
    <>
      <UserInfo loading={loading} user={user} address={address} />

  
    <div className='singlepage_div'>
    
      {friends?.list?.map((friend, index) => {
        return (
          <Card
            index={index}
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

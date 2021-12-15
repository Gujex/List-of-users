import React from "react";
import "./userInfo.css";
import Loading from "../../UI/Loading/Loading";

function UserInfo({ user, address, loading }) {
  return (
    <>
      <div>
        {loading ? (
          console.log('load')
        ) : (
          <div className="users">
            <div className="userInfo">
              <img className="info_image" src={user.imageUrl} alt="userImg" />
              <div className="info_info">
                <div className="info_list">
                  <b>
                    <h3>info: </h3>
                  </b>
                  <div>
                    {user.prefix} {user.name} {user.lastName}
                  </div>
                  <div>{user.title}</div>
                  <ul>
                    <li>
                      <span className="infoSpan">Email: </span>
                      {user.email}
                    </li>
                    <li>
                      <span className="infoSpan">Ip adress: </span>
                      {user.ip}
                    </li>
                    <li>
                      <span className="infoSpan">Ip adress: </span>
                      {user.ip}
                    </li>
                    <li>
                      <span className="infoSpan">Job area: </span>
                      {user.jobArea}
                    </li>
                    <li>
                      <span className="infoSpan">Job type: </span>
                      {user.jobType}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="info_adress">
                <div className="info_list">
                  <b>
                    <h3>address: </h3>
                  </b>
                  <div>
                    <b>
                      
                      {user.company?.name} {user.company?.suffix}
                    </b>
                  </div>
                  <div>{user.title}</div>
                  <ul>
                    <li>
                      <span className="infoSpan">City: </span>
                      {address.city}
                    </li>
                    <li>
                      <span className="infoSpan">Country: </span>
                      {address.country}
                    </li>
                    <li>
                      <span className="infoSpan">State:</span>
                      {address.state}
                    </li>
                    <li>
                      <span className="infoSpan">street address: </span>
                      {address.streetAddress}
                    </li>
                    <li>
                      <span className="infoSpan">Zip code </span>
                      {address.zipCode}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserInfo;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
const Home = () => {
  const { postslist, userslist, setProfileData } = useContext(AuthContext);
  const userIdSet = new Set(postslist.map((item) => item.userId));
  const userIdCount = userIdSet.size;

  const showProfile = (val) => {
    setProfileData(val);
  };
  return (
    <section className="directory">
      <div className="innerContainer">
        <div className="hadding-ps">
          <h3>
            Users <span>Post</span>{" "}
          </h3>
        </div>
        {userslist?.map((val, index) => {
          return (
            <Link
              to={`/user/${val.id}`}
              key={index}
              className="teglink"
              onClick={(e) => showProfile(val)}
            >
              <div className="itemcard">
                <div className="uname">
                  Name: <span>{val.name}</span>
                </div>
                <div className="postcount">
                  Posts: <span>{userIdCount}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Home;

import React, { useContext, useState  } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context';
import PostBox from '../../ui/postbox'
import Modal from '../../ui/modal';
const Profile = () => {
  const { postslist, userslist, profileData,  postDetial, setPostDetial } = useContext(AuthContext);
  const fulladdress = `${profileData.address.street} ${profileData.address.suite} ${profileData.address.city} ${profileData.address.zipcode}`;
  const filteredPosts = postslist.filter((post) => post.userId === profileData.id);
  const [ismodalShow, setIsModalShow] = useState(false);


  const showmodual = (vals) => {
    setPostDetial(vals)
    setIsModalShow(true)
  }
  const closeModal = (e) => {
    setIsModalShow(false)

  }
  return (
    <section className='profileSection'>
      <div className="innerContainer">
        <div className="profileCard">
          <div className="hadding-ps">
            <h3>Pro<span>file</span> </h3>
          </div>
          <div className="backbut">
            <Link to='/' className='btn'>
              <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                Back
              </span>
            </Link>
          </div>
          <div className="contectInfo">
            <div className="arow">
              <div className="acol">
                <div className="cbox">
                  <span>Name:-</span>
                  <b>{profileData.name}</b>
                </div>
                <div className="cbox">
                  <span>Username:-</span>
                  <b>{profileData.username}</b>
                </div>
                <div className="cbox">
                  <span>Catch Phrase:-</span>
                  <b>{profileData.company.catchPhrase}</b>
                </div>
              </div>
              <div className="acol">
                <div className="cbox">
                  <span>Email:-</span>
                  <b>{profileData.email}</b>
                </div>
                <div className="cbox">
                  <span>Phone No.:-</span>
                  <b>{profileData.phone}</b>
                </div>
                <div className="cbox">
                  <span>Address:-</span>
                  <b>{fulladdress}</b>
                </div>
              </div>
            </div>
          </div>
          <div className="allPosts">
            <div className="arow">
              {filteredPosts?.map((vals, index) => {
                return (
                  <PostBox
                    key={index}
                    PostDetial={(e) => showmodual(vals)}
                    username={profileData.username}
                    title={vals.title}
                    disc={vals.body}
                  />
                )
              })}
            </div>
          </div>

        </div>
      </div>


      <Modal
        active={`${ismodalShow ? 'active' : ''}`}
        closeModal={(e) => closeModal()}
        username={profileData.username}
        title={postDetial.title}
        body={postDetial.body}
      />
    </section>

  )
}

export default Profile
type TProfileCardProps = {
  bgImg: string;
  userImg: string;
  username: string;
  instaId: string;
  onFollow: () => void;
};

const ProfileCard = ({
  bgImg,
  userImg,
  username,
  instaId,
  onFollow,
}: TProfileCardProps) => {
  const isLoggedin = true;

  return (
    <>
      {isLoggedin && (
        <article className="card">
          <div>
            <img className="card-img" src={bgImg} alt="background-pic" />
          </div>
          <div className="profile">
            <img className="prof-img" src={userImg} alt="profile-pic" />
            <h3 className="alias">{username}</h3>
            <p className="username">{instaId}</p>
            <button onClick={onFollow}>Follow</button>
          </div>
        </article>
      )}
    </>
  );
};
export default ProfileCard;

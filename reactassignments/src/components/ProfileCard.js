const ProfileCard = ({ name, age, location }) => {
  return (
    <>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </>
  );
};

export default ProfileCard;

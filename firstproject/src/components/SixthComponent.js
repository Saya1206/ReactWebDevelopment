/*
const SixthComponent = ({ objectPass }) => {
  return (
    <>
      <h2>Details:</h2>
      <p>{objectPass.id}</p>
      <p>{objectPass.name}</p>
      <p>{objectPass.age}</p>
      <p>{objectPass.city}</p>
    </>
  );
};

export default SixthComponent;
*/

const SixthComponent = ({ objectPass }) => {
  const { id, name, age, city } = objectPass;

  return (
    <>
      <h2>Details:</h2>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </>
  );
};

export default SixthComponent;

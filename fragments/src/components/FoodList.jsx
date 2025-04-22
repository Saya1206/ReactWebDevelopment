const FoodList = ({ items }) => {
  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
};

export default FoodList;

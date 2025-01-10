function Button({ label }) {
  function handleClick() {
    console.log(`${label} button clicked`);
  }

  return (
    <>
      <button onClick={handleClick}>{label}</button>
    </>
  );
}

export default Button;

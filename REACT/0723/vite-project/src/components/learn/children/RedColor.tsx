const RedColor = (props: { children: React.ReactNode }) => {
  return (
    <>
      <div style={{ color: "red", fontSize: "50px" }}>{props.children}</div>
    </>
  );
};
export default RedColor;

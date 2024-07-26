import DisplayCounter from "./DisplayCounter";
import Nodata from "./Nodata";
import UpdateButton from "./UpdateButton";

// presentational component : 아무런 기능이 없고 보여주기만 하는 컴포넌트
const Page = () => {
  return (
    <>
      <DisplayCounter />
      <UpdateButton />
      <Nodata />
    </>
  );
};
export default Page;

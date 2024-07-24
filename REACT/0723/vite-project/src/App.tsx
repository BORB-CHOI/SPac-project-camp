// import InputField from "./components/examples/ex3/InputField";
// import Button from "./components/examples/ex3/Button";
import Input from "./components/html/Input";
import Button from "./components/html/Button";

const App = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <Input type="text" placeholder="Enter Todo List" />

      <Button type="submit" className="bg-[#4F4F4F]">
        Add
      </Button>
      <Button type="submit" className="bg-[#ED4848]">
        Cancel
      </Button>
      <Button type="submit" className="bg-[#7D48ED]">
        Success
      </Button>
    </div>
  );
};
export default App;

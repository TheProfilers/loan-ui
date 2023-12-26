import { ClockLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <ClockLoader color="#36d7b7" />
    </div>
  );
}

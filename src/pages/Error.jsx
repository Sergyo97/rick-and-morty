import { useRouteError } from "react-router-dom";
import errorImage from "../assets/error.png";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={errorImage}
        alt="errorImage"
        className="max-h-screen w-screen"
      />
    </div>
  );
}

export default ErrorPage;

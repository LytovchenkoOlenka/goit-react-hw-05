import css from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={css.loader}>
      <ThreeDots
        visible={true}
        height="60"
        width="60"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
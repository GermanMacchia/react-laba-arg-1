import { Footer } from "../components/Footer/Footer";
import { GetButton } from "../components/GetButton/GetButton";
import { PhotoList } from "../components/PhotoList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles["grid-container"]}>
        <PhotoList />
        <GetButton />
      </div>
      <Footer />
    </>
  );
}

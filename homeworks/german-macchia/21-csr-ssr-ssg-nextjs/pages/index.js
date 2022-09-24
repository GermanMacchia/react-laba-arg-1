import { Footer } from "../components/Footer/Footer";
import { GetButton } from "../components/GetButton/GetButton";
import { PhotoList } from "../components/PhotoList";
import styles from "../styles/Home.module.css";
import fetchPhoto from "./api/fetchPhoto";
import Image from "next/image";

export default function Home({ data }) {
  return (
    <>
      <div className={styles["grid-container"]}>
        {data?.map((photo) => (
          <div className={styles.container} key={photo.id}>
            <Image
              className={styles.container__image}
              src={photo.url}
              alt={photo.name}
              layout="fill"
            />
          </div>
        ))}
        <PhotoList />
        <GetButton />
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const initialValue = 5;
  const data = await fetchPhoto(initialValue);
  return { props: { data } };
}

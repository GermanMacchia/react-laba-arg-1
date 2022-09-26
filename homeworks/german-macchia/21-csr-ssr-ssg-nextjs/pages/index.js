import { Footer } from "../components/Footer/Footer";
import { GetButton } from "../components/GetButton/GetButton";
import { PhotoContainer } from "../components/PhotoContainer/PhotoContainer";
import { PhotoList } from "../components/PhotoList";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import styles from "../styles/Home.module.css";
import fetchPhoto from "./api/fetchPhoto";


export async function getServerSideProps() {
  const initialValue = 5;
  const data = await fetchPhoto(initialValue);
  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <>
      <div className={styles["grid-container"]}>
        {data?.map((photo) => (
          <ErrorBoundary key={photo.id}>
            <PhotoContainer id={photo.id} upstreamData={data} />
          </ErrorBoundary>
        ))}
        <PhotoList />
        <GetButton />
      </div>
      <Footer />
    </>
  );
}


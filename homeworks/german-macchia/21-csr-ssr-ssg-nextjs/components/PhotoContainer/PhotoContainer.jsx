import { useEffect, useContext } from "react";
import { useQuery, useQueryClient  } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppContext";
import fetchPhoto from "../../pages/api/fetchPhoto";
import styles from "./PhotoContainer.module.css";
import Image from "next/image";

export const PhotoContainer = ({ id, upstreamData = null  }) => {
  const queryClient = useQueryClient()
  const { reloadAll } = useContext(AppContext);
  const { isLoading, data, isFetching, error, refetch } = useQuery(
    [`tile ${id}`],
    () => fetchPhoto(),
    {
      refetchOnWindowFocus: false,
      select: (data) => data[0],
    }
  );

  useEffect(() => {
    if(upstreamData){
      queryClient.invalidateQueries([`tile ${id}`])
    }
  }, [upstreamData]);

  useEffect(() => {
    if (error) {
      throw new Error(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (reloadAll.reload) {
      refetch();
      reloadAll.setReload(false);
    }
  }, [reloadAll.reload]);

  return (
    <div className={styles.container} onClick={refetch}>
      {((!isLoading && data) || upstreamData)? (
        <Image
          className={styles.container__profile_image}
          src={data?.url || upstreamData?.url}
          alt={data?.name || upstreamData?.name}
          layout="fill"
        />
      ) : (
        <motion.div
          className={styles.container__loading}
          animate={{ rotate: 380 }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      )}
      {isFetching ? (
        <motion.div
          className={styles["container__image_box--animate"]}
          animate={{ rotate: 380 }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      ) : (
        <div className={styles.container__image_box} />
      )}
    </div>
  );
};

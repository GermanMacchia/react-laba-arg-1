import React, { memo, useEffect, useContext } from "react";
import fetchPhoto from "../../pages/api/fetchPhoto";
import styles from "./PhotoContainer.module.css";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { AppContext } from "../../pages/context/AppContext";

export const PhotoContainer = memo(({ id }) => {
  const { reloadAll } = useContext(AppContext);
  const { isLoading, data, isFetching, error, refetch } = useQuery(
    [`tile ${id}`],
    () => fetchPhoto(),
    {
      refetchOnWindowFocus: false,
      select: (data) => {
        const photo = data[0];
        return photo;
      },
    }
  );

  useEffect(() => {
    if (reloadAll.reload) {
      refetch();
      reloadAll.setReload(false);
    }
  }, [reloadAll.reload]);

  return (
    <div className={styles.container} onClick={refetch}>
      {console.count("tile" + id)}
      {!isLoading && data ? (
        <Image
          className={styles.container__profile_image}
          src={data?.url}
          alt={data?.name}
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
});

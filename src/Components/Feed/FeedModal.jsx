import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../Login/Hooks/usefetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";
import { PHOTO_GET } from "../../api";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutSideClick(event) {
    console.log("target", event.target);
    console.log("current target", event.currentTarget);
    if (event.currentTarget === event.target) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutSideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;

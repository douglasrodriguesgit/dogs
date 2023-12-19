import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import usefetch from "../Login/Hooks/usefetch";
import { PHOTOS_GET } from "../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

const FeedPhotos = () => {
  const { data, error, loading, request } = usefetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
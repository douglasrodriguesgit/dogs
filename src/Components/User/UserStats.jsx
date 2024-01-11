import React from "react";
import Head from "../Helper/Head";
import usefetch from "../Login/Hooks/usefetch";
import { STATS_GET } from "../../api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
import UserStatsGraphs from "./UserStatsGraphs";

const UserStats = () => {
  const { data, loading, error, request } = usefetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
       
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </div>
    );
  return null;
};

export default UserStats;

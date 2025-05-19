import { useEffect } from "react";
import { useFetchApi } from "../hooks/useFetchApi";
import js from "@eslint/js";

function ResidentCard({ url }) {
  const { fetchingData, data : resident , loading} = useFetchApi();

  useEffect(() => {
    fetchingData(url)
  }, [url]);

  if (loading) return <p>Loading...</p>

  return (
    <div>

<img src={resident?.image} alt={resident?.name} />
<h2>{resident?.name}</h2>
    </div>
  )
}

export default ResidentCard
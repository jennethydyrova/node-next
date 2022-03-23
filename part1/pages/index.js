import axios from "axios";
import React from "react";

const API = "https://localhost:3443/api";

export default function Home() {
  const [data, setData] = React.useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

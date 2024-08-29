import useSWR from "swr";
import "./App.css";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };
  const { data, error, isLoading } = useSWR(url, () =>
    fetch(url, { headers }).then((res) => res.json())
  );

  if (error) return <p>Failed to load.</p>;
  if (isLoading) return <p>loading...</p>;

  return <p>Status : {data.description}</p>;
}

export default App;

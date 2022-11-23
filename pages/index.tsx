import useSWR from "swr";
import { useMe } from "../lib/hooks";

export default function Home() {
  const data = useMe();
  return (
    <div>
      <header>Soy el header</header>
      <br />
      <br />
      <br />
      {"Data:" + JSON.stringify(data)}
      <br />
      <br />
      <br />
      <footer>Soy el footer</footer>
    </div>
  );
}

import { useMe } from "../../lib/hooks";
export function Layout({ children }: any) {
  const myData = useMe();
  return (
    <div>
      <header>Header data: {JSON.stringify(myData)}</header>
      <div>{children}</div>
      <footer>Soy el footer</footer>
    </div>
  );
}

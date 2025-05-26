import useRemote from "../hooks/useRemote";
import type RemoteButtonType from "products/RemoteButton";

export function App() {
  const RemoteButton = useRemote<typeof RemoteButtonType>({ scope: "products", module: "RemoteButton" });

  return (
    <div>
      <p>This is running from the host app</p>
      <RemoteButton />
    </div>
  );
}

export default App;

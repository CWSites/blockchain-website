import { useState } from "react";

const batcave = new URL("./assets/batcave.jpg", import.meta.url);

export const App = () => {
  const [signal, setSignal] = useState(false);

  const activateSignal = () => {
    setSignal(!signal);
  };

  return (
    <main className={signal ? "bat-signal" : ""}>
      <h1>Welcome to the Batcave</h1>
      <h2 onClick={activateSignal}>I am Batman</h2>
      <img src={batcave} alt="batcave" />
      <p>
        Discovered and used long before by Bruce Wayne's ancestors as a
        storehouse as well as a means of transporting escaped slaves during the
        Civil War era, Wayne himself rediscovered them when he fell through a
        dilapidated well on his estate. Much like Superman's Fortress of
        Solitude, the Batcave serves as a place of privacy and tranquility where
        Batman can be himself.
      </p>
    </main>
  );
};

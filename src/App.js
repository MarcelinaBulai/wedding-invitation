import React from "react";

const Invitatie = () => {
  return (
    <div className="container">
      <h1>Te invităm la nunta noastră!</h1>
      <p>📅 Data: 20 Iulie 2025</p>
      <p>📍 Locație: [Numele locației]</p>
      <p>💌 RSVP: Confirmați prezența până pe 1 Iulie 2025</p>
      <button onClick={() => alert("Mulțumim pentru confirmare!")}>Confirmă prezența</button>
    </div>
  );
};

export default function App() {
  return <Invitatie />;
}

import {Footer, Header, Wrapper } from "./components"

function App() {
  const firstName = "Jacob"
  const lastName = "Figueroa"
  const userName = "OdeToTheCode"

  return (
    <div>
      <Header firstName={firstName} lastName={lastName} />
      <Footer firstName={firstName} lastName={lastName} userName={userName} />
    </div>
  );
}

export default App;

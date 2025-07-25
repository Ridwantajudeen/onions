import Bottom from "./Bottom";
import Header from "./Header";
import Middle from "./Middle";
import Welcome from "./Welcome";

function Landing() {
  return (
    <div id="home">
      <Header />
      <main className="grid place-items-center pt-10 gap-8">
        <Welcome />
        <Middle />
        <Bottom />
      </main>
    </div>
  );
}

export default Landing;

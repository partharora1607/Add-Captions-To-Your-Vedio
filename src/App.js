import Body from "./components/Body";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden antialiased selection:text-purple-400 relative">
      <div className="fixed inset-0 -z-10 min-h-screen w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Body />
    </div>
  );
}

export default App;

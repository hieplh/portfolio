import Content from "./components/content";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="min-h-screen px-2 w-fit max-w-screen-2xl mx-auto">
      <Header />
      <Content />
    </main>
  );
}

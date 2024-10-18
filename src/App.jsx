import Header from './components/Header';
import Projects from './components/Projects';
import Stack from './components/Stack';

function App() {
  return (
    <div className="w-full h-auto p-12 bg-dark-400 flex justify-center items-center">
      <main className="w-[502px] p-6 mx-4 bg-dark-300 rounded-3xl border border-dark-200">
        <Header />
        <Stack />
        <Projects />
      </main>
    </div>
  );
}

export default App;

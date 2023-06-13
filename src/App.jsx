import CustomButton from './components/CustomButton';
import SearchBar from './components/SearchBar';
import Title from './components/Title';

function App() {
  return (
    <>
      <header className="w-full h-96 flex justify-center items-center">
        <section>
          <Title />
          <SearchBar />
          <div className="flex flex-rows gap-2">
            <CustomButton />
          </div>
        </section>
      </header>
      <main>tes</main>
    </>
  );
}

export default App;

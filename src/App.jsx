import CustomButton from './components/CustomButton';
import CustomCard from './components/CustomCard';
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
      <main className="grid grid-cols-5 gap-5 w-full h-full p-5">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </main>
    </>
  );
}

export default App;

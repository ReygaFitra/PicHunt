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
          <SearchBar name="search" type="search" placeholder="Search Your Images & Pictures..." />
          <div className="flex flex-rows gap-2">
            <CustomButton text="Category 1" />
          </div>
        </section>
      </header>
      <main className="grid grid-cols-5 gap-5 w-full h-full p-5">
        <CustomCard src="https://images.unsplash.com/photo-1685438531044-ef75606db89d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="example" />
        <CustomCard src="https://images.unsplash.com/photo-1685438531044-ef75606db89d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="example" />
        <CustomCard src="https://images.unsplash.com/photo-1685438531044-ef75606db89d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="example" />
        <CustomCard src="https://images.unsplash.com/photo-1685438531044-ef75606db89d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="example" />
        <CustomCard src="https://images.unsplash.com/photo-1685438531044-ef75606db89d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="example" />
      </main>
    </>
  );
}

export default App;

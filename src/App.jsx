import CustomCard from './components/CustomCard';
import SearchBar from './components/SearchBar';
import Title from './components/Title';

function App() {
  const styles = {
    header: `w-full h-96 flex justify-center items-center`,
    container: `grid grid-cols-5 gap-5 w-full h-full p-5`,
    TitleBody: `flex flex-col justify-center items-center`,
    Title: `text-5xl text-primary font-semibold`,
    TitleDescription: `text-lg text-secondary`,
    SearchbarContainer: `w-full h-full flex justify-center items-center`,
    SearchbarFormRoot: `text-center w-[575px]`,
    SearchbarInput: `mt-12 border-2 border-base focus:border-primary bg-light outline-none w-full h-9 rounded-md transition-all duration-200 px-3`,
    CardBody: `bg-base w-[250px] h-[250px] rounded-xl overflow-hidden hover:scale-105 transition-all duration-200`,
    CardImage: `w-full h-full rounded-xl object-cover transition-transform duration-300 transform hover:scale-110 cursor-pointer`,
  };

  return (
    <>
      <header className={styles.header}>
        <section>
          <Title title="PicHunt" description="Your Free Images & Pictures" TitleBodyStyles={styles.TitleBody} TitleStyles={styles.Title} TitleDescriptionStyles={styles.TitleDescription} />
          <SearchBar SearchContainerStyles={styles.SearchbarContainer} SearchFormStyles={styles.SearchbarFormRoot} SearchInputStyles={styles.SearchbarInput} name="search" type="search" placeholder="Search Your Images & Pictures..." />
        </section>
      </header>
      <main className={styles.container}>
        <CustomCard
          src="https://images.unsplash.com/photo-1685438531044-ef75606db89d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="example"
          CardBodyStyles={styles.CardBody}
          CardBodyImageStyles={styles.CardImage}
        />
        <CustomCard
          src="https://images.unsplash.com/photo-1685438531044-ef75606db89d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="example"
          CardBodyStyles={styles.CardBody}
          CardBodyImageStyles={styles.CardImage}
        />
        <CustomCard
          src="https://images.unsplash.com/photo-1685438531044-ef75606db89d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="example"
          CardBodyStyles={styles.CardBody}
          CardBodyImageStyles={styles.CardImage}
        />
        <CustomCard
          src="https://images.unsplash.com/photo-1685438531044-ef75606db89d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="example"
          CardBodyStyles={styles.CardBody}
          CardBodyImageStyles={styles.CardImage}
        />
        <CustomCard
          src="https://images.unsplash.com/photo-1685438531044-ef75606db89d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="example"
          CardBodyStyles={styles.CardBody}
          CardBodyImageStyles={styles.CardImage}
        />
      </main>
    </>
  );
}

export default App;

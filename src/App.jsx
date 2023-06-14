import { useEffect } from 'react';
import CustomCard from './components/CustomCard';
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import { useAppStore } from './stores/AppStore';
import { FetchImageRandom } from './Api/ApiData';

function App() {
  const { images, setImages } = useAppStore();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageResponse = await FetchImageRandom();

        setImages(imageResponse);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

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
        {images.map((image) => (
          <CustomCard key={image.id} src={image.src.medium} alt={image.alt} CardBodyStyles={styles.CardBody} CardBodyImageStyles={styles.CardImage} />
        ))}
      </main>
    </>
  );
}

export default App;

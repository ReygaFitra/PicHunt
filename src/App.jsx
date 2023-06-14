import { useEffect } from 'react';
import CustomCard from './components/CustomCard';
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import { useAppStore } from './stores/AppStore';
import { FetchImageRandom, FetchImageSearch } from './Api/ApiData';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillArrowUpCircleFill } from 'react-icons/Bs';

function App() {
  const { images, setImages, pages, setPages, searchInput, searchPages, setSearchPages } = useAppStore();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let imageResponse;
        if (searchInput !== '') {
          imageResponse = await FetchImageSearch(searchInput, searchPages);
        } else {
          imageResponse = await FetchImageRandom(pages);
        }
        setImages(imageResponse);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [pages, searchPages]);

  const handleNextPage = () => {
    if (searchInput !== '') {
      setSearchPages(searchPages + 1);
    } else {
      setPages(pages + 1);
    }
  };

  const handlePreviousPage = () => {
    if (searchInput !== '') {
      if (searchPages > 1) {
        setSearchPages(searchPages - 1);
      }
    } else {
      if (pages > 1) {
        setPages(pages - 1);
      }
    }
  };

  const styles = {
    header: `w-full h-96 flex justify-center items-center`,
    container: `grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-7 md:gap-5 w-full h-full p-5`,
    TitleBody: `flex flex-col justify-center items-center`,
    Title: `text-5xl text-primary font-semibold`,
    TitleDescription: `text-lg text-secondary`,
    SearchbarContainer: `w-full h-full flex justify-center items-center`,
    SearchbarFormRoot: `text-center w-[350px] md:w-[575px]`,
    SearchbarInput: `mt-12 border-2 border-base focus:border-primary bg-light outline-none w-full h-9 rounded-md transition-all duration-200 px-3`,
    CardBody: `bg-base w-full h-[400px] md:w-[250px] md:h-[250px] rounded-xl overflow-hidden hover:scale-105 transition-all duration-200`,
    CardImage: `w-full h-full rounded-xl object-fit transition-transform duration-300 transform hover:scale-110 cursor-pointer`,
  };

  return (
    <>
      <header className={styles.header} id="header">
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
      <div className="flex justify-center gap-2 fixed bottom-7 right-0 left-0">
        {searchInput !== '' && searchPages > 1 && (
          <button className="py-3 px-3 my-3 rounded-full bg-primary bg-opacity-50 hover:bg-opacity-80 transition-all duration-200 " onClick={handlePreviousPage}>
            <BsFillArrowLeftCircleFill className="text-black text-2xl" />
          </button>
        )}
        {pages > 1 && (
          <button className="py-3 px-3 my-3 rounded-full bg-primary bg-opacity-50 hover:bg-opacity-80 transition-all duration-200 " onClick={handlePreviousPage}>
            <BsFillArrowLeftCircleFill className="text-black text-2xl" />
          </button>
        )}
        <button className="py-3 px-3 my-3 rounded-full bg-primary bg-opacity-50 hover:bg-opacity-80 transition-all duration-200 " onClick={handleNextPage}>
          <BsFillArrowRightCircleFill className="text-black text-2xl" />
        </button>
      </div>
      <div>
        <a href="#header" className="fixed bg-primary bg-opacity-50 hover:bg-opacity-80 bottom-10 right-4 md:right-10 lg:right-20 py-3 px-3 rounded-full transition-all duration-200">
          <BsFillArrowUpCircleFill className="text-white text-3xl md:text-5xl lg:text-4xl" />
        </a>
      </div>
    </>
  );
}

export default App;

import * as Form from '@radix-ui/react-form';
import CustomButton from './CustomButton';
import { useAppStore } from '../stores/AppStore';
import { FetchImageSearch } from '../Api/ApiData';

const SearchBar = (props) => {
  const { name, type, placeholder, SearchContainerStyles, SearchFormStyles, SearchInputStyles } = props;
  const { searchInput, setSearchInput, setImages, searchPages, setSearchPages } = useAppStore();

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const imageResponse = await FetchImageSearch(searchInput, searchPages);
      setImages(imageResponse);
      setSearchPages(1);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  const handleButtonSelection = async (selection) => {
    try {
      const imageResponse = await FetchImageSearch(selection, searchPages);
      setImages(imageResponse);
      setSearchPages(1);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
    setSearchInput(selection);
  };

  const styles = {
    CategoryButton: `flex flex-rows gap-2`,
    Button: `bg-secondary text-white py-1 px-2 my-3 rounded hover:bg-primary transition-all duration-200`,
  };

  const buttons = [
    {
      id: 1,
      category: <CustomButton text="Technology" ButtonStyles={styles.Button} handleButtonSelection={handleButtonSelection} selection="Technology" />,
    },
    {
      id: 2,
      category: <CustomButton text="Nature" ButtonStyles={styles.Button} handleButtonSelection={handleButtonSelection} selection="Nature" />,
    },
    {
      id: 3,
      category: <CustomButton text="Animals" ButtonStyles={styles.Button} handleButtonSelection={handleButtonSelection} selection="Animals" />,
    },
    {
      id: 4,
      category: <CustomButton text="Fashion" ButtonStyles={styles.Button} handleButtonSelection={handleButtonSelection} selection="Fashion" />,
    },
    {
      id: 5,
      category: <CustomButton text="Sports" ButtonStyles={styles.Button} handleButtonSelection={handleButtonSelection} selection="Sports" />,
    },
    {
      id: 6,
      category: <CustomButton text="Travel" ButtonStyles={styles.Button} handleButtonSelection={handleButtonSelection} selection="Travel" />,
    },
    {
      id: 7,
      category: <CustomButton text="Wallpapers" ButtonStyles={styles.Button} handleButtonSelection={handleButtonSelection} selection="Wallpapers" />,
    },
  ];

  return (
    <>
      <div className={SearchContainerStyles}>
        <Form.Root className={SearchFormStyles} onSubmit={handleSearch}>
          <Form.Field name={name}>
            <Form.Control asChild>
              <input className={SearchInputStyles} name={name} type={type} value={searchInput || ''} onChange={(e) => setSearchInput(e.target.value)} placeholder={placeholder} />
            </Form.Control>
          </Form.Field>
        </Form.Root>
      </div>
      <div className={styles.CategoryButton}>
        {buttons.map((button) => (
          <div key={button.id}>{button.category}</div>
        ))}
      </div>
    </>
  );
};

export default SearchBar;

import * as Form from '@radix-ui/react-form';

const SearchBar = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Form.Root className="text-center w-[575px]">
        <Form.Field name="search">
          <Form.Control asChild>
            <input className="mt-12 border-2 border-base focus:border-primary bg-light outline-none w-full h-9 rounded-md transition-all duration-200 px-3" type="text" placeholder="Search your images..." />
          </Form.Control>
        </Form.Field>
      </Form.Root>
    </div>
  );
};

export default SearchBar;

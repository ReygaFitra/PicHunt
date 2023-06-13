import * as Form from '@radix-ui/react-form';

const SearchBar = (props) => {
  const { name, type, placeholder, SearchContainerStyles, SearchFormStyles, SearchInputStyles } = props;
  return (
    <div className={SearchContainerStyles}>
      <Form.Root className={SearchFormStyles}>
        <Form.Field name={name}>
          <Form.Control asChild>
            <input className={SearchInputStyles} type={type} placeholder={placeholder} />
          </Form.Control>
        </Form.Field>
      </Form.Root>
    </div>
  );
};

export default SearchBar;

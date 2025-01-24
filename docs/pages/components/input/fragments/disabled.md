<!--start-code-->

```js
import { Input, InputGroup, Stack } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';

const App = () => (
  <Stack spacing={10} direction="column" alignItems="flex-start">
    <label>Disabled:</label>
    <Input disabled value="A piece of text for demonstration." />
    <InputGroup disabled>
      <Input value="A piece of text for demonstration." />
      <InputGroup.Addon>
        <SearchIcon />
      </InputGroup.Addon>
    </InputGroup>

    <label>Read only:</label>
    <Input readOnly value="A piece of text for demonstration." />

    <label>Plaintext:</label>
    <Input plaintext value="A piece of text for demonstration." />
  </Stack>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->

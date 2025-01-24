<!--start-code-->

```js
import { HStack, Button } from 'rsuite';

const App = () => {
  return (
    <HStack>
      <Button size="lg">Large</Button>
      <Button size="md">Medium</Button>
      <Button size="sm">Small</Button>

      <Stack.Item alignSelf="flex-end">
        <Button size="xs">alignSelf="flex-end"</Button>
      </Stack.Item>
      <Stack.Item grow={1}>
        <Button size="md" block>
          grow=1
        </Button>
      </Stack.Item>
    </HStack>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->

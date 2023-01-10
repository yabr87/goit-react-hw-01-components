###goit-react-hw-01-components

```
npm install --save prop-types
```

```
import PropTypes from 'prop-types';
```

рендер по условию

```
const isOnline = false;

{isOnline && 'онлайн'} // ничего не зарендерится. есл перемання true то зарендерится 'онлайн'
{isonline ? 'онлайн' : 'офлайн'}

{null ?? 3 } // 3
{undefind ?? 3 } // 3
{0 ?? 3}// 0 -- у всіх інших випадках  крім null та undefind повертає перше значення
{'' ?? 3}// '' - пустраий стріннг
```

```js
import PropTypes from 'prop-types';
import Painting from './Painting';

function PaintingList({ paintingItems }) {
  return (
    <ul>
      {paintingItems.map(paintingItem => (
        <li key={paintingItem.id}>
          <Painting
            url={paintingItem.url}
            title={paintingItem.title}
            author={paintingItem.author.tag}
            profileUrl={paintingItem.author.url}
            price={paintingItem.price}
            quantity={paintingItem.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  paintingItems: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ) /* перевірка чи приходить нам масив об'єктів(shape), а в мамому обекті повинен бути ID стрінг */,
}; // перевіряємо пропси для PaintingList тут на потрібен тільки id пропси Painting перевіряються в самому компоненті Painting

export default PaintingList;
```

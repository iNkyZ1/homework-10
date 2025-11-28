# homework-10

## Описание

Хук `useViewportSize` возвращает текущие размеры окна браузера и обновляет их при изменении:

```js
const { width, height } = useViewportSize();
```

Использует вспомогательный хук useWindowEvent для подписки на window.resize.

Установка и запуск

```bash
npm install
npm run dev
```

## Основные файлы

- src/hooks/useWindowEvent.js

- src/hooks/useViewportSize.js

- src/Demo.jsx

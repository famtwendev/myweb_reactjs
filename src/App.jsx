import { Button } from '@mui/material';
import Header from 'components/Header';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';
import { useSnackbar } from 'notistack';

function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const params = {
  //       _limit: 10,
  //     };

  //     const productList = await productApi.getAll(params);
  //     console.log(productList);
  //   };

  //   fetchProducts();
  // }, []);
  const { enqueueSnackbar } = useSnackbar();

  const showNoti = () => {
    enqueueSnackbar('Register successfully', { variant: 'success' });
  };
  return (
    <div className="App">
      <Header />

      <Button onClick={showNoti}>Show noti</Button>
      {/* <Navigate from="home" to="/" exact />
      <Navigate from="post-list/:postId" to="posts/:postId" /> */}
      <Routes>
        <Route path="/" element={<CounterFeature />} exact />
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <h1>Footer</h1>
    </div>
  );
}

export default App;

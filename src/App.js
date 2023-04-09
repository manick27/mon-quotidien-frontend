import Header from "./header/Header";
import CategoryList from "./category/CategoriesList";
import AddCategory from "./category/AddCategory";
import ProductList from "./product/ProductsList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AddCategory></AddCategory>
      <CategoryList></CategoryList>
      <ProductList></ProductList>
    </div>
  );
}

export default App;

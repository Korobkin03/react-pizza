import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";

const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
<<<<<<< HEAD
  const [pages, setPages] = React.useState(1);
=======
>>>>>>> ff862c97ad7e5caa19c5a28b77a4b9c2f6773e65

  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "raiting",
  });

  React.useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : ``;
<<<<<<< HEAD
    const search = searchValue ? `&search=${searchValue}` : ``;
    const sort = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";

    fetch(
      `https://63c6a6a24ebaa802854a8332.mockapi.io/items?page=${pages}&limit=4&${category}&sortBy=${sort}&order=${order}${search}`
=======
    const sort = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    fetch(
      `https://63c6a6a24ebaa802854a8332.mockapi.io/items?${category}&sortBy=${sort}&order=${order}`
>>>>>>> ff862c97ad7e5caa19c5a28b77a4b9c2f6773e65
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
<<<<<<< HEAD
  }, [categoryId, sortType, searchValue, pages]);

  const pizza = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

=======
  }, [categoryId, sortType]);
>>>>>>> ff862c97ad7e5caa19c5a28b77a4b9c2f6773e65
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(id) => setCategoryId(id)}
        />
        <Sort value={sortType} onClickSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
<<<<<<< HEAD
      <div className="content__items">{isLoading ? skeletons : pizza}</div>
      <Pagination onChangePage={(number) => setPages(number)} />
=======
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
>>>>>>> ff862c97ad7e5caa19c5a28b77a4b9c2f6773e65
    </div>
  );
};
export default Home;

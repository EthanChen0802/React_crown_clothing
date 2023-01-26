import "./category-item.style.scss";

const CategoryItem = ({ category }) => (
  <div key={category.id} className="category-container">
    <div
      className="background-image"
      style={{ backgroundImage: `url(${category.imageUrl})` }}
    />
    <div className="category-body-container">
      <h2>{category.title}</h2>
      <p>Shop now</p>
    </div>
  </div>
);

export default CategoryItem;

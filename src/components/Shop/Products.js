import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODCUTS = [
  {
    id: 'product1',
    price: 10,
    title: 'Sour Gummies',
    description: 'Chewy sweets that are packed with a sour flavour.'
  },
  {
    id: 'product2',
    price: 20,
    title: 'Milk Chocolate',
    description: 'Smooth textured milky chocolate that melts in your mouth.'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODCUTS.map(product => (
            <ProductItem
              key={ product.id }
              id={ product.id }
              title={ product.title }
              price={ product.price }
              description={ product.description }
            />
          ))
        }
      </ul>
    </section>
  );
};

export default Products;

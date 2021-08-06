import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { itemsCollection } from "../../firebase";
import ItemList from "../../components/ItemListContainer/ItemsComponents/ItemList";
import { Col, Spinner } from "react-bootstrap";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      let collection = itemsCollection;
      if (categoryName)
        collection = itemsCollection.where("category", "==", categoryName);
      const response = await collection.get();
      setItems(response.docs.map((item) => ({ id: item.id, ...item.data() })));
      setLoading(false);
    })();
  }, [categoryName]);

  return (
    <div>
      {loading ? (
        <Col className="text-center">
          <Spinner animation="border" role="status"></Spinner>
        </Col>
      ) : (
        <ItemList data={items} />
      )}
    </div>
  );
};

export default ItemListContainer;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../components/ItemDetailComponents/ItemDetail.js";
import { itemsCollection } from "../../firebase";
import { Row, Spinner, Col } from "react-bootstrap";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await itemsCollection.doc(id).get();
      setItem({ id: response.id, ...response.data() });
      setLoading(false);
    })();
  }, [id]);

  return (
    <Row>
      {loading ? (
        <Col className="text-center">
          <Spinner animation="border" role="status"></Spinner>
        </Col>
      ) : (
        <ItemDetail {...item}></ItemDetail>
      )}
    </Row>
  );
};

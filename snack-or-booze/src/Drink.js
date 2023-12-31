import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Drink({ items, cantFind }) {
    const { id } = useParams();

    let drink = items.find(drink => drink.id === id);
    if (!drink) return <Redirect to={cantFind} />

    return (
        <section>
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text center">
                        {drink.name}
                    </CardTitle>
                    <CardText className="font-italic">{drink.description}</CardText>
                    <p>
                        <b>Ingredients:</b> {drink.ingredients.join(", ")}
                    </p>
                    <p>
                        <b>Instructions:</b> {drink.instructions}
                    </p>
                </CardBody>
            </Card>
        </section>
    )
}

export default Drink;

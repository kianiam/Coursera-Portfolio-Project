import resturantfood from '../icons_assets/restauranfood.jpg'

function Main() {
    return (
        <>
            <div className="item-jombutron">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="reserve-button">Reserve a Table</button>
                <img src={ resturantfood } alt="resturantfood"/>
            </div>
            <div className="item-special">
               <h1>This Weeks special</h1>
               <button className="menu-button">Online Menu</button>
            </div>
            <div>
                <img src="" alt=""/>
                <h4>Greek Salad</h4>
                <p>$12.99</p>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <p>Order a delivery<span><img src="" alt=""/></span></p>
            </div>
            <div>
                <img src="" alt=""/>
                <h4>Bruchetta</h4>
                <p>$5.99</p>
                <p>Our bruchetta is made from grilled bread that has been smeard with garlic and seasoned with salt and olive oil.</p>
                <p>Order a delivery<span><img src="" alt=""/></span></p>
            </div>
            <div>
                <img src="" alt=""/>
                <h4>Lemon Dessert</h4>
                <p>$5.00</p>
                <p>This comes straigh from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be</p>
                <p>Order a delivery<span><img src="" alt=""/></span></p>
            </div>
        </>
    )
};

export default Main;
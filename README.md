# introduction to props (passing argument in js)

# first way of passing props

const ResCard = (props) => {
return (
<div className="cards">
<img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
        alt="pic"
        className="order-img"
      ></img>
<h2>{props.resName}</h2>
<h3>{props.cusines}</h3>
<h3>4.3 rating</h3>
</div>
);
};
const Body = () => {
return (
<div className="body">
<div className="search-bar">
<input type="search"></input>
<button type="submit">Search</button>
</div>
<div className="Res-Container">
<ResCard resName="MeghFoods" cusines="briyani, fried rice" />
<ResCard resName="Kfc" cusines="Burger, pizza" />
</div>
</div>
);

# Second way of passing props(Destructuring...)

const ResCard = ({resName,cuisines}) => {
return (
<div className="cards">
<img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
        alt="pic"
        className="order-img"
      ></img>
<h2>{resName}</h2>
<h3>{cusines}</h3>
<h3>4.3 rating</h3>
</div>
);
};
const Body = () => {
return (
<div className="body">
<div className="search-bar">
<input type="search"></input>
<button type="submit">Search</button>
</div>
<div className="Res-Container">
<ResCard resName="MeghFoods" cusines="briyani, fried rice" />
<ResCard resName="Kfc" cusines="Burger, pizza" />
</div>
</div>
);
#   f o o d - O r d e r i n g - s i t e  
 
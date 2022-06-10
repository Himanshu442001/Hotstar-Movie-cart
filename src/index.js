import ReactDOM from 'react-dom';
import Card from "./Card";
import "./index.css";
import Stats from './Stats';

// console.log(Stats[0].title);
const  ncard = (val) => <Card  
        key ={val.id}
        Mname ={val.Mname}
        img_src={val.img_src}
        title={val.title}
        links={val.links}/>;


ReactDOM.render(
<>
<div className="Header"> 
<h1 className="Heading"> Top Five Movies of Hotstar</h1>

</div>
{Stats.map(ncard)}
        




</>,
 
document.getElementById('root')
);
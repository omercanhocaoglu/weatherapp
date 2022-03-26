import "./style/result.css";


function Result ({date,mintemp,maxtemp,condition,icon})  {return(


<div>

<h2 className="resulth2">{date}</h2> 

<div className="divli">
<ul className="resultul">

<li className="resultli">  <img src={icon} alt=""/></li> 

<li className="resultli">{condition}</li>

<li className="resultli">Min Temp &nbsp;   {mintemp} °C   &nbsp; &nbsp; &nbsp; &nbsp; Max Temp &nbsp; {maxtemp} °C</li>

<li className="resultli"></li>
</ul>
</div>



</div>


)};



export default Result;




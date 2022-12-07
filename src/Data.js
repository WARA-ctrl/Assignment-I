import { useState, useEffect } from "react";
import "./App.css";
function Data() {
  const [data, setData] = useState([]);

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  useEffect(() => {
    fetch("https://stockradars.co/assignment/data.php")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="app">
      {data.map((item, index) => {
        return (
          <div key={index} className="containerr">
            <a href={item.N_URL}>{item.N_fullname}</a>
            <h4>{item.N_COMPANY_T}</h4>
            {/* <span>
              {item.N_name} {item.N_shortname ? `(${item.N_shortname})` : ""}
            </span> */}
            <p>{item.N_BUSINESS_TYPE_E}</p>

            <p>{item.N_BUSINESS_TYPE_T}</p>
            {/* <h1>{item.N_URL}</h1> */}
            <div className="below">
              <span className="marketcap">
                Market Cap :{" "}
                {item.marketcap ? formatNumber(item.marketcap) : "-"}
              </span>
              {/* <a className="url" href={item.N_URL}>
                Company Website
              </a> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Data;

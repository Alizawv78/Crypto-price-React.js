import React, { useState, useEffect } from "react";

//API
import { getCoin } from "../services/api";
//components
import Coin from "./Coin";
import Loader from "./Loader";
//style
import styles from "./Landing.module.css"

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoins(data);
    };

    fetchAPI();
  }, []);

  const searchHandler = event => {
    setSearch(event.target.value)
  }

  const searchedcoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search Coins ..."
          value={search}
          onChange={searchHandler}
        ></input>
      </div>
      {coins.length ? (
        <div className={styles.container}>
          {searchedcoins.map((coin) => (
            <Coin
              key={coin.id}
              market_cap_rank={coin.market_cap_rank}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (<Loader />
    
      )}
    </>
  );
};

export default Landing;

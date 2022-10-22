import React from 'react';
//style
import styles from "./Coin.module.css"

const Coin = ({name, image, symbol, price, marketCap, priceChange,market_cap_rank}) => {
    return (
      <div className={styles.container}>
        <span className={styles.rank}>{market_cap_rank}</span>
        <img className={styles.image} src={image} alt={name} />
        <span className={styles.name}>{name}</span>
        <span className={styles.symbol}>{symbol.toUpperCase()}</span>
        <span className={styles.price}>{price.toLocaleString()} $</span>
        <span
          className={
            priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange
          }
        >
          {priceChange.toFixed(2)}
        </span>
        <span className={styles.marketCap}>{marketCap.toLocaleString()}</span>
      </div>
    );
};

export default Coin;
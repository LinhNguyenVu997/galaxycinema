import React, { PureComponent } from "react";
import styles from "./frontPage.module.css";
import ButtonSearch from "../../components/ButtonSearch";
import Slide from "../../components/Slide";
import MovieItem from "../../components/MovieItem";
import BlogNews from "../../components/BlogNews";
import BlogSale from "../../components/BlogSale";
import Information from "../../components/Infomation";
import Footer from "../../components/Footer";

class FrontPage extends PureComponent {
  render() {
    return (
      <div className={styles.wrapper__container}>
        <div className={styles.header__nav__wrapper}>
          <div className={styles.nav__logo}>
            <img src="/img/galaxy.png" alt="" />
          </div>
          <div className={styles.nav__search}>
            <ButtonSearch />
          </div>
          <div className={styles.nav__login}>
            <img src="/icon/user.svg" alt="" />
            <a>Đăng nhập</a>
          </div>
        </div>
        <div className={styles.slide__wrapper}>
          <Slide />
        </div>
        <MovieItem />
        <BlogNews />
        <BlogSale />
        <Information />
      </div>
    );
  }
}

export default FrontPage;

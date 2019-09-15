import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styles from "./movieListFilm.module.css";

class MovieListFilm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categoryCurrentId: "id16846453dw1561dav"
    };
  }
  getCategoryId = (id, name) => {
    this.setState({
      ...this.state,
      categoryCurrentId: id
    });
    this.props.history.push(`/phim/${name}`);
  };
  render() {
    const { listCategories } = this.props;
    return (
      <section className={styles.wrapper__movieItem}>
        <div className={styles.tab__movie}>
          <div className={styles.tab__movie__left}>
            <ul className={styles.list__category}>
              {listCategories.map(itemCategory => (
                <li
                  onClick={() =>
                    this.getCategoryId(
                      itemCategory.idCategory,
                      itemCategory.link
                    )
                  }
                  className={`${styles.item__category} ${
                    itemCategory.idCategory === this.state.categoryCurrentId
                      ? styles.active
                      : ""
                  }`}
                >
                  <h4>{itemCategory.name}</h4>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.tab__movie__right}></div>
        </div>
        <div className={styles.movie__wrapper}>
          <div className={styles.movie__list}>
            {this.state.categoryCurrentId === "id16846453dw1561dav"
              ? this.props.listMovie.map(item =>
                  item.idCategory === "id16846453dw1561dav" ? (
                    <div className={styles.movie__item}>
                      <div className={styles.article__movie__item}>
                        <img src={item.imageThumnails} alt="" />
                      </div>
                      <div className={styles.movie__title}>
                        <h5>{item.name}</h5>
                      </div>

                      <div className={styles.decription__hover}>
                        <div className={styles.movie__content}>
                          <p>MUA VÉ</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                )
              : this.props.listMovie.map(item =>
                  item.idCategory === "id665151s16511s84861f" ? (
                    <div className={styles.movie__item}>
                      <div className={styles.article__movie__item}>
                        <img src={item.imageThumnails} alt="" />
                      </div>
                      <div className={styles.movie__title}>
                        <h5>{item.name}</h5>
                      </div>

                      <div className={styles.decription__hover}>
                        <div className={styles.movie__content}>
                          <p>MUA VÉ</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                )}
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    listCategories: state.listCategories.categoryList,
    listMovie: state.listCategories.movieItemList
  };
};
export default connect(
  mapStateToProps,
  null
)(MovieListFilm);

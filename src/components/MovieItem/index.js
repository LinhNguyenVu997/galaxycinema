import React, { PureComponent } from "react";
import styles from "./movieItem.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MovieItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categoryCurrentId: "id16846453dw1561dav"
    };
  }
  getCategoryId = id => {
    this.setState({
      ...this.state,
      categoryCurrentId: id
    });
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
                  onClick={() => this.getCategoryId(itemCategory.idCategory)}
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
                  item.popularity === "hot" ? (
                    <div className={styles.movie__item}>
                      <div className={styles.article__movie__item}>
                        <img src={item.image} alt="" />
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
                  item.popularity === "new" ? (
                    <div className={styles.movie__item}>
                      <div className={styles.article__movie__item}>
                        <img src={item.image} alt="" />
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
        <div className={styles.search__more}>
          <Link to="/phim" className={styles.btn__secondary}>
            XEM THÊM
          </Link>
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
)(MovieItem);

import React, { PureComponent } from "react";
import styles from "./slide.module.css";

class Slide extends PureComponent {
  render() {
    return (
      <div className={styles.wrapper__slide}>
        <div className={styles.slide}>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
            data-interval="2000"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="4"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className={`carousel-item active ${styles.carousel__item}`}>
                <img
                  className="d-block w-100"
                  src="https://galaxycine.vn/media/2019/4/1/nk-2048-x-682_1554087821449.jpg"
                  alt="First slide"
                />
              </div>
              <div className={`carousel-item ${styles.carousel__item}`}>
                <img
                  className="d-block w-100"
                  src="https://galaxycine.vn/media/2019/9/5/banner-2048x682_1567671858966.jpg"
                  alt="Second slide"
                />
              </div>
              <div className={`carousel-item ${styles.carousel__item}`}>
                <img
                  className="d-block w-100"
                  src="https://galaxycine.vn/media/2019/9/10/2048x6821_1568081810241.jpg"
                  alt="Third slide"
                />
              </div>
              <div className={`carousel-item ${styles.carousel__item}`}>
                <img
                  className="d-block w-100"
                  src="https://galaxycine.vn/media/2019/9/10/ss-2048x682_1568082039214.jpg"
                  alt="Four slide"
                />
              </div>
              <div className={`carousel-item ${styles.carousel__item}`}>
                <img
                  className="d-block w-100"
                  src="https://galaxycine.vn/media/2019/9/9/banner-2048x682_1568004484437.jpg"
                  alt="Four slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className={`${styles.form} ${styles.animated} ${styles.zoomIn}`}>
          <div className={styles.title}>
            <h4>MUA VÉ NHANH</h4>
          </div>
          <div className={styles.value__input}>
            <div className={`form-group ${styles.form__group}`}>
              <select
                className={`form-control ${styles.form__control}`}
                id="exampleFormControlSelect1"
              >
                <option>Chọn phim</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div className={`form-group ${styles.form__group}`}>
              <select
                className={`form-control ${styles.form__control}`}
                id="exampleFormControlSelect1"
              >
                <option>Chọn rạp</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div className={`form-group ${styles.form__group}`}>
              <select
                className={`form-control ${styles.form__control}`}
                id="exampleFormControlSelect1"
              >
                <option>Chọn ngày</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div className={`form-group ${styles.form__group}`}>
              <select
                className={`form-control ${styles.form__control}`}
                id="exampleFormControlSelect1"
              >
                <option>Chọn suất</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className={styles.submit__title}>
              <h4>MUA VÉ</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;

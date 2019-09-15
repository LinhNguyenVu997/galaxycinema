import React, { PureComponent } from "react";
import styles from "./blogNews.module.css";
class BlogNews extends PureComponent {
  render() {
    return (
      <section className={styles.wrapper__blogNews}>
        <div className={styles.comment__film}>
          <div className={styles.comment__film__title}>
            <h4>BÌNH LUẬN PHIM</h4>
          </div>
          <article className={styles.blog}>
            <div className={styles.movie__thumb}>
              <img
                src="https://galaxycine.vn/media/2019/9/12/450x300c_1568272640591.jpg"
                alt=""
              />
            </div>
            <div className={styles.movie__content}>
              <div className={styles.movie__title}>
                <a> [Review] The Angry Birds Movie 2: Cười “Sái Quai Hàm”</a>
              </div>
              <div className={styles.movie__icon}>
                <div className={styles.button__like}>
                  <img src="/icon/thumbs-up-hand-symbol.svg" alt="" />
                  <p>thích 3</p>
                </div>
                <div className={styles.icon__view}>
                  <img src="/icon/bright-eye.svg" alt="" />
                  <p>1515</p>
                </div>
                <div className={styles.review__star}>
                  <img src="/icon/star.svg" alt="" />
                  <img src="/icon/star.svg" alt="" />
                  <img src="/icon/star.svg" alt="" />
                  <img src="/icon/star.svg" alt="" />
                  <img src="/icon/star.svg" alt="" />
                </div>
              </div>
              <div className={styles.movie__text}>
                <p>
                  Thương hiệu hành động Bad Boys (Những Chàng Trai Hư) với bộ
                  đôi ngôi sao Will Smith ...
                </p>
              </div>
            </div>
          </article>

          <article className={styles.blog}>
            <div className={styles.movie__thumb}>
              <img
                src="https://galaxycine.vn/media/2019/9/12/450x300c_1568272640591.jpg"
                alt=""
              />
            </div>
            <div className={styles.movie__content}>
              <div className={styles.movie__title}>
                <a> [Review] The Angry Birds Movie 2: Cười “Sái Quai Hàm”</a>
              </div>
              <div className={styles.movie__icon}>
                <div className={styles.button__like}>
                  <img src="/icon/thumbs-up-hand-symbol.svg" alt="" />
                  <p>thích 3</p>
                </div>
                <div className={styles.icon__view}>
                  <img src="/icon/bright-eye.svg" alt="" />
                  <p>1515</p>
                </div>
                <div className={styles.review__star}>
                  <img src="/icon/star.svg" alt="" />
                  <img src="/icon/star.svg" alt="" />
                  <img src="/icon/star.svg" alt="" />
                  <img src="/icon/star.svg" alt="" />
                  <img src="/icon/star.svg" alt="" />
                </div>
              </div>
              <div className={styles.movie__text}>
                <p>
                  Thương hiệu hành động Bad Boys (Những Chàng Trai Hư) với bộ
                  đôi ngôi sao Will Smith ...
                </p>
              </div>
            </div>
          </article>

          <article className={styles.blog}>
            <div className={styles.movie__thumb}>
              <img
                src="https://galaxycine.vn/media/2019/9/12/450x300c_1568272640591.jpg"
                alt=""
              />
            </div>
            <div className={styles.movie__content}>
              <div className={styles.movie__title}>
                <a> [Review] The Angry Birds Movie 2: Cười “Sái Quai Hàm”</a>
              </div>
              <div className={styles.movie__icon}>
                <div className={styles.button__like}>
                  <img src="/icon/thumbs-up-hand-symbol.svg" alt="" />
                  <p>thích 3</p>
                </div>
                <div className={styles.icon__view}>
                  <img src="/icon/bright-eye.svg" alt="" />
                  <p>1515</p>
                </div>
                <div className={styles.review__star}>
                  <img src="/icon/star.svg" alt="" />
                  <img src="/icon/star.svg" alt="" />
                  <img src="/icon/star.svg" alt="" />
                  <img src="/icon/star.svg" alt="" />
                  <img src="/icon/star.svg" alt="" />
                </div>
              </div>
              <div className={styles.movie__text}>
                <p>
                  Thương hiệu hành động Bad Boys (Những Chàng Trai Hư) với bộ
                  đôi ngôi sao Will Smith ...
                </p>
              </div>
            </div>
          </article>

          <article className={styles.blog}>
            <div className={styles.movie__thumb}>
              <img
                src="https://galaxycine.vn/media/2019/9/12/450x300c_1568272640591.jpg"
                alt=""
              />
            </div>
            <div className={styles.movie__content}>
              <div className={styles.movie__title}>
                <a> [Review] The Angry Birds Movie 2: Cười “Sái Quai Hàm”</a>
              </div>
              <div className={styles.movie__icon}>
                <div className={styles.button__like}>
                  <img src="/icon/thumbs-up-hand-symbol.svg" alt="" />
                  <p>thích 3</p>
                </div>
                <div className={styles.icon__view}>
                  <img src="/icon/bright-eye.svg" alt="" />
                  <p>1515</p>
                </div>
                <div className={styles.review__star}>
                  <img src="/icon/star.svg" alt="" />
                  <img src="/icon/star.svg" alt="" />
                  <img src="/icon/star.svg" alt="" />
                  <img src="/icon/star.svg" alt="" />
                  <img src="/icon/star.svg" alt="" />
                </div>
              </div>
              <div className={styles.movie__text}>
                <p>
                  Thương hiệu hành động Bad Boys (Những Chàng Trai Hư) với bộ
                  đôi ngôi sao Will Smith ...
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className={styles.blog__film}>
          <div className={styles.blog__film__title}>
            <h4>BLOG ĐIỆN ẢNH</h4>
          </div>
          <article className={styles.blog}>
            <div className={styles.movie__thumb}>
              <img
                src="https://galaxycine.vn/media/2019/9/12/450x300c_1568272640591.jpg"
                alt=""
              />
            </div>
            <div className={styles.movie__content}>
              <div className={styles.movie__title}>
                <a>
                  {" "}
                  IT: Sự Biến Mất Của Nhân Vật Này Đã Thay Đổi Kết Thúc Phim
                </a>
              </div>
              <div className={styles.movie__icon}>
                <div className={styles.button__like}>
                  <img src="/icon/thumbs-up-hand-symbol.svg" alt="" />
                  <p>thích 3</p>
                </div>
                <div className={styles.icon__view}>
                  <img src="/icon/bright-eye.svg" alt="" />
                  <p>1515</p>
                </div>
              </div>
              <div className={styles.movie__text}>
                <p>
                  Thương hiệu hành động Bad Boys (Những Chàng Trai Hư) với bộ
                  đôi ngôi sao Will Smith ...
                </p>
              </div>
            </div>
          </article>

          <article className={styles.blog}>
            <div className={styles.movie__thumb}>
              <img
                src="https://galaxycine.vn/media/2019/9/12/450x300c_1568272640591.jpg"
                alt=""
              />
            </div>
            <div className={styles.movie__content}>
              <div className={styles.movie__title}>
                <a>
                  {" "}
                  IT: Sự Biến Mất Của Nhân Vật Này Đã Thay Đổi Kết Thúc Phim
                </a>
              </div>
              <div className={styles.movie__icon}>
                <div className={styles.button__like}>
                  <img src="/icon/thumbs-up-hand-symbol.svg" alt="" />
                  <p>thích 3</p>
                </div>
                <div className={styles.icon__view}>
                  <img src="/icon/bright-eye.svg" alt="" />
                  <p>1515</p>
                </div>
              </div>
              <div className={styles.movie__text}>
                <p>
                  Thương hiệu hành động Bad Boys (Những Chàng Trai Hư) với bộ
                  đôi ngôi sao Will Smith ...
                </p>
              </div>
            </div>
          </article>

          <article className={styles.blog}>
            <div className={styles.movie__thumb}>
              <img
                src="https://galaxycine.vn/media/2019/9/12/450x300c_1568272640591.jpg"
                alt=""
              />
            </div>
            <div className={styles.movie__content}>
              <div className={styles.movie__title}>
                <a>
                  {" "}
                  IT: Sự Biến Mất Của Nhân Vật Này Đã Thay Đổi Kết Thúc Phim
                </a>
              </div>
              <div className={styles.movie__icon}>
                <div className={styles.button__like}>
                  <img src="/icon/thumbs-up-hand-symbol.svg" alt="" />
                  <p>thích 3</p>
                </div>
                <div className={styles.icon__view}>
                  <img src="/icon/bright-eye.svg" alt="" />
                  <p>1515</p>
                </div>
              </div>
              <div className={styles.movie__text}>
                <p>
                  Thương hiệu hành động Bad Boys (Những Chàng Trai Hư) với bộ
                  đôi ngôi sao Will Smith ...
                </p>
              </div>
            </div>
          </article>

          <article className={styles.blog}>
            <div className={styles.movie__thumb}>
              <img
                src="https://galaxycine.vn/media/2019/9/12/450x300c_1568272640591.jpg"
                alt=""
              />
            </div>
            <div className={styles.movie__content}>
              <div className={styles.movie__title}>
                <a>
                  {" "}
                  IT: Sự Biến Mất Của Nhân Vật Này Đã Thay Đổi Kết Thúc Phim
                </a>
              </div>
              <div className={styles.movie__icon}>
                <div className={styles.button__like}>
                  <img src="/icon/thumbs-up-hand-symbol.svg" alt="" />
                  <p>thích 3</p>
                </div>
                <div className={styles.icon__view}>
                  <img src="/icon/bright-eye.svg" alt="" />
                  <p>1515</p>
                </div>
              </div>
              <div className={styles.movie__text}>
                <p>
                  Thương hiệu hành động Bad Boys (Những Chàng Trai Hư) với bộ
                  đôi ngôi sao Will Smith ...
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }
}

export default BlogNews;

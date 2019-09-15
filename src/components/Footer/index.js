import React, { PureComponent } from "react";
import styles from "./footer.module.css";

class Footer extends PureComponent {
  render() {
    return (
      <div className={styles.footer__bg}>
        <div className={styles.wrapper__footer}>
          <div className={styles.wrapper__intro}>
            <div className={styles.title}>
              <h4>GIỚI THIỆU</h4>
            </div>
            <div className={styles.content}>
              <ul className={styles.list__info}>
                <li>
                  <a>VỀ CHÚNG TÔI</a>
                </li>
                <li>
                  <a>ĐIỀU KHOẢN SỬ DỤNG</a>
                </li>
                <li>
                  <a>QUY ĐỊNH HOẠT ĐỘNG</a>
                </li>
                <li>
                  <a>CHÍNH SÁCH BẢO MẬT</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.title}>
              <h4>GÓC ĐIỆN ẢNH</h4>
            </div>
            <div className={styles.content}>
              <ul className={styles.list__info}>
                <li>
                  <a>PHIM HAY THÁNG</a>
                </li>
                <li>
                  <a>PHIM HAY TUẦN</a>
                </li>
                <li>
                  <a>THỂ LOẠI PHIM</a>
                </li>
                <li>
                  <a>DIỄN VIÊN</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.support}>
            <div className={styles.title}>
              <h4>HỖ TRỢ</h4>
            </div>
            <div className={styles.content}>
              <ul className={styles.list__info}>
                <li>
                  <a>VỀ CHÚNG TÔI</a>
                </li>
                <li>
                  <a>GÓP Ý</a>
                </li>
                <li>
                  <a>RẠP/VÉ</a>
                </li>
                <li>
                  <a>TUYỂN DỤNG</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.wrapper__connect}>
            <div className={styles.connect__cinema}>
              <div className={styles.title}>
                <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
              </div>
            </div>
            <div className={styles.icon}>
              <img src="/icon/facebook.svg" alt="" />
              <img src="/icon/google-plus.svg" alt="" />
              <img src="/icon/instagram.svg" alt="" />
              <img src="/icon/youtube.svg" alt="" />
            </div>
            <div className={styles.download__app}>
              <div className={styles.title}>
                <h4>DOWNLOAD MY APP</h4>
              </div>
              <div className={styles.icon}>
                <img src="/icon/android.svg" alt="" />
                <img src="/icon/apple.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.bootom__footer}>
          <img src="/icon/galaxy-logo-footer.png" alt="" />
          <span>
            Công Ty Cổ Phần Phim XXX, Tầng 5, Toà Nhà Game Center, 23 Phan Chu
            Trinh, Phường Phan Chu Trinh, TP.HCM
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;

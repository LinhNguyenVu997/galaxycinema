import React, { PureComponent } from "react";
import styles from "./information.module.css";

class Information extends PureComponent {
  render() {
    return (
      <section className={styles.wrapper__info}>
        <div className={styles.title__info}>
          <h4>Galaxy Cinema</h4>
        </div>
        <div className={styles.text}>
          <div className={styles.span__text}>
            <span>
              <span className={styles.span__title}>Galaxy Cinema</span> là một
              trong những công ty tư nhân đầu tiên về điện ảnh được thành lập từ
              năm 2003, đã khẳng định thương hiệu là 1 trong 10 địa điểm vui
              chơi giải trí được yêu thích nhất. Ngoài hệ thống rạp chiếu phim
              hiện đại, thu hút hàng triệu lượt người đến xem,{" "}
              <span className={styles.span__title}>Galaxy Cinema</span> còn hấp
              dẫn khán giả bởi không khí thân thiện cũng như chất lượng dịch vụ
              hàng đầu.
            </span>
          </div>

          <div className={styles.span__text}>
            <span>
              Đến website galaxycine.vn, quý khách sẽ được cập nhật nhanh chóng
              các phim hay nhất phim mới nhất đang chiếu hoặc sắp chiếu. Lịch
              chiếu tại mọi hệ thống rạp chiếu phim của{" "}
              <span className={styles.span__title}>Galaxy Cinema</span> cũng
              được cập nhật đầy đủ hàng ngày hàng giờ trên trang chủ.
            </span>
          </div>

          <div className={styles.span__text}>
            <span>
              Đặt vé tại{" "}
              <span className={styles.span__title}>Galaxy Cinema</span> dễ dàng
              chỉ sau vài thao tác vô cùng đơn giản. Để mua vé, hãy vào tab Mua
              vé. Quý khách có thể chọn Mua vé theo phim, theo rạp, theo ngày
              tùy cách nào tiện lợi nhất cho bản thân.Sau đó, tiến hành mua vé
              theo các bước hướng dẫn. Chỉ trong vài phút, quý khách sẽ nhận
              được tin nhắn và email phản hồi Đặt vé thành công của{" "}
              <span className={styles.span__title}>Galaxy Cinema</span>. Quý
              khách có thể dùng tin nhắn lấy vé tại quầy vé của{" "}
              <span className={styles.span__title}>Galaxy Cinema</span> hoặc
              quét mã QR để một bước vào rạp mà không cần tốn thêm bất kỳ công
              đoạn nào nữa.
            </span>
          </div>

          <div className={styles.span__text}>
            <span>
              Nếu bạn đã chọn được phim hay để xem, hãy đặt vé cực nhanh bằng
              box Mua Vé Nhanh ngay từ Trang Chủ. Chỉ cần một phút, tin nhắn và
              email phản hồi của{" "}
              <span className={styles.span__title}>Galaxy Cinema</span> sẽ gửi
              ngay vào điện thoại và hộp mail của bạn.
            </span>
          </div>

          <div className={styles.span__text}>
            <span>
              Hiện nay,{" "}
              <span className={styles.span__title}>Galaxy Cinema</span> đang
              ngày càng phát triển hơn nữa với các chương trình đặc sắc, các
              khuyến mãi hấp dẫn, đem đến cho khán giả những bộ phim bom tấn của
              thế giới và Việt Nam nhanh chóng và sớm nhất.
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default Information;

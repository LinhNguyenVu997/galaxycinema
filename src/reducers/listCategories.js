let initialState = {
  categoryList: [
    {
      idCategory: "id16846453dw1561dav",
      name: "PHIM ĐANG CHIẾU",
      link: "phim-dang-chieu"
    },
    {
      idCategory: "id665151s16511s84861f",
      name: "PHIM SẮP CHIẾU",
      link: "phim-sap-chieu"
    }
  ],
  movieItemList: [
    {
      idCategory: "id16846453dw1561dav",
      idMovie: "id65151151wd651sd2",
      image: "https://galaxycine.vn/media/2019/9/3/450x300_1567492110333.jpg",
      imageThumnails:
        "https://galaxycine.vn/media/2019/9/3/300x450_1567492105286.jpg",
      popularity: "hot",
      name: "NGƯỜI LẠ ƠI",
      rating: 4,
      numberLike: 200,
      trailer: "https://www.youtube.com/watch?v=3tTNaQiVaac",
      timeFilm: "88 phút",
      directors: "Trương Chí Bình",
      producer: "Red Film",
      nation: "Việt Nam",
      categoryFilm: "Tình cảm, Hài, Giả tưởng",
      character: "Karik, Thùy Anh, Trương Thế Vinh, Huy Khánh",
      dateTime: "12/09/2019",
      content:
        "Đăng DJ - chàng bad boy không thích gắn bó lâu dài với bất cứ cô nàng nào. Một ngày nọ, xuất hiện cô gái xinh đẹp muốn tiếp cận anh để thực hiện nhiệm vụ giải cứu hành tinh của mình. Giữa hai người lại có mối liên hệ tình cảm kéo dài hàng ngàn năm, liệu sự thật là như thế nào?"
    },
    {
      idCategory: "id16846453dw1561dav",
      idMovie: "idfw151fw31fw35f",
      image: "https://galaxycine.vn/media/2019/7/18/enzo4_1563437185299.jpg",
      imageThumnails:
        "https://galaxycine.vn/media/2019/7/18/enzo3_1563437160125.jpg",
      popularity: "hot",
      name: "THE ART OF RACING IN THE RAIN",
      rating: 3,
      numberLike: 100,
      trailer: "https://www.youtube.com/watch?v=2ae5UJkfiMQ",
      timeFilm: "110 phút",
      directors: "Stephen Gax",
      producer: "20th Century Fox",
      nation: "Mỹ",
      categoryFilm: "Tình cảm, Hài",
      character: "Kevin Costner, Amanda Seyfried, Milo Ventimiglia",
      dateTime: "13/09/2019",
      content:
        "CUỘC ĐỜI PHI THƯỜNG CỦA CHÚ CHÓ ENZO là câu chuyện đầy cảm động được kể lại bởi một chú chó có tên Enzo (lồng tiếng bởi Kevin Costler). Thông qua mối quan hệ giữa chủ của mình Denny (Milo Ventimiglia) một tay đua Công Thức Một đầy tham vọng, Enzo đã có được cái nhìn rất sâu sắc về cuộc sống của con người cũng như hiểu rằng các kiến thức về đua xe có thể áp dụng phần nào trước những “bước ngoặc” mà chúng ta phải vượt qua. Bên cạnh đó, bộ phim còn nói về câu chuyện tình yêu giữa Denny với vợ anh ấy – Eve (Amanda Seyfried), với cô con gái nhỏ Zoe (Ryan Keira Armstrong), và với người bạn thân nhất trên đời, Enzo."
    },

    {
      idCategory: "id16846453dw1561dav",
      idMovie: "id6513189ds13e",
      image:
        "https://galaxycine.vn/media/2019/9/9/450x300-rmrlee_1567996583483.jpg",
      imageThumnails:
        "https://galaxycine.vn/media/2019/9/9/300x450-mrlee_1567996576494.jpg",
      popularity: "hot",
      name: "CHEER UP, MISTER LEE",
      rating: 3,
      numberLike: 100,
      trailer: "https://www.youtube.com/watch?v=J6-d4bkn7k0",
      timeFilm: "111 phút",
      directors: "Lee Gye-Byeok",
      producer: "Next Entertainment World",
      nation: "Hàn Quốc",
      categoryFilm: "Hài, Gia Đình",
      character: "Cha Seung-Won, Um Chae-Young, Park Hae-Joon, Kim Hye-Ok",
      dateTime: "13/09/2019",
      content:
        "Cheol-Soo là một anh chàng giỏi việc dùng cơ bắp hơn đầu óc. Một ngày kia, Saet-Byeol - đứa con gái ruột của anh bỗng nhiên xuất hiện. Cô bé đang mắc căn bệnh hiểm nghèo, Cheo-Soo đã bảo vệ cô bé trong suốt chuyến hành trình hài hước."
    },
    {
      idCategory: "id16846453dw1561dav",
      idMovie: "id5e3g31eg651ds3v",
      image:
        "https://galaxycine.vn/media/2019/8/29/450x300-1_1567050764001.jpg",
      imageThumnails:
        "https://galaxycine.vn/media/2019/8/28/deadtective---tdtt---final-poster-300x450_1566959826719.jpg",
      popularity: "hot",
      name: "DEADTECTIVES",
      rating: 5,
      numberLike: 110,
      trailer: "https://www.youtube.com/watch?v=VL6OBZ-jY7o",
      timeFilm: "89 phút",
      directors: "Tone Weet",
      producer: "Shudder",
      nation: "Mỹ",
      categoryFilm: "Hài, Kinh Dị",
      character: "  Martha Higareda, Chris Geere, Tina Ivlev",
      dateTime: "13/09/2019",
      content:
        "Phim kể về một nhóm những người chuyên điều tra tìm hiểu về các hiện tượng siêu nhiên để dàn dựng show truyền hình thực tế nhằm thu hút người xem. Trong chuyến đi đến Mexico, họ đã đối mặt với những điều kinh dị thực sự! Xem thêm tại: https://www.galaxycine.vn/dat-ve/deadtectives"
    },
    {
      idCategory: "id16846453dw1561dav",
      idMovie: "id5e3g31eg651ds3v",
      image:
        "https://galaxycine.vn/media/2019/8/29/450x300-1_1567050764001.jpg",
      imageThumnails:
        "https://galaxycine.vn/media/2019/8/28/deadtective---tdtt---final-poster-300x450_1566959826719.jpg",
      popularity: "hot",
      name: "DEADTECTIVES",
      rating: 5,
      numberLike: 110,
      trailer: "https://www.youtube.com/watch?v=VL6OBZ-jY7o",
      timeFilm: "89 phút",
      directors: "Tone Weet",
      producer: "Shudder",
      nation: "Mỹ",
      categoryFilm: "Hài, Kinh Dị",
      character: "  Martha Higareda, Chris Geere, Tina Ivlev",
      dateTime: "13/09/2019",
      content:
        "Phim kể về một nhóm những người chuyên điều tra tìm hiểu về các hiện tượng siêu nhiên để dàn dựng show truyền hình thực tế nhằm thu hút người xem. Trong chuyến đi đến Mexico, họ đã đối mặt với những điều kinh dị thực sự! Xem thêm tại: https://www.galaxycine.vn/dat-ve/deadtectives"
    },
    {
      idCategory: "id16846453dw1561dav",
      idMovie: "id7ge2165ddg1e53g",
      image: "https://galaxycine.vn/media/2019/8/15/untitled_1565862309202.png",
      imageThumnails:
        "https://galaxycine.vn/media/2019/8/30/main_1567153180554.jpg",
      popularity: "hot",
      name: "LOVE BATLE",
      rating: 2,
      numberLike: 50,
      trailer: "https://www.youtube.com/watch?v=MIk0rvw88Kg",
      timeFilm: "90 phút",
      directors: "Micah Gallo",
      producer: "Hacienda Film Co.",
      nation: "Thái Lan",
      categoryFilm: "Tình cảm",
      character: "  Bruce Davison, Elizabeth Roberts",
      dateTime: "13/09/2019",
      content:
        "Lấy cảm hứng từ một bài thơ cổ xưa, gia đình nọ chuyển tới một trang viên vắng vẻ và nhanh chóng trở thành mục tiêu săn đuổi của con nhện khổng lồ bất tử! Xem thêm tại: https://www.galaxycine.vn/dat-ve/itsy-bitsy"
    },
    {
      idCategory: "id16846453dw1561dav",
      idMovie: "id7ge165g1grffrhe53g",
      image: "",
      imageThumnails:
        "https://galaxycine.vn/media/2019/9/4/copy-of-mainposter_1567564797348.jpg",
      popularity: "",
      name: "SỨ MỆNH NỘI GIÁN 2",
      rating: 2,
      numberLike: 50,
      trailer: "https://www.youtube.com/watch?v=FuxuwS6zTHQ",
      timeFilm: "100 phút",
      directors: "Jazz Boon",
      producer: "Shaw Brothers",
      nation: "Hồng Koong",
      categoryFilm: "Hành động",
      character: "Cổ Thiên Lạc, Trương Gia Huy, Ngô Trấn Vũ",
      dateTime: "6/09/2019",
      content:
        "Nội dung phim khắc họa cuộc đối đầu nghẹt thở giữa cảnh sát và tội phạm. Sự xuất hiện của Tam Đại Ảnh Đế: Cổ Thiên Lạc, Trương Gia Huy, Ngô Trấn Vũ hứa hẹn sẽ đem đến những pha hành động mãn nhãn. Ai là cảnh sát thật? Ai là nội gián? Lời giải đáp nằm trong Sứ Mệnh Nội Gián 2!"
    },
    {
      idCategory: "id16846453dw1561dav",
      idMovie: "id7ge16d25g1grrfehe53g",
      image: "",
      imageThumnails:
        "https://galaxycine.vn/media/2019/9/4/300x450-shin_1567567532078.jpg",
      popularity: "",
      name: "CRAYON SHIN-CHAN: HONEYMOON HURICANE - THE LOST HIROSHI",
      rating: 4,
      numberLike: 250,
      trailer: "https://www.youtube.com/watch?v=5imlskILhZw",
      timeFilm: "100 phút",
      directors: "Masakazu Hashimoto",
      producer: "Toho Company, Ltd.",
      nation: "Nhật Bản",
      categoryFilm: "Hoạt hình, Hành động, Phiêu lưu",
      character: "Yumiko Kobayashi, Toshiyuki Morikawa, Miki Narahashi",
      dateTime: "6/09/2019",
      content:
        "Chuyến du lịch rẻ tiền đến Australia của gia đình Nohara đã gặp phải sự cố, Misae, Hiroshi và những đứa trẻ vô tình vướng vào một phi vụ thám hiểm. Hiroshi là người liên quan trực tiếp đến rắc rối lần này, ông bị bắt cóc và các thành viên trong gia đình phải tìm cách giải cứu Hiroshi đồng thời đối đầu với bọn săn lùng kho báu nguy hiểm."
    },
    {
      idCategory: "id16846453dw1561dav",
      idMovie: "id7ge16djkb4554fehe53g",
      image: "",
      imageThumnails:
        "https://galaxycine.vn/media/2019/5/10/60319211-2717354628279099-6146474517020540928-n_1557457630235.jpg",
      popularity: "",
      name: "GÃ HỀ MA QUÁI 2",
      rating: 4,
      numberLike: 250,
      trailer: "https://www.youtube.com/watch?v=3F02bGebs1w",
      timeFilm: "167 phút",
      directors: "Andy Muschietti",
      producer: "New Line Cinema",
      nation: "Mỹ",
      categoryFilm: "Kinh dị",
      character: "Jessica Chastain, James McAvoy, Bill Skarsgard",
      dateTime: "7/09/2019",
      content:
        "Sau khi tống khứ tên hề Pennywise khỏi thị trấn,  những thành viên nhóm Losers Club nay đã trưởng thành và chuyển đi xa. Và rồi, một cuộc điện thoại bất ngờ khiến họ quay trở lại!.Kết thúc phần một, nhóm Loser Club gồm bảy người bạn Bill, Ben, Beverly, Richie, Mike, Eddie, Stanley… đã may mắn hạ được tên hề độc ác chuyên bắt cóc trẻ con Pennywise. Thế nhưng, Loser Club biết rằng gã hề sẽ còn quay trở lại. Họ cùng lập lời thề nếu Pennywise xuất hiện lần nữa, tất cả phải trở về để tiêu diệt hắn.Và hai mươi bảy năm đã trôi qua. Những cô cậu bé ngày nào nay đã trưởng thành, trải nghiệm hết nửa đời người. Loser Club vẫn theo lời hứa trở về thị trấn quê hương. Thế nhưng, mọi thứ đã không còn như trước. Nhóm bạn xa cách quá lâu, chẳng gắn bó như xưa. Nỗi sợ hãi trong họ cũng nhiều hơn, khi tất cả đã xấp xỉ bốn mươi. Và quan trọng nhất, gã hề đã mạnh gấp bội. "
    },
    {
      idCategory: "id16846453dw1561dav",
      idMovie: "id7ge16d25g1grdkrfehe53g",
      image: "",
      imageThumnails:
        "https://galaxycine.vn/media/2019/9/3/300x450_1567485190509.jpg",
      popularity: "",
      name: "KHOẢN VAY SINH TỬ",
      rating: 4,
      numberLike: 150,
      trailer: "https://www.youtube.com/watch?v=5kMegNujI48",
      timeFilm: "105 phút",
      directors: "Koldo Serra",
      producer: "Filmax Entertainment",
      nation: "Tây Ban Nha",
      categoryFilm: "Tội phạm, Ly kì",
      character: "  Emma Suárez, Nathalie Poza",
      dateTime: "6/09/2019",
      content:
        "Raquel Crespo là một phụ nữ với chỉ số IQ trên 160, cô đang phải xoay sở khoản vay 35.000 Euro tại một ngân hàng để chuộc lại đứa con gái của mình. Mọi việc trở nên phức tạp hơn khi ngay trong lúc giao dịch sắp hoàn thành thì một nhóm cướp ngân hàng nổ súng xông vào. Bằng sự thông minh của mình, Raquel lên kế hoạch để tự thoát thân, đồng thời những bí ẩn đằng sau vụ cướp cũng được hé lộ..."
    },
    {
      idCategory: "id16846453dw1561dav",
      idMovie: "id7dgrgdkrfehe53g",
      image: "",
      imageThumnails:
        "https://galaxycine.vn/media/2019/8/21/300x450_1566357768603.jpg",
      popularity: "",
      name: "ANH THẦY NGÔI SAO",
      rating: 4,
      numberLike: 300,
      trailer: "https://www.youtube.com/watch?v=_JDprRNEV8E",
      timeFilm: "101 phút",
      directors: "Đức Thịnh",
      producer: "CJ E&M",
      nation: "Việt Nam",
      categoryFilm: "Hài",
      character: "Huyme, Miu Lê, Đức Thịnh",
      dateTime: "30/08/2019",
      content:
        "Tạm gác lai giấc mộng làm ngôi sao, Hoàng buộc phải ra đảo làm thầy giáo dạy nhạc theo sự chỉ đạo của cấp trên. Từ khó chịu đến yêu mến, chàng trai trẻ dần tìm cách thích nghi với cuộc sống thiếu thốn trên đảo cũng như người dân nơi đây. Tuy nhiên, cũng đúng lúc này, cơ hội trở thành ca sĩ của Hoàng đã đến, liệu anh sẽ lựa chọn như thế nào?"
    },
    {
      idCategory: "id16846453dw1561dav",
      idMovie: "id7lnb3ehe53g",
      image: "",
      imageThumnails:
        "https://galaxycine.vn/media/2019/8/7/300x450-nnbb-mainposter-tall_1565147306886.jpg",
      popularity: "",
      name: "NGÔI NHÀ BƯƠM BƯỚM",
      rating: 5,
      numberLike: 500,
      trailer: "https://www.youtube.com/watch?v=i86xJQ4FzDo",
      timeFilm: "105 phút",
      directors: "Huỳnh Tuấn Anh",
      producer: "Vimax Films",
      nation: "Việt Nam",
      categoryFilm: "Hài",
      character:
        "NSUT Thành Lộc, Hoàng Yến Chibi, Liên Bỉnh Phát, Hồng Đào, Quang Minh",
      dateTime: "30/08/2019",
      content:
        "Khó khăn lăm Mai mới thuyết phục được bố mẹ từ ngoài Bắc vào Nam để gặp gỡ gia đình của Hoàng - người yêu cô. Cứ ngỡ mọi chuyện sẽ thuận buồm xuôi gió nhưng không, những thân phận đặc biệt trong gia đình Hoàng cũng như sự khác biệt về tư tưởng, bối cảnh đã làm mọi chuyện trở nên vô cùng rắc rối"
    },
    {
      idCategory: "id16846453dw1561dav",
      idMovie: "id7lnb3ehedgrb53g",
      image: "",
      imageThumnails:
        "https://galaxycine.vn/media/2019/7/18/dieubomechuake_1563419427351.jpg",
      popularity: "",
      name: "ROMANG",
      rating: 4,
      numberLike: 500,
      trailer: "https://www.youtube.com/watch?v=-04GH8l0wdc",
      timeFilm: "112 phút",
      directors: "Lee Chang Geun",
      producer: "CJ Entertainment",
      nation: "Hàn Quốc",
      categoryFilm: "Tâm lý, Gia đình",
      character: "Lee Soon Jae, Jung Young Sook",
      dateTime: "26/08/2019",
      content:
        "Sau 45 năm chung sống, cặp vợ chồng già Cho Nam Bong và Lee Mae Ja cùng mắc căn bệnh mất trí nhớ. Nhưng khi ký ức dần mất đi, cũng là lúc tình yêu và ước mơ từng bị bỏ quên của họ dần được nhen nhóm lại. Xem thêm tại: https://www.galaxycine.vn/dat-ve/romang"
    },
    {
      idCategory: "id665151s16511s84861f",
      idMovie: "id7ltlklrb53g",
      image: "https://galaxycine.vn/media/2019/9/12/450x300_1568282812114.jpg",
      imageThumnails:
        "https://galaxycine.vn/media/2019/9/12/300x450_1568282797731.jpg",
      popularity: "new",
      name: "SÁT THỦ ANNA",
      rating: 4,
      numberLike: 500,
      trailer: "https://www.youtube.com/watch?v=UNxKwEt6utA",
      timeFilm: "112 phút",
      directors: "Luc Besson",
      producer: "Europa Cord",
      nation: "Mỹ",
      categoryFilm: "Hành động, ly kì",
      character: "Sasha Luss, Helen Mirren, Luke Evans, Cillian Murphy",
      dateTime: "26/09/2019",
      content:
        "Anna là một cô gái xinh đẹp nhưng phải làm vợ của một gã đàn ông vũ phu. Cô quyết định trở thành một sát thủ dưới vỏ bọc người mẫu để đổi lấy cuộc sống tự do sau khi hoàn thành nhiệm vụ."
    },
    {
      idCategory: "id665151s16511s84861f",
      idMovie: "id7ltlffklrb53g",
      image:
        "https://galaxycine.vn/media/2019/8/29/yesterday-450x300_1567051113700.jpg",
      imageThumnails:
        "https://galaxycine.vn/media/2019/8/26/poster-nhq3-300x450_1566802251640.jpg",
      popularity: "new",
      name: "YESTERDAY",
      rating: 1,
      numberLike: 10,
      trailer: "https://www.youtube.com/watch?v=GNlGhBl_tvE",
      timeFilm: "142 phút",
      directors: "Danny Boyle",
      producer: "Etalon Film",
      nation: "Anh",
      categoryFilm: "Hài, Giả tưởng",
      character: "Himesh Patel, Lily James",
      dateTime: "28/09/2019",
      content:
        "Sẽ ra sao nếu một ngày tỉnh dậy, bạn phát hiện cả thế giới – trừ bạn – không hề biết đến The Beatles và âm nhạc tuyệt vời của họ? Đó chính là câu chuyện của anh chàng Jack trong Yesterday.."
    },
    {
      idCategory: "id665151s16511s84861f",
      idMovie: "id7ltlffkl12rb53g",
      image:
        "https://galaxycine.vn/media/2019/7/5/ad-astra-banner-campb-vie_1562299786207.jpg",
      imageThumnails:
        "https://galaxycine.vn/media/2019/7/5/ad-astra-poster-campb-vie_1562299782871.jpg",
      popularity: "new",
      name: "GIẢI MÃ BÍ ẨN NGÂN HÀ",
      rating: 5,
      numberLike: 101,
      trailer: "https://www.youtube.com/watch?v=GNlGhBl_tvE",
      timeFilm: "142 phút",
      directors: "Danny Boyle",
      producer: "Bona Film Group, 20th Century Fox",
      nation: "Mỹ",
      categoryFilm: "Phiêu lưu, Tâm lí, Ly kì",
      character: "Himesh Patel, Lily James",
      dateTime: "28/09/2019",
      content:
        "Tài tử hạng A Brad Pitt tham gia bộ phim khoa học viễn tưởng do đạo diễn James Gray sản xuất. Phim sẽ mang lại những trải nghiệm thị giác choáng ngợp khi được phụ trách bởi Hoyte Van Hoytema- đạo diễn hình ảnh nổi tiếng với Interstellar. .."
    },
    {
      idCategory: "id665151s16511s84861f",
      idMovie: "id7ltlfdf12rb53g",
      image:
        "https://galaxycine.vn/media/2019/9/4/450x300-natra_1567571852814.jpg",
      imageThumnails:
        "https://galaxycine.vn/media/2019/9/4/300x450-natra_1567571844467.jpg",
      popularity: "new",
      name: "NA TRA - MA ĐỒNG GIÁNG THẾ",
      rating: 5,
      numberLike: 101,
      trailer: "https://www.youtube.com/watch?v=ElWKU1jei9M",
      timeFilm: "142 phút",
      directors: "Yu Yang",
      producer: "CoCo Cartoon",
      nation: "Trung Quốc",
      categoryFilm: "Phiêu lưu, Hoạt hình, Ly kì",
      character: "Yanting Lü, Joseph, Mo Han",
      dateTime: "28/09/2019",
      content:
        "Tương truyền có một viên ngọc hội tụ tinh hoa đất trời đã được Nguyên Thủy Thiên Tôn tách làm hai. Một viên Linh Châu khai sinh ra vị anh hùng cứu thế và viên ngọc Ma Hoàn sẽ tạo ra tên Ma Vương gây hại cho nhân gian. Liệu Na Tra có thể tiêu diệt được tên ác ma để đem lại bình yên cho người dân?.."
    },
    {
      idCategory: "id665151s16511s84861f",
      idMovie: "id7ltlf44df12rb53g",
      image: "https://galaxycine.vn/media/2019/9/12/450x300_1568258904126.jpg",
      imageThumnails:
        "https://galaxycine.vn/media/2019/9/12/poster-lacm7_1568280248143.jpg",
      popularity: "new",
      name: "LONG ẤN CƠ MẬT",
      rating: 5,
      numberLike: 104,
      trailer: "https://www.youtube.com/watch?v=picgxMGG3lc",
      timeFilm: "145 phút",
      directors: "Oleg Stepchenko",
      producer: "China Film Group Corporation",
      nation: "Trung Quốc",
      categoryFilm: "Phiêu lưu, Giả tưởng, Ly kì",
      character: "Thành Long, Jason Flemyng, Arnold Schwarzenegger",
      dateTime: "28/09/2019",
      content:
        "Nhà du hành người Anh Jonathan Green với chuyến hành trình đến với đất nước Trung Hoa đã đối mặt với những điều kỳ lạ và phải đối đầu với những bật thầy võ thuật, thậm chí là vua của tất cả loài rồng - Long Vương. Liệu còn bí ẩn gì đang chờ đón anh ở phía trước?.."
    },
    {
      idCategory: "id665151s16511s84861f",
      idMovie: "id7ltlf44dfdd12rb53g",
      image:
        "https://galaxycine.vn/media/2019/8/15/450x300-chuan_1565854357326.jpg",
      imageThumnails:
        "https://galaxycine.vn/media/2019/8/15/300x450-chuan_1565851383102.jpg",
      popularity: "new",
      name: "SIÊU QUẬY CÓ BẦU",
      rating: 5,
      numberLike: 104,
      trailer: "https://www.youtube.com/watch?v=AB_r9CNhMew",
      timeFilm: "145 phút",
      directors: "Nguyễn Quốc Duy",
      producer: "TP Entertainment",
      nation: "Việt Nam",
      categoryFilm: "Tình Cảm, Hài",
      character: "Đỗ An, Han Sara, Đức Thịnh, Thanh Thúy",
      dateTime: "28/09/2019",
      content:
        'Hạ An là một "siêu quậy học đường" nhưng lại có thành tích học tập cực tốt. Một ngày nọ, khi phát hiện mình có thai, cô nàng đành phải cố gắng giành học bổng du học để không bị đàm tếu, thế nhưng nhiều chuyện không như ý xảy ra khiến Hạ An nảy sinh ý định tự tử. Số phận của Hạ An sẽ ra sao? Sự xuất hiện tình cờ của thầy Phong liệu có giúp được cô bé không?.'
    },
    {
      idCategory: "id665151s16511s84861f",
      idMovie: "id7lhhgyjyy4b53g",
      image: "",
      imageThumnails:
        "https://galaxycine.vn/media/2019/8/27/300x450_1566893842719.jpg",
      popularity: "",
      name: "TRỜI SÁNG RỒI, TA NGỦ ĐI THÔI",
      rating: 5,
      numberLike: 214,
      trailer: "https://www.youtube.com/watch?v=-KahAxTz8gY",
      timeFilm: "145 phút",
      directors: "Nguyễn Quốc Duy",
      producer: "TP Entertainment",
      nation: "Việt Nam",
      categoryFilm: "Tình Cảm, Hài",
      character: "Hà Quốc Hoàng, Trần Lê Thúy Vy",
      dateTime: "28/09/2019",
      content:
        "Câu chuyện về những người trẻ được kể bằng chất nhạc Indie mộc mạc, với bối cảnh Sài Gòn quen thuộc, khán giả sẽ được dẫn dắt vào giấc mộng thanh xuân của các nhân vật, được đắm chìm trong cung bậc cảm xúc của tuổi trẻ. Hãy để âm nhạc kể câu chuyện dành riêng cho bạn."
    },
    {
      idCategory: "id665151s16511s84861f",
      idMovie: "id7lhUHFy4b53g",
      image: "",
      imageThumnails:
        "https://galaxycine.vn/media/2019/8/29/mv5bngvjnwi4zgutnze0ms00ytjmlwe0zdctn2ziytk2ymi3ntyyxkeyxkfqcgdeqxvymtkxnjuynq--v1-sy1000-cr0-0-674-1000-al-_1567067407634.jpg",
      popularity: "",
      name: "JOKER",
      rating: 5,
      numberLike: 2114,
      trailer: "https://www.youtube.com/watch?v=Wh28HYiM80Y",
      timeFilm: "145 phút",
      directors: "Todd Phillips",
      producer: "DC Comics",
      nation: "Mỹ",
      categoryFilm: "Kinh dị, Tội phạm",
      character: "Joaquin Phoenix, Robert De Niro",
      dateTime: "28/09/2019",
      content:
        'Lấy bối cảnh thành phố Gotham những năm 80, Arthur Fleck lớn lên trong sự cô đơn, luôn phải cười vì lời dạy thuở nhỏ của mẹ. Nghèo khó cơ cực nên anh ta phải làm chú hề mua vui trên phố. Thế nhưng, dù khuôn mặt chú hề luôn cười nhưng nội tâm Arthur lại có vô vàn nỗi đau khi thương xuyên bị chà đạp, khinh khi. Cuối cùng, hắn trở nên điên loạn và trở thành "Hoàng tử tội phạm" Joker.'
    },
    {
      idCategory: "id665151s16511s84861f",
      idMovie: "id7lhUHFddfy4b53g",
      image: "",
      imageThumnails:
        "https://galaxycine.vn/media/2019/8/30/25-t6-1sht-campb-vietnam_1567154352835.jpg",
      popularity: "",
      name: "KẺ HỦY DIỆT - VẬN MỆNH ĐEN TỐI",
      rating: 5,
      numberLike: 2114,
      trailer: "https://www.youtube.com/watch?v=1dpEbaEk-Dg",
      timeFilm: "145 phút",
      directors: "Tim Miller",
      producer: "Paramount Pictures",
      nation: "Mỹ",
      categoryFilm: "Hành động, Giả tưởng",
      character: "Arnold Schwarzenegger, Linda Hamilton, Mackenzie Davis",
      dateTime: "28/09/2019",
      content:
        "Terminator: Dark Fate hứa hẹn là phần phim chắc chắn sẽ khiến các fan hâm mộ thỏa mãn bởi những pha hành động cực kỳ chất lượng. Cùng với đó, sự trở lại của đạo diễn James Cameron, Linda Hamilton và Arnold Schwarzenegge càng đem đến nhiều hơn sự kích thích và phấn khích."
    },
    {
      idCategory: "id665151s16511s84861f",
      idMovie: "id7lhUHFddd2fy4b53g",
      image: "",
      imageThumnails:
        "https://galaxycine.vn/media/2019/7/11/mv5bodi3nmjhzmutmwvlmc00zwu5ltk0owmtzge3ndrhyzawnjk5xkeyxkfqcgdeqxvymtayote2odg0--v1-sy1000-sx700-al-_1562830324471.jpg",
      popularity: "",
      name: "HOA MỘC LAN",
      rating: 5,
      numberLike: 2114,
      trailer: "https://www.youtube.com/watch?v=Dh6_AGKU47c&t=",
      timeFilm: "141 phút",
      directors: "Niki Caro",
      producer: "Walt Disney Pictures",
      nation: "Mỹ",
      categoryFilm: "Hành động, Giả tưởng",
      character: "Lưu Diệc Phi, Củng Lợi, Chân Tử Đan",
      dateTime: "28/10/2019",
      content:
        "Là một cô gái hiếu thảo, Hoa Mộc Lan thay cha mình tòng quân để bảo vệ đất nước. Phim được Disney chuyển thể từ tác phẩm hoạt hình ăn khách năm 1998. Nữ diễn viên nổi tiếng Lưu Diệc Phi đảm nhận vai diễn Mộc Lan.."
    },
    {
      idCategory: "id665151s16511s84861f",
      idMovie: "id7lhUH1Fddd2fy4b53g",
      image: "",
      imageThumnails:
        "https://galaxycine.vn/media/2019/9/13/300x450_1568346776917.jpg",
      popularity: "",
      name: "ANH TRAI YÊU QUÁI",
      rating: 3,
      numberLike: 114,
      trailer: "https://www.youtube.com/watch?v=Kmvret7tWcM&t=11s",
      timeFilm: "141 phút",
      directors: "Vũ Ngọc Phượng",
      producer: "HK Film",
      nation: "Việt Nam",
      categoryFilm: "Hài, Tâm lí, Gia đình",
      character: "Kiều Minh Tuấn, Isaac, Diệu Nhi, Phi Phụng",
      dateTime: "28/10/2019",
      content:
        "Là một cô gái hiếu thảo, Hoa Mộc Lan thay cha mình tòng quân để bảo vệ đất nước. Phim được Disney chuyển thể từ tác phẩm hoạt hình ăn khách năm 1998. Nữ diễn viên nổi tiếng Lưu Diệc Phi đảm nhận vai diễn Mộc Lan.."
    },
    {
      idCategory: "id665151s16511s84861f",
      idMovie: "id7lhUH1Fddd2fyd4b53g",
      image: "",
      imageThumnails:
        "https://galaxycine.vn/media/2019/9/13/300x450_1568347546039.png",
      popularity: "",
      name: "PHÁP SƯ MÙ: AI CHẾT GIƠ TAY",
      rating: 3,
      numberLike: 114,
      trailer: "https://www.youtube.com/watch?v=puy9Wba_1-A",
      timeFilm: "141 phút",
      directors: "Lý Minh Thắng, Huỳnh Lập",
      producer: "HK Film",
      nation: "Việt Nam",
      categoryFilm: "Hài, Tâm lí, Gia đình",
      character: "Huỳnh Lập, Việt Hương, Đại Nghĩa, NSND Ngọc Giàu",
      dateTime: "28/11/2019",
      content:
        "Bộ phim điện ảnh Pháp Sư Mù: Ai Chết Giơ tay sẽ tái hiện hành trình đi tìm lại ánh sáng cho đôi mắt của Tinh Lâm (Huỳnh Lập) và những câu chuyện nhân quả đan xen mà Tinh Lâm phải trải qua để thấu hiểu rõ hơn về cuộc đời. Cùng với Thụy Du (Quang Trung) - chàng trai có khả năng cho các linh hồn người chết nhập vào, và Liên Thanh (Hạnh Thảo) - cô gái có khả năng nhìn thấy linh hồn, họ trở thành bộ ba ăn ý. Cả nhóm cùng giải cứu những linh hồn chưa siêu thoát cũng như chữa trị cho đôi mắt của Tinh Lâm."
    }
  ]
};
const listCategories = (state = initialState, action) => {
  return state;
};
export default listCategories;

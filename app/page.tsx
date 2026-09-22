import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  Bot,
  CalendarDays,
  Check,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Gift,
  Layers3,
  Map,
  MonitorPlay,
  MousePointerClick,
  Play,
  Rocket,
  Sparkles,
  Target,
  Users,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";

const imageRoot = "/images/chu-bao-linh";

const painPoints = [
  "Bạn muốn bắt đầu Affiliate nhưng chưa biết nên chọn sản phẩm, nội dung hay công cụ trước.",
  "Bạn đã xem nhiều hướng dẫn nhưng mọi thứ vẫn rời rạc, khó ghép thành một quy trình hoàn chỉnh.",
  "Bạn ngại công nghệ, phễu, automation và không biết đâu là phần thật sự cần thiết.",
  "Bạn muốn có một lộ trình thực hành rõ ràng để tự kiểm chứng hướng đi của mình.",
];

const modules = [
  {
    day: "NGÀY 1",
    index: "01",
    title: "Nền tảng mô hình Affiliate & cách chọn hướng triển khai",
    body: "Hiểu cách Affiliate tạo giá trị, nhận diện các thành phần của hệ thống và chọn hướng đi phù hợp với nguồn lực hiện có.",
    items: ["Bản đồ tổng quan mô hình", "Tiêu chí chọn sản phẩm/ngách", "Những rủi ro cần tránh khi bắt đầu"],
    icon: Map,
  },
  {
    day: "NGÀY 1",
    index: "02",
    title: "Xây hệ thống thu hút & nuôi dưỡng khách hàng",
    body: "Xác định khách hàng phù hợp, xây thông điệp có giá trị và tổ chức hành trình nội dung để người quan tâm hiểu vấn đề.",
    items: ["Chân dung khách hàng", "Trụ cột nội dung", "Hành trình từ người lạ đến người quan tâm"],
    icon: Target,
  },
  {
    day: "NGÀY 1",
    index: "03",
    title: "Hậu trường một quy trình Affiliate được vận hành",
    body: "Quan sát cách công cụ, nội dung và điểm chuyển đổi kết nối với nhau — phần nào tự làm, dùng mẫu hoặc tự động hóa.",
    items: ["Sơ đồ công cụ", "Checklist triển khai", "Quy trình kiểm tra từng bước"],
    icon: Layers3,
  },
  {
    day: "NGÀY 2",
    index: "04",
    title: "Lắp ghép phễu, nội dung & điểm chuyển đổi",
    body: "Đưa các thành phần đã chuẩn bị vào một hành trình liền mạch, từ lúc khách hàng tiếp cận nội dung đến khi hành động.",
    items: ["Khung thương hiệu cá nhân", "Hệ thống nội dung thu hút", "Trang và điểm chuyển đổi"],
    icon: MousePointerClick,
  },
  {
    day: "NGÀY 2",
    index: "05",
    title: "Chuẩn hóa quy trình & lập kế hoạch phát triển",
    body: "Biến những gì đã làm thành checklist có thể tái sử dụng, xác định chỉ số theo dõi và lập kế hoạch hành động tiếp theo.",
    items: ["Quy trình vận hành lặp lại", "Bộ chỉ số theo dõi", "Kế hoạch hành động 30 ngày"],
    icon: BarChart3,
  },
];

const gifts = [
  { title: "Bộ chiến lược triển khai theo tuần", text: "Khung công việc giúp bạn biết cần ưu tiên điều gì trong từng giai đoạn.", icon: CalendarDays, image: "travel-01.jpg" },
  { title: "Sổ tay 100 ý tưởng nội dung", text: "Nguồn gợi ý để bắt đầu viết và thử nghiệm thông điệp phù hợp với khách hàng.", icon: BookOpenCheck, image: "temple.png" },
  { title: "Bản đồ phễu chuyển đổi", text: "Mẫu trực quan để nối traffic, nội dung, điểm cân nhắc và hành động.", icon: Map, image: "trainer.png" },
  { title: "Checklist công cụ AI", text: "Danh sách công cụ và cách lựa chọn theo đúng nhu cầu, tránh dùng quá nhiều.", icon: Bot, image: "program-badge.jpg" },
  { title: "Bộ khung nội dung chuyển đổi", text: "Các cấu trúc bài viết và lời kêu gọi hành động để bạn tùy chỉnh.", icon: WandSparkles, image: "wellness.png" },
  { title: "Kịch bản chăm sóc khách hàng", text: "Khung hội thoại giúp duy trì sự rõ ràng và nhất quán trong quá trình tư vấn.", icon: Users, image: "networking.jpg" },
  { title: "Phiên hỏi đáp cùng cộng đồng", text: "Không gian cùng phân tích vướng mắc và nhìn lại cách triển khai thực tế.", icon: MonitorPlay, image: "community.png" },
  { title: "Lộ trình hành động 30 ngày", text: "Một bản kế hoạch gọn để tiếp tục thực hành sau khi kết thúc thử thách.", icon: Rocket, image: "running.jpg" },
];

const before = [
  "Chưa hiểu rõ Affiliate hoạt động như thế nào.",
  "Không biết bắt đầu từ sản phẩm, nội dung hay công cụ.",
  "Làm nhiều hoạt động rời rạc, thiếu hành trình khách hàng.",
  "Ngại công nghệ và sợ thiết lập sai.",
  "Không biết dùng chỉ số nào để đánh giá tiến độ.",
];

const after = [
  "Hiểu bản đồ tổng thể của một hệ thống Affiliate.",
  "Có lựa chọn rõ hơn về khách hàng, sản phẩm và thông điệp.",
  "Có bộ khung nội dung và phễu để tiếp tục hoàn thiện.",
  "Biết công cụ nào cần dùng và bước nào cần ưu tiên.",
  "Có kế hoạch hành động cụ thể sau chương trình.",
];

function Cta({ compact = false, dark = false }: { compact?: boolean; dark?: boolean }) {
  return (
    <a className={`cta-button ${compact ? "cta-compact" : ""} ${dark ? "cta-dark" : ""}`} href="#dang-ky">
      <span>THAM GIA THỬ THÁCH 2 NGÀY</span>
      <small>Nhấn để xem thông tin giữ chỗ</small>
      <ArrowRight aria-hidden="true" size={24} />
    </a>
  );
}

function DownCue() {
  return (
    <a aria-label="Xem nội dung tiếp theo" className="down-cue" href="#chuong-trinh">
      <ArrowDown aria-hidden="true" size={24} />
    </a>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow?: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <CalendarDays aria-hidden="true" size={20} />
        <span>THỬ THÁCH THỰC HÀNH 2 NGÀY · AFFILIATE TỰ ĐỘNG CÙNG CHU BẢO LINH</span>
      </div>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="pill"><Sparkles size={16} /> LỘ TRÌNH DÀNH CHO NGƯỜI MUỐN BẮT ĐẦU</div>
            <p className="hero-kicker">THỬ THÁCH THỰC HÀNH</p>
            <h1><span>2 NGÀY</span> XÂY NỀN TẢNG AFFILIATE TỰ ĐỘNG</h1>
            <p className="hero-lead">Từng bước ghép nội dung, công cụ và điểm chuyển đổi thành một quy trình dễ hiểu — ngay cả khi bạn chưa rành công nghệ.</p>
            <div className="hero-points">
              <span><CheckCircle2 /> Quy trình rõ ràng</span>
              <span><CheckCircle2 /> Thực hành từng bước</span>
              <span><CheckCircle2 /> Không cam kết thu nhập</span>
            </div>
            <Cta />
          </div>
          <div className="hero-visual">
            <div className="hero-number">2</div>
            <div className="hero-image-frame">
              <img src={`${imageRoot}/hero-suit.png`} alt="Chu Bảo Linh và bộ tài nguyên chương trình Affiliate tự động" fetchPriority="high" />
            </div>
            <div className="floating-card floating-card-top"><Zap size={20} /><b>5 MODULE</b><span>Thực hành tập trung</span></div>
            <div className="floating-card floating-card-bottom"><Gift size={20} /><b>8 QUÀ TẶNG</b><span>Tài nguyên đi kèm</span></div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div><CalendarDays /><span><b>02 ngày</b> thực hành tập trung</span></div>
          <div><Play /><span><b>05 module</b> đi từ nền tảng đến kế hoạch</span></div>
          <div><Gift /><span><b>08 tài nguyên</b> hỗ trợ triển khai</span></div>
          <div><Users /><span><b>Cộng đồng</b> cùng học và trao đổi</span></div>
        </div>
      </section>

      <section className="section problem-section">
        <div className="container narrow">
          <SectionHeading eyebrow="BẠN CÓ ĐANG Ở ĐÂY?" title="Affiliate không khó vì thiếu công cụ. Khó vì bạn chưa có một bản đồ đủ rõ." description="Chương trình được xây để giúp bạn nhìn thấy toàn bộ hành trình trước khi quyết định đầu tư thêm thời gian và nguồn lực." />
          <div className="problem-layout">
            <div className="pain-list">
              {painPoints.map((point, index) => <div className="pain-item" key={point}><span>{String(index + 1).padStart(2, "0")}</span><p>{point}</p></div>)}
            </div>
            <div className="image-stack">
              <img className="stack-main" src={`${imageRoot}/trainer.png`} alt="Chu Bảo Linh hướng dẫn về phễu chuyển đổi" loading="lazy" />
              <img className="stack-small" src={`${imageRoot}/community.png`} alt="Hoạt động cộng đồng cùng Chu Bảo Linh" loading="lazy" />
              <div className="stack-note"><BadgeCheck /> HỌC ĐỂ HIỂU · LÀM ĐỂ KIỂM CHỨNG</div>
            </div>
          </div>
          <div className="center-cta"><p>Nếu bạn muốn ngừng mò mẫm và bắt đầu bằng một trình tự cụ thể, đây là điểm khởi đầu dành cho bạn.</p><Cta compact /><DownCue /></div>
        </div>
      </section>

      <section className="section story-section">
        <div className="container story-grid">
          <div className="story-portrait">
            <span className="story-label">TIN NHẮN TỪ NGƯỜI HƯỚNG DẪN</span>
            <img src={`${imageRoot}/portrait.png`} alt="Chân dung Chu Bảo Linh" loading="lazy" />
            <div className="portrait-name"><strong>CHU BẢO LINH</strong><span>Người đồng hành trong thử thách 2 ngày</span></div>
          </div>
          <div className="story-copy">
            <p className="eyebrow">MỘT LỜI NHẮN THẲNG THẮN</p>
            <h2>“Bạn không cần biết mọi thứ để bắt đầu. Bạn cần biết bước tiếp theo là gì.”</h2>
            <p>Tôi xây thử thách này cho những người đã dành nhiều thời gian tìm hiểu nhưng vẫn chưa ghép được nội dung, công cụ và hành trình khách hàng thành một hệ thống dễ vận hành.</p>
            <p>Trong hai ngày, chúng ta tập trung vào phần cốt lõi: hiểu mô hình, chọn hướng phù hợp, nhìn thấy cách các thành phần kết nối và tạo ra một kế hoạch để tiếp tục thực hành.</p>
            <div className="quote-card"><Sparkles /><p>Không tô hồng kết quả. Không hứa hẹn thu nhập. Chỉ tập trung vào kiến thức, quy trình và hành động có thể kiểm chứng.</p></div>
          </div>
        </div>
      </section>

      <section className="section mechanism-section">
        <div className="container narrow">
          <SectionHeading eyebrow="MÔ HÌNH MỚI" title="Từ những hoạt động rời rạc đến một hệ thống có logic" description="Bạn sẽ học cách nhìn Affiliate như một hành trình gồm bốn phần liên kết, thay vì một danh sách công cụ phải học thuộc." />
          <div className="mechanism-grid">
            {[
              ["01", "Thu hút đúng người", "Nội dung rõ vấn đề và đúng bối cảnh.", Target],
              ["02", "Tạo niềm tin", "Giúp người xem hiểu trước khi quyết định.", Users],
              ["03", "Chuyển đổi", "Thiết kế một bước hành động đơn giản.", MousePointerClick],
              ["04", "Đo lường & tối ưu", "Dựa vào dữ liệu để cải thiện từng phần.", BarChart3],
            ].map(([number, title, text, Icon]) => {
              const MechanismIcon = Icon as typeof Target;
              return <article className="mechanism-card" key={String(number)}><span>{String(number)}</span><MechanismIcon /><h3>{String(title)}</h3><p>{String(text)}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section dark-proof">
        <div className="container proof-grid">
          <div className="proof-copy">
            <p className="eyebrow">SỰ THẬT QUAN TRỌNG</p>
            <h2>Công cụ không thay thế được tư duy hệ thống.</h2>
            <p>AI, automation hay bất kỳ nền tảng nào chỉ phát huy hiệu quả khi bạn biết mình đang phục vụ ai, tạo giá trị gì và muốn họ thực hiện hành động nào.</p>
            <ul>
              <li><Check /> Giảm số lượng việc phải làm cùng lúc</li>
              <li><Check /> Ưu tiên đúng phần tạo ra tín hiệu học hỏi</li>
              <li><Check /> Xây nền tảng có thể tiếp tục cải thiện</li>
            </ul>
            <Cta compact dark />
          </div>
          <div className="proof-image"><img src={`${imageRoot}/running.jpg`} alt="Hình ảnh hành trình bền bỉ" loading="lazy" /><span>TIẾN BỘ ĐẾN TỪ NHỮNG BƯỚC ĐÚNG ĐƯỢC LẶP LẠI</span></div>
        </div>
      </section>

      <section className="section social-proof">
        <div className="container narrow">
          <SectionHeading eyebrow="PHẢN HỒI THỰC TẾ" title="Đừng chỉ tin vào lời giới thiệu — hãy xem những cuộc trò chuyện" description="Các ảnh dưới đây được sử dụng từ bộ tư liệu do Chu Bảo Linh cung cấp." />
          <div className="testimonial-grid">
            <figure><img src={`${imageRoot}/testimonial-01.png`} alt="Ảnh chụp phản hồi của người tham gia" loading="lazy" /><figcaption><BadgeCheck /> Phản hồi học viên</figcaption></figure>
            <figure><img src={`${imageRoot}/testimonial-02.png`} alt="Ảnh chụp trao đổi về kết quả thực hành" loading="lazy" /><figcaption><BadgeCheck /> Trao đổi sau khi thực hành</figcaption></figure>
          </div>
          <div className="center-cta"><p>Mỗi người có điểm xuất phát và kết quả khác nhau. Điều bạn nhận được trước tiên là một cách làm rõ ràng hơn để tự kiểm chứng.</p><Cta compact /></div>
        </div>
      </section>

      <section className="section curriculum-section" id="chuong-trinh">
        <div className="container">
          <SectionHeading eyebrow="CHƯƠNG TRÌNH 2 NGÀY" title="Đây là những gì bạn sẽ cùng thực hành" description="Năm module được sắp theo đúng trình tự: hiểu mô hình, xây hành trình, quan sát hệ thống, lắp ghép và lập kế hoạch." light />
          <div className="curriculum-grid">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <article className="module-card" key={module.index}>
                  <div className="module-top"><span className="module-day">{module.day}</span><span className="module-index">{module.index}</span></div>
                  <div className="module-icon"><Icon /></div>
                  <h3>{module.title}</h3>
                  <p>{module.body}</p>
                  <ul>{module.items.map((item) => <li key={item}><CheckCircle2 />{item}</li>)}</ul>
                </article>
              );
            })}
          </div>
          <div className="curriculum-banner">
            <img src={`${imageRoot}/program-badge.jpg`} alt="Biểu trưng thử thách Affiliate" loading="lazy" />
            <div><p className="eyebrow">KHÔNG CHỈ NGHE</p><h3>Bạn rời chương trình với một bản đồ và kế hoạch hành động.</h3><p>Hãy chuẩn bị thiết bị, sổ ghi chép và hai khoảng thời gian tập trung để theo sát toàn bộ hành trình.</p></div>
            <Cta compact dark />
          </div>
        </div>
      </section>

      <section className="section gifts-section">
        <div className="container">
          <SectionHeading eyebrow="BỘ TÀI NGUYÊN ĐI KÈM" title="8 quà tặng giúp bạn triển khai nhanh hơn" description="Các tài nguyên được thiết kế để giảm thời gian bắt đầu và giúp bạn tập trung vào phần quan trọng nhất." />
          <div className="gifts-grid">
            {gifts.map((gift, index) => {
              const Icon = gift.icon;
              return <article className="gift-card" key={gift.title}><div className="gift-image"><img src={`${imageRoot}/${gift.image}`} alt="" loading="lazy" /><span>QUÀ #{index + 1}</span></div><div className="gift-body"><Icon /><h3>{gift.title}</h3><p>{gift.text}</p><span className="gift-value">TẶNG KÈM KHI THAM GIA</span></div></article>;
            })}
          </div>
          <div className="gift-summary"><Gift /><div><p>TOÀN BỘ BỘ TÀI NGUYÊN</p><h3>Đi cùng 5 module thực hành trong thử thách 2 ngày</h3></div><Cta compact /></div>
        </div>
      </section>

      <section className="section transformation-section">
        <div className="container">
          <SectionHeading eyebrow="SỰ CHUYỂN ĐỔI" title="Bạn đang ở đâu — và muốn tiến đến đâu?" description="Mục tiêu của chương trình không phải biến mọi thứ thành dễ dàng, mà giúp bạn nhìn rõ và hành động có thứ tự." />
          <div className="before-after">
            <article className="before-card"><span className="state-label"><X /> TRƯỚC THỬ THÁCH</span><h3>Mò mẫm và thiếu một bức tranh tổng thể</h3><ul>{before.map((item) => <li key={item}><X />{item}</li>)}</ul></article>
            <div className="transform-arrow"><ArrowRight /></div>
            <article className="after-card"><span className="state-label"><Check /> SAU THỬ THÁCH</span><h3>Có bản đồ, bộ khung và bước tiếp theo rõ ràng</h3><ul>{after.map((item) => <li key={item}><Check />{item}</li>)}</ul></article>
          </div>
        </div>
      </section>

      <section className="section mentor-section">
        <div className="container mentor-grid">
          <div className="mentor-gallery">
            <img className="mentor-main" src={`${imageRoot}/portrait.png`} alt="Chu Bảo Linh" loading="lazy" />
            <img className="mentor-side" src={`${imageRoot}/networking.jpg`} alt="Chu Bảo Linh trong hoạt động kết nối" loading="lazy" />
          </div>
          <div className="mentor-copy">
            <p className="eyebrow">NGƯỜI ĐỒNG HÀNH CÙNG BẠN</p>
            <h2>CHU BẢO LINH</h2>
            <p className="mentor-lead">Người trực tiếp hướng dẫn bạn nhìn thấy cấu trúc phía sau một quy trình Affiliate và cách biến kiến thức thành hành động cụ thể.</p>
            <div className="mentor-points">
              <div><BadgeCheck /><span>Hướng dẫn bằng sơ đồ và quy trình trực quan</span></div>
              <div><BadgeCheck /><span>Tập trung vào phần nền tảng có thể tái sử dụng</span></div>
              <div><BadgeCheck /><span>Đồng hành với tinh thần thực hành và kiểm chứng</span></div>
            </div>
            <p className="mentor-note">Thông tin thành tích định lượng sẽ chỉ được bổ sung khi có dữ liệu xác minh từ Chu Bảo Linh.</p>
          </div>
        </div>
      </section>

      <section className="section urgency-section">
        <div className="container urgency-grid">
          <div>
            <p className="eyebrow">CHI PHÍ CỦA VIỆC TRÌ HOÃN</p>
            <h2>Càng chờ đủ hoàn hảo, bạn càng kéo dài thời gian chưa có câu trả lời.</h2>
            <p>Bạn không cần cam kết một con đường dài ngay hôm nay. Bạn chỉ cần dành hai ngày để hiểu mô hình, thử cách làm và tự đánh giá xem hướng đi này có phù hợp.</p>
            <div className="urgency-box"><Clock3 /><p><b>Bắt đầu nhỏ.</b><br />Quan sát tín hiệu. Điều chỉnh bằng dữ liệu. Lặp lại những gì có giá trị.</p></div>
          </div>
          <div className="urgency-photos"><img src={`${imageRoot}/ocean.jpg`} alt="Khoảnh khắc nhìn về phía trước" loading="lazy" /><img src={`${imageRoot}/travel-02.jpg`} alt="Hành trình trải nghiệm của Chu Bảo Linh" loading="lazy" /></div>
        </div>
      </section>

      <section className="section offer-section">
        <div className="container narrow">
          <SectionHeading eyebrow="TOÀN BỘ GÓI THAM GIA" title="Một thử thách ngắn, một bản đồ rõ, một kế hoạch để tiếp tục" description="Bạn nhận 5 module thực hành, 8 tài nguyên triển khai và không gian trao đổi cùng cộng đồng." light />
          <div className="offer-stack">
            <div className="offer-visual"><img src={`${imageRoot}/hero-red.png`} alt="Bộ nội dung Affiliate tự động cùng Chu Bảo Linh" loading="lazy" /></div>
            <div className="offer-list">
              <div><MonitorPlay /><span><b>Thử thách thực hành 2 ngày</b><small>5 module theo trình tự rõ ràng</small></span></div>
              <div><Gift /><span><b>Bộ 8 quà tặng</b><small>Khung mẫu và tài nguyên đi kèm</small></span></div>
              <div><Users /><span><b>Không gian cộng đồng</b><small>Trao đổi trong phạm vi chương trình</small></span></div>
              <div><BookOpenCheck /><span><b>Kế hoạch hành động</b><small>Biết bước tiếp theo sau thử thách</small></span></div>
            </div>
          </div>
          <div className="offer-cta"><p className="offer-note">Thông tin lịch tổ chức và hình thức tham gia sẽ được xác nhận khi bạn quét mã giữ chỗ.</p><Cta /></div>
        </div>
      </section>

      <section className="section registration-section" id="dang-ky">
        <div className="container registration-grid">
          <div className="registration-copy">
            <div className="pill pill-light"><CircleDollarSign size={16} /> BẮT ĐẦU BẰNG MỘT QUYẾT ĐỊNH NHỎ</div>
            <h2>Sẵn sàng dành 2 ngày để nhìn rõ con đường Affiliate của bạn?</h2>
            <p>Quét mã QR để kết nối qua Zalo và nhận thông tin lịch học, hình thức tổ chức cùng hướng dẫn giữ chỗ.</p>
            <div className="event-meta">
              <div><CalendarDays /><span><b>Khi nào?</b><small>Lịch cụ thể được gửi sau khi đăng ký</small></span></div>
              <div><MonitorPlay /><span><b>Ở đâu?</b><small>Thông tin hình thức học được xác nhận qua Zalo</small></span></div>
              <div><Target /><span><b>Vì sao tham gia?</b><small>Để có bản đồ, bộ khung và kế hoạch hành động</small></span></div>
            </div>
          </div>
          <div className="qr-card">
            <span className="qr-badge">QUÉT MÃ ĐỂ GIỮ CHỖ</span>
            <img src={`${imageRoot}/registration-qr.jpg`} alt="Mã QR Zalo đăng ký thử thách Affiliate cùng Chu Bảo Linh" loading="lazy" />
            <p>Mở camera điện thoại hoặc ứng dụng Zalo để quét mã.</p>
            <a href="#top">Xem lại thông tin <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div className="footer-brand"><div className="footer-mark">CBL</div><div><b>CHU BẢO LINH</b><span>Thử thách Affiliate tự động</span></div></div>
          <p>Nội dung phục vụ mục đích đào tạo và cung cấp thông tin. Kết quả phụ thuộc vào kinh nghiệm, mức độ thực hành, thị trường và nhiều yếu tố khác; không có cam kết thu nhập cụ thể.</p>
          <div className="footer-links"><a href="#top">Đầu trang</a><a href="#chuong-trinh">Chương trình</a><a href="#dang-ky">Đăng ký</a></div>
        </div>
        <div className="footer-bottom">© 2026 Chu Bảo Linh. Bảo lưu mọi quyền.</div>
      </footer>
    </main>
  );
}

import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  MessageCircle,
  QrCode,
} from "lucide-react";

const zaloGroupUrl = "https://zalo.me/g/hmpjvz159";

export const metadata: Metadata = {
  title: "Đăng ký thành công | Thử thách 2 ngày Affiliate",
  description: "Hướng dẫn tham gia nhóm Zalo của Thử thách 2 ngày Affiliate.",
};

export default function ConfirmationPage() {
  return (
    <main className="success-page">
      <div className="success-shell">
        <section className="success-copy">
          <div className="success-check"><Check aria-hidden="true" /></div>
          <p className="success-eyebrow">ĐĂNG KÝ THÀNH CÔNG</p>
          <h1>Chúc mừng! Bạn đã hoàn tất bước đăng ký.</h1>
          <p className="success-lead">
            Bước cuối cùng là tham gia nhóm Zalo để nhận lịch học, thông tin chương trình và các tài nguyên đi kèm.
          </p>

          <div className="success-note">
            <CheckCircle2 aria-hidden="true" />
            <p><strong>Chọn một trong hai cách:</strong> bấm nút tham gia nhóm hoặc mở Zalo để quét mã QR.</p>
          </div>

          <a className="success-zalo-button" href={zaloGroupUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" />
            <span>BẤM ĐÂY ĐỂ VÀO NHÓM ZALO</span>
            <ArrowRight aria-hidden="true" />
          </a>

          <p className="success-help">Nếu đang xem trên điện thoại, bấm nút phía trên là cách nhanh nhất.</p>
          <a className="success-back" href="/"><ArrowLeft aria-hidden="true" /> Quay lại trang chương trình</a>
        </section>

        <section className="success-qr" aria-label="Mã QR tham gia nhóm Zalo">
          <div className="success-qr-label"><QrCode aria-hidden="true" /> CÁCH 2 · QUÉT MÃ QR</div>
          <img
            src="/images/chu-bao-linh/registration-qr.jpg"
            alt="Mã QR tham gia nhóm Zalo Thử thách 2 ngày Affiliate"
          />
          <p>Mở ứng dụng Zalo và quét mã để tham gia nhóm.</p>
        </section>
      </div>
    </main>
  );
}

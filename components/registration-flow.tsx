"use client";

import {
  createContext,
  useContext,
  useState,
  type ButtonHTMLAttributes,
  type FormEvent,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Mail, Phone, ShieldCheck, UserRound } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const RegistrationContext = createContext<(() => void) | null>(null);

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpen(false);
    router.push("/cam-on");
  }

  return (
    <RegistrationContext.Provider value={() => setOpen(true)}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="registration-modal">
          <div className="registration-modal-visual">
            <div className="registration-modal-badge">THỬ THÁCH 2 NGÀY</div>
            <img
              src="/images/chu-bao-linh/hero-suit.png"
              alt="Chu Bảo Linh giới thiệu Thử thách 2 ngày Affiliate"
            />
            <div className="registration-modal-visual-copy">
              <span>5 MODULE · 8 QUÀ TẶNG</span>
              <strong>Affiliate tự động</strong>
            </div>
          </div>

          <div className="registration-modal-form-wrap">
            <p className="registration-modal-kicker">ĐĂNG KÝ MIỄN PHÍ</p>
            <DialogTitle>Tham gia Thử thách 2 ngày Affiliate</DialogTitle>
            <DialogDescription>
              Điền đầy đủ thông tin để nhận xác nhận đăng ký và hướng dẫn vào nhóm Zalo.
            </DialogDescription>

            <form className="registration-form" onSubmit={handleSubmit}>
              <label>
                <span>Họ và tên</span>
                <div className="registration-input">
                  <UserRound aria-hidden="true" />
                  <input
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    minLength={2}
                    placeholder="Nhập họ và tên của bạn"
                    required
                  />
                </div>
              </label>

              <label>
                <span>Số điện thoại</span>
                <div className="registration-input">
                  <Phone aria-hidden="true" />
                  <input
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    minLength={9}
                    placeholder="Nhập số điện thoại"
                    required
                  />
                </div>
              </label>

              <label>
                <span>Email</span>
                <div className="registration-input">
                  <Mail aria-hidden="true" />
                  <input
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Nhập địa chỉ email"
                    required
                  />
                </div>
              </label>

              <button className="registration-submit" type="submit">
                <span>ĐĂNG KÝ THAM GIA MIỄN PHÍ</span>
                <ArrowRight aria-hidden="true" />
              </button>

              <p className="registration-privacy">
                <ShieldCheck aria-hidden="true" />
                Thông tin của bạn được dùng để xác nhận và gửi hướng dẫn tham gia.
              </p>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </RegistrationContext.Provider>
  );
}

export function RegistrationTrigger({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const openRegistration = useContext(RegistrationContext);

  if (!openRegistration) {
    throw new Error("RegistrationTrigger must be used inside RegistrationProvider.");
  }

  return (
    <button {...props} type="button" onClick={openRegistration}>
      {children}
    </button>
  );
}

# Chu Bao Linh Affiliate Landing Page

Landing page được xây dựng bằng Next.js, TypeScript, Tailwind CSS và Lucide Icons.

## Chạy trên máy tính

Yêu cầu Node.js 22.13 trở lên.

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Kiểm tra bản production

```bash
npm run build
npm run start
```

## Deploy lên Vercel

- Nếu GitHub repository chỉ chứa nội dung của thư mục `site`, giữ nguyên Root Directory mặc định.
- Nếu GitHub repository chứa toàn bộ workspace, đặt Vercel Root Directory là `site`.
- Framework Preset: Next.js (Vercel thường tự nhận diện).
- Hiện tại dự án không yêu cầu biến môi trường để build.

Ảnh của landing page nằm trong `public/images`.

# Day 18 — A/B/C Micro-prototype

Prototype tĩnh, không gọi model hoặc API thật. Cả ba option dùng cùng một context, task và content fixture để so sánh công bằng.

## Cách chạy

Mở trực tiếp `index.html` bằng trình duyệt. Prototype không cần cài dependency và không cần internet.

Nếu trình duyệt hạn chế một số hành vi khi mở file trực tiếp, có thể chạy một static server bất kỳ trong folder `prototype/`, sau đó mở URL localhost được cung cấp.

## Phạm vi

- A — Bản đồ tự kiểm tra: user-led; Nguyễn Thị Bảo Trang phụ trách chính.
- B — Đối thoại đồng chẩn đoán: human–AI co-create; Đàm Quang Trung phụ trách chính.
- C — AI kiểm tra artefact, user duyệt: AI-led with review; Đặng Văn Thái Anh phụ trách chính.

Mỗi option có ba trạng thái logic:

1. Common context / expectation.
2. Critical interaction.
3. Result / user decision.

## Reset

- Nút `Reset toàn bộ` ở góc trên bên phải đưa prototype về trạng thái đầu.
- Mỗi option có nút bắt đầu lại riêng.
- User có thể thoát về bài học tại mọi critical interaction.

## Giới hạn

- Tất cả nội dung AI là canned output dùng cho usability test.
- Dữ liệu Excel là dữ liệu mô phỏng, không phải dữ liệu thật của người tham gia Day 17.
- Prototype kiểm tra phản ứng với một tình huống cố định, không đo độ chính xác tổng quát của AI.

# Nhật ký ghi chép việc ứng dụng AI minh bạch của cá nhân

| Mục | Nội dung |
|---|---|
| Họ tên / MHV | Nguyễn Thị Bảo Trang — 2A202602580 |
| Nhóm / Case | AAA — Case A: AI Tutor, Diagnostic Refresher |
| Công cụ AI đã dùng | OpenAI Codex, Claude (Claude Code) |

## Cam kết

- AI **không** được dùng để bịa trích dẫn, bịa hành vi quan sát hay làm giả phản hồi của tester. Mọi quote và observation trong `Tester.md`, `prototype-feedback-note.md` và `group-feedback-synthesis.md` đều lấy từ phiên test thật hoặc từ interview Day 17.
- AI **không** được dùng để "chuốt" dữ liệu phỏng vấn thô đến mức xóa ranh giới giữa lời người dùng và nhận định của nhóm. Các tài liệu giữ cách tách **Observed / Interpreted / Decided / Still Unproven**.
- AI **không** viết thay phần đóng góp cá nhân và phần reflection (mục 5 của `prototype-feedback-note.md`).

---

## Nhật ký sử dụng

### 1. Hệ thống hóa evidence và soạn Chặng 1–3

| Mục | Nội dung |
|---|---|
| Công cụ | OpenAI Codex |
| Mục đích | Đọc và hệ thống hóa tài liệu Day 17 (`README.md`, `interview/notes.md`), tách observation khỏi interpretation, gợi ý ba cơ chế tương tác Người–AI ở các mức quyền khác nhau, định dạng tài liệu. |
| Kết quả AI tạo ra | Bản nháp `Chang_1_3.md`: Evidence Snapshot, Hypothesis Problem, ba Solution Options A/B/C, Human–AI Decision Table, các Gate check. |
| Phần tự chỉnh sửa / bác bỏ | Đối chiếu từng evidence với `interview/notes.md` và timestamp của bản ghi Day 17. Đánh dấu evidence của hai thành viên còn lại là "chưa có, không được suy diễn". Chốt cơ chế A/B/C cùng nhóm trong `three-option-design-sheet.md`. 
### 2. Viết mã prototype và canned AI output

| Mục | Nội dung |
|---|---|
| Công cụ | Codex, Claude|
| Mục đích | Viết nhanh giao diện HTML/CSS/JS cho micro-prototype; soạn canned AI output; sinh dữ liệu Excel mô phỏng (bảng doanh thu có cột bị lưu dạng text). |
| Kết quả AI tạo ra | `prototype/index.html`, `app.js`, `styles.css`, bản build trong `prototype/dist/`; nội dung hội thoại/gợi ý dựng sẵn cho Option A/B/C. |
| Phần tự chỉnh sửa / bác bỏ | Giữ chung context, task và data fixture cho cả ba option để so sánh công bằng. Thêm đường thoát về bài học, nút reset và cách quay lại ở mọi critical interaction. Dữ liệu là dữ liệu mô phỏng, không dùng dữ liệu thật của người tham gia Day 17. 

### 3. Pilot Option B trước khi test thật

| Mục | Nội dung |
|---|---|
| Công cụ | Claude |
| Mục đích | AI đóng vai người mở prototype lần đầu, làm theo outcome task, để tìm chỗ tương tác bị gãy **trước** khi test với người thật. |
| Kết quả AI tạo ra | Danh sách 6 lỗi tương tác ở Option B (mục 0 của `group-feedback-synthesis.md`), ví dụ: thiếu chỗ chạy `=ISNUMBER(E2)`, "Xin giả thuyết khác" tự loại giả thuyết, nút "Xoá ảnh đã chia sẻ" ghi sai tên vật thể. |
| Phần tự chỉnh sửa / bác bỏ | Ghi rõ pilot **không phải tester ngoài nhóm** và **không dùng làm evidence** cho Gate 5. Nhóm tự quyết định sửa lỗi nào (commit `467db12` → `1ecec9c`). |



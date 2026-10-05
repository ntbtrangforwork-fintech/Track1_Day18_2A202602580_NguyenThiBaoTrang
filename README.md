# Track1_Day18_2A202602580_NguyenThiBaoTrang

## 1. Thông tin cá nhân và nhóm

| Mục | Nội dung |
|---|---|
| MHV | 2A202602580 |
| Họ tên | Nguyễn Thị Bảo Trang |
| Nhóm | AAA — Đàm Quang Trung, Đặng Văn Thái Anh, Nguyễn Thị Bảo Trang |
| Case | **Case A — AI Tutor: Diagnostic Refresher** |
| Phụ trách chính | **Option A — Bản đồ tự kiểm tra** (build prototype, facilitator phiên test T1) |
| Prototype | **https://day18-ai-tutor-prototype.ntbtrang-forwork.chatgpt.site/** |

Day 18 tiếp nối evidence từ Day 17 (phỏng vấn P03 — tình huống PivotTable hiện **Count** thay vì **Sum** vì cột doanh thu bị Excel hiểu là text) để: tổng hợp evidence → chọn ba Solution Options → thiết kế Human–AI → build micro-prototype A/B/C → test với người dùng → tổng hợp feedback.

---

## 2. Cấu trúc repo

```text
Track1_Day18_2A202602580_NguyenThiBaoTrang/
├── README.md                        # File này
├── Chang_1_3.md                     # Chặng 1–3: Evidence, Solution Options, Human–AI Design (bản cá nhân)
├── three-option-design-sheet.md     # Design sheet rút gọn chung của nhóm (Evidence, A/B/C, Decision Table)
├── test-plan.md                     # Test plan chung: task, thứ tự option, observation focus, script
├── prototype-link.md                # Link public của ba prototype A/B/C
├── prototype/                       # Mã nguồn micro-prototype (HTML/CSS/JS tĩnh)
│   ├── index.html, app.js, styles.css
│   ├── dist/                        # Bản build để host
│   └── README.md                    # Cách chạy và giới hạn của prototype
├── Tester.md                        # Pretest S1–S4 và ba phiên test R1–R3
├── prototype-feedback-note.md       # Feedback Note cá nhân (phiên R1 / T1)
├── group-feedback-synthesis.md      # Tổng hợp feedback của nhóm (đang hoàn thiện)
├── ai-support-log.md                # Nhật ký sử dụng AI
└── Track1_Day17_2A202602580_NguyenThiBaoTrang/   # Bài Day 17 làm nguồn evidence
    ├── README.md
    └── interview/notes.md, recording.m4a
```

---

## 3. Tóm tắt nội dung

### 3.1. Hypothesis Problem

> **Khi** học viên tự học trực tuyến theo nhịp cá nhân để áp dụng ngay vào việc thật, và kết quả trên dữ liệu thật khác với hướng dẫn, **học viên** gặp khó khăn trong việc **xác định điểm vướng và dùng đúng điều mình đã biết**, **vì** không biết mình đã biết gì / đang thiếu gì liên quan tới đúng triệu chứng, và nguồn ngoài không viết cho tình huống trên dữ liệu thật của họ, **dẫn đến** lặp lại thao tác, dò nhiều nguồn, mất thời gian, gián đoạn hoặc bỏ dở luồng học.

Chi tiết: [Chang_1_3.md](Chang_1_3.md), [three-option-design-sheet.md](three-option-design-sheet.md).

### 3.2. Ba Solution Options

Cả ba dùng chung context, task và data fixture (PivotTable hiện Count, nút Sum mờ, nguyên nhân thật là cột doanh thu dạng text, deadline 17:00); chỉ khác mức quyền giữa người và AI.

| Option | Cơ chế | Người build |
|---|---|---|
| **A — Bản đồ tự kiểm tra** | User-led: user tự đi qua các nhánh kiểm tra; AI không tự hành động | Nguyễn Thị Bảo Trang |
| **B — Đối thoại đồng chẩn đoán** | Co-create: AI hỏi, user cung cấp evidence, hai bên thu hẹp giả thuyết | Đàm Quang Trung |
| **C — AI kiểm tra artefact, user duyệt** | AI-led with review: AI phân tích dữ liệu sau consent, đưa preview để user duyệt / Undo | Đặng Văn Thái Anh |

### 3.3. Prototype

- **Link prototype của Trang:** https://day18-ai-tutor-prototype.ntbtrang-forwork.chatgpt.site/ (chọn tab **A**, **B** hoặc **C** để chuyển option; build từ thư mục [prototype/dist/](prototype/dist/)).
- Link prototype của các thành viên khác: xem [prototype-link.md](prototype-link.md).
- Chạy local: mở trực tiếp [prototype/index.html](prototype/index.html) trong trình duyệt (không cần cài đặt hay internet), hoặc chạy một static server bất kỳ trong thư mục `prototype/`.
- Toàn bộ output AI là **canned output**, dữ liệu Excel là **dữ liệu mô phỏng**; prototype không gọi model/API thật. Xem thêm [prototype/README.md](prototype/README.md).

### 3.4. Test và feedback

- **Test plan chung:** [test-plan.md](test-plan.md) — phiên 20 phút, 5 observation focus, 3 câu cứu hộ được phép dùng.
- **Pretest + phiên test:** [Tester.md](Tester.md) — pretest S1–S4 với các profile stress-test, và ba phiên R1–R3 với thứ tự option xoay vòng (A→B→C, B→C→A, C→A→B).
- **Feedback Note cá nhân:** [prototype-feedback-note.md](prototype-feedback-note.md) — phiên R1, tester chọn **B** vì cung cấp được thông tin mà không phải cấp quyền xem sheet.
- **Tổng hợp nhóm:** [group-feedback-synthesis.md](group-feedback-synthesis.md).

**Quan sát chính (chưa phải kết luận về value):** ba tester chọn ba option khác nhau với trade-off khác nhau (quyền dữ liệu, áp lực deadline, mong muốn tự hiểu lỗi). Các điểm cần kiểm tra thêm: user có dựa vào badge xếp hạng thay vì đọc evidence không, sự do dự khi Option C yêu cầu nâng phạm vi dữ liệu, và khả năng tìm đường phục hồi (Undo/thử nhánh khác).

---

## 4. Giới hạn và việc còn lại

- Ba phiên test với dữ liệu cứng **không** chứng minh product value, độ chính xác của AI thật hay nhu cầu thị trường.
- Tester T1 chính là người kể episode P03 ở Day 17 nên đã biết trước nguyên nhân → hành vi "tự tìm ra lỗi" cần được cân nhắc nhẹ hơn. Consent của phiên R1 chưa được ghi riêng.
- `group-feedback-synthesis.md` còn các mục TODO (note T3, Pattern, Next Change); link note của T1 cần cập nhật.
- `Tester.md` và `three-option-design-sheet.md` có tham chiếu tới `Day18-chot-chung.md` — file này nằm ở tài liệu chung của nhóm, không có trong repo này.

---

## 5. Sử dụng AI

AI được dùng để hệ thống hóa tài liệu Day 17, tách observation khỏi interpretation, đề xuất cơ chế Human–AI, hỗ trợ build prototype và định dạng tài liệu. AI không được dùng để tạo feedback, quote hay observation giả. Chi tiết: [ai-support-log.md](ai-support-log.md) và mục *AI usage disclosure* trong [Chang_1_3.md](Chang_1_3.md).

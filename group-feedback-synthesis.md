# Group Feedback Synthesis — Nhóm AAA

> Điền **sau khi đủ ba Feedback Notes** từ ba tester ngoài nhóm. Mỗi tester dùng cả A/B/C với cùng task (câu hỏi context, outcome task và 5 điểm quan sát dùng chung).
> Gate 5 đạt khi: có 3 note · tách pattern / Next Change / Still Unproven · không nói quá evidence.

## 0. Pilot trước test — Option B (không tính là Feedback Note)

> **Người chạy:** AI (Claude) đóng vai người mở prototype lần đầu, theo đúng outcome task. **Không phải tester ngoài nhóm**, đã biết trước nguyên nhân thật → chỉ dùng để tìm chỗ interaction gãy trước khi test, **không** dùng làm evidence cho Gate 5.
> **Ngày:** 05/10/2026 · **Bản test:** commit `467db12` · **Bản sau khi sửa:** commit `1ecec9c`

| # | Mức | Ở đâu | Điều quan sát được | Đã sửa |
|---|---|---|---|---|
| 1 | Chặn test | Phép kiểm tra | Màn hình bảo gõ `=ISNUMBER(E2)` nhưng prototype không có chỗ chạy → phải đoán kết quả, sẽ cần facilitator giải thích | Nút "Làm thử trên file mẫu" hiện kết quả mô phỏng |
| 2 | Sai quyền | "Xin giả thuyết khác" | Giả thuyết đầu tự chuyển thành "Bạn đã loại" dù user không loại (trái R2) | Thêm giả thuyết mới, không loại cái nào |
| 3 | Mất phần đã làm | "← Về bài học" | Thoát giữa chừng thì mất hết câu trả lời | Giữ câu trả lời; hỏi "Tiếp tục / Bắt đầu lại" |
| 4 | Nói sai | "Để sau" | "Đã ghi lại điểm bạn đang dừng" trong khi prototype không lưu gì (R6) | Đổi câu cho đúng sự thật |
| 5 | Khựng lại | Câu hỏi 2 | Hỏi lại điều màn trước đã hiện ("Sum bị mờ") → không rõ vì sao AI hỏi | Thêm "Mình không nhìn thấy màn hình của bạn…" |
| 6 | **Nhỏ nhất** | Câu hỏi 3 | Nút ghi "Xoá **ảnh** đã chia sẻ" nhưng thứ được chia sẻ là **bảng 5 dòng** → chữ không khớp với vật thể user vừa thấy | Đổi thành "Xoá **dữ liệu** đã chia sẻ khỏi phiên" |

**Bài học từ lỗi nhỏ nhất (#6):** ở Option B, chỗ duy nhất user trao dữ liệu cho AI là câu 3, và nút xoá là đường **thu hồi quyền** (§3.8). Chữ trên nút lệch với thứ user vừa chia sẻ có thể làm user không chắc nút đó xoá cái gì → đúng chỗ cần rõ nhất về kiểm soát dữ liệu. Khi test thật, quan sát xem tester có tìm và dùng nút này không.

**Chưa biết sau pilot:** pilot không cho biết người thật có chia sẻ dữ liệu ở câu 3 không, có đọc dấu hiệu +/–/? không, hay có cần facilitator giải thích không — cần ba phiên test thật.

## 1. Ba Feedback Notes

| Tester | Facilitator | Thứ tự | Có relevant context? | Link note |
|---|---|---|---|---|
| T1 — Phan Thị Khánh Linh (05/10/2026) | Nguyễn Thị Bảo Trang | A → B → C | **Có — rất mạnh:** đây là người kể episode PN3 ở Day 17, tức fixture PivotTable dựng từ chính câu chuyện của họ (xem lưu ý dưới bảng) | Note của Trang (repo Trang) — TODO link |
| T2 — Bùi Đức Thành (05/10/2026, 14:20–14:50) | Đàm Quang Trung | B → C → A | Có vẻ có (*"đúng y hệt lỗi của mình"*, *"file công ty"*) — phiếu chưa ghi câu trả lời câu hỏi context | [prototype-feedback-note.md](prototype-feedback-note.md) |
| T3 | Đặng Văn Thái Anh | C → A → B | TODO | TODO |

> **Lưu ý về T1:** tester đã từng gặp đúng lỗi Count/Sum và biết nguyên nhân (PN3, 03:27). Vì vậy việc T1 tự chuyển từ "lỗi thao tác" sang "vấn đề dữ liệu" và không cần gợi ý **có thể do đã biết trước đáp án**, không hẳn do thiết kế. Khi tìm pattern, cân nhắc T1 nhẹ hơn ở các điểm liên quan tới "tìm ra nguyên nhân". Note của T1 cũng **chưa ghi consent** tham gia.

## 2. So sánh hành vi theo 5 điểm quan sát

Mỗi ô ghi **hành vi** (T1/T2/T3), không ghi "thích / không thích".

| Quan sát | A — Bản đồ tự kiểm tra | B — Đối thoại đồng chẩn đoán | C — AI kiểm tra artefact |
|---|---|---|---|
| First action | T1: chọn "Xem lại thao tác trong video" — *"Chắc mình làm sai bước trong video rồi."*<br>T2: lướt tìm cụm từ giống triệu chứng, chọn nhánh "Count thay vì Sum" | T1: trả lời lần lượt các câu hỏi (dấu hiệu Count/Sum, thao tác đã thử)<br>T2: đọc thẻ tình huống ~10 giây rồi mới bấm "Tôi đang bị kẹt" | T1: giữ phạm vi screenshot trước; chỉ cân nhắc nâng lên vùng trong sheet khi muốn xem preview <br>T2: bấm ngay "Quét lỗi PivotTable", không đọc giải thích |
| Hesitation | T1: dừng vài giây khi nhánh thao tác không có dấu hiệu<br>T2: **đứng yên >30 giây** ở màn chính — *"Nhiều nhánh quá không biết mắt nhìn vào đâu trước."*; do dự giữa "Lỗi nguồn" và "Lỗi thiết lập Pivot" | T1: không ghi nhận<br>T2: ~8 giây ở câu chia sẻ dữ liệu — *"File công ty có số tiền thật nên hơi ngại tải lên."*; cân nhắc giữa 2 giả thuyết về format | T1: dừng khi hệ thống yêu cầu nâng scope để mở preview <br>T2: ~6 giây lúc cấp quyền và chọn vùng dữ liệu |
| Evidence read / ignored | T1: đọc mô tả nhánh; sau dấu hiệu ở nhánh dữ liệu nguồn — *"À, vấn đề có thể nằm ở dữ liệu chứ không phải cách tạo PivotTable."*<br>T2: đọc "Dấu hiệu cần tìm" (tam giác xanh) | T1: đọc evidence ủng hộ/chống của giả thuyết xếp hạng cao trước khi chọn, không chỉ nhìn badge<br>T2: đọc kỹ từng dòng màn giả thuyết; sau "Làm thử" — *"À đúng y hệt lỗi của mình, cột tiền bị căn lề trái."* | T1: đọc dấu hiệu, dùng preview so sánh trước/sau <br>T2: mở tab bằng chứng trước khi duyệt — *"Phải xem nó chỉ ra cái gì, lỡ nó đoán bừa."* |
| Correction / recovery | T1: tự tìm "Thử nhánh khác" sau khi loại nhánh thao tác<br>T2: bấm nhầm nhánh "Ô trống" rồi lùi lại | T1: không ghi nhận<br>T2: bấm "Xin giả thuyết khác"; **không chia sẻ** dữ liệu | T1: apply trên bản sao rồi dùng Undo — *"Undo có rồi nên mình yên tâm thử trên bản sao."* <br>T2: chọn vùng sheet nhỏ, **tránh cột tên khách**; xem preview → apply trên bản sao |
| Help needed | T1: không cần<br>T2: 1 lần ("Bạn sẽ làm gì tiếp theo?") | T1: không cần<br>T2: 1 lần ("Bạn cứ nói to suy nghĩ nhé") | T1: không cần <br>T2: 0 |
| Tìm ra nguyên nhân & quay lại bài? | T1: chuyển được sang kiểm tra dữ liệu; note không ghi việc quay lại bài<br>T2: tìm ra cách sửa, quay lại bài | T1: note không ghi<br>T2: đọc cách sửa, quay lại bài | T1: apply trên bản sao; note không ghi việc quay lại bài <br>T2: thấy ô E14 được tô vàng, hiểu lỗi, quay lại bài |

**Option được chọn và trade-off (lời tester):**
- T1: chọn **B** — vì cung cấp được thông tin đầu vào mà **không cấp quyền xem sheet**; đánh đổi là phải tự trả lời câu hỏi và tự kiểm tra đề xuất. *"Mình muốn tự kiểm tra trước khi sửa."* (Trang diễn giải: lựa chọn phản ánh trade-off về quyền dữ liệu, không phải "B tốt nhất nói chung".)
- T2: khi gấp trước 17:00 chọn **C** — cần kết quả ngay; đánh đổi là tự khoanh vùng che dữ liệu nhạy cảm và chưa hiểu sâu lỗi (*"xong việc tối về ngẫm sau"*). Hiểu rõ nhất vì sao sai ở **B**. *"Lúc đang cháy deadline thì C là cứu tinh, nhưng lúc muốn học nghề nghiêm túc thì B mới giúp mình không bị dốt đi."*
- T3: TODO

## 3. Pattern và khác biệt

| | Nội dung | Từ tester nào |
|---|---|---|
| **Lặp lại ở ≥2 tester** | TODO | TODO |
| **Khác nhau giữa các tester** | TODO | TODO |
| **Trái với kỳ vọng của nhóm** (đối chiếu "Evidence sẽ bác bỏ option này", design sheet §2.3) | TODO | TODO |

Câu hỏi cần trả lời từ dữ liệu, không đoán trước:
- A: tester có biết bắt đầu từ nhánh nào không?
- B: tester có chia sẻ dữ liệu ở câu 3 không? Trả lời "Không biết" bao nhiêu câu?
- C: tester có đồng ý cho đọc file không? Có mở bằng chứng trước khi duyệt không?

## 4. Next Change

> "Với Hypothesis Problem này, chúng tôi đã thử ba cách giải. Tester đã làm **TODO (hành vi cụ thể)**, vì vậy iteration tiếp theo chúng tôi sẽ **TODO (một thay đổi)**."

Chỉ chọn **một** thay đổi, dựa trên hành vi lặp lại ở mục 3.

## 5. Still Unproven

- Học viên có sẵn sàng chia sẻ file công việc cho AI không? (Option C và câu 3 của B dựa trên giả định này; 3 tester trong prototype không phải dữ liệu thật của họ.)
- Lớp 1 (không biết mình thiếu gì) hay Lớp 2 (biết nhưng không nối được) phổ biến hơn? Prototype chỉ test Lớp 2.
- Tần suất: các note Day 17 khác chủ đề, chưa có lặp lại cùng tình huống.
- Ba tester với dữ liệu cứng không chứng minh product value, độ chính xác của AI thật, hay nhu cầu thị trường.
- TODO: điều mới phát sinh từ test mà nhóm chưa trả lời được.

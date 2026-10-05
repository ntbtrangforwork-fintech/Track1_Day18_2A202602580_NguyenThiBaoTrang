# Three-Option Design Sheet — Nhóm AAA, Case A (AI Tutor: Diagnostic Refresher)

> Bản rút gọn từ tài liệu chốt chung của nhóm `Day18-chot-chung.md`. Link doc/board chung: TODO
> Phân công: A = Nguyễn Thị Bảo Trang · **B = Đàm Quang Trung** · C = Đặng Văn Thái Anh

---

## Chặng 1 — Evidence

### Trạng thái nguồn
| Note | Trạng thái |
|---|---|
| PN1 (Thái Anh hỏi) | Dùng làm evidence — có note + audio |
| PN2 bổ sung (Trung hỏi) | ⏳ Có transcript, thiếu metadata 2A2026, không có timestamp → **evidence yếu**, ghi nhận nhưng không dùng làm căn cứ |
| PN3 (Trang hỏi, P03) | Tạm dùng, **chưa đối chiếu được với file nguồn** |

**Vì sao PN2 cũ bị loại:** người được hỏi chỉ học workshop live trên Zoom, không tự học theo nhịp cá nhân (sai actor, do bỏ qua câu sàng lọc thứ hai). Câu chuyện chính là bị làm phiền và miss thông tin, không phải không hiểu nội dung. Không có đoạn xin phép ghi âm trong bản ghi. Bài học đã chuyển thành các sửa đổi Conversation Guide v2 (Day 17).

**Vì sao PN2 bổ sung chỉ là evidence yếu:** người được hỏi có tự học online nhưng **không kể được lần cụ thể nào** trong 7 ngày; không có workaround hay hậu quả cụ thể. Lời mở đầu nêu "website hỗ trợ tự học" nên phần lớn buổi là feature request và câu hỏi ý kiến. Bản ghi Day 17: `interview/notes-bo-sung.md`.

### Evidence Snapshot
| Note | User đã thực sự làm / nói gì | Nhóm đang diễn giải |
|---|---|---|
| PN1 | Học RAG, kẹt ở đoạn combine hai result lists. Workaround: video → slide → Google → documentation → YouTube → ChatGPT → tìm ví dụ thực tế. *"Khoảng một tiếng."* *"Mình chỉ biết là mình không hiểu hybrid retrieval. Sau đó mình mới nhận ra là mình chưa hiểu rõ điểm mạnh và điểm yếu của BM25 với semantic search."* | Không biết mình thiếu gì (Lớp 1); barrier có thể là chi phí tìm đúng cách giải thích |
| PN2 bổ sung ⏳ | *"Mình thường tìm tài liệu trên Google, YouTube và một số website học trực tuyến."* *"Khó khăn lớn nhất là có quá nhiều tài liệu nên mình không biết tài liệu nào chính xác và phù hợp. Một số bài giảng cũng khá dài, khó tìm đúng nội dung mình cần."* *"…đôi lúc mình dễ mất tập trung hoặc bỏ dở kế hoạch học."* **Không có episode cụ thể.** Phần còn lại là feature request (gợi ý từng bước, lộ trình, theo dõi tiến độ…) | Khó khăn ở **chọn nguồn / tìm đúng đoạn**, xảy ra trước khi vào bài; cùng hướng "chi phí tìm nguồn" của PN1 nhưng **chỉ là nhận định chung**. Không xếp được vào Lớp 1 hay Lớp 2 |
| PN3 ⏳ | PivotTable trên file thật hiện Count thay vì Sum, nút Sum mờ. Cộng thử dữ liệu gốc (00:51) → tua video, tạo lại PivotTable ~10′ (01:06–01:45) → YouTube, chỉ cách đổi phép tính (01:45) → gửi screenshot nhóm chat, đồng nghiệp nhận ra cột bị hiểu là text (02:23). Bỏ phần video tiếp theo, không quay lại (03:01). Đã biết chuyện số lưu dạng text nhưng không liên hệ (03:27) | Biết kiến thức nhưng không nối được với triệu chứng (Lớp 2) |

**Điểm chung (PN1, PN3):** cả hai đều kẹt dù có (hoặc gần có) kiến thức; nguồn ngoài không khớp tình huống thật; kết cục là gián đoạn luồng học. PN2 bổ sung chỉ cùng hướng ở bước "tìm nguồn ngoài", không có episode để so.
**Mâu thuẫn / bất ngờ:** PN1 thoát kẹt nhờ ví dụ, không nhờ ôn nền; PN3 đã biết kiến thức → Pain A Day 17 không còn note nào hỗ trợ trực tiếp. Q12 của PN1 bị dẫn dắt, không dùng. PN2 nêu khó khăn ở **chọn tài liệu** (trước khi vào bài), khác vị trí với PN1/PN3 (kẹt trong bài) — ghi nhận để theo dõi, không mở rộng hypothesis.
**Vẫn là suy đoán:** thiếu nền là bottleneck · pattern chung · Pain C · ~1 giờ là điển hình · học viên sẵn sàng chia sẻ file cho AI · "người học cần hướng dẫn từng bước" (PN2, feature request) · "người học bị quá tải tài liệu" (PN2, một câu nhận định).

### Hypothesis Problem
> **Khi** học viên tự học trực tuyến theo nhịp cá nhân để áp dụng ngay vào việc thật, và kết quả trên dữ liệu thật khác với hướng dẫn, **học viên** gặp khó khăn trong việc **xác định điểm vướng và dùng đúng điều mình đã biết**, **vì** không biết mình đã biết gì / đang thiếu gì liên quan tới đúng triệu chứng này, và nguồn ngoài viết cho người chưa từng gặp tình huống đó trên dữ liệu thật của họ, **dẫn đến** lặp lại thao tác, dò nhiều nguồn không khớp, mất thời gian, gián đoạn luồng học; đôi khi bỏ hẳn phần học tiếp theo.

**Chưa biết:** (1) học viên có sẵn sàng chia sẻ artefact công việc cho AI không; (2) Lớp 1 hay Lớp 2 xuất hiện nhiều hơn; (3) học viên tin AI tới mức nào.
**PN2 bổ sung không làm thay đổi hypothesis:** không thành phần nào (situation, barrier, consequence) được hỗ trợ hay bác bỏ bằng hành vi cụ thể.
**Gate 1:** PASS có điều kiện — đã thực hiện đủ 3/3 note nhưng chỉ PN1, PN3 có episode; còn chờ file nguồn PN3 và metadata PN2.

---

## Chặng 2 — Ba Solution Options

```text
User giữ phần lớn quyền ◄──────────────────────────────► AI giữ phần lớn quyền
  A: Bản đồ tự kiểm tra     B: Đối thoại đồng chẩn đoán     C: AI kiểm tra artefact,
     User-led, Don't Act       Co-create, Ask → Act            user duyệt
```

### Giữ nguyên cho A/B/C
| Thành phần | Quyết định chung |
|---|---|
| Target user | Học viên tự học kỹ năng trực tuyến theo nhịp cá nhân để áp dụng ngay vào công việc |
| Situation | Làm theo video PivotTable trên file thật; cột doanh thu hiện Count thay vì Sum, Sum bị mờ |
| Task | Xác định nguyên nhân, làm một bước kiểm tra/sửa an toàn, quay lại bài |
| Desired outcome | Hiểu vì sao khác hướng dẫn, sửa được mà vẫn giữ quyền quyết định, tiếp tục bài |
| Data fixture | Cùng video, screenshot, hiện tượng Count/Sum, nút Sum mờ, nguyên nhân thật (cột doanh thu là text), áp lực deadline |
| Ràng buộc | Dữ liệu cứng, không gọi model thật; bỏ dở bất cứ lúc nào không tính là fail |

### Được phép khác
| Thành phần | A — Bản đồ tự kiểm tra | B — Đối thoại đồng chẩn đoán | C — AI kiểm tra artefact |
|---|---|---|---|
| Mechanism | Cây quyết định theo triệu chứng; user tự chạy từng phép kiểm tra; AI giải thích khi được gọi | AI hỏi 2–3 câu thích ứng, hai bên cùng thu hẹp nguyên nhân | AI phân tích file sau consent, chỉ dấu hiệu, tạo preview cách sửa; user duyệt |
| User làm gì | Chọn triệu chứng, tự kiểm tra, xác nhận từng bước | Trả lời, chia sẻ evidence nếu muốn, chọn giả thuyết | Chọn phạm vi chia sẻ, xem evidence, duyệt / sửa / từ chối |
| AI làm gì | Hiện checklist; giải thích một bước khi được gọi; không đọc file | Hỏi, tổng hợp evidence, xếp hạng nguyên nhân | Phân tích artefact trong phạm vi cho phép, tạo preview |
| Trigger | User mở trợ giúp từ triệu chứng | Như A | Như A + bước consent chia sẻ file |
| Trade-off | An toàn nhất, nhưng user có thể không biết bắt đầu từ đâu | Phụ thuộc chất lượng câu trả lời | Nhanh nhất, nhưng rủi ro riêng tư, sai, lệ thuộc AI |

### Distance check
- **A khác B vì:** A để user tự đi theo cây kiểm tra, AI không suy luận; B dùng câu hỏi thích ứng để hai bên cùng chẩn đoán.
- **B khác C vì:** B chỉ thu hẹp từ câu trả lời user đưa từng bước; C chủ động phân tích artefact sau consent và đưa đề xuất hoàn chỉnh để duyệt.
- **A khác C vì:** A giữ toàn bộ quá trình kiểm tra ở user; C giao phân tích ban đầu cho AI, giữ quyết định và việc áp dụng ở user.

**Gate 2:** đạt.

---

## Chặng 3 — Human–AI Decision Table

**Critical interaction:** user thấy Count thay vì Sum, nút Sum mờ, chưa biết nguyên nhân → hệ thống giúp tới một phép kiểm tra có căn cứ, không tước quyền quyết định, không tự sửa dữ liệu.

| Human–AI decision | A — Bản đồ tự kiểm tra | B — Đối thoại đồng chẩn đoán | C — AI kiểm tra artefact |
|---|---|---|---|
| User làm gì? AI làm gì? | User chọn nhánh, chạy kiểm tra, ghi kết quả. AI đưa cấu trúc, giải thích khi được gọi | User trả lời, chia sẻ evidence, xác nhận. AI hỏi, tóm tắt, xếp hạng | User chọn dữ liệu chia sẻ, duyệt thay đổi. AI phân tích, chỉ dấu hiệu, tạo preview |
| Act / Ask / Don't Act | **Don't Act** tới khi được gọi — ưu tiên agency | **Ask** trước; **Act** khi có evidence tối thiểu | **Act** sau consent; **Ask** trước mọi thay đổi |
| Capability / limit | "Tôi hướng dẫn bạn tự kiểm tra từng khả năng; tôi không đọc file hay tự chẩn đoán." Checklist có thể không bao phủ lỗi đặc thù | "Tôi hỏi vài câu rồi đề xuất nguyên nhân cần kiểm tra." Phụ thuộc độ đầy đủ câu trả lời | "Tôi phân tích phạm vi bạn cho phép và tạo preview; không tự sửa file gốc." Có thể đọc sai |
| Evidence / uncertainty | Mỗi bước có "Dấu hiệu cần tìm" và "Nếu có / không thì sang đâu"; trạng thái chưa kiểm tra / đã loại / đã xác nhận | Giả thuyết xếp hạng định tính, mỗi cái gắn dấu hiệu ủng hộ / chống | Highlight cột liên quan; trạng thái "phát hiện khả dĩ"; evidence xung đột thì dừng |
| Control & recovery | Bỏ qua bước, quay lại nhánh trước, đổi nhánh, về bài bất cứ lúc nào; gói thông tin hỏi mentor | Sửa câu trả lời, xoá artefact, xin giả thuyết khác, bắt đầu lại | Chọn phạm vi, preview, áp dụng trên bản sao, reject / stop; không auto-apply |
| Nếu sai, user mất gì | Thời gian, đi sai nhánh; dữ liệu không bị đổi | Kiểm tra sai nguyên nhân; mỗi phép kiểm tra đảo ngược được | Có thể sai dữ liệu / lộ dữ liệu → bắt buộc consent, preview, bản sao |

**AI nói bao nhiêu:** Mức 2. AI chỉ ra dấu hiệu, ví dụ "giá trị trong cột doanh thu căn trái, có khoảng trắng đầu ô", và không nói thẳng nguyên nhân. Nếu nói thẳng thì C thắng chỉ vì biết trước đáp án.
**Khoảng trống của A:** PN3 cho thấy user tự đoán sai hướng ("nghĩ mình kéo nhầm cột hoặc thiếu bước"). Vì vậy cây kiểm tra phải có **điểm vào gắn với đúng triệu chứng** đang hiện trên màn hình, không phải một cây lớn bắt user tự lọc. Sau 2 nhánh không ra kết quả, hệ thống phải nói "checklist chưa bao phủ trường hợp này".
**Dữ liệu:** chỉ dùng artefact khi user chủ động chia sẻ; cho che hoặc crop; chỉ phục vụ phiên hiện tại; xoá được.
**Quy tắc chung R1–R6:** lời người học · bác là dừng · lối thoát về bài luôn hiện · không chắc thì nói · dấu hiệu từ artefact, không đánh giá năng lực · không lưu dữ liệu tester.

**Gate 3:** đạt về thiết kế; phải thể hiện được trong prototype.

**Giới hạn đã biết:** prototype Excel chỉ test Lớp 2 (thiếu cầu nối), không test Lớp 1. Chưa có evidence học viên sẵn sàng chia sẻ file cho AI.

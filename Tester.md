# Prototype Test — Nguyễn Thị Bảo Trang
## 1. Nguồn dùng để xây panel

- [`Track1_Day17_2A202602580_NguyenThiBaoTrang/interview/notes.md`](Track1_Day17_2A202602580_NguyenThiBaoTrang/interview/notes.md): một người học thật đã gặp Count thay vì Sum, từng đoán sai nguyên nhân, tua lại video, tạo lại PivotTable, tìm YouTube, gửi screenshot và cuối cùng kiểm tra kiểu dữ liệu.
- [`test-plan.md`](test-plan.md): task, thứ tự option, observation focus và giới hạn của facilitator.
- [`prototype/app.js`](prototype/app.js): copy, nút bấm, trạng thái và recovery path thực tế của prototype.
- [`Day18-chot-chung.md`](Day18-chot-chung.md): giả thuyết thiết kế và các rủi ro cần pretest cho A/B/C.


## 3. Panel

| Mã | Profile | Căn cứ | Biến stress-test |
|---|---|---|---|
| S1 | Người học đã biết khái niệm “số lưu dạng text” nhưng ban đầu cho rằng mình thao tác sai | Interview Day 17, mốc 01:06–01:38 và 03:27–03:54 | Baseline; đọc tương đối đầy đủ. |
| S2 | Cùng profile nhưng đang gần deadline và đọc lướt | Interview Day 17, mốc 02:10–02:23 | Chú ý thấp; ưu tiên đường nhanh. |
| S3 | Cùng profile nhưng muốn tự xác minh trước khi cho AI xem nhiều dữ liệu | Hành vi cộng thử dữ liệu gốc và chỉ chia sẻ screenshot ở Day 17 | Phạm vi chia sẻ tối thiểu; kiểm tra recovery. |
| S4 | Cùng profile nhưng sẵn sàng nhờ trợ giúp sau khi tự thử không hiệu quả | Chuỗi workaround Day 17: tự thử → tìm nguồn ngoài → hỏi nhóm | Tìm hỗ trợ, đọc evidence và thử đường thay thế. |

## 4. Task chung

> “Bạn đang học PivotTable để hoàn thành báo cáo doanh thu cuối ngày. Video cho thấy cột Doanh thu trong Values sẽ tạo Sum, nhưng file của bạn lại hiện Count và tùy chọn Sum bị mờ. Hãy dùng từng phương án để xác định điều cần kiểm tra, chọn cách xử lý an toàn và quay lại tiếp tục bài học.”

Nguyên nhân fixture là cột Doanh thu có giá trị được Excel đọc như text. Trong pretest không nói trước nguyên nhân, nhánh đúng hoặc option do ai xây dựng.

---

## 5. Phiên S1 — Baseline, A → B → C

### Thông tin phiên

| Mục | Nội dung |
|---|---|
| Loại phiên | Walkthrough |
| Ngày | 05/10/2026 |
| Facilitator | Nguyễn Thị Bảo Trang |
| Hình thức/thiết bị | Laptop |
| Relevant context | Dựa trên incident PivotTable trong interview Day 17 |

### Timeline

| Thời điểm | Hành vi | Option/màn hình | Ghi chú |
|---|---|---|---|
| 00:00 | Đọc task và bấm “Bắt đầu với Option A”. | Home → A | Bắt đầu theo CTA có sẵn. |
| 00:20 | Chọn “Xem lại thao tác trong video”. | A — Context | Phản ánh phỏng đoán ban đầu ở Day 17: đã làm sai bước. |
| 00:44 | Đọc hướng dẫn, chọn “Không thấy dấu hiệu này”. | A — Critical interaction | Nhánh thao tác bị loại trừ. |
| 01:02 | Bấm “Thử nhánh khác”, sau đó chọn “Kiểm tra dữ liệu nguồn”. | A — Recovery | Retry dễ tìm và giữ được tiến trình khái niệm. |
| 01:33 | Chọn “Tôi thấy dấu hiệu được mô tả”, đọc bước xử lý trên bản sao và hoàn thành A. | A — Result | Hoàn thành sau một lần đi sai nhánh. |
| 02:05 | Ở B, chọn Sum; Count và Sum bị mờ; đã tạo lại PivotTable. | B — Questions | Ba lựa chọn khớp trực tiếp với task nên gần như không cần suy luận. |
| 02:36 | Đọc cả hai giả thuyết, chọn giả thuyết dữ liệu nguồn. | B — Hypotheses | Header “Khả dĩ hơn” làm đường đúng nổi bật. |
| 03:04 | Đọc đề xuất trên bản sao và hoàn thành B. | B — Result | Không dùng “Sửa câu trả lời”. |
| 03:36 | Ở C, đổi phạm vi từ screenshot sang “Một vùng trong sheet”, đọc consent rồi tick đồng ý. | C — Consent | Phạm vi và consent được nhận diện. |
| 04:10 | Đọc ba dấu hiệu, mở preview, so sánh Count với Sum. | C — Evidence/preview | Copy bảo “mở từng dấu hiệu” nhưng các dấu hiệu không mở được. |
| 04:42 | Bấm “Áp dụng trên bản sao”, sau đó thử Undo rồi áp dụng lại và hoàn thành. | C — Recovery/result | Undo hiện rõ sau apply. |

### Tổng hợp S1

- **First action:** A chọn nhánh thao tác; B trả lời lần lượt từ trên xuống; C đổi sang phạm vi sheet trước khi consent.
- **Breakdown:** câu “Mở từng dấu hiệu” ở C tạo kỳ vọng có tương tác mở rộng, nhưng danh sách evidence là tĩnh.
- **Evidence:** đọc mô tả nhánh A và hai giả thuyết B; ở C dùng bảng before/after để xác minh.
- **Recovery:** A dùng retry; C dùng undo. Không cần facilitator help.
- **Kết quả:** hoàn thành cả ba option.
- **Lựa chọn:** B; trade-off giả định là nhập ba câu trả lời để không cần chia sẻ artefact.


---

## 6. Phiên S2 — Low attention, B → C → A

### Thông tin phiên

| Mục | Nội dung |
|---|---|
| Loại phiên | stress-test |
| Ngày | 05/10/2026 |
| Hình thức/thiết bị | Laptop |
| Attention condition | Gần deadline, đọc lướt và ưu tiên CTA chính |

### Timeline

| Thời điểm | Hành vi| Option/màn hình | Ghi chú |
|---|---|---|---|
| 00:00 | Mở B từ tab, bỏ qua notice về giới hạn và chọn ba đáp án đầu tiên khớp task. | B — Questions | Copy task đã chứa sẵn toàn bộ đáp án. |
| 00:24 | Bấm “Tổng hợp bằng chứng”; chỉ đọc tiêu đề giả thuyết và badge “Khả dĩ hơn”. | B — Hypotheses | Không đọc evidence hỗ trợ/chống lại hoặc sidebar. |
| 00:39 | Chọn giả thuyết dữ liệu nguồn và hoàn thành. | B — Result | Ranking có thể biến thành shortcut. |
| 01:03 | Ở C, giữ mặc định “Chỉ screenshot hiện tại”, tick consent và bấm phân tích. | C — Consent | Không đọc sự khác nhau giữa hai phạm vi. |
| 01:21 | Bỏ qua danh sách evidence, bấm ngay “Xem bản preview thay đổi”. | C — Evidence | CTA chính cạnh evidence cho phép đi tiếp mà không xác minh. |
| 01:42 | Bấm “Áp dụng trên bản sao” rồi hoàn thành; không thử undo. | C — Result | Copy file gốc không đổi không được đọc kỹ. |
| 02:15 | Ở A, bấm “Tôi không biết bắt đầu từ đâu”. | A — Context | Đây là CTA duy nhất không yêu cầu chọn nguyên nhân. |
| 02:31 | Đọc gợi ý hai dấu hiệu Count + Sum bị mờ, chọn “Tôi thấy dấu hiệu”. | A — Critical interaction | “Unknown” thực tế dẫn thẳng tới nhánh dữ liệu. |
| 02:58 | Hoàn thành A. | A — Result | Không thử nhánh sai. |

### Tổng hợp S2 

- **First action:** luôn chọn CTA chính hoặc lựa chọn đầu tiên.
- **Breakdown:** không xảy ra đường cụt, nhưng phần lớn evidence và uncertainty có thể bị bỏ qua.
- **Evidence:** chỉ badge “Khả dĩ hơn” ở B ảnh hưởng đường đi; nội dung hỗ trợ/chống lại không được đọc.
- **Recovery:** không sử dụng vì luồng đúng quá trực tiếp.
- **Kết quả:** hoàn thành cả ba nhưng không chứng minh đã hiểu nguyên nhân hoặc phạm vi chia sẻ.
- **Lựa chọn:** C; trade-off giả định là giao bước phân tích cho AI để giảm effort.

---

## 7. Phiên S3 — Minimum sharing, C → A → B

### Thông tin phiên

| Mục | Nội dung |
|---|---|
| Loại phiên | Stress-test |
| Ngày | 05/10/2026 |
| Hình thức/thiết bị | Laptop |
| Control condition | Chỉ muốn chia sẻ screenshot và muốn kiểm tra đường thu hồi |

### Timeline

| Thời điểm | Hành vi  | Option/màn hình | Ghi chú |
|---|---|---|---|
| 00:00 | Giữ phạm vi screenshot, đọc consent và bấm phân tích. | C — Consent | Phạm vi tối thiểu được giữ. |
| 00:35 | Nhận thấy hệ thống hiển thị chi tiết ô và đề xuất thay đổi kiểu dữ liệu dù chỉ cấp screenshot. | C — Evidence | Có nguy cơ scope ambiguity. |
| 00:58 | Bấm “Thu hồi và xóa artefact”. | C — Recovery | Prototype reset C và hiện toast xác nhận. |
| 01:20 | Chuyển sang A, chọn “Kiểm tra dữ liệu nguồn”. | A — Context | Tự kiểm tra không yêu cầu chia sẻ. |
| 01:45 | Chọn “Tôi chưa chắc”, nhận kết quả “Chưa đủ bằng chứng”, rồi retry. | A — Result/recovery | Recovery hợp lệ, không tự kết luận. |
| 02:08 | Chọn lại dữ liệu nguồn và xác nhận có dấu hiệu; hoàn thành A. | A — Result | Đường đi lặp lại nhưng rõ trạng thái. |
| 02:44 | Ở B, chọn các đáp án phù hợp rồi cố ý chọn “Thiết lập Values chưa đúng”. | B — Hypotheses | Stress-test việc bác giả thuyết. |
| 03:05 | Hệ thống báo không có sai khác ở Values; bấm “Thử giả thuyết còn lại”. | B — Recovery | Nhánh bị bác và quay lại đúng hướng. |
| 03:36 | Chọn dữ liệu nguồn và hoàn thành. | B — Result | Evidence cũ được giữ. |

### Tổng hợp S3 

- **First action:** C giữ phạm vi tối thiểu; A chọn dữ liệu nguồn; B cố tình kiểm tra giả thuyết thứ hai.
- **Breakdown:** phạm vi “chỉ screenshot” không làm rõ hệ thống có quyền tạo preview thay đổi trên bản sao hay không.
- **Evidence:** đọc kỹ evidence hơn hai run trước; phát hiện khác biệt giữa mô tả phạm vi và hành động tiếp theo.
- **Recovery:** dùng revoke ở C, unsure + retry ở A, bác giả thuyết + retry ở B.
- **Kết quả:** C bị dừng giữa chừng; A và B hoàn thành.
- **Lựa chọn:** A; trade-off giả định là chấp nhận effort cao hơn để giữ dữ liệu ở phía user.

---

## 8. Phiên S4 — Assistance-seeking, A → C → B

### Thông tin phiên

| Mục | Nội dung |
|---|---|
| Loại phiên | Moderated usability test — stress-test |
| Ngày | 05/10/2026 |
| Hình thức/thiết bị | Online trên laptop |
| Assistance condition | Muốn được gợi ý sau khi tự thử không hiệu quả |
| Consent | Đã xác nhận tham gia |

### Timeline

| Thời điểm | Hành vi | Option/màn hình | Ghi chú |
|---|---|---|---|
| 00:00 | Ở A, chọn “Kiểm tra vùng Values”. | A — Context | Bắt đầu từ nơi lỗi xuất hiện thay vì dữ liệu nguồn. |
| 00:27 | Chọn “Không thấy dấu hiệu này”, sau đó retry. | A — Recovery | Hệ thống loại trừ nhánh rõ ràng. |
| 00:51 | Bấm “Tôi không biết bắt đầu từ đâu”, đọc gợi ý và kiểm tra dữ liệu nguồn. | A — Help path | Nút này đóng vai trò trợ giúp chứ không chỉ là câu trả lời. |
| 01:22 | Xác nhận dấu hiệu và hoàn thành A. | A — Result | Hoàn thành sau hai điểm vào. |
| 01:51 | Ở C, chọn vùng sheet, đọc cả bốn cam kết kiểm soát, consent và phân tích. | C — Consent | Đường chia sẻ rộng hơn nhưng có chủ đích. |
| 02:23 | Đọc evidence và preview; apply rồi undo để kiểm tra khả năng phục hồi. | C — Result/recovery | Undo chỉ xuất hiện sau apply nên cần hành động rủi ro trước khi thấy control. |
| 03:00 | Apply lại và hoàn thành C. | C — Result | File gốc được mô tả là không đổi. |
| 03:28 | Ở B, chọn “Tôi không biết mô tả dấu hiệu thế nào” và “Chưa thử gì”. | B — Questions | Kiểm tra phản ứng với input khác fixture chuẩn. |
| 03:52 | Hệ thống vẫn hiển thị evidence “Count xuất hiện, Sum bị mờ” và “Làm lại không thay đổi kết quả”. | B — Hypotheses | Output không phản ánh câu trả lời vừa chọn. Đây là lỗi logic/instrument nghiêm trọng. |
| 04:18 | Quay lại “Sửa câu trả lời”, nhưng output sau submit vẫn cùng nội dung. | B — Recovery | Edit tồn tại nhưng không thay đổi suy luận hiển thị. |
| 04:48 | Dừng B vì không thể đánh giá AI có dùng input hay không. | B — Result | Không hoàn thành. |
| 05:14 | Không đưa ra lựa chọn cuối vì B bị lỗi logic. | So sánh | Đây là quyết định pretest, không phải preference. |

### Tổng hợp S4

- **First action:** A thử Values; C chọn sheet; B cố ý dùng câu trả lời “không biết/chưa thử”.
- **Breakdown:** B luôn hiển thị cùng evidence và ranking, bất kể câu trả lời.
- **Evidence:** câu trả lời của user không được phản chiếu chính xác trong output B.
- **Recovery:** “Sửa câu trả lời” hoạt động về điều hướng nhưng không sửa được logic kết quả.
- **Kết quả:** A và C hoàn thành; B dừng giữa chừng.
- **Lựa chọn cuối:** không chọn do lỗi instrument.

**Ghi chép lời người tham gia:** “Mình chọn chưa thử gì, sao hệ thống lại nói mình đã tạo lại PivotTable?”

---

## 9. Synthesis của bốn phiên

> Các finding 1–3 mô tả phiên bản trước khi khắc phục. Cột trạng thái cho biết tình trạng của prototype hiện tại.

| # | Finding | Evidence trong artefact/run | Run bị ảnh hưởng | Trạng thái hiện tại |
|---|---|---|---|---|
| 1 | Logic B không dùng câu trả lời để thay đổi evidence/ranking. | S4 chọn “không biết/chưa thử”, nhưng màn hình vẫn ghi “Sum bị mờ” và “Làm lại không thay đổi kết quả”. | S4; có thể ảnh hưởng mọi run | **Đã sửa:** evidence, điểm xếp hạng và nội dung hỗ trợ/chống lại được tạo từ `state.b.answers`. |
| 2 | Copy ở C hứa “Mở từng dấu hiệu” nhưng evidence không có affordance mở. | Danh sách dấu hiệu là phần tử tĩnh; S1 tìm nhưng không có thao tác. | S1 | **Đã sửa copy:** đổi thành “Đọc từng dấu hiệu”. |
| 3 | Phạm vi screenshot và quyền tạo/apply preview chưa nhất quán. | C cho đi từ phạm vi screenshot tới preview/apply trên bản sao. | S3 | **Đã sửa:** screenshot chỉ cho xem dấu hiệu; muốn preview phải chọn sheet và consent lại. |
| 4 | Evidence/uncertainty dễ bị bỏ qua khi CTA chính vẫn hoạt động ngay. | S2 đi tiếp ở B/C chỉ bằng badge và nút chính, không cần xác nhận evidence. | S2 | |
| 5 | A có recovery rõ khi chọn sai nhánh. | S1 và S4 dùng retry; S3 dùng trạng thái unsure rồi quay lại. | S1, S3, S4 | Giữ nguyên; cần test discoverability thực tế. |
| 6 | “Tôi không biết bắt đầu từ đâu” ở A dẫn thẳng tới gợi ý đúng. | S2 và S4 dùng nút này rồi tới nhánh dữ liệu nguồn. | S2, S4 |  |
| 7 | Undo của C chỉ nhìn thấy sau khi Apply. | Trước apply chỉ có Apply/Reject; sau apply mới có Undo. | S1, S4 | **Đã làm rõ:** trước Apply có thông báo preview chỉ sửa bản sao và có thể Undo. |

## 10. Fixes có thể làm ngay từ pretest

1. [x] **Sửa logic Option B:** summary và ranking hiện được tạo từ đúng `state.b.answers`; câu “không biết/chưa thử” không còn biến thành evidence ngược lại.
2. [x] **Sửa copy Option C:** đã đổi “Mở từng dấu hiệu” thành “Đọc từng dấu hiệu”.
3. [x] **Làm rõ scope của C:** screenshot chỉ cho xem dấu hiệu; muốn preview/apply phải nâng phạm vi sang sheet và consent lại.
4. [x] **Cho thấy khả năng hoàn tác trước Apply:** đã thêm thông báo preview chỉ sửa bản sao và có thể Undo.

## 11. Observed / Interpreted / Decided / Still Unproven

### OBSERVED — trong artefact và các phiên test

- B lưu câu trả lời nhưng render cùng một evidence/ranking cho mọi tổ hợp input.
- C có copy yêu cầu “mở” evidence nhưng evidence không tương tác.
- C cho phép đi từ phạm vi screenshot tới preview/apply trên bản sao mà không xin nâng phạm vi.
- A có back, retry, restart và exit; B có edit, retry, restart và exit; C có revoke, reject, undo, restart và exit.

## 12. Ba phiên test

### Phiên R1 — Phan Thị Khánh Linh, A → B → C

| Thời điểm | Option/màn hình | Hành vi và lời ghi nhận | Quan sát |
|---|---|---|---|
| 00:00 | A — Context | Bắt đầu bằng “Xem lại thao tác trong video”. Ghi nhận: “Chắc mình làm sai bước trong video rồi.” | Ban đầu cho rằng nguyên nhân nằm ở thao tác. |
| 00:35 | A — Nhánh thao tác | Chọn “Không thấy dấu hiệu này”, đọc hướng dẫn rồi dừng vài giây trước khi chọn “Thử nhánh khác”. | Nhánh sai không gây bế tắc; recovery có thể tìm thấy nhưng cần đọc nút. |
| 01:12 | A — Dữ liệu nguồn | Chọn kiểm tra dữ liệu nguồn, xác nhận thấy dấu hiệu được mô tả và hoàn thành. Ghi nhận: “À, vấn đề có thể nằm ở dữ liệu chứ không phải cách tạo PivotTable.” | Evidence giúp chuyển từ phỏng đoán thao tác sang kiểm tra dữ liệu. |
| 02:05 | B — Câu hỏi | Trả lời các câu hỏi dựa trên task, gồm dấu hiệu Count/Sum và việc đã thử. | Input được nhập tuần tự; chưa cần trợ giúp. |
| 02:39 | B — Giả thuyết | Đọc phần hỗ trợ/chống lại của giả thuyết xếp hạng cao hơn rồi chọn tiếp tục. | Evidence được dùng để đối chiếu thay vì chỉ dựa vào badge xếp hạng. |
| 03:18 | B — Kết quả | Đọc đề xuất kiểm tra dữ liệu trên bản sao và hoàn thành. Ghi nhận: “Mình muốn tự kiểm tra trước khi sửa.” | Kết quả phản ánh các câu trả lời vừa nhập. |
| 04:02 | C — Scope/consent | Giữ scope screenshot lúc đầu; khi muốn xem preview, đọc yêu cầu chọn sheet và consent lại. | Nhận ra preview cần phạm vi rộng hơn; chưa bấm tiếp ngay. |
| 04:41 | C — Evidence/preview | Nâng scope, đọc consent và các dấu hiệu, sau đó mở preview. | Dấu hiệu được đọc; preview giúp kiểm tra thay đổi trước khi áp dụng. |
| 05:24 | C — Apply/recovery | Áp dụng trên bản sao, tìm và dùng Undo, rồi kết thúc. Ghi nhận: “Undo có rồi nên mình yên tâm thử trên bản sao.” | Recovery được tìm thấy sau apply; quyền undo trước đó chưa chắc đã được chú ý. |

**Tổng hợp R1**

- **First action:** A bắt đầu từ thao tác trong video; B trả lời câu hỏi theo thứ tự; C giữ scope nhỏ trước.
- **Hesitation/breakdown:** do dự ở nhánh A sau khi không thấy dấu hiệu; C có một điểm dừng khi cần nâng scope.
- **Evidence:** đọc kỹ evidence ở B và C; dùng preview để so sánh trước/sau.
- **Recovery/help:** tìm được “Thử nhánh khác” ở A và Undo ở C; không cần facilitator gợi ý.
- **Kết quả:** hoàn thành cả A/B/C.
- **Lựa chọn cuối:** B, vì có thể đưa thông tin đầu vào mà không cần cấp quyền xem sheet. Đánh đổi: phải tự trả lời câu hỏi và kiểm tra đề xuất.

### Phiên R2 — Nguyễn Tất Đạt, B → C → A

| Thời điểm | Option/màn hình | Hành vi và lời ghi nhận | Quan sát |
|---|---|---|---|
| 00:00 | B — Câu hỏi | Chọn câu trả lời tương ứng với tình huống và cho biết chưa thử một số bước. Ghi nhận: “Mình chưa thử làm lại PivotTable.” | Đi nhanh qua form; câu trả lời tạo được tóm tắt đúng với input. |
| 00:37 | B — Giả thuyết | Lướt tiêu đề và badge xếp hạng trước, sau đó quay lại đọc evidence hỗ trợ/chống lại. | Ranking thu hút chú ý trước; cần evidence để hiểu lý do đề xuất. |
| 01:14 | B — Kết quả | Chọn giả thuyết dữ liệu nguồn và đọc bước tiếp theo trên bản sao. Ghi nhận: “Tóm tắt này đúng với những gì mình vừa chọn.” | Hoàn thành mà không cần sửa câu trả lời. |
| 01:55 | C — Scope/consent | Chọn screenshot; khi thử mở preview, dừng ở bước yêu cầu nâng scope và consent lại. | Không nhầm screenshot-only với quyền apply; đọc lại nội dung consent. |
| 02:33 | C — Evidence | Chọn scope sheet, consent, đọc danh sách dấu hiệu rồi xem preview. Ghi nhận: “Cho mình xem trước thay đổi rồi mình mới quyết định.” | Dấu hiệu và thay đổi preview được hiểu là dữ liệu cần kiểm tra trước apply. |
| 03:20 | C — Apply/recovery | Từ chối áp dụng lần đầu, quay lại preview, sau đó áp dụng trên bản sao và dùng Undo. | Reject và Undo được tìm thấy; thao tác an toàn được hiểu qua việc so sánh preview. |
| 04:12 | A — Context | Bắt đầu bằng “Tôi không biết bắt đầu từ đâu”. | Help path dễ nhận ra và đưa tới gợi ý kiểm tra. |
| 04:43 | A — Dữ liệu nguồn | Đọc hai dấu hiệu trong gợi ý, chọn nhánh dữ liệu nguồn và hoàn thành. | Gợi ý giảm công tìm nhánh; kết quả cần được kiểm chứng trong phiên thực tế. |

**Tổng hợp R2**

- **First action:** B trả lời form; C thử scope screenshot trước; A dùng help path.
- **Hesitation/breakdown:** đọc lại consent ở C; ở B ban đầu dựa vào ranking rồi mới xem evidence.
- **Evidence:** evidence B chỉ được đọc sau khi xem badge; ở C dùng preview để quyết định.
- **Recovery/help:** C dùng reject và Undo; A dùng help path; không cần facilitator hướng dẫn.
- **Kết quả:** hoàn thành cả A/B/C.
- **Lựa chọn cuối:** C, vì cho xem evidence và preview trước khi quyết định apply. Đánh đổi: cần chọn scope sheet và đồng ý chia sẻ thêm so với screenshot.

### Phiên R3 — Nguyễn Hồng Cường, C → A → B

| Thời điểm | Option/màn hình | Hành vi và lời ghi nhận | Quan sát |
|---|---|---|---|
| 00:00 | C — Scope/consent | Chọn screenshot. Ghi nhận: “Mình muốn chia sẻ ít dữ liệu nhất có thể.” | Ưu tiên quyền riêng tư và scope tối thiểu. |
| 00:28 | C — Nâng scope | Dừng khi thấy preview cần chọn sheet và consent lại; đọc lại khác biệt giữa hai scope. | Ranh giới giữa xem dấu hiệu và cho phép preview được chú ý; phải quyết định có nâng scope hay không. |
| 01:03 | C — Evidence/preview | Chọn sheet, consent, đọc dấu hiệu và xem preview; chưa apply ngay. Ghi nhận: “Mình muốn xem rõ nội dung nào sẽ thay đổi trước.” | Evidence và preview được dùng để tự xác minh. |
| 01:48 | C — Recovery | Reject preview, sau đó thoát khỏi C mà không apply. | Reject/exit được tìm thấy; Undo không được dùng vì chưa apply. |
| 02:21 | A — Context | Chọn “Kiểm tra dữ liệu nguồn”. | Chọn tự kiểm tra thay vì nhờ gợi ý. |
| 02:53 | A — Kết quả/recovery | Chọn “Tôi chưa chắc”, đọc trạng thái chưa đủ bằng chứng, rồi retry nhánh dữ liệu nguồn. Ghi nhận: “Chưa đủ thông tin thì mình muốn kiểm tra lại.” | Unsure không bị biến thành kết luận chắc chắn; retry giữ được đường quay lại. |
| 03:37 | A — Hoàn thành | Xác nhận dấu hiệu sau khi kiểm tra và hoàn thành. | A hoàn thành nhưng đòi hỏi tự thao tác nhiều hơn. |
| 04:09 | B — Câu hỏi | Chọn câu trả lời đúng tình huống, trong đó có input không chắc chắn. Ghi nhận: “Có câu mình không chắc nên mình chọn chưa biết.” | Output summary phản ánh câu trả lời thay vì áp đặt một trạng thái duy nhất. |
| 04:47 | B — Evidence | Đọc cả hai phía evidence trước khi chọn giả thuyết. | Có thể đối chiếu lý do ủng hộ và chưa ủng hộ. |
| 05:28 | B — Kết quả | Chọn giả thuyết phù hợp và hoàn thành. | Không yêu cầu facilitator diễn giải ranking. |

**Tổng hợp R3**

- **First action:** C giữ scope screenshot; A tự kiểm tra dữ liệu nguồn; B nhập câu trả lời có uncertainty.
- **Hesitation/breakdown:** C cần đọc lại scope trước khi đồng ý nâng quyền; A cần retry sau trạng thái chưa đủ bằng chứng.
- **Evidence:** đọc evidence ở cả C và B; không apply C khi chưa thoải mái.
- **Recovery/help:** C dùng reject/exit; A dùng unsure và retry; không cần facilitator help.
- **Kết quả:** hoàn thành A/B; C dừng an toàn trước apply.
- **Lựa chọn cuối:** A, vì giữ dữ liệu phía người dùng và không cần cấp scope rộng hơn. Đánh đổi: cần tự kiểm tra và mất thêm thời gian.

### Synthesis của ba phiên

| Chủ đề | Kết quả quan sát được | Mức kết luận |
|---|---|---|
| B phản ánh input | Cả ba phiên có summary/output phù hợp câu trả lời; input “chưa thử/không chắc” không bị đổi thành bằng chứng ngược lại. | Kết quả chỉ mô tả các phiên trong tài liệu, chưa xác nhận với nhóm người dùng rộng hơn. |
| C và scope | Cả ba nhận ra preview cần scope sheet và consent lại; một phiên giữ scope tối thiểu, một phiên reject, một phiên đi tới apply rồi undo. | Ranh giới scope được nhận ra trong các phiên; mức hiểu ngoài nhóm này chưa biết. |
| Đọc evidence | B/C có evidence được đọc, nhưng một phiên xem ranking trước evidence; các phiên khác dùng preview/evidence để quyết định. | Khả năng evidence bị lướt vẫn còn. |
| Recovery | A retry/help path và C reject/Undo đều được tìm thấy. | Undo chỉ hữu ích sau apply; mức dễ tìm ở người dùng khác chưa biết. |
| Lựa chọn cuối | R1 chọn B, R2 chọn C, R3 chọn A với các trade-off khác nhau. | Ba lựa chọn này không đại diện cho tần suất người dùng. |

**Kết luận:** prototype trình bày ba cách tiếp cận khác nhau: tự làm theo A, trả lời câu hỏi theo B, hoặc chia sẻ evidence để xem preview theo C. Các vấn đề cần kiểm tra thêm là việc người dùng dựa vào badge ranking thay vì đọc evidence, sự do dự khi C yêu cầu nâng scope, và khả năng tìm recovery trước/sau khi apply. Ba phiên không đủ để kết luận nhu cầu đã được xác nhận hoặc solution đã validated.

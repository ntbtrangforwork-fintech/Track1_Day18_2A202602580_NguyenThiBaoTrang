# Track1_Day17_2A202602580_NguyenThiBaoTrang

## 1. Thông tin cá nhân và nhóm

| Mục | Nội dung |
|---|---|
| MHV | 2A202602580 |
| Họ tên | Nguyễn Thị Bảo Trang |
| Tên nhóm | AAA |
| Thành viên | Đàm Quang Trung, Đặng Văn Thái Anh, Nguyễn Thị Bảo Trang |
| Case đã chọn | **Case A — AI Tutor: Diagnostic Refresher** |

**Cấu trúc phần nộp:**

    Track1_Day17_2A202602580_NguyenThiBaoTrang/
    ├── README.md
    └── interview/
        ├── notes.md
        └── recording.m4a

---

## 2. Problem Hypothesis Brief

*Kết quả Chặng 1 của nhóm, được tóm tắt trực tiếp trong README cá nhân.*

### 2.1. Solution → Capability

**Solution directive:** Thêm nút “Tôi vẫn chưa hiểu” vào bài học. Khi học viên bấm, AI Tutor sử dụng bài hiện tại, câu trả lời gần đây và lịch sử học tập để đặt 2–3 câu hỏi chẩn đoán, chọn một khái niệm nền để ôn, tạo phần giải thích ngắn, rồi đưa học viên trở về bài đang học.

**Giả định ngầm lớn nhất:** Việc học viên không hiểu bài hiện tại thường bắt nguồn từ một khoảng trống kiến thức nền có thể xác định và ôn nhanh ngay trong luồng học.

**Capability trung tính:** Giúp học viên đang bị kẹt ở một phần bài học tìm ra điều mình còn vướng và lấp đúng chỗ đó vừa đủ để tiếp tục bài hiện tại, với ít gián đoạn và ít công sức.

Capability cố ý không nhắc tới “kiến thức nền”, vì đây là giả định của directive. Nếu đưa giả định đó vào capability, nhóm sẽ loại Pain B trước khi điều tra.

### 2.2. Change

> Solution → Học viên nhận ra mình chưa hiểu và chủ động tìm trợ giúp → Học viên xác định được điểm vướng và hiểu lại đúng chỗ đó → Học viên quay lại bài hiện tại, làm được phần tiếp theo → Outcome: ít bị kẹt, ít bỏ dở và hoàn thành bài tốt hơn.

| Loại | Thay đổi |
|---|---|
| Output — team tạo ra | Chẩn đoán điểm vướng, chọn nội dung cần ôn, tạo phần giải thích ngắn |
| Behavior change — user phải thay đổi | Nhận ra mình chưa hiểu; chủ động tìm hỗ trợ; tiếp nhận phần ôn; quay lại bài |
| Outcome — team chỉ có thể ảnh hưởng | Học viên hiểu hơn, ít bị kẹt và hoàn thành bài |

**Mắt xích yếu nhất:** học viên phải tự nhận ra và thừa nhận mình chưa hiểu. Nếu họ tưởng mình đã hiểu hoặc ngại yêu cầu hỗ trợ, solution không tạo ra outcome.

### 2.3. Actor

| Actor | Họ đang làm gì? | Pain hoặc hậu quả có thể có | Lợi ích có thể nhận |
|---|---|---|---|
| Học viên | Xem bài, làm bài tập, cố hiểu để tiếp tục | Bị kẹt, mất thời gian tự tìm, bỏ qua hoặc dừng học | Hiểu điểm vướng và tiếp tục bài |
| Instructor | Thiết kế nội dung, theo dõi tiến độ, trả lời câu hỏi | Không biết học viên kẹt ở đâu; trả lời câu hỏi lặp lại | Có thông tin về điểm kẹt |
| Coach / TA | Hỗ trợ trực tiếp hoặc trên forum | Giải thích lại các vấn đề tương tự nhiều lần | Tập trung vào trường hợp cần hỗ trợ sâu |
| Người thiết kế nội dung | Xây bài và sắp thứ tự khái niệm | Không nhận ra bài thiếu phần nền hoặc giải thích chưa tốt | Biết bài nào cần sửa |
| VLearn / quản lý đào tạo | Theo dõi completion và chất lượng khoá | Học viên bỏ dở hoặc đánh giá thấp | Cải thiện kết quả học tập và completion |

**Actor điều tra trước:** học viên học khoá trực tuyến theo nhịp cá nhân. Đây là người trực tiếp trải nghiệm pain, sử dụng solution và phải thay đổi hành vi để outcome xảy ra.

### 2.4. Situation & Job

**Situation:** Khi đang học một bài trực tuyến theo nhịp cá nhân và gặp một đoạn không theo kịp, học viên cố hiểu đủ để tiếp tục bằng cách xem lại, quay về bài trước, tìm nguồn ngoài, hỏi người khác hoặc bỏ qua.

**JTBD Hypothesis:**

> Khi tôi đang học một bài trực tuyến và gặp một đoạn không thể nối với điều mình đã biết, tôi muốn xác định nhanh phần kiến thức hoặc bước suy luận mình đang thiếu và ôn vừa đủ, để có thể quay lại tiếp tục bài hiện tại mà không mất mạch học hoặc tìm kiếm lan man.

- **Functional:** xác định điểm vướng và hiểu đủ để tiếp tục.
- **Emotional:** lấy lại cảm giác kiểm soát, không thấy mình kém.
- **Social:** tránh phải thừa nhận mình không theo kịp — chỉ giữ nếu evidence cho thấy.

### 2.5. Pain

**Pain A — không xác định được điểm thiếu, điều tra trước:** Học viên không xác định được kiến thức hoặc bước suy luận còn thiếu nên không biết ôn từ đâu. Họ đọc lại nhiều lần, dò nhiều bài cũ hoặc tìm kiếm lan man, gây mất thời gian và có thể bỏ qua phần chưa hiểu.

**Pain B — cách giải thích không phù hợp, cạnh tranh:** Học viên có thể đã đủ kiến thức nền nhưng cách giải thích hiện tại quá nhanh, trừu tượng, thiếu ví dụ hoặc không khớp ngữ cảnh. Họ phải tìm cách giải thích khác và bị mất mạch học.

**Pain C — không nhận ra hoặc ngại thừa nhận:** Học viên tưởng mình đã hiểu hoặc ngại yêu cầu trợ giúp, chỉ phát hiện vấn đề khi làm bài sai.

**Pain thứ cấp:** phải rời bài để tìm kiếm; nguồn ngoài không khớp ký hiệu, trình độ hoặc ngữ cảnh của bài.

**Vì sao chọn A:** directive gốc được xây trên giả định A, nên đây là giả định rủi ro nhất cần kiểm tra. Nếu B hoặc C trội hơn, solution có thể chẩn đoán sai hoặc không được sử dụng.

### 2.6. Evidence Map

| Cần kiểm tra | Evidence làm nhóm tin hơn | Evidence làm nhóm nghi ngờ hoặc bác bỏ |
|---|---|---|
| Situation có thật | Kể được một lần cụ thể trong 7 ngày gần đây; nhớ bài và điểm bị kẹt | Chỉ nói chung chung hoặc không có sự kiện gần đây |
| Pain có ý nghĩa | Xem lại nhiều lần, chuyển nguồn, mất thời gian đáng kể | Tự hiểu sau vài phút và không coi là vấn đề |
| Không xác định được điểm thiếu | Không biết bắt đầu ôn từ đâu; quay lại quá nhiều nội dung | Gọi đúng tên thứ còn thiếu và tự ôn nhanh |
| Workaround tồn tại | Kể được trình tự các cách đã thử và kết quả từng bước | Không làm gì thêm vì vấn đề không quan trọng |
| Consequence tồn tại | Gián đoạn, bỏ qua, dừng buổi học hoặc nộp khi chưa hiểu | Không ảnh hưởng tiến độ hay kết quả |
| Pattern có lặp | Gặp tình huống tương tự ở nhiều bài hoặc chủ đề | Chỉ xảy ra một lần trong hoàn cảnh đặc biệt |

**Câu tách A/B/C:** “Lần gần nhất bạn bị kẹt, cuối cùng điều gì đã giúp bạn hiểu?”

- Ôn lại kiến thức cũ → nghiêng về **A**.
- Một ví dụ hoặc cách giải thích khác → nghiêng về **B**.
- Chỉ phát hiện chưa hiểu khi làm bài sai → nghiêng về **C**.

### 2.7. Problem Hypothesis

> Chúng tôi tin rằng **học viên đang học khoá trực tuyến theo nhịp cá nhân**, khi gặp một đoạn không hiểu trong bài hiện tại, **không xác định được kiến thức nền hoặc bước suy luận cụ thể mình đang thiếu**, nên không biết ôn lại từ đâu. Vì vậy họ đọc lại nhiều lần, dò lại bài cũ hoặc tìm nguồn giải thích bên ngoài, mất thời gian đáng kể, gián đoạn luồng học và đôi khi bỏ qua phần chưa hiểu hoặc dừng buổi học.

**Phải đúng để hypothesis đứng vững:** situation có thật và lặp lại; học viên thực sự không xác định được điểm thiếu; workaround tốn effort; có hậu quả thật; ôn kiến thức cũ là điều giúp họ thoát kẹt; người học đã chủ động tìm hỗ trợ trong quá khứ.

**Có thể bị sửa hoặc bác bỏ khi:** học viên biết rõ mình thiếu gì và chỉ cần ví dụ khác; workaround hiện tại đã đủ tốt; vấn đề chỉ xảy ra một lần; nguyên nhân nằm ở cách trình bày, động lực, dữ liệu hoặc lỗi kỹ thuật; ôn kiến thức cũ vẫn không giúp.

**Giới hạn:** đây là giả thuyết, chưa chứng minh học viên cần nút “Tôi vẫn chưa hiểu” hoặc AI Tutor.

### 2.8. Solution Parking Lot

| # | Hướng giải quyết | Nhánh | AI / Không AI |
|---|---|---|---|
| 1 | AI Tutor chẩn đoán bằng 2–3 câu và tạo phần ôn khái niệm nền | A | AI |
| 2 | AI chủ động gợi ý phần cần ôn dựa trên lịch sử học tập | A, C | AI |
| 3 | AI tạo giải thích nhiều mức độ và ví dụ phù hợp ngữ cảnh | B | AI |
| 4 | Prerequisite Map tĩnh trong từng bài, có liên kết tới phần ôn | A | Không AI |
| 5 | Self-check 3–5 câu trước bài mới | A, C | Không AI |
| 6 | Peer Q&A / Mentor board gắn với từng bài hoặc khái niệm | B | Không AI |
| 7 | Thống kê điểm kẹt để người thiết kế nội dung sửa bài | B | Không AI |

---

## 3. Conversation Guide phiên bản cuối

*Bản v2 được sửa sau khi nghe lại lượt phỏng vấn P03 ngày 04/10/2026. Các thay đổi chính được ghi tại mục 3.10.*

### 3.1. Big 3

| # | Điều cần học | Evidence cần tìm | Điều khiến nhóm xem lại giả thuyết |
|---|---|---|---|
| 1 ⚠️ Đáng sợ | Người học thực sự vướng ở đâu, nhận ra thế nào và điều gì cuối cùng giúp họ thoát kẹt? | Sự kiện cụ thể, phỏng đoán nguyên nhân, điều tạo tiến triển | Thoát kẹt nhờ ví dụ/cách giải thích khác hoặc dữ liệu thực tế, không phải ôn nền |
| 2 | Họ làm gì theo thứ tự, mỗi workaround tốn bao lâu và giúp đến đâu? | Timeline, nguồn đã dùng, từ khoá, thời gian, lý do đổi cách | Workaround hiện tại nhanh, đáng tin cậy và ít gián đoạn |
| 3 | Hậu quả thực tế và mức độ lặp lại là gì? | Tiếp tục, bỏ qua, dừng, thời điểm quay lại, lần tương tự trước đó | Không có hậu quả đáng kể hoặc chỉ xảy ra một lần |

### 3.2. Tiêu chí tuyển người

Người tham gia phải từng **tự học online theo nhịp cá nhân** và gặp một phần cụ thể không hiểu trong **7 ngày gần đây**.

**Recruitment check:**

> “Trong bảy ngày gần đây, bạn có lần nào đang học một nội dung trực tuyến mà không hiểu một phần cụ thể không? Lần gần nhất là khi nào?”

Nếu người tham gia chỉ kể một buổi học live hoặc không có sự kiện phù hợp, nhóm cần đổi người thay vì ép họ nhớ một câu chuyện không tồn tại.

### 3.3. Xin phép và lời mở đầu

> “Cảm ơn bạn đã dành thời gian. Mình đang tìm hiểu trải nghiệm tự học online và cách mọi người xử lý khi gặp một phần chưa hiểu. Đây không phải bài kiểm tra và không có câu trả lời đúng hay sai. Bạn có thể bỏ qua câu hỏi hoặc dừng bất cứ lúc nào.”

> “Bạn có đồng ý cho mình ghi âm cuộc trao đổi khoảng 15 phút này không? Bản ghi chỉ dùng để nghe lại và phục vụ bài học; mình không chia sẻ công khai.”

**Chỉ bật ghi âm sau khi người tham gia đồng ý.**

### 3.4. Story opener

> “Kể mình nghe về lần gần nhất trong bảy ngày qua bạn đang học một nội dung trực tuyến mà không hiểu một phần cụ thể được không?”

Các câu dựng bối cảnh:

- “Lúc đó bạn đang ở đâu, đang học phần nào và muốn hoàn thành việc gì?”
- “Chi tiết nào khiến bạn nhận ra mình đã bị kẹt?”
- “Ngay trước lúc đó bạn đang xem hoặc làm gì?”

### 3.5. Big 3 Questions

| # | Câu hỏi chính |
|---|---|
| 1 | “Lúc ấy bạn nghĩ nguyên nhân nằm ở đâu?” → “Bạn kiểm tra phỏng đoán đó thế nào?” → “Cuối cùng điều gì giúp bạn tiếp tục?” |
| 2 | “Việc đầu tiên bạn làm là gì?” → “Rồi chuyện gì xảy ra?” → “Điều gì khiến bạn chuyển sang cách tiếp theo?” |
| 3 | “Việc này ảnh hưởng thế nào đến điều bạn định hoàn thành?” → “Bạn quay lại khi nào?” → “Lần gần nhất trước đó có chuyện tương tự là khi nào?” |

**Kết thúc:** “Có chi tiết thực tế nào mình chưa hỏi nhưng cần biết để hiểu đúng câu chuyện không?”

### 3.6. Probe bank

| Khi nghe thấy | Hỏi tiếp |
|---|---|
| Tua hoặc đọc lại | “Bạn xem lại mấy lần? Lần cuối có gì khác?” |
| Google / YouTube | “Bạn nhớ đã tìm từ khoá gì không?” |
| ChatGPT / AI | “Bạn đã hỏi câu gì? Đọc xong thì làm gì tiếp?” |
| Hỏi bạn / giảng viên | “Bạn hỏi gì? Điều gì trong câu trả lời giúp bạn?” |
| Dùng nhiều workaround | “Bạn dùng mỗi cách trong bao lâu?” |
| Một nguồn có vẻ hữu ích | “Điều gì khiến bạn biết cách đó đã đủ để quay lại bài?” |
| Ví dụ hoặc dữ liệu khác bài học | “Nguồn đó giống và khác tình huống của bạn ở điểm nào?” |
| Có ý định bỏ qua hoặc dừng | “Ở thời điểm nào bạn đã cân nhắc quyết định đó?” |

### 3.7. Ba phản xạ khi data lệch

| Người tham gia đưa ra | Phản xạ | Cách quay lại evidence |
|---|---|---|
| Lời khen | Deflect | “Cảm ơn bạn. Quay lại lần vừa kể, sau đó bạn làm gì?” |
| Câu chung chung hoặc dự đoán tương lai | Anchor | “Lần gần nhất chuyện đó thực sự xảy ra là khi nào?” |
| Ý tưởng hoặc feature request | Dig | “Điều đó giúp bạn hoàn thành việc gì? Lần vừa rồi bạn đã xử lý ra sao?” |

**Không hỏi:**

- “Bạn có muốn AI chẩn đoán giúp không?”
- “Một nút trợ giúp trong bài có hữu ích không?”
- “Bạn thường làm gì khi không hiểu?”
- “Bạn thiếu kiến thức nền phải không?”
- “Vậy cách đó không hiệu quả đúng không?”

### 3.8. Tự rà soát

| Câu hỏi | Kết quả |
|---|---|
| Có câu nào làm lộ solution? | Không |
| Có hỏi ý kiến hoặc dự đoán tương lai? | Không |
| Story opener neo vào lần gần nhất? | Có |
| Ba nhóm câu hỏi nối trực tiếp với Big 3? | Có |
| Có câu có thể làm Pain A yếu đi? | Có — hỏi điều cuối cùng giúp người học tiếp tục và độ khớp ngữ cảnh |
| Có probe cho hành vi, effort và consequence? | Có |

### 3.9. Thông tin lượt phỏng vấn cá nhân

| Interviewer | Người tham gia | Đúng tiêu chí? | Bản ghi |
|---|---|---|---|
| Nguyễn Thị Bảo Trang | P03 — Phan Thị Khánh Linh | Có — kể một sự kiện tự học online xảy ra hôm trước | [recording.m4a](interview/recording.m4a) |

Interview notes và evidence có timestamp nằm trong [interview/notes.md](interview/notes.md).

### 3.10. Lịch sử sửa guide

| Phiên bản | Sửa ở đâu | Vì sao dựa trên bản ghi P03 |
|---|---|---|
| v1 → v2 | Chuẩn hoá lời xin phép ghi âm | Khoảng 00:08 có lời đồng ý “bạn cứ ghi đi”, nhưng lời mở đầu chưa nêu đủ mục đích và phạm vi sử dụng bản ghi |
| v1 → v2 | Hỏi thời gian sau từng workaround và tổng thời gian | Khoảng 01:38 chỉ lấy được 10 phút cho bước xem/làm lại; chưa hỏi tổng effort |
| v1 → v2 | Hỏi độ giống/khác giữa nguồn và tình huống thực tế | Khoảng 01:45–02:10, video ngoài không giải thích trường hợp nút Sum bị mờ |
| v1 → v2 | Xin xem artefact nếu người tham gia thoải mái | Khoảng 02:23–02:48, screenshot là artefact giúp đồng nghiệp chẩn đoán đúng |
| v1 → v2 | Bổ sung câu hỏi về lần tương tự trước đó | Bản ghi không có evidence về tần suất hoặc pattern |
| v1 → v2 | Hỏi thời điểm quay lại phần học bị bỏ | Khoảng 03:01–03:16, Khánh Linh nói không quay lại học sau khi hoàn thành báo cáo nhưng chưa rõ những ngày sau |

---

## 4. Practice Reflection — Nguyễn Thị Bảo Trang

*Reflection này dựa trên bản ghi thật dài 04 phút 18 giây của lượt P03 với Phan Thị Khánh Linh.*

### 4.1. Câu hỏi nào giúp người tham gia kể một tình huống cụ thể?

Story opener ở khoảng 00:28 — “Bạn kể mình nghe từ đầu được không? Hôm đó bạn muốn làm xong cái gì?” — giúp Khánh Linh mô tả rõ job: xem video PivotTable để hoàn thành báo cáo doanh thu cuối ngày.

Câu hỏi ở 00:51 về dấu hiệu biết kết quả sai tạo được evidence hành vi: Linh không chỉ cảm thấy kết quả “lạ” mà còn cộng thử dữ liệu gốc để xác nhận. Các câu hỏi tiếp theo về việc đầu tiên đã làm và cách chuyển workaround dựng được trình tự từ tua video, tạo lại PivotTable, tìm YouTube đến gửi screenshot vào nhóm chat.

Câu hỏi ở khoảng 03:27 về điều cuối cùng giúp thoát kẹt làm lộ evidence trái giả thuyết. Linh đã biết số có thể được lưu dạng text, nhưng không liên hệ kiến thức đó với triệu chứng PivotTable.

### 4.2. Tôi cần làm tốt hơn ở điểm nào?

- Lời xin phép ở đầu buổi chưa nêu rõ mục đích lưu bản ghi, phạm vi chia sẻ và quyền dừng.
- Buổi phỏng vấn chỉ dài 4 phút 18 giây, ngắn hơn mục tiêu 15 phút; tôi chuyển câu khá nhanh.
- Tôi chỉ hỏi được khoảng 10 phút cho bước xem và làm lại, chưa hỏi tổng thời gian từ lúc kẹt đến lúc giải quyết.
- Tôi chưa hỏi Khánh Linh xem chính xác bao nhiêu phút trong video YouTube 18 phút.
- Tôi chưa hỏi một sự kiện tương tự trước đó, nên không có evidence về tần suất.
- Tôi chưa xin xem screenshot hoặc lịch sử tìm kiếm nếu người tham gia thấy thoải mái.
- Tôi chưa hỏi Linh có quay lại phần video bị bỏ vào một ngày khác hay không.
- Cuối buổi tôi hỏi tên và mã sinh viên. Mã sinh viên của người tham gia không cần thiết cho mục tiêu nghiên cứu và không nên đưa vào notes công khai.

### 4.3. Sau khi nghe lại phỏng vấn, nhóm đã sửa Conversation Guide ở đâu và vì sao?

Sau khi nghe lại bản ghi, nhóm cần sửa sáu điểm:

1. Xin phép ghi âm bằng câu đầy đủ trước khi đi vào nội dung.
2. Hỏi thời gian của từng workaround và tổng thời gian.
3. Hỏi nguồn hướng dẫn giống và khác dữ liệu thực tế ở đâu.
4. Xin xem artefact như screenshot hoặc lịch sử tìm kiếm nếu người tham gia đồng ý.
5. Hỏi lần gần nhất trước đó để kiểm tra pattern.
6. Hỏi khi nào người học quay lại phần nội dung đã bỏ.

Lượt P03 cho thấy một nhánh đáng theo dõi: người học có thể đã biết kiến thức liên quan nhưng không nhận ra nó giải thích triệu chứng hiện tại. Một công cụ chỉ nhìn bài học và lịch sử học có thể không đủ nếu nguyên nhân nằm trong dữ liệu đầu vào thực tế.

### 4.4. Nhận định tạm thời từ P03

- **Pain A được ủng hộ một phần:** Khánh Linh không xác định đúng nguyên nhân và đã lặp lại thao tác trước khi tìm được điểm vướng.
- **Pain B/ngữ cảnh được ủng hộ:** video dùng trường hợp dữ liệu sạch và không giải thích tình huống nút Sum bị mờ.
- **Nhánh mới:** người học đã có kiến thức nhưng không liên hệ được với triệu chứng trong file thực tế.
- **Consequence:** báo cáo vẫn đúng hạn nhưng kế hoạch học bị dừng.
- **Giới hạn:** chỉ có một cuộc phỏng vấn, chưa có evidence về tần suất; không thể kết luận problem đã được validated.

---

## 5. AI Support Log

### 5.1. AI đã hỗ trợ gì?

- Đọc và hệ thống hoá yêu cầu trong plan.
- Rà soát sự liên kết giữa Problem Hypothesis, Big 3 và Conversation Guide.
- Gợi ý cách viết câu hỏi trung tính, tránh làm lộ AI Tutor hoặc nút “Tôi vẫn chưa hiểu”.
- Chép lời bản ghi tiếng Việt bằng mô hình chạy cục bộ và tạo timestamp theo đoạn.
- Hỗ trợ tổ chức và định dạng các tài liệu Markdown.

### 5.2. Điểm nào của AI có giới hạn?

- Transcript tự động nhận sai một số thuật ngữ như PivotTable, Count, Sum, Values và “text”, nên phải sửa theo ngữ cảnh.
- Mô hình không tự phân biệt chắc chắn hai người nói; vai interviewer và người tham gia được xác định theo trình tự câu hỏi–trả lời.
- Timestamp là mốc gần đúng theo đoạn âm thanh, không phải word-level timestamp.
- AI có thể ưu tiên chi tiết khớp giả thuyết sẵn có, nên cần giữ cả evidence làm hypothesis yếu đi.
- Một cuộc phỏng vấn không cung cấp evidence về prevalence hoặc mức độ ưu tiên của problem.

### 5.3. Tôi đã tự kiểm tra và điều chỉnh thế nào?

- Chặng 1 được đối chiếu với giả thuyết, Pain A/B/C và Evidence Map trước khi tóm tắt vào README.
- Tôi giữ Pain B và nhánh C để không ép mọi tình huống về “thiếu kiến thức nền”.
- Tôi chỉ giữ các chi tiết xuất hiện trong bản ghi và ghi “chưa rõ” cho tổng thời gian hoặc tần suất chưa được hỏi.
- Tôi dùng timestamp từ bản ghi thay vì tạo mốc giả.
- Tôi sửa thuật ngữ bị nhận dạng sai theo ngữ cảnh, nhưng không thêm hành động hoặc hậu quả mới.
- Tôi không đưa mã sinh viên của người tham gia vào notes vì không cần thiết cho mục tiêu nghiên cứu.
- Tôi tách fact, exact quote và interpretation trong [interview/notes.md](interview/notes.md).
- Tôi không gọi một cuộc phỏng vấn là validation.

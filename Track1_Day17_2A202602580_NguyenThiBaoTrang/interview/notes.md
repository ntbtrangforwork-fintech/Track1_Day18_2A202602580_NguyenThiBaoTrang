# Interview Notes — Nguyễn Thị Bảo Trang

## 1. Thông tin buổi phỏng vấn

| Mục | Nội dung |
|---|---|
| Interviewer | Nguyễn Thị Bảo Trang |
| MHV | 2A202602580 |
| Mã người tham gia | P03 |
| Người được phỏng vấn | Phan Thị Khánh Linh |
| Actor | Người tự học kỹ năng trực tuyến để hoàn thành công việc |
| Case | Case A — AI Tutor: Diagnostic Refresher |
| Ngày phỏng vấn | 04/10/2026 |
| Thời lượng bản ghi | 04 phút 18 giây |
| Đúng tiêu chí tuyển | Có — kể một tình huống tự học online xảy ra hôm trước |
| Đồng ý ghi âm | Có — khoảng 00:08, “Ừ được, bạn cứ ghi đi” |
| Bản ghi | interview/recording.m4a |

> Notes được lập từ bản ghi âm thật. Transcript tự động chỉ được dùng để hỗ trợ định vị; câu chữ dưới đây đã được đối chiếu theo ngữ cảnh. Timestamp là mốc gần đúng.

## 2. Bối cảnh và job

Khánh Linh xem video hướng dẫn PivotTable để hoàn thành báo cáo doanh thu cuối ngày. Trong video, khi kéo cột doanh thu vào vùng Values, Excel tự tính Sum. Với file thực tế, PivotTable lại hiển thị Count.

Job của Linh không chỉ là học PivotTable mà là hiểu và áp dụng đủ nhanh để hoàn thành báo cáo đúng hạn.

## 3. Timeline của câu chuyện

| Timestamp | Điều Khánh Linh kể | Ý nghĩa |
|---|---|---|
| 00:11–00:27 | Sự kiện xảy ra hôm trước; Linh xem video PivotTable để làm báo cáo nhưng kết quả không giống hướng dẫn. | Situation cụ thể, gần đây và đúng actor. |
| 00:28–00:51 | Linh cần hoàn thành báo cáo doanh thu cuối ngày. Video cho ra Sum nhưng file của Linh lại đếm số dòng. | Job và điểm vướng được xác định rõ. |
| 00:51–01:06 | Kết quả chỉ có vài trăm trong khi doanh thu phải lớn hơn; Linh cộng thử dữ liệu gốc để kiểm tra. | Có hành vi xác minh kết quả sai. |
| 01:06–01:19 | Linh cho rằng mình kéo nhầm cột hoặc thiếu một bước thao tác. | Phỏng đoán ban đầu không đúng nguyên nhân thật. |
| 01:19–01:38 | Linh tua lại video, sau đó xoá và tạo lại PivotTable nhưng kết quả vẫn là Count. | Workaround đầu tiên lặp lại quy trình hiện tại. |
| 01:38–01:45 | Linh ước lượng phần tua lại và làm lại mất khoảng 10 phút hoặc hơn. | Có effort cụ thể cho workaround đầu tiên. |
| 01:45–02:10 | Linh tìm YouTube với ý tương tự “PivotTable hiện Count, không hiện Sum”. Video hướng dẫn đổi Count sang Sum, nhưng nút Sum bị mờ. | Nguồn ngoài không bao phủ trường hợp dữ liệu thực tế. |
| 02:10–02:23 | Vì video không giải thích nút bị mờ và gần tới giờ gửi báo cáo, Linh dừng tìm thêm. | Deadline là trigger khiến Linh đổi workaround. |
| 02:23–02:48 | Linh gửi screenshot vào nhóm chat công ty. Một người nhận ra cột doanh thu bị Excel hiểu là text và yêu cầu kiểm tra dấu hiệu trong ô. | Artefact thực tế và hỗ trợ từ người khác giúp chẩn đoán đúng. |
| 02:48–03:01 | Linh chuyển cột sang dạng số và refresh PivotTable; kết quả Sum xuất hiện đúng. | Workaround cuối cùng giải quyết được vấn đề. |
| 03:01–03:16 | Báo cáo vẫn kịp, nhưng Linh bỏ phần video tiếp theo và không quay lại học sau khi làm xong báo cáo. | Consequence nằm ở tiến độ học, không phải deadline công việc. |
| 03:16–03:27 | Nếu không có nhóm chat, Linh sẽ gửi file cho trưởng nhóm hoặc tính SUM thủ công để kịp báo cáo. | Có phương án dự phòng và willingness to expend effort. |
| 03:27–03:54 | Linh nói mình đã biết số có thể bị lưu dạng text nhưng không liên hệ kiến thức đó với triệu chứng hiện tại; video không giống file thực tế. | Evidence mạnh làm giả thuyết “thiếu kiến thức nền” yếu đi. |

## 4. Chuỗi hành động thực tế

> Nhận thấy Count sai → cộng thử dữ liệu gốc → tua lại video → xoá và tạo lại PivotTable → tìm YouTube → thử tìm cách đổi Count sang Sum → gửi screenshot vào nhóm chat → kiểm tra kiểu dữ liệu → đổi cột sang số → refresh PivotTable.

### Những gì biết chắc về effort

- Tua lại video và tạo lại PivotTable mất khoảng 10 phút hoặc hơn.
- Video YouTube được nhắc tới có độ dài khoảng 18 phút, nhưng bản ghi không xác nhận Linh đã xem đủ 18 phút.
- Tổng thời gian từ lúc bị kẹt đến lúc giải quyết xong chưa được hỏi rõ.
- Deadline báo cáo tạo áp lực khiến Linh dừng tìm thêm video và chuyển sang hỏi nhóm chat.

## 5. Evidence theo Big 3

### Big 3.1 — Người học vướng ở đâu và điều gì giúp thoát kẹt?

Linh nghĩ mình sai thao tác PivotTable, nhưng nguyên nhân thật là cột doanh thu được lưu dưới dạng text. Điều giúp Linh thoát kẹt là câu hỏi chẩn đoán từ đồng nghiệp dựa trên screenshot và file thực tế.

### Big 3.2 — Workaround nào đã được sử dụng?

Linh thử lại nội dung bài học, làm lại từ đầu, tìm video ngoài và cuối cùng hỏi nhóm chat. Hai cách đầu không hiệu quả vì đều giả định vấn đề nằm trong thao tác; nguồn ngoài cũng không giải thích tình huống nút Sum bị mờ.

### Big 3.3 — Hậu quả và mức độ lặp lại

Báo cáo vẫn hoàn thành đúng hạn, nhưng Linh dừng phần học tiếp theo và không quay lại sau khi xong việc. Buổi phỏng vấn chưa hỏi một trường hợp tương tự trước đó, nên chưa có evidence về tần suất.

## 6. Exact quotes đáng giữ

> “Mình nghĩ chắc kéo nhầm cột hoặc thiếu bước gì đó.” — khoảng 01:09

> “Mình kéo qua kéo lại mấy đoạn mà không thấy nói tới nút bị mờ.” — khoảng 02:13

> “Báo cáo thì vẫn kịp, nhưng mình định xem tiếp phần sau của video thì phải bỏ.” — khoảng 03:03

> “Mình đã biết chuyện số lưu dạng text rồi, chỉ không liên hệ nó với triệu chứng này.” — khoảng 03:31

> “Mình không nghĩ mình đang học thiếu. Mình nghĩ video không giống file thực tế nên mình không biết phải kiểm tra chỗ nào thôi.” — khoảng 03:44

## 7. Evidence ủng hộ Problem Hypothesis

- Linh không xác định đúng nguyên nhân khi mới gặp lỗi.
- Linh lặp lại thao tác và tìm thêm nguồn trước khi tìm được đúng điểm vướng.
- Nguồn bên ngoài không khớp hoàn toàn với tình huống trong file thực tế.
- Quá trình xử lý làm gián đoạn kế hoạch học và khiến Linh bỏ phần video tiếp theo.
- Linh chủ động tìm trợ giúp khi các workaround cá nhân không hiệu quả.

## 8. Evidence làm Problem Hypothesis yếu đi

- Linh đã biết kiến thức về số được lưu dưới dạng text.
- Vấn đề không phải thiếu một khái niệm nền hoàn toàn mới mà là không liên hệ kiến thức cũ với triệu chứng hiện tại.
- Screenshot và dữ liệu đầu vào thực tế là input quan trọng; nội dung bài học và lịch sử học tập có thể chưa đủ để chẩn đoán.
- Hỗ trợ từ nhóm chat giải quyết được vấn đề mà không cần một phần ôn kiến thức nền.
- Báo cáo vẫn đúng hạn; consequence chủ yếu là mất phần học tiếp theo.
- Chưa có evidence cho thấy tình huống này lặp lại thường xuyên.

## 9. Phân biệt fact và interpretation

| Fact từ bản ghi | Interpretation cần tiếp tục kiểm tra |
|---|---|
| PivotTable hiện Count thay vì Sum. | Người học có thể khó liên hệ triệu chứng mới với kiến thức đã biết. |
| Linh tua lại video và tạo lại PivotTable. | Workaround đầu tiên bị dẫn bởi phỏng đoán sai nguyên nhân. |
| Video ngoài không giải thích nút Sum bị mờ. | Nguồn chung không đủ khi input thực tế khác file mẫu. |
| Người trong nhóm phát hiện dữ liệu dạng text từ screenshot. | Hỗ trợ hiệu quả có thể cần artefact thực tế, không chỉ lịch sử học. |
| Báo cáo vẫn kịp nhưng Linh bỏ phần video tiếp theo. | Pain ảnh hưởng continuity của việc học hơn là deliverable trước mắt. |

## 10. Reflection về cách phỏng vấn

### Điều đã làm tốt

- Câu mở đầu ở 00:28 giúp người tham gia kể lại một sự kiện cụ thể.
- Câu hỏi ở 00:51 yêu cầu dấu hiệu biết kết quả sai, tạo được evidence về hành vi cộng thử dữ liệu gốc.
- Các câu “việc đầu tiên bạn làm là gì?” và “sau đó bạn chuyển sang cách nào?” dựng được timeline workaround.
- Câu hỏi ở 02:10 làm rõ decision point khiến Linh dừng xem video và hỏi người khác.
- Câu hỏi về screenshot ở 02:31 khai thác được artefact dẫn tới chẩn đoán.
- Câu hỏi giả định không có nhóm chat ở 03:16 làm lộ phương án dự phòng có thật và mức effort tiếp theo.
- Câu hỏi ở 03:27 giúp lấy được evidence trực tiếp làm yếu giả thuyết thiếu kiến thức nền.

### Điều cần cải thiện

- Lời xin phép đầu buổi chưa nói rõ mục đích lưu bản ghi và phạm vi sử dụng; lần sau cần hỏi rõ trước khi đi vào nội dung.
- Buổi phỏng vấn chỉ dài 4 phút 18 giây, ngắn hơn mục tiêu 15 phút; interviewer chuyển câu khá nhanh.
- Chưa hỏi tổng thời gian từ lúc bị kẹt đến lúc giải quyết xong.
- Chưa hỏi lần gần nhất trước đó xảy ra tình huống tương tự, nên thiếu evidence về pattern.
- Chưa hỏi Linh có thể cho xem screenshot hoặc lịch sử tìm kiếm hay không.
- Chưa hỏi thời gian cụ thể dành cho video YouTube.
- Chưa làm rõ Linh có quay lại phần học bị bỏ sau một ngày khác hay không.
- Cuối buổi có hỏi tên và mã sinh viên. Với repo công khai, không nên đưa mã sinh viên của người tham gia vào notes vì không cần thiết cho mục tiêu nghiên cứu.

## 11. Thay đổi cho Conversation Guide

1. Chuẩn hoá lời xin phép: nêu rõ ghi âm, mục đích, quyền dừng và phạm vi chia sẻ trước khi bắt đầu.
2. Sau mỗi workaround, hỏi riêng thời gian và dấu hiệu biết cách đó chưa đủ.
3. Thêm câu: “Tổng cộng từ lúc bị kẹt đến lúc tiếp tục được mất khoảng bao lâu?”
4. Thêm câu kiểm tra pattern: “Lần gần nhất trước đó chuyện tương tự xảy ra là khi nào?”
5. Xin xem artefact nếu người tham gia thoải mái: screenshot, lịch sử tìm kiếm hoặc file mẫu.
6. Hỏi tiếp: “Sau hôm đó bạn có quay lại phần video đã bỏ không? Khi nào?”
7. Không thu thập thông tin định danh không cần thiết trong phần kết thúc.

## 12. Kết luận tạm thời

Buổi phỏng vấn cung cấp evidence rằng pain không chỉ là “thiếu kiến thức nền”. Khánh Linh đã biết về kiểu dữ liệu nhưng không nhận ra kiến thức đó liên quan đến triệu chứng PivotTable. Điểm khó nằm ở việc chẩn đoán đúng nguyên nhân trong ngữ cảnh dữ liệu thực tế.

Problem Hypothesis nên được mở rộng từ “không biết kiến thức nền nào đang thiếu” sang “không xác định được điểm vướng hoặc không liên hệ được kiến thức đã có với triệu chứng hiện tại”. Tuy nhiên, chỉ một cuộc phỏng vấn chưa đủ để kết luận pattern này phổ biến hoặc solution nên được xây dựng.

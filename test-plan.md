# Day 18 — Test Plan chung cho Prototype A/B/C

## 1. Mục tiêu phiên test

Quan sát xem tester có thể:

- hiểu cùng một context và outcome task;
- nhận ra sự khác nhau giữa ba cơ chế A/B/C;
- tìm và sử dụng evidence/uncertainty;
- giữ hoặc lấy lại quyền kiểm soát;
- hoàn thành task mà không cần facilitator giải thích giao diện.

Phiên test **không** nhằm chứng minh solution đã validated, không đo product value và không hỏi tester có “thích” giao diện hay không.

## 2. Người tham gia

Tester phải là người ngoài nhóm và từng tự học một kỹ năng trực tuyến theo nhịp cá nhân.

**Relevant-context question — tối đa 2 phút:**

> “Gần đây bạn có từng học một hướng dẫn online rồi gặp trường hợp kết quả trên dữ liệu hoặc bài làm thực tế khác với hướng dẫn không?”

Nếu tester chưa có trải nghiệm tương tự, vẫn có thể test comprehension và interaction breakdown, nhưng không được suy rộng thành kết luận về value.

## 3. Opening script

> “Chúng mình đang thử ba cách thiết kế, không kiểm tra bạn. Không có câu trả lời đúng hoặc sai. Bạn hãy tự thao tác và nói to điều mình đang nghĩ; mình sẽ cố gắng không hướng dẫn. Bạn có thể dừng bất cứ lúc nào. Prototype chỉ dùng dữ liệu mô phỏng và không thu thập dữ liệu cá nhân của bạn.”

## 4. Outcome task dùng chung

> “Bạn đang học PivotTable để hoàn thành báo cáo doanh thu cuối ngày. Video cho thấy cột Doanh thu trong Values sẽ tạo Sum, nhưng file của bạn lại hiện Count và tùy chọn Sum bị mờ. Hãy dùng từng phương án để xác định điều cần kiểm tra, chọn cách xử lý an toàn và quay lại tiếp tục bài học.”

Không nói cho tester:

- nguyên nhân thật là dữ liệu đang được đọc như text;
- nhánh nào là nhánh phù hợp;
- Option nào do facilitator build;
- nút nào cần bấm tiếp.

## 5. Thứ tự option

| Phiên | Facilitator | Thứ tự |
|---|---|---|
| 1 | Nguyễn Thị Bảo Trang | A → B → C |
| 2 | Đàm Quang Trung | B → C → A |
| 3 | Đặng Văn Thái Anh | C → A → B |

Mỗi facilitator cho tester trải nghiệm **đủ A/B/C**. Không ai chỉ test option mình build.

## 6. Observation focus — tối đa năm

1. **First action:** tester bắt đầu ở đâu trong mỗi option?
2. **Hesitation/misunderstanding:** tester dừng, đọc lại hoặc hiểu sai ở đâu?
3. **Evidence/uncertainty:** tester đọc, bỏ qua hay hỏi lại dấu hiệu/mức không chắc chắn nào?
4. **Control/recovery:** tester có tìm được back, reject, revoke, undo hoặc lối thoát về bài không?
5. **Decision/trade-off:** tester chọn option nào cho tình huống này và chấp nhận đánh đổi điều gì?

## 7. Ba câu cứu hộ được phép dùng

- “Bạn cứ nói to suy nghĩ của mình nhé.”
- “Bạn sẽ làm gì tiếp theo?”
- “Theo bạn, nó nên hoạt động như thế nào?”

Không narrate giao diện, giải thích icon, chỉ nút cần bấm hoặc pitch option do mình build.

## 8. Timeline một phiên — 20 phút

| Thời gian | Hoạt động |
|---|---|
| 0–2 phút | Opening, consent tham gia, relevant-context question |
| 2–14 phút | Tester dùng A/B/C, khoảng 4 phút mỗi option |
| 14–18 phút | So sánh lựa chọn và trade-off |
| 18–20 phút | Facilitator hoàn tất Feedback Note từ ghi chép thô |

## 9. Câu hỏi so sánh cuối phiên

1. “Trong tình huống này, bạn chọn A, B hay C? Vì sao?”
2. “Bạn muốn tự làm phần nào và giao cho AI phần nào?”
3. “Điều gì ở phương án đã chọn khiến bạn chưa thoải mái?”
4. “Dấu hiệu nào khiến bạn tin hoặc chưa tin đề xuất?”

## 10. Checklist trước mỗi phiên

- [ ] Mở được `prototype/index.html` hoặc link public.
- [ ] Bấm **Reset toàn bộ**.
- [ ] Đúng thứ tự option của phiên.
- [ ] Không có dữ liệu thật trong prototype.
- [ ] Tester đồng ý tham gia; nếu ghi âm, xin phép riêng trước khi ghi.
- [ ] Có đồng hồ và Feedback Note trống.
- [ ] Facilitator nhớ không hướng dẫn hoặc lấp im lặng.

## 11. Checklist sau phiên

- [ ] Ghi hành vi cụ thể trước khi viết diễn giải.
- [ ] Exact quote chỉ ghi khi tester thực sự nói; nếu không chắc câu chữ, ghi paraphrase.
- [ ] Tách Observed, Interpreted, Decided và Still Unproven.
- [ ] Không dùng từ “validated” hoặc “đã xác nhận nhu cầu”.
- [ ] Lưu Feedback Note vào repo cá nhân của facilitator.

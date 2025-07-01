# process

## Vòng Sàng Lọc Ban Đầu (Screening Và HR)

Đây là vòng đầu tiên, thường do bộ phận Nhân sự (HR) thực hiện để đánh giá sự phù hợp ở mức độ cơ bản

- Mục tiêu chín
  - Xác nhận thông tin CV, kinh nghiệm làm việc, lý do nghỉ việc
  - Trao đổi về mong muốn, định hướng nghề nghiệp và kỳ vọng lương
  - Kiểm tra sơ bộ kỹ năng mềm và khả năng giao tiếp (đặc biệt là tiếng Anh)
- Hình thức: Thường là gọi điện hoặc một buổi nói chuyện online ngắn (khoảng 30 phút)
- Điểm đặc biệt
  - Một số công ty (như Grab) có thể bỏ qua vòng này và vào thẳng vòng kỹ thuật
  - Có công ty sử dụng bài kiểm tra tính cách để đánh giá sự trung thực và nhất quán (Employment Hero)

## Vòng Bài Test Online (Online Assessment - OA)

Vòng này dùng để sàng lọc số lượng lớn ứng viên, tập trung vào khả năng giải quyết vấn đề tự động

- Nội dung cốt lõi
  - Thuật toán: Phổ biến nhất là giải 2-3 bài toán thuật toán (Data Structures and Algorithms - DSA) trong thời gian giới hạn (ví dụ 80-90 phút)
  - Độ khó đa dạng: Từ mức Easy/Medium (NAB, Goodnote, Grab Intern) đến mức cao hơn Medium và Hard (TikTok, Citadel)
- Các dạng bài và yêu cầu đặc thù
  - Yêu cầu về tối ưu: Không chỉ giải đúng mà phải tối ưu về hiệu suất, thời gian, không gian. Code phải sạch sẽ, dễ đọc, dễ mở rộng (Citadel)
  - Nội dung đa dạng ngoài DSA
    - Bài toán thực tế: Yêu cầu thiết kế hệ thống nhỏ, áp dụng nguyên lý SOLID, Design Patterns (Cốc Cốc)
    - Kiến thức chuyên sâu: Câu hỏi về SQL, Java API (Naver)
    - Lĩnh vực riêng: Câu hỏi về AI/Machine Learning cho các vị trí tương ứng (Amazon
    - Hệ thống và đa luồng: Bài toán xử lý đa luồng, thiết kế hệ thống với yêu cầu hiệu năng cực cao (ANT International)
- Hình thức và áp lực
  - Thường làm trên các nền tảng như HackerRank, Codility, CodeSignal
  - Có thể có giám sát và chỉ được submit 1 lần, tạo áp lực lớn (NAB)
  - Một số nơi có hình thức linh hoạt: không deadline cụ thể, cho phép tra cứu (ANT International)

## Vòng Phỏng Vấn Thuật Toán Và Coding Trực Tiếp

Đây là vòng phỏng vấn "kinh điển" với kỹ sư, tập trung vào khả năng tư duy và code trực tiếp

- Hình thức chung: Thường kéo dài 45-60 phút/buổi, có thể có 1-3 buổi như vậy. Ứng viên sẽ giải 1-2 bài toán trên bảng trắng hoặc nền tảng code online (ví dụ Google Docs, CoderPad)
- Nội dung và yêu cầu
  - Giải quyết vấn đề: Tập trung vào các bài toán thực tiễn, mức độ từ Medium đến Hard
  - Không chỉ code: Yếu tố quan trọng nhất là phải giải thích rõ ràng tư duy, phân tích độ phức tạp, cách tiếp cận và các phương án tối ưu
  - Câu hỏi đào sâu (Follow-up): Sau khi giải xong, người phỏng vấn thường đặt các câu hỏi mở rộng về cách tối ưu, xử lý các biến thể của bài toán
- Các ví dụ đặc thù
  - Độ khó cao: Có thể yêu cầu tự triển khai một cấu trúc dữ liệu phức tạp như LRU Cache (Citadel) hoặc bài toán khó về Trie kết hợp Backtracking (TikTok)
  - Lập trình đôi (Code Pair): Lập trình trong thời gian thực cùng với người phỏng vấn (Rakuten)
  - Bài toán lớn, phức tạp: Yêu cầu chia nhỏ vấn đề để giải quyết trong 1.5 tiếng (Caladan)

## Vòng Phỏng Vấn Thiết Kế Hệ Thống (System Design)

Đây thường là vòng thử thách nhất, đặc biệt với các vị trí từ Mid-level trở lên

- Mục tiêu chính: Đánh giá khả năng thiết kế một hệ thống phần mềm quy mô lớn, đảm bảo các yếu tố như khả năng mở rộng (scalability), tính sẵn sàng (availability), và độ tin cậy (reliability)
- Nội dung và phạm vi
  - Đề bài mở: Thường là thiết kế các hệ thống quen thuộc như YouTube, Uber, WhatsApp, hoặc các hệ thống chuyên ngành như Cổng thanh toán (Payment Gateway)
  - Kiến thức sâu rộng
    - Kiến trúc: Microservices, Event-driven design, API Design, Load Balancer
    - Cơ sở dữ liệu: SQL vs NoSQL, Indexing, Caching (Redis)
    - Nguyên lý: SOLID, ACID
    - Hệ thống phân tán: Các pattern như Circuit Breaker, Saga, Outbox, cách xử lý Idempotency, đảm bảo tính nhất quán (eventual consistency)
  - Tiêu chí đánh giá
    - Khả năng phân tích yêu cầu, trình bày kiến trúc từng lớp, phân tích các đánh đổi (trade-off) và phản biện các phương án
    - Khả năng dẫn dắt cuộc thảo luận, đặc biệt khi người phỏng vấn ít gợi ý
  - Các biến thể
    - Độ sâu cực lớn: Tập trung vào các vấn đề hiệu năng cực cao (TPS 10 triệu/giây, độ trễ 3-5ms tại ANT International) hoặc các chủ đề nâng cao như commit logs (NAB Senior)
    - Kết hợp với các vòng khác: Có thể được thảo luận ngắn bằng lời trong vòng Culture Fit (Grab) hoặc chiếm tới 80% thời lượng vòng phỏng vấn với Manager (NAB)
    - Kiểm tra ngay cả với vị trí không phải backend (ví dụ Mobile Engineer tại ShopBack)

## Vòng Phỏng Vấn Kỹ Thuật Chuyên Sâu Và Kiến Thức Nền Tảng

Vòng này đi sâu vào một công nghệ cụ thể hoặc các kiến thức Khoa học Máy tính cốt lõi

- Nội dung
  - Kiến thức nền tảng (CS Fundamentals): Các câu hỏi về Hệ điều hành (OS scheduling, memory management, deadlock), Mạng máy tính (TCP/UDP handshake, buffer size), cấu trúc dữ liệu, kiến trúc máy tính
  - Kiến thức chuyên môn (Domain Knowledge)
    - Hỏi cực kỳ sâu về một ngôn ngữ/framework (ví dụ: Java Core, Spring Boot, các annotation cụ thể tại NAB)
    - Hỏi sâu về các dự án trong CV: lý do chọn công nghệ, cách xử lý traffic, thậm chí yêu cầu xem lại code cũ để giải thích (Grab Intern)
    - Kiến thức chuyên ngành: Big Data trên Spark (GFG), GPU computing (Moreh), cách Apple triển khai chức năng trong iOS (ShopBack), Frontend (CSS, JS event loop, React tại Shopee)
    - CI/CD và Testing (yêu cầu test coverage 80-90% tại NAB)

## Vòng Phỏng Vấn Văn Hóa Và Hành Vi (Culture Fit Và Behavioral)

Vòng này đánh giá kỹ năng mềm và sự phù hợp của bạn với đội nhóm và công ty

- Mục tiêu chính: Đánh giá kỹ năng giao tiếp, làm việc nhóm, khả năng lãnh đạo, cách xử lý xung đột và giải quyết vấn đề
- Nội dung chung
  - Các câu hỏi tình huống dựa trên kinh nghiệm quá khứ ("Kể về một lần...")
  - Hỏi về định hướng nghề nghiệp, lý do chọn công ty, mục tiêu dài hạn
- Các hình thức đặc biệt
  - Không chỉ là hành vi
    - Lồng ghép các tình huống kỹ thuật để đánh giá cách xử lý vấn đề (Grab)
    - Tập trung vào khả năng làm việc nhóm kỹ thuật: cách đưa và nhận feedback về mặt kỹ thuật (Citadel)
  - Phỏng vấn với cấp quản lý cao: Thường là vòng cuối với Engineering Manager hoặc Director/VP, tập trung vào định hướng và sự cam kết
  - Phỏng vấn hội đồng (Panel Interview): Phỏng vấn với nhiều người cùng lúc (manager và team members)

## Các Hình Thức Phỏng Vấn Đặc Biệt

--

- Phỏng vấn "Marathon": Một số công ty có quy trình phỏng vấn Onsite rất căng thẳng, gồm nhiều buổi diễn ra liên tục trong một ngày (ví dụ: 4 buổi/4 tiếng tại Axon, 3 buổi tại Caladan)
- Bài toán thực tế và Debugging
  - Yêu cầu debug một chương trình trên môi trường lạ (Linux) chỉ bằng command line, không có IDE (Caladan)
  - Yêu cầu thiết kế và tối ưu một thuật toán cho một lĩnh vực cụ thể (ví dụ: rendering engine) với yêu cầu hiệu năng cao nhất (Huawei)
- Quy trình linh hoạt: Một số ứng viên có thể được bỏ qua một vài vòng (ví dụ: bỏ qua vòng coding nếu kết quả phỏng vấn trước đó tốt)
- Ngôn ngữ: Hầu hết các công ty quốc tế đều yêu cầu sử dụng tiếng Anh ở một hoặc nhiều vòng, thậm chí là 100% quy trình

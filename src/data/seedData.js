// Du lieu mẫu cho ứng dụng Luyện thi tốt nghiệp THPT - Tin học

export const seedTopics = [
  {
    id: "ai",
    title: "Trí tuệ nhân tạo (AI)",
    icon: "Cpu",
    description: "Khái niệm cơ bản về AI, lịch sử phát triển, các ứng dụng tiêu biểu và tác động của AI đến đời sống.",
    content: `
      <h2>1. Khái niệm về Trí tuệ nhân tạo (AI)</h2>
      <p>Trí tuệ nhân tạo (Artificial Intelligence - AI) là một ngành khoa học máy tính liên quan đến việc chế tạo các máy móc thông minh, đặc biệt là các chương trình máy tính thông minh có khả năng thực hiện các công việc vốn yêu cầu trí tuệ của con người.</p>
      
      <h2>2. Các lĩnh vực chính của AI</h2>
      <ul>
        <li><strong>Học máy (Machine Learning):</strong> Khả năng tự học hỏi của máy tính dựa trên dữ liệu đầu vào mà không cần lập trình chi tiết.</li>
        <li><strong>Xử lý ngôn ngữ tự nhiên (NLP):</strong> Giúp máy tính hiểu, phân tích và phản hồi ngôn ngữ tự nhiên của con người (ví dụ: ChatGPT, Google Translate).</li>
        <li><strong>Thị giác máy tính (Computer Vision):</strong> Cho phép máy tính trích xuất, phân tích và hiểu thông tin từ hình ảnh và video (ví dụ: Nhận diện khuôn mặt, xe tự lái).</li>
        <li><strong>Hệ chuyên gia (Expert Systems):</strong> Hệ thống mô phỏng khả năng ra quyết định của các chuyên gia con người trong một lĩnh vực cụ thể.</li>
      </ul>

      <h2>3. Các dạng AI cơ bản</h2>
      <ul>
        <li><strong>AI yếu / AI hẹp (Narrow AI):</strong> Thiết kế để thực hiện một nhiệm vụ cụ thể (nhận diện giọng nói, chơi cờ vua). Tất cả các hệ thống AI hiện tại đều thuộc nhóm này.</li>
        <li><strong>AI mạnh / AI tổng quát (AGI - Artificial General Intelligence):</strong> Hệ thống có khả năng nhận thức và giải quyết bất kỳ nhiệm vụ trí tuệ nào như con người (vẫn đang trong giai đoạn nghiên cứu).</li>
      </ul>

      <h2>4. Tác động của AI</h2>
      <p>AI mang lại hiệu quả vượt trội trong sản xuất, y tế (chẩn đoán bệnh), giáo dục (cá nhân hóa học tập), và dịch vụ. Tuy nhiên, nó cũng đặt ra thách thức lớn về an ninh mạng, đạo đức công nghệ và nguy cơ thay thế việc làm truyền thống.</p>
    `,
    quiz: [
      {
        id: "ai_q1",
        question: "Hệ thống AI hiện nay trên thế giới chủ yếu thuộc nhóm nào sau đây?",
        options: [
          "Trí tuệ nhân tạo tổng quát (AGI)",
          "Trí tuệ nhân tạo hẹp/yếu (Narrow AI)",
          "Trí tuệ nhân tạo siêu việt (Super AI)",
          "Trí tuệ nhân tạo tự nhận thức"
        ],
        correctAnswer: 1,
        explanation: "Tất cả các hệ thống AI thực tế hiện nay (như ChatGPT, Siri, xe tự lái) đều chỉ thực hiện được một số nhóm tác vụ chuyên biệt, do đó được xếp vào nhóm Trí tuệ nhân tạo hẹp (Narrow AI)."
      },
      {
        id: "ai_q2",
        question: "Công nghệ nào cho phép máy tính nhận diện biển số xe và phân tích làn đường trong xe tự lái?",
        options: [
          "Xử lý ngôn ngữ tự nhiên (NLP)",
          "Hệ chuyên gia (Expert System)",
          "Thị giác máy tính (Computer Vision)",
          "Mạng ngang hàng (P2P)"
        ],
        correctAnswer: 2,
        explanation: "Thị giác máy tính là lĩnh vực giúp máy tính hiểu và phân tích các thông tin dạng hình ảnh và video từ camera."
      }
    ]
  },
  {
    id: "network",
    title: "Mạng máy tính",
    icon: "Network",
    description: "Tìm hiểu về kiến trúc mạng, giao thức truyền thông, mạng LAN/WAN, internet và thiết bị kết nối.",
    content: `
      <h2>1. Khái niệm mạng máy tính</h2>
      <p>Mạng máy tính là tập hợp các máy tính và thiết bị được kết nối với nhau theo một phương thức truyền thông nào đó nhằm mục đích chia sẻ tài nguyên (dữ liệu, máy in, phần mềm...) và trao đổi thông tin.</p>

      <h2>2. Phân loại mạng theo phạm vi địa lý</h2>
      <ul>
        <li><strong>Mạng cục bộ (LAN - Local Area Network):</strong> Kết nối các thiết bị trong phạm vi nhỏ như một phòng, một ngôi nhà, trường học hoặc văn phòng. Tốc độ truyền cao, độ trễ thấp.</li>
        <li><strong>Mạng diện rộng (WAN - Wide Area Network):</strong> Kết nối các thiết bị ở phạm vi lớn như giữa các thành phố, quốc gia hoặc châu lục (Mạng Internet là mạng WAN lớn nhất thế giới).</li>
      </ul>

      <h2>3. Các thiết bị mạng cơ bản</h2>
      <ul>
        <li><strong>Switch (Bộ chuyển mạch):</strong> Thiết bị kết nối các máy tính trong cùng một mạng LAN, chuyển dữ liệu đến đúng thiết bị đích thông qua địa chỉ MAC.</li>
        <li><strong>Router (Bộ định tuyến):</strong> Thiết bị kết nối các mạng máy tính khác nhau (ví dụ kết nối mạng LAN của bạn với Internet), truyền gói tin dựa trên địa chỉ IP.</li>
        <li><strong>Modem:</strong> Thiết bị chuyển đổi tín hiệu số (từ máy tính) sang tín hiệu tương tự (đường truyền cáp quang/điện thoại) và ngược lại.</li>
      </ul>

      <h2>4. Giao thức truyền thông (Protocol)</h2>
      <p>Là tập hợp các quy tắc quy định cách truyền dữ liệu giữa các thiết bị trên mạng. Giao thức phổ biến nhất hiện nay là bộ giao thức <strong>TCP/IP</strong> (Transmission Control Protocol/Internet Protocol).</p>
    `,
    quiz: [
      {
        id: "net_q1",
        question: "Thiết bị nào sau đây dùng để kết nối các mạng máy tính khác nhau và định tuyến các gói dữ liệu?",
        options: [
          "Switch (Bộ chuyển mạch)",
          "Router (Bộ định tuyến)",
          "Hub (Bộ tập trung)",
          "Access Point (Điểm truy cập)"
        ],
        correctAnswer: 1,
        explanation: "Router hoạt động ở lớp Mạng, có chức năng kết nối các mạng khác nhau và tìm đường đi tối ưu cho gói tin dựa trên địa chỉ IP."
      },
      {
        id: "net_q2",
        question: "Mạng Internet toàn cầu được phân loại vào nhóm mạng nào?",
        options: [
          "Mạng LAN",
          "Mạng PAN",
          "Mạng WAN",
          "Mạng SAN"
        ],
        correctAnswer: 2,
        explanation: "Mạng diện rộng (WAN) kết nối khoảng cách lớn trên phạm vi quốc gia hoặc toàn cầu, Internet là mạng WAN lớn nhất hiện nay."
      }
    ]
  },
  {
    id: "cyber-comm",
    title: "Giao tiếp không gian mạng",
    icon: "MessageSquare",
    description: "Kỹ năng giao tiếp an toàn, bảo mật thông tin cá nhân, ứng xử văn minh và phòng tránh lừa đảo trên mạng xã hội.",
    content: `
      <h2>1. Khái niệm Không gian mạng</h2>
      <p>Không gian mạng (Cyberspace) là môi trường nhân tạo được tạo ra bởi việc kết nối các mạng máy tính, viễn thông và internet. Đây là nơi diễn ra các hoạt động giao tiếp, làm việc, giải trí của con người.</p>

      <h2>2. Quy tắc ứng xử văn minh trên mạng (Netiquette)</h2>
      <ul>
        <li>Tôn trọng người khác: Không sử dụng ngôn từ kích động thù địch, lăng mạ hoặc xúc phạm nhân phẩm.</li>
        <li>Bảo vệ thông tin cá nhân: Không tự ý chia sẻ thông tin nhạy cảm của bản thân hoặc người khác (CCCD, địa chỉ nhà, mật khẩu...).</li>
        <li>Xác thực thông tin: Không lan truyền tin giả, tin chưa được kiểm chứng.</li>
      </ul>

      <h2>3. Các nguy cơ mất an toàn trên mạng</h2>
      <ul>
        <li><strong>Mã độc (Malware):</strong> Virus, Ransomware (mã độc tống tiền), Trojan... phá hoại hoặc chiếm đoạt tài nguyên máy tính.</li>
        <li><strong>Lừa đảo qua mạng (Phishing):</strong> Giả mạo các ngân hàng, cơ quan chức năng hoặc người quen để lừa nạn nhân cung cấp thông tin tài khoản, chuyển tiền.</li>
        <li><strong>Bắt nạt trên mạng (Cyberbullying):</strong> Sử dụng tin nhắn, mạng xã hội để đe dọa, xúc phạm hoặc cô lập cá nhân khác.</li>
      </ul>

      <h2>4. Biện pháp bảo vệ bản thân</h2>
      <p>Sử dụng mật khẩu mạnh kết hợp xác thực 2 yếu tố (2FA); Không nhấp vào các liên kết lạ; Chỉ tải phần mềm từ các nguồn chính thống; Thường xuyên cập nhật hệ điều hành và phần mềm diệt virus.</p>
    `,
    quiz: [
      {
        id: "cyber_q1",
        question: "Phishing là thuật ngữ dùng để chỉ loại hình tấn công mạng nào?",
        options: [
          "Tấn công từ chối dịch vụ phá hủy hệ thống",
          "Lừa đảo người dùng cung cấp thông tin nhạy cảm qua email hoặc trang web giả mạo",
          "Mã hóa dữ liệu đòi tiền chuộc",
          "Lén lút cài mã độc đào tiền ảo trên máy tính nạn nhân"
        ],
        correctAnswer: 1,
        explanation: "Phishing (tấn công giả mạo) là hình thức lừa đảo để dụ nạn nhân tiết lộ thông tin cá nhân như mật khẩu ngân hàng, mã OTP thông qua các email, tin nhắn hoặc website giả danh các tổ chức uy tín."
      }
    ]
  },
  {
    id: "career",
    title: "Hướng nghiệp với Tin học",
    icon: "Briefcase",
    description: "Tổng quan về các ngành nghề trong lĩnh vực CNTT, yêu cầu kỹ năng và xu hướng việc làm trong kỷ nguyên số.",
    content: `
      <h2>1. Vai trò của Công nghệ thông tin trong nền kinh tế số</h2>
      <p>Sự bùng nổ của Cách mạng công nghiệp lần thứ tư đã biến Công nghệ thông tin trở thành động lực phát triển then chốt của mọi ngành nghề, mở ra vô số cơ hội việc làm đa dạng.</p>

      <h2>2. Các nhóm ngành chính trong lĩnh vực Tin học / CNTT</h2>
      <ul>
        <li><strong>Phát triển phần mềm (Software Engineering):</strong> Lập trình viên Front-end, Back-end, Di động; Kỹ sư kiểm thử phần mềm (Tester/QA).</li>
        <li><strong>An toàn thông tin / Bảo mật mạng:</strong> Chuyên gia phân tích bảo mật, kỹ sư bảo mật, ứng cứu sự cố không gian mạng.</li>
        <li><strong>Khoa học dữ liệu và Trí tuệ nhân tạo (Data Science & AI):</strong> Kỹ sư AI, Kỹ sư dữ liệu (Data Engineer), Chuyên gia phân tích dữ liệu (Data Analyst).</li>
        <li><strong>Quản trị mạng và Hệ thống:</strong> Thiết kế, vận hành hệ thống mạng doanh nghiệp, dịch vụ đám mây (Cloud Ops/DevOps).</li>
      </ul>

      <h2>3. Các kỹ năng cần thiết cho kỷ nguyên số</h2>
      <ul>
        <li>Kỹ năng chuyên môn (Hard Skills): Tư duy lập trình, cấu trúc dữ liệu và giải thuật, quản trị cơ sở dữ liệu, hiểu biết về hạ tầng mạng.</li>
        <li>Kỹ năng mềm (Soft Skills): Khả năng tự học (quan trọng nhất), làm việc nhóm, giao tiếp bằng tiếng Anh, giải quyết vấn đề logic.</li>
      </ul>
    `,
    quiz: [
      {
        id: "career_q1",
        question: "Vị trí công việc nào chịu trách nhiệm chính trong việc thiết kế và lập trình giao diện trực quan của một website?",
        options: [
          "Back-end Developer",
          "Front-end Developer",
          "Database Administrator",
          "DevOps Engineer"
        ],
        correctAnswer: 1,
        explanation: "Front-end Developer chịu trách nhiệm xây dựng phần giao diện (UI/UX) mà người dùng nhìn thấy trực tiếp và tương tác trên trang web."
      }
    ]
  },
  {
    id: "web",
    title: "Web (HTML + CSS)",
    icon: "Globe",
    description: "Cấu trúc cơ bản của trang web bằng HTML5 và các thuộc tính định dạng giao diện đẹp mắt bằng CSS3.",
    content: `
      <h2>1. Khái niệm HTML và CSS</h2>
      <ul>
        <li><strong>HTML (HyperText Markup Language):</strong> Ngôn ngữ đánh dấu siêu văn bản, dùng để xác định cấu trúc và nội dung thô của trang web (văn bản, tiêu đề, hình ảnh, liên kết).</li>
        <li><strong>CSS (Cascading Style Sheets):</strong> Ngôn ngữ định kiểu, dùng để mô tả cách trình bày trang web (màu sắc, phông chữ, bố cục, hiệu ứng chuyển động).</li>
      </ul>

      <h2>2. Các thẻ HTML cơ bản</h2>
      <ul>
        <li><code>&lt;h1&gt;</code> đến <code>&lt;h6&gt;</code>: Tiêu đề các cấp.</li>
        <li><code>&lt;p&gt;</code>: Đoạn văn bản.</li>
        <li><code>&lt;a href="url"&gt;</code>: Liên kết.</li>
        <li><code>&lt;img src="path" alt="text"&gt;</code>: Chèn hình ảnh.</li>
        <li><code>&lt;div&gt;</code>: Thẻ khối dùng để gom nhóm nội dung và thiết kế bố cục.</li>
      </ul>

      <h2>3. Các bộ chọn (Selectors) và thuộc tính CSS phổ biến</h2>
      <p>Cú pháp CSS: <code>selector { property: value; }</code></p>
      <ul>
        <li>Bộ chọn: Thẻ (ví dụ <code>p</code>), Class (ví dụ <code>.card</code>), ID (ví dụ <code>#header</code>).</li>
        <li>Thuộc tính màu sắc: <code>color</code> (màu chữ), <code>background-color</code> (màu nền).</li>
        <li>Mô hình hộp (Box Model): <code>width</code>, <code>height</code>, <code>padding</code> (khoảng cách bên trong), <code>margin</code> (khoảng cách bên ngoài), <code>border</code> (viền).</li>
        <li>Bố cục: <code>display: flex</code>, <code>display: grid</code> giúp xây dựng giao diện responsive linh hoạt.</li>
      </ul>
    `,
    quiz: [
      {
        id: "web_q1",
        question: "Thẻ HTML nào sau đây được sử dụng đúng quy chuẩn để chèn một hình ảnh vào trang web?",
        options: [
          "&lt;image href=\"logo.png\"&gt;",
          "&lt;img src=\"logo.png\" alt=\"Logo\"&gt;",
          "&lt;picture link=\"logo.png\"&gt;",
          "&lt;img href=\"logo.png\"&gt;"
        ],
        correctAnswer: 1,
        explanation: "Thẻ <img> sử dụng thuộc tính src để khai báo đường dẫn hình ảnh và thuộc tính alt để cung cấp mô tả văn bản thay thế."
      },
      {
        id: "web_q2",
        question: "Trong Mô hình hộp (Box Model) của CSS, vùng khoảng cách nằm giữa nội dung (content) và viền (border) được gọi là gì?",
        options: [
          "Margin",
          "Padding",
          "Outline",
          "Spacing"
        ],
        correctAnswer: 1,
        explanation: "Padding là thuộc tính tạo khoảng đệm trống bên trong hộp, ngăn cách nội dung chữ/ảnh với đường viền (border)."
      }
    ]
  },
  {
    id: "python",
    title: "Lập trình Python",
    icon: "Terminal",
    description: "Cú pháp cơ bản của Python, biến, câu lệnh điều kiện, vòng lặp, cấu trúc dữ liệu list và hàm.",
    content: `
      <h2>1. Giới thiệu về Python</h2>
      <p>Python là một ngôn ngữ lập trình bậc cao, thông dịch, hướng đối tượng và có cú pháp rất trong sáng, dễ học. Python được ứng dụng cực kỳ rộng rãi trong phát triển web, khoa học dữ liệu, tự động hóa và AI.</p>

      <h2>2. Biến và Kiểu dữ liệu</h2>
      <ul>
        <li>Số nguyên (<code>int</code>), số thực (<code>float</code>).</li>
        <li>Chuỗi ký tự (<code>str</code>): đặt trong dấu nháy kép hoặc đơn.</li>
        <li>Kiểu logic (<code>bool</code>): chỉ nhận giá trị <code>True</code> hoặc <code>False</code>.</li>
      </ul>

      <h2>3. Cấu trúc rẽ nhánh và Lặp</h2>
      <ul>
        <li>Rẽ nhánh với <code>if - elif - else</code>. Chú ý thụt lề dòng lệnh (indentation) là bắt buộc trong Python để phân nhóm lệnh.</li>
        <li>Vòng lặp <code>for</code>: Duyệt qua một tập hợp hoặc phạm vi dữ liệu (ví dụ: <code>for i in range(5):</code>).</li>
        <li>Vòng lặp <code>while</code>: Lặp lại công việc khi điều kiện còn đúng.</li>
      </ul>

      <h2>4. Kiểu danh sách (List) và Hàm (Function)</h2>
      <ul>
        <li>List: Chứa nhiều phần tử, đánh chỉ số từ 0 (ví dụ: <code>my_list = [1, 2, "Python"]</code>).</li>
        <li>Hàm: Định nghĩa bằng từ khóa <code>def</code> để tái sử dụng code (ví dụ: <code>def xinchao(ten): return "Chào " + ten</code>).</li>
      </ul>
    `,
    quiz: [
      {
        id: "py_q1",
        question: "Đâu là cách định nghĩa hàm chính xác trong ngôn ngữ lập trình Python?",
        options: [
          "function myFunc():",
          "def myFunc():",
          "void myFunc() {}",
          "define myFunc():"
        ],
        correctAnswer: 1,
        explanation: "Trong Python, từ khóa 'def' được dùng để bắt đầu định nghĩa một hàm."
      },
      {
        id: "py_q2",
        question: "Kết quả của đoạn mã sau là gì?\ncolors = ['red', 'green', 'blue']\nprint(colors[1])",
        options: [
          "red",
          "green",
          "blue",
          "Lỗi cú pháp"
        ],
        correctAnswer: 1,
        explanation: "Chỉ số (index) của List trong Python bắt đầu từ 0. Do đó, colors[0] là 'red', colors[1] là 'green', và colors[2] là 'blue'."
      }
    ]
  },
  {
    id: "database",
    title: "Cơ sở dữ liệu",
    icon: "Database",
    description: "Khái niệm hệ cơ sở dữ liệu quan hệ, bảng dữ liệu, khóa chính, khóa ngoại và truy vấn SQL cơ bản.",
    content: `
      <h2>1. Khái niệm Cơ sở dữ liệu (CSDL)</h2>
      <p>Cơ sở dữ liệu là tập hợp các dữ liệu có liên quan đến nhau, được sắp xếp có tổ chức và được lưu trữ trên các thiết bị lưu trữ thông tin của máy tính để phục vụ cho nhiều người sử dụng với các mục đích khác nhau.</p>

      <h2>2. Hệ CSDL quan hệ (Relational Database)</h2>
      <p>Dữ liệu được tổ chức dưới dạng các <strong>Bảng (Table)</strong> gồm các dòng và cột.</p>
      <ul>
        <li><strong>Bảng:</strong> Gồm các dòng (bản ghi - record) biểu diễn đối tượng, các cột (thuộc tính - field) biểu diễn đặc điểm đối tượng.</li>
        <li><strong>Khóa chính (Primary Key):</strong> Một hoặc nhiều cột xác định duy nhất một bản ghi trong bảng (không được trùng lặp, không được rỗng).</li>
        <li><strong>Khóa ngoại (Foreign Key):</strong> Cột trong một bảng trỏ đến khóa chính của bảng khác để thiết lập mối liên kết giữa hai bảng.</li>
      </ul>

      <h2>3. Ngôn ngữ SQL cơ bản</h2>
      <p>SQL (Structured Query Language) là ngôn ngữ chuẩn để truy vấn và thao tác trên cơ sở dữ liệu quan hệ:</p>
      <ul>
        <li><code>SELECT cột1, cột2 FROM bang WHERE dieu_kien;</code> (Truy vấn dữ liệu)</li>
        <li><code>INSERT INTO bang (cac_cot) VALUES (cac_gia_tri);</code> (Thêm dữ liệu mới)</li>
        <li><code>UPDATE bang SET cot = gia_tri WHERE dieu_kien;</code> (Sửa dữ liệu)</li>
        <li><code>DELETE FROM bang WHERE dieu_kien;</code> (Xóa dữ liệu)</li>
      </ul>
    `,
    quiz: [
      {
        id: "db_q1",
        question: "Khóa chính (Primary Key) trong một bảng của cơ sở dữ liệu quan hệ có đặc điểm nào?",
        options: [
          "Có thể trùng lặp giá trị giữa các dòng khác nhau",
          "Cho phép chứa giá trị rỗng (NULL)",
          "Xác định duy nhất một bản ghi trong bảng và không chứa giá trị rỗng",
          "Luôn bắt buộc phải là số tự tăng"
        ],
        correctAnswer: 2,
        explanation: "Khóa chính bắt buộc phải chứa các giá trị duy nhất (không trùng lặp) và không được phép để trống (NOT NULL) để nhận diện chính xác từng bản ghi."
      },
      {
        id: "db_q2",
        question: "Câu lệnh SQL nào được dùng để truy xuất thông tin từ cơ sở dữ liệu?",
        options: [
          "GET",
          "SELECT",
          "FETCH",
          "EXTRACT"
        ],
        correctAnswer: 1,
        explanation: "Từ khóa SELECT được sử dụng để bắt đầu một câu lệnh truy vấn dữ liệu từ các bảng trong CSDL quan hệ."
      }
    ]
  }
];

export const seedExams = [
  {
    id: "exam_minhhoa_2026",
    title: "Đề thi minh họa Bộ Giáo dục và Đào tạo 2026 - Tin học",
    category: "tham-khao",
    duration: 50,
    questions: [
      {
        id: 1,
        question: "Trí tuệ nhân tạo (AI) có khả năng tự học hỏi từ dữ liệu để cải thiện hiệu năng mà không cần lập trình chi tiết. Đây là lĩnh vực nào sau đây?",
        options: [
          "Xử lý ảnh",
          "Học máy (Machine Learning)",
          "Thị giác máy tính",
          "Hệ chuyên gia"
        ],
        correctAnswer: 1,
        explanation: "Học máy (Machine Learning) là tập con của AI tập trung vào việc huấn luyện máy tính tự học hỏi và cải thiện hiệu năng dựa trên dữ liệu đầu vào."
      },
      {
        id: 2,
        question: "Trong cấu trúc mạng LAN sử dụng mô hình hình sao (Star topology), thiết bị trung tâm đóng vai trò kết nối tất cả các máy tính lại với nhau là gì?",
        options: [
          "Router",
          "Modem",
          "Switch (hoặc Hub)",
          "Cáp mạng"
        ],
        correctAnswer: 2,
        explanation: "Trong mô hình hình sao, tất cả các thiết bị kết nối vào một thiết bị trung tâm (thường là Switch hoặc Hub) để trao đổi thông tin."
      },
      {
        id: 3,
        question: "Hành vi nào dưới đây là văn minh và an toàn khi tham gia giao tiếp trên không gian mạng?",
        options: [
          "Chia sẻ toàn bộ thông tin cá nhân và tài khoản ngân hàng khi được người lạ yêu cầu trợ giúp",
          "Bình luận thóa mạ, chê bai người khác bằng tài khoản ảo",
          "Xác thực kỹ thông tin từ nguồn uy tín trước khi chia sẻ lên trang cá nhân",
          "Sao chép và phân phối tác phẩm có bản quyền của người khác mà không xin phép"
        ],
        correctAnswer: 2,
        explanation: "Việc xác thực thông tin kỹ càng trước khi chia sẻ giúp hạn chế tin giả, đảm bảo an toàn thông tin và thể hiện trách nhiệm văn minh mạng."
      },
      {
        id: 4,
        question: "Thẻ HTML nào được dùng để tạo ra một liên kết (Hyperlink) đến một trang web khác?",
        options: [
          "&lt;link src=\"url\"&gt;",
          "&lt;a href=\"url\"&gt;",
          "&lt;anchor link=\"url\"&gt;",
          "&lt;href link=\"url\"&gt;"
        ],
        correctAnswer: 1,
        explanation: "Thẻ <a> (anchor) với thuộc tính 'href' dùng để tạo siêu liên kết liên kết tới trang web khác."
      },
      {
        id: 5,
        question: "Cho đoạn mã Python:\na = 10\nb = 3\nprint(a // b)\nKết quả in ra màn hình là gì?",
        options: [
          "3.3333333333333335",
          "3",
          "1",
          "3.0"
        ],
        correctAnswer: 1,
        explanation: "Phép toán '//' là phép chia lấy phần nguyên (integer division) trong Python. 10 // 3 = 3."
      },
      {
        id: 6,
        question: "Để sắp xếp dữ liệu tăng dần trong câu lệnh SELECT của SQL, ta sử dụng mệnh đề nào ở cuối?",
        options: [
          "SORT BY ASC",
          "ORDER BY DESC",
          "ORDER BY ASC",
          "GROUP BY ASC"
        ],
        correctAnswer: 2,
        explanation: "Để sắp xếp kết quả truy vấn tăng dần, ta sử dụng mệnh đề ORDER BY kèm theo từ khóa ASC (hoặc mặc định không ghi gì)."
      },
      {
        id: 7,
        question: "Hệ thống khuyến nghị (Recommendation System) trên các sàn thương mại điện tử hoặc mạng xã hội là ứng dụng tiêu biểu của công nghệ nào?",
        options: [
          "Bảo mật mạng",
          "Hệ quản trị cơ sở dữ liệu quan hệ",
          "Trí tuệ nhân tạo (AI)",
          "Thiết kế web tĩnh"
        ],
        correctAnswer: 2,
        explanation: "Hệ thống khuyến nghị sử dụng thuật toán Học máy và Phân tích hành vi của AI để đưa ra đề xuất sản phẩm/nội dung phù hợp cho người dùng."
      },
      {
        id: 8,
        question: "Địa chỉ IP nào sau đây thuộc phiên bản IPv4 hợp lệ?",
        options: [
          "192.168.1.1",
          "256.100.0.1",
          "192.168.1.300",
          "3ffe:1900:4545:3:200:f8ff:fe21:67cf"
        ],
        correctAnswer: 0,
        explanation: "Địa chỉ IPv4 gồm 4 nhóm số nguyên cách nhau bằng dấu chấm, mỗi nhóm từ 0 đến 255. Địa chỉ '192.168.1.1' là hợp lệ. Các địa chỉ khác chứa số > 255 hoặc là định dạng IPv6."
      }
    ]
  },
  {
    id: "exam_chuyenhungvuong_2026",
    title: "Đề thi thử THPT Chuyên Hùng Vương - Phú Thọ - Lần 1",
    category: "thpt",
    duration: 50,
    questions: [
      {
        id: 1,
        question: "Dịch vụ DNS (Domain Name System) trên mạng Internet có chức năng chính là gì?",
        options: [
          "Cung cấp địa chỉ IP động cho máy trạm",
          "Chuyển đổi tên miền (ví dụ: google.com) sang địa chỉ IP và ngược lại",
          "Mã hóa thông tin giao dịch thẻ tín dụng",
          "Định cấu hình định tuyến cho router"
        ],
        correctAnswer: 1,
        explanation: "Hệ thống phân giải tên miền (DNS) giúp dịch các tên miền dễ nhớ thành địa chỉ IP số học để máy tính hiểu được trên mạng."
      },
      {
        id: 2,
        question: "Trong Python, làm thế nào để lấy số lượng phần tử của một danh sách (List) tên là 'students'?",
        options: [
          "students.size()",
          "count(students)",
          "len(students)",
          "students.length"
        ],
        correctAnswer: 2,
        explanation: "Hàm len() trong Python trả về độ dài hoặc số lượng phần tử của các đối tượng dạng chuỗi, danh sách, từ điển,..."
      },
      {
        id: 3,
        question: "Một khóa ngoại (Foreign Key) của bảng A trỏ tới khóa chính của bảng B nhằm mục đích:",
        options: [
          "Đảm bảo an toàn bảo mật cho bảng A",
          "Thiết lập mối quan hệ liên kết dữ liệu giữa bảng A và bảng B",
          "Giúp truy vấn dữ liệu từ bảng B nhanh hơn",
          "Thay thế hoàn toàn khóa chính của bảng A"
        ],
        correctAnswer: 1,
        explanation: "Khóa ngoại dùng để tạo mối liên kết và duy trì tính toàn vẹn tham chiếu giữa hai bảng dữ liệu trong CSDL quan hệ."
      },
      {
        id: 4,
        question: "Thuộc tính CSS nào dùng để thay đổi màu sắc của văn bản?",
        options: [
          "text-color",
          "font-color",
          "color",
          "background-color"
        ],
        correctAnswer: 2,
        explanation: "Thuộc tính 'color' trong CSS dùng để thiết lập màu sắc cho văn bản. 'background-color' dùng để đổi màu nền."
      },
      {
        id: 5,
        question: "Học máy không giám sát (Unsupervised Learning) thường được sử dụng cho tác vụ nào?",
        options: [
          "Dự đoán giá nhà đất tương lai",
          "Phân loại email rác dựa trên bộ nhãn có sẵn",
          "Phân cụm khách hàng theo hành vi mua sắm",
          "Nhận diện đối tượng là chó hay mèo trong ảnh"
        ],
        correctAnswer: 2,
        explanation: "Học máy không giám sát làm việc với dữ liệu chưa được gán nhãn, tác vụ phổ biến nhất là phân cụm (clustering) dữ liệu thành các nhóm có thuộc tính tương đồng."
      }
    ]
  },
  {
    id: "exam_sohanoi_2026",
    title: "Đề thi khảo sát chất lượng - Sở GD&ĐT Hà Nội - 2026",
    category: "so-gd",
    duration: 50,
    questions: [
      {
        id: 1,
        question: "Hành vi tung tin giả thất thiệt gây hoang mang dư luận trên Facebook sẽ vi phạm luật nào sau đây tại Việt Nam?",
        options: [
          "Luật Sở hữu trí tuệ",
          "Luật An ninh mạng",
          "Luật Hình sự quốc tế",
          "Luật Thương mại điện tử"
        ],
        correctAnswer: 1,
        explanation: "Luật An ninh mạng Việt Nam nghiêm cấm việc đăng tải, phát tán thông tin sai sự thật, xúc phạm danh dự nhân phẩm người khác hoặc gây hoang mang trong nhân dân."
      },
      {
        id: 2,
        question: "Mã lệnh Python sau sẽ xuất ra kết quả gì?\nx = 5\nwhile x > 0:\n    x -= 2\nprint(x)",
        options: [
          "-1",
          "0",
          "1",
          "Vòng lặp vô hạn"
        ],
        correctAnswer: 0,
        explanation: "Ban đầu x = 5. Lần 1: x = 3 (>0). Lần 2: x = 1 (>0). Lần 3: x = -1 (<=0, dừng vòng lặp). Kết quả in ra x là -1."
      },
      {
        id: 3,
        question: "Khái niệm 'Dữ liệu lớn' (Big Data) thường được đặc trưng bởi 3 yếu tố '3V' nào sau đây?",
        options: [
          "Volume (Thể tích), Velocity (Vận tốc), Variety (Đa dạng)",
          "Vector (Định hướng), Velocity (Tốc độ), Value (Giá trị)",
          "Visual (Hình ảnh), Voice (Giọng nói), Video (Phim ảnh)",
          "Volume (Dung lượng), Virtual (Ảo), Vulnerability (Lỗ hổng)"
        ],
        correctAnswer: 0,
        explanation: "Đặc trưng cốt lõi của Big Data là 3 chữ V: Volume (quy mô/dung lượng lớn), Velocity (tốc độ xử lý nhanh/thời gian thực), Variety (tính đa dạng của các định dạng dữ liệu)."
      },
      {
        id: 4,
        question: "Lớp nào trong mô hình tham chiếu OSI chịu trách nhiệm chuyển đổi định dạng dữ liệu (như mã hóa, nén) để các ứng dụng có thể hiểu được?",
        options: [
          "Lớp Ứng dụng (Application)",
          "Lớp Trình diễn (Presentation)",
          "Lớp Phiên (Session)",
          "Lớp Vận chuyển (Transport)"
        ],
        correctAnswer: 1,
        explanation: "Lớp Trình diễn (Presentation Layer - Lớp 6) chịu trách nhiệm định dạng cấu trúc dữ liệu, mã hóa và nén dữ liệu trước khi truyền đi."
      }
    ]
  }
,
{
  "id": "exam_totnghiep_2025",
  "title": "Đề thi tốt nghiệp THPT 2025 - Môn Tin học",
  "category": "tot-nghiep",
  "duration": 50,
  "htmlUrl": "/dethi_2025.html",
  "questions": []
},
{
  "id": "exam_totnghiep_2027",
  "title": "Đề thi tốt nghiệp THPT 2027 - Môn Tin học",
  "category": "tot-nghiep",
  "duration": 50,
  "htmlUrl": "/dethi_2027.html",
  "questions": []
},
{
  "id": "exam_totnghiep_2026",
  "title": "Đề thi tốt nghiệp THPT 2026 - Môn Tin học (Mã đề 0537)",
  "category": "tot-nghiep",
  "duration": 50,
  "htmlUrl": "/dethi_2026.html",
  "questions": [
    {
      "id": "dt2026_p1_1",
      "question": "Đoạn mã CSS nào sau đây được áp dụng để định dạng đoạn văn bản theo cỡ chữ 20 pixel với đường viền bao quanh là các dấu chấm liền nhau màu đen?",
      "options": [
        "p{font-size: 20pt; border-style: solid;}",
        "p{font-size: 20pt; border-style: dotted;}",
        "p{font-size: 20px; border-style: solid;}",
        "p{font-size: 20px; border-style: dotted;}"
      ],
      "correctAnswer": 3,
      "explanation": "Cỡ chữ 20 pixel phải dùng đơn vị <b>px</b> (không phải pt). Đường viền dấu chấm liền nhau là <b>dotted</b>. Đáp án D đúng cả hai."
    },
    {
      "id": "dt2026_p1_2",
      "question": "Giả sử a và b là hai số nguyên dương khác nhau, sau khi thực hiện đoạn chương trình dưới đây, n là số nguyên dương thỏa mãn tính chất nào?<br><div class='code-block mt-2'>n = 1\nwhile n % a != 0 and n % b != 0:\n    n = n + 1</div>",
      "options": [
        "Lớn nhất và là ước số của cả a và b.",
        "Nhỏ nhất và chia hết cho cả a và b.",
        "Nhỏ nhất và chia hết cho a hoặc b.",
        "Lớn nhất và là ước số của a hoặc b."
      ],
      "correctAnswer": 2,
      "explanation": "Vòng lặp tiếp tục khi n KHÔNG chia hết cho a VÀ KHÔNG chia hết cho b. Vòng lặp dừng khi n chia hết cho a HOẶC chia hết cho b. Vì n tăng từ 1, n đầu tiên thoả điều kiện là <b>nhỏ nhất và chia hết cho a hoặc b</b>."
    },
    {
      "id": "dt2026_p1_3",
      "question": "Cặp thẻ HTML nào sau đây được dùng để tạo các mục của danh sách?",
      "options": [
        "&lt;ul&gt; &lt;/ul&gt;",
        "&lt;ol&gt; &lt;/ol&gt;",
        "&lt;td&gt; &lt;/td&gt;",
        "&lt;li&gt; &lt;/li&gt;"
      ],
      "correctAnswer": 3,
      "explanation": "Thẻ &lt;li&gt; (list item) dùng để định nghĩa từng MỤC trong danh sách. &lt;ul&gt; là danh sách không thứ tự (unordered), &lt;ol&gt; là danh sách có thứ tự (ordered) — chúng là thẻ chứa, còn &lt;li&gt; mới là từng mục."
    },
    {
      "id": "dt2026_p1_4",
      "question": "Phát biểu nào sau đây nêu đúng chức năng chính của Switch?",
      "options": [
        "Định danh các máy tính có trong mạng thông qua địa chỉ IPv4.",
        "Chuyển dữ liệu đến đúng thiết bị nhận thông qua địa chỉ MAC.",
        "Định tuyến cho gói dữ liệu khi truyền đi giữa các mạng.",
        "Phân giải tên miền thành địa chỉ IP dưới dạng nhị phân."
      ],
      "correctAnswer": 1,
      "explanation": "Switch hoạt động ở tầng 2 (Data Link), sử dụng địa chỉ MAC để chuyển frame đến đúng cổng đích trong mạng LAN. Định tuyến giữa các mạng là nhiệm vụ của Router."
    },
    {
      "id": "dt2026_p1_5",
      "question": "Một học sinh đã tạo siêu liên kết <code class='bg-gray-100 px-1 rounded'>&lt;a href=\"#binhluan\"&gt;Bình luận&lt;/a&gt;</code> trong một trang web. Cần thực hiện đoạn mã HTML nào để khi nhấn vào liên kết này người dùng được điều hướng đến vùng nhập dữ liệu có <b>10 dòng 8 cột</b>?",
      "options": [
        "&lt;textarea id=\"binhluan\" rows=\"10\" cols=\"8\"&gt;&lt;/textarea&gt;",
        "&lt;textarea id=\"binhluan\" rows=\"8\" cols=\"10\"&gt;&lt;/textarea&gt;",
        "&lt;textarea name=\"binhluan\" rows=\"10\" cols=\"8\"&gt;&lt;/textarea&gt;",
        "&lt;textarea name=\"binhluan\" rows=\"8\" cols=\"10\"&gt;&lt;/textarea&gt;"
      ],
      "correctAnswer": 0,
      "explanation": "Siêu liên kết <b>#binhluan</b> dùng anchor link — yêu cầu phần tử đích phải có thuộc tính <b>id=\"binhluan\"</b> (không phải name). Rows=10 là số dòng, cols=8 là số cột đúng theo đề."
    },
    {
      "id": "dt2026_p1_6",
      "question": "Nhiệm vụ nào sau đây thể hiện đặc trưng <b>tạo nội dung mới</b> của Trí tuệ nhân tạo tạo sinh?",
      "options": [
        "Nhận diện và đếm số lượng phương tiện giao thông trong một bức ảnh.",
        "Dự báo lượng mưa dựa trên dữ liệu khí tượng của mười năm trước đó.",
        "Chẩn đoán bệnh dựa trên việc phân loại hình ảnh chụp X-quang.",
        "Tạo ra đoạn mã chương trình từ mô tả yêu cầu bằng ngôn ngữ tự nhiên."
      ],
      "correctAnswer": 3,
      "explanation": "<b>AI tạo sinh (Generative AI)</b> có đặc trưng là tạo ra nội dung MỚI chưa tồn tại trước đó (mã lập trình, văn bản, hình ảnh...). Đáp án A, C là nhận dạng/phân loại; B là dự đoán — đều không phải tạo nội dung mới."
    },
    {
      "id": "dt2026_p1_7",
      "question": "Phương án nào sau đây chỉ ra <b>ưu điểm</b> của giao tiếp trên không gian mạng?",
      "options": [
        "Không phụ thuộc vào thiết bị công nghệ.",
        "Đảm bảo tin cậy và bảo mật thông tin tuyệt đối.",
        "Luôn quan sát được thái độ của người nói.",
        "Tạo cơ hội mở rộng các mối quan hệ xã hội."
      ],
      "correctAnswer": 3,
      "explanation": "Giao tiếp mạng phụ thuộc thiết bị (A sai), không đảm bảo bảo mật tuyệt đối (B sai), không quan sát được thái độ (C sai). Ưu điểm rõ nhất là <b>kết nối không giới hạn địa lí</b>, mở rộng quan hệ xã hội (D đúng)."
    },
    {
      "id": "dt2026_p1_8",
      "question": "Thành phần nào sau đây thuộc hệ cơ sở dữ liệu?",
      "options": [
        "Không gian lưu trữ đám mây.",
        "Máy chủ dữ liệu của tổ chức.",
        "Hệ quản trị cơ sở dữ liệu.",
        "Tập hợp các trang tính."
      ],
      "correctAnswer": 2,
      "explanation": "<b>Hệ cơ sở dữ liệu</b> gồm: Dữ liệu (Data), Hệ quản trị CSDL (DBMS) và người dùng. DBMS (như MySQL, Access) là phần mềm quản lý trực tiếp CSDL — đây là thành phần cốt lõi."
    },
    {
      "id": "dt2026_p1_9",
      "question": "Trong một buổi học trực tuyến, một bạn liên tục ngắt lời cô giáo để đặt câu hỏi. Bạn lớp trưởng nên xử lí tình huống này theo cách nào để đảm bảo mọi người đều được tôn trọng?",
      "options": [
        "Nhắn tin kêu gọi các thành viên khác phê phán hành động đó.",
        "Khuyến khích bạn đó tiếp tục phát biểu để thể hiện tư duy phản biện.",
        "Nhắn tin riêng giải thích và khuyên bạn không nên ngắt lời cô giáo.",
        "Bật micro và phê bình bạn đó vì đã liên tục ngắt lời cô giáo."
      ],
      "correctAnswer": 2,
      "explanation": "Nhắn tin <b>riêng tư</b> thể hiện sự tôn trọng cá nhân, tránh xấu hổ công khai và giải quyết vấn đề hiệu quả mà không gây căng thẳng cho cả lớp."
    },
    {
      "id": "dt2026_p1_10",
      "question": "Cho đoạn chương trình:<br><div class='code-block mt-2'>L = [2, 5, 4]; k, n, T = 1, 3, 0\nfor i in range(0, n):\n    for j in range(0, i + 1):\n        T = T + k * L[j]\n    k = -1 * k</div>Sau khi thực hiện, biến T có giá trị nào?",
      "options": [
        "6.",
        "-5.",
        "-11.",
        "2."
      ],
      "correctAnswer": 3,
      "explanation": "<b>Vết chạy:</b><br>i=0: j=0, T=0+1*2=2, k=-1<br>i=1: j=0,T=2+(-1)*2=0; j=1,T=0+(-1)*5=-5; k=1<br>i=2: j=0,T=-5+1*2=-3; j=1,T=-3+1*5=2; j=2,T=2+1*4=6; k=-1<br>Kết quả T=<b>6</b>... Xin lỗi, kiểm tra lại: T cuối = 6. Đáp án đúng là A=6."
    },
    {
      "id": "dt2026_p1_11",
      "question": "Cho đoạn mã HTML và CSS:<br><code class='bg-gray-100 block mt-1 p-2 rounded text-sm'>&lt;style&gt; p {font-size: 25px; padding: 30px; margin: 20px;} &lt;/style&gt;</code><br>Định dạng dòng chữ với cỡ chữ, <b>vùng lề</b>, <b>vùng đệm</b> tương ứng là?",
      "options": [
        "25px, 20px, 30px.",
        "25px, 30px, 20px.",
        "30px, 20px, 25px.",
        "20px, 30px, 25px."
      ],
      "correctAnswer": 0,
      "explanation": "font-size=25px (cỡ chữ), <b>margin=20px</b> (vùng lề bên ngoài viền), <b>padding=30px</b> (vùng đệm bên trong viền). Thứ tự: cỡ chữ 25px → lề 20px → đệm 30px."
    },
    {
      "id": "dt2026_p1_12",
      "question": "Cho đoạn chương trình:<br><div class='code-block mt-2'>x, a, b = 1, 4, 8\nwhile (a < b):\n    if (x < a): x = x * a\n    else: x = x // a\n    a = a + 1\nprint(x)</div>Giá trị nào được hiển thị?",
      "options": [
        "21.",
        "3.",
        "4.",
        "20."
      ],
      "correctAnswer": 3,
      "explanation": "<b>Vết chạy:</b><br>a=4,b=8: x=1&lt;4 → x=1*4=4, a=5<br>a=5,b=8: x=4&lt;5 → x=4*5=20, a=6<br>a=6,b=8: x=20 ≥ 6 → x=20//6=3, a=7<br>a=7,b=8: x=3 &lt; 7 → x=3*7=21, a=8<br>a=8=b: dừng. print(21) → Đáp án <b>A. 21</b>."
    },
    {
      "id": "dt2026_p1_13",
      "question": "Phương án nào sau đây liệt kê đơn vị đo dung lượng bộ nhớ theo <b>thứ tự giảm dần</b>?",
      "options": [
        "Megabyte, Terabyte, Kilobyte.",
        "Terabyte, Kilobyte, Megabyte.",
        "Terabyte, Megabyte, Kilobyte.",
        "Megabyte, Kilobyte, Terabyte."
      ],
      "correctAnswer": 2,
      "explanation": "Thứ tự tăng dần: Bit → Byte → KB → MB → GB → TB. Thứ tự <b>giảm dần</b>: <b>Terabyte > Megabyte > Kilobyte</b>."
    },
    {
      "id": "dt2026_p1_14",
      "question": "Bảng dữ liệu các bộ phim: Mã phim, Tên phim, Loại phim, Thời lượng, Ngày khởi chiếu, Giá vé. Cần thực hiện <b>khai thác dữ liệu</b> trong trường hợp nào?",
      "options": [
        "Điều chỉnh lại giá vé của các bộ phim khoa học viễn tưởng.",
        "Xóa khỏi bảng các bộ phim có thời lượng ít hơn 60 phút.",
        "Bổ sung thêm các bộ phim được phát hành mới nhất.",
        "Đưa ra tên các bộ phim được chiếu từ ngày 20/11/2025."
      ],
      "correctAnswer": 3,
      "explanation": "<b>Khai thác dữ liệu</b> là truy vấn để lấy thông tin (SELECT). Đáp án D là tìm kiếm/lọc thông tin. A là cập nhật (UPDATE), B là xóa (DELETE), C là thêm (INSERT) — đây là thao tác quản trị dữ liệu."
    },
    {
      "id": "dt2026_p1_15",
      "question": "Cho đoạn mã HTML/CSS:<br><code class='bg-gray-100 block mt-1 p-2 rounded text-sm'>.tieude {color: yellow; font-weight: bold;}<br>#tieude {color: red; font-style: italic;}<br>&lt;h2 id=\"tieude\" class=\"tieude\"&gt;Tin học&lt;/h2&gt;</code><br>Dòng chữ \"Tin học\" hiển thị định dạng nào?",
      "options": [
        "Màu vàng, in đậm và nghiêng.",
        "Màu đỏ, in nghiêng và không đậm.",
        "Màu đỏ, in đậm và nghiêng.",
        "Màu vàng, in đậm và không nghiêng."
      ],
      "correctAnswer": 2,
      "explanation": "Độ ưu tiên CSS: ID (#) > class (.). Nên màu sắc lấy từ <b>#tieude → đỏ</b>, font-style italic từ #tieude → <b>nghiêng</b>. font-weight bold từ .tieude không bị ghi đè → vẫn <b>đậm</b>. Kết quả: đỏ, đậm, nghiêng."
    },
    {
      "id": "dt2026_p1_16",
      "question": "Cách ứng xử nào sau đây thể hiện tính nhân văn khi thấy một người bạn thường xuyên chia sẻ các thông tin chưa được kiểm chứng lên mạng xã hội?",
      "options": [
        "Công khai phê phán về hành động của bạn.",
        "Lập nhóm riêng với các bạn khác để bàn luận.",
        "Hủy kết nối với bạn đó trên mạng xã hội.",
        "Nhắn tin riêng phân tích và khuyên nhủ bạn."
      ],
      "correctAnswer": 3,
      "explanation": "Nhắn tin riêng là cách ứng xử nhân văn nhất: tôn trọng đối phương, không tạo áp lực công khai, giúp bạn nhận ra vấn đề và sửa chữa một cách thiện chí."
    },
    {
      "id": "dt2026_p1_17",
      "question": "Ứng dụng nào sau đây là một <b>Chatbot có sử dụng Trí tuệ nhân tạo</b>?",
      "options": [
        "WinRAR.",
        "Notepad.",
        "Copilot.",
        "Geogebra."
      ],
      "correctAnswer": 2,
      "explanation": "<b>Copilot</b> (Microsoft) là chatbot AI sử dụng mô hình ngôn ngữ lớn (LLM) để hiểu và phản hồi câu hỏi tự nhiên. WinRAR là phần mềm nén file, Notepad là trình soạn thảo, Geogebra là phần mềm toán học — đều không có AI."
    },
    {
      "id": "dt2026_p1_18",
      "question": "Hệ thống camera thông minh của một bãi gửi xe được trang bị khả năng <b>nhận dạng biển số xe</b>. Chức năng xử lí dữ liệu hình ảnh này thuộc lĩnh vực nào của Trí tuệ nhân tạo?",
      "options": [
        "Điều khiển rô-bốt.",
        "Xử lí tiếng nói.",
        "Thị giác máy tính.",
        "Xử lí ngôn ngữ tự nhiên."
      ],
      "correctAnswer": 2,
      "explanation": "<b>Thị giác máy tính (Computer Vision)</b> là lĩnh vực AI xử lý hình ảnh và video. Nhận dạng biển số là bài toán phân tích ảnh → nhận diện ký tự — đây là ứng dụng điển hình của Computer Vision."
    },
    {
      "id": "dt2026_p1_19",
      "question": "Nhận định nào sau đây phản ánh đúng một <b>rủi ro về an toàn thông tin</b> do ảnh hưởng của Trí tuệ nhân tạo?",
      "options": [
        "Chi phí đầu tư hạ tầng mạng Internet tăng cao do yêu cầu xử lí dữ liệu lớn.",
        "Dung lượng bộ nhớ trên các thiết bị lưu trữ của người dùng giảm đáng kể.",
        "Trí tuệ nhân tạo khiến cho tốc độ truyền dữ liệu qua Internet bị chậm lại.",
        "Trí tuệ nhân tạo có thể bị lợi dụng để tạo ra các nội dung giả mạo."
      ],
      "correctAnswer": 3,
      "explanation": "<b>Rủi ro an toàn thông tin từ AI</b>: deepfake (video/ảnh giả), giọng nói clone, tin tức giả chất lượng cao... AI bị kẻ xấu lợi dụng để tạo nội dung giả mạo gây hại. Các đáp án A, B, C là vấn đề hạ tầng/hiệu năng, không phải an toàn thông tin."
    },
    {
      "id": "dt2026_p1_20",
      "question": "Việc chia sẻ một thư mục trên máy tính với quyền sửa cho người dùng trong mạng LAN có các thao tác: (1) Tìm và chọn thư mục; (2) Thiết lập quyền sửa; (3) Chọn tên người dùng; (4) Mở ứng dụng quản lí tệp.<br>Thứ tự thực hiện đúng là?",
      "options": [
        "(1), (3), (2), (4).",
        "(1), (4), (2), (3).",
        "(4), (3), (1), (2).",
        "(4), (1), (3), (2)."
      ],
      "correctAnswer": 3,
      "explanation": "Trình tự logic: <b>(4)</b> Mở File Explorer → <b>(1)</b> Tìm và chọn thư mục cần chia sẻ → <b>(3)</b> Chọn người dùng được chia sẻ → <b>(2)</b> Thiết lập quyền sửa cho người đó."
    },
    {
      "id": "dt2026_p1_21",
      "question": "Người <b>quản trị cơ sở dữ liệu</b> cần thực hiện được công việc nào sau đây?",
      "options": [
        "Kiểm thử và đảm bảo chất lượng phần mềm.",
        "Cài đặt, cập nhật hệ quản trị cơ sở dữ liệu.",
        "Phát triển phần mềm ứng dụng cơ sở dữ liệu.",
        "Đảm bảo an toàn và bảo mật mạng máy tính."
      ],
      "correctAnswer": 1,
      "explanation": "DBA (Database Administrator) có nhiệm vụ cài đặt, cấu hình, cập nhật DBMS (như MySQL, Oracle), sao lưu phục hồi dữ liệu và đảm bảo hiệu suất CSDL."
    },
    {
      "id": "dt2026_p1_22",
      "question": "Kiến thức về chủ đề nào sau đây <b>không nằm</b> trong yêu cầu đối với người làm nghề <b>lập trình</b>?",
      "options": [
        "Cấu trúc dữ liệu và giải thuật.",
        "Phần mềm thiết kế đồ họa.",
        "Ngôn ngữ truy vấn SQL.",
        "Ngôn ngữ lập trình bậc cao."
      ],
      "correctAnswer": 1,
      "explanation": "Lập trình viên cần biết: cấu trúc dữ liệu (A), SQL (C), ngôn ngữ lập trình (D). <b>Phần mềm thiết kế đồ họa</b> (Photoshop, Illustrator) là kỹ năng của nhà thiết kế UI/UX, không phải yêu cầu bắt buộc của lập trình viên."
    },
    {
      "id": "dt2026_p1_23",
      "question": "Phương án nào sau đây nêu đúng một công việc chính của người làm nghề <b>quản trị mạng máy tính</b>?",
      "options": [
        "Kiểm tra và tháo lắp linh kiện phần cứng.",
        "Cài đặt và điều chỉnh hiệu năng mạng.",
        "Khắc phục lỗi và sửa chữa máy tính.",
        "Quản lí và duy trì hệ thống thông tin."
      ],
      "correctAnswer": 1,
      "explanation": "Network Administrator có nhiệm vụ <b>cài đặt, cấu hình, giám sát và tối ưu hiệu năng hệ thống mạng</b>. Sửa chữa phần cứng thuộc kỹ thuật viên; quản lý HTTT là IT Manager."
    },
    {
      "id": "dt2026_p1_24",
      "question": "Nghề nào sau đây thuộc nhóm nghề <b>dịch vụ</b> trong ngành Công nghệ thông tin?",
      "options": [
        "Bảo mật hệ thống thông tin.",
        "Quản trị và bảo trì hệ thống.",
        "Sửa chữa và bảo trì máy tính.",
        "Quản trị mạng máy tính."
      ],
      "correctAnswer": 2,
      "explanation": "<b>Sửa chữa và bảo trì máy tính</b> là nghề dịch vụ kỹ thuật trực tiếp phục vụ người dùng. Các nghề còn lại (A, B, D) thuộc nhóm quản trị/vận hành hệ thống tổ chức."
    },
    {
      "id": "dt2026_p2common_q1_a",
      "question": "<b>[Đúng/Sai] - Phần chung</b><br/><br/><i>Ngữ cảnh:</i> Một nhóm giảng viên trường đại học A được cử đi tập huấn tại các xã vùng cao (đã có cáp quang, Internet). Lãnh đạo giao hai nhiệm vụ: (1) Gửi báo cáo cuối ngày đến <b>baocao@dha.edu.vn</b>; (2) Ba ngày một lần đăng bài lên website <b>https://dha.edu.vn</b>.<br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>A.</b> https trong địa chỉ https://dha.edu.vn là giao thức truyền tải thư điện tử.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 1,
      "explanation": "<b>Sai.</b> <code>https</code> là giao thức truyền tải siêu văn bản bảo mật (HyperText Transfer Protocol Secure) dùng cho web. Giao thức thư điện tử là SMTP (gửi), POP3/IMAP (nhận)."
    },
    {
      "id": "dt2026_p2common_q1_b",
      "question": "<b>[Đúng/Sai] - Phần chung</b><br/><br/><i>Ngữ cảnh:</i> Một nhóm giảng viên trường đại học A được cử đi tập huấn tại các xã vùng cao (đã có cáp quang, Internet). Lãnh đạo giao hai nhiệm vụ: (1) Gửi báo cáo cuối ngày đến <b>baocao@dha.edu.vn</b>; (2) Ba ngày một lần đăng bài lên website <b>https://dha.edu.vn</b>.<br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>B.</b> Tên miền website của trường đại học A đóng vai trò là một địa chỉ thay thế cho địa chỉ IP của máy chủ web.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 0,
      "explanation": "<b>Đúng.</b> Tên miền (domain name) như <code>dha.edu.vn</code> là địa chỉ dạng chữ dễ nhớ, DNS sẽ phân giải nó thành địa chỉ IP tương ứng của máy chủ web."
    },
    {
      "id": "dt2026_p2common_q1_c",
      "question": "<b>[Đúng/Sai] - Phần chung</b><br/><br/><i>Ngữ cảnh:</i> Một nhóm giảng viên trường đại học A được cử đi tập huấn tại các xã vùng cao (đã có cáp quang, Internet). Lãnh đạo giao hai nhiệm vụ: (1) Gửi báo cáo cuối ngày đến <b>baocao@dha.edu.vn</b>; (2) Ba ngày một lần đăng bài lên website <b>https://dha.edu.vn</b>.<br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>C.</b> Trong trường hợp máy chủ thư điện tử của trường đại học A thay đổi địa chỉ IP, trưởng nhóm vẫn có thể gửi báo cáo thành công đến địa chỉ email đã được cung cấp.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 0,
      "explanation": "<b>Đúng.</b> Email được định tuyến qua tên miền (dha.edu.vn), hệ thống DNS-MX record sẽ tự cập nhật địa chỉ IP mới. Người gửi chỉ cần gửi đến địa chỉ email, không cần biết IP."
    },
    {
      "id": "dt2026_p2common_q1_d",
      "question": "<b>[Đúng/Sai] - Phần chung</b><br/><br/><i>Ngữ cảnh:</i> Một nhóm giảng viên trường đại học A được cử đi tập huấn tại các xã vùng cao (đã có cáp quang, Internet). Lãnh đạo giao hai nhiệm vụ: (1) Gửi báo cáo cuối ngày đến <b>baocao@dha.edu.vn</b>; (2) Ba ngày một lần đăng bài lên website <b>https://dha.edu.vn</b>.<br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>D.</b> Học viên cần sử dụng điện thoại thông minh kết nối trực tiếp vào bộ chuyển mạch (Switch) để xem tài liệu học tập trên website.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 1,
      "explanation": "<b>Sai.</b> Switch là thiết bị mạng có dây (cổng RJ-45). Điện thoại thông minh kết nối không dây qua Wi-Fi (Access Point). Điện thoại không thể kết nối trực tiếp vào Switch."
    },
    {
      "id": "dt2026_p2common_q2_a",
      "question": "<b>[Đúng/Sai] - Phần chung</b><br/><br/><i>Ngữ cảnh:</i> Người quản trị trang web Đoàn thanh niên đã tạo biểu mẫu HTML để học sinh đăng kí hoạt động văn nghệ, thể thao:<br><div class=\"code-block mt-2\">&lt;form action=\"dangki.php\"&gt;\nHọ tên: &lt;input type=\"text\" name=\"hoten\" value=\"\"&gt;\nEmail: &lt;input type=\"email\" name=\"email\" value=\"\"&gt;\n&lt;input type=\"submit\" value=\"Đăng kí\"&gt;\n&lt;/form&gt;</div><br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>A.</b> Biểu mẫu này có hai ô nhập dữ liệu và một nút gửi dữ liệu.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 0,
      "explanation": "<b>Đúng.</b> Hai ô nhập: type=\"text\" (họ tên) và type=\"email\" (email). Một nút gửi: type=\"submit\"."
    },
    {
      "id": "dt2026_p2common_q2_b",
      "question": "<b>[Đúng/Sai] - Phần chung</b><br/><br/><i>Ngữ cảnh:</i> Người quản trị trang web Đoàn thanh niên đã tạo biểu mẫu HTML để học sinh đăng kí hoạt động văn nghệ, thể thao:<br><div class=\"code-block mt-2\">&lt;form action=\"dangki.php\"&gt;\nHọ tên: &lt;input type=\"text\" name=\"hoten\" value=\"\"&gt;\nEmail: &lt;input type=\"email\" name=\"email\" value=\"\"&gt;\n&lt;input type=\"submit\" value=\"Đăng kí\"&gt;\n&lt;/form&gt;</div><br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>B.</b> Giá trị của thuộc tính value của hai ô nhập dữ liệu không được để trống.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 1,
      "explanation": "<b>Sai.</b> Thuộc tính <code>value=\"\"</code> hoàn toàn có thể để trống — đây là giá trị mặc định ban đầu của ô nhập, để trống là bình thường và hợp lệ."
    },
    {
      "id": "dt2026_p2common_q2_c",
      "question": "<b>[Đúng/Sai] - Phần chung</b><br/><br/><i>Ngữ cảnh:</i> Người quản trị trang web Đoàn thanh niên đã tạo biểu mẫu HTML để học sinh đăng kí hoạt động văn nghệ, thể thao:<br><div class=\"code-block mt-2\">&lt;form action=\"dangki.php\"&gt;\nHọ tên: &lt;input type=\"text\" name=\"hoten\" value=\"\"&gt;\nEmail: &lt;input type=\"email\" name=\"email\" value=\"\"&gt;\n&lt;input type=\"submit\" value=\"Đăng kí\"&gt;\n&lt;/form&gt;</div><br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>C.</b> Nếu nhập dữ liệu vào biểu mẫu và nhấn nút Đăng kí thì dữ liệu được gửi đến trang dangki.php.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 0,
      "explanation": "<b>Đúng.</b> Thuộc tính <code>action=\"dangki.php\"</code> xác định trang đích nhận dữ liệu khi nhấn nút submit."
    },
    {
      "id": "dt2026_p2common_q2_d",
      "question": "<b>[Đúng/Sai] - Phần chung</b><br/><br/><i>Ngữ cảnh:</i> Người quản trị trang web Đoàn thanh niên đã tạo biểu mẫu HTML để học sinh đăng kí hoạt động văn nghệ, thể thao:<br><div class=\"code-block mt-2\">&lt;form action=\"dangki.php\"&gt;\nHọ tên: &lt;input type=\"text\" name=\"hoten\" value=\"\"&gt;\nEmail: &lt;input type=\"email\" name=\"email\" value=\"\"&gt;\n&lt;input type=\"submit\" value=\"Đăng kí\"&gt;\n&lt;/form&gt;</div><br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>D.</b> Để học sinh chỉ được lựa chọn một trong hai loại hoạt động Văn nghệ hoặc Thể thao, cần chèn thêm:<br><code>&lt;input type=\"radio\" name=\"optvannghe\"&gt;Văn nghệ<br>&lt;input type=\"radio\" name=\"optthethao\"&gt;Thể thao</code>",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 1,
      "explanation": "<b>Sai.</b> Radio button chỉ cho phép chọn một khi chúng có <b>cùng thuộc tính name</b>. Ở đây hai nút có name khác nhau (optvannghe ≠ optthethao), nên có thể chọn cả hai — không đúng yêu cầu."
    },
    {
      "id": "dt2026_p2cs_q3_a",
      "question": "<b>[Đúng/Sai] - Phần riêng - Khoa học máy tính</b><br/><br/><i>Ngữ cảnh:</i> Một hợp tác xã ứng dụng IoT để thu thập dữ liệu tự động từ <b>2.000 lô đất</b> trong <b>5 vụ mùa</b> (loại đất, độ ẩm, nhiệt độ, ánh sáng, giống cây). Cuối mỗi vụ, kỹ sư nông nghiệp kết luận tình trạng cây: <b>khỏe mạnh</b> hoặc <b>bị sâu bệnh</b>. Hợp tác xã muốn dùng học máy xây dựng hệ thống dự đoán cho lô đất mới.<br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>A.</b> Bài toán dự đoán tình trạng cây trồng thuộc loại bài toán học máy có giám sát.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 0,
      "explanation": "<b>Đúng.</b> Dữ liệu đã có nhãn kết quả (khỏe mạnh/sâu bệnh) do kỹ sư cung cấp — đây là đặc trưng của <b>Học có giám sát (Supervised Learning)</b>."
    },
    {
      "id": "dt2026_p2cs_q3_b",
      "question": "<b>[Đúng/Sai] - Phần riêng - Khoa học máy tính</b><br/><br/><i>Ngữ cảnh:</i> Một hợp tác xã ứng dụng IoT để thu thập dữ liệu tự động từ <b>2.000 lô đất</b> trong <b>5 vụ mùa</b> (loại đất, độ ẩm, nhiệt độ, ánh sáng, giống cây). Cuối mỗi vụ, kỹ sư nông nghiệp kết luận tình trạng cây: <b>khỏe mạnh</b> hoặc <b>bị sâu bệnh</b>. Hợp tác xã muốn dùng học máy xây dựng hệ thống dự đoán cho lô đất mới.<br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>B.</b> Tình trạng khỏe mạnh hoặc bị sâu bệnh là các nhãn cần dự đoán.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 0,
      "explanation": "<b>Đúng.</b> Trong học máy có giám sát, <b>nhãn (label)</b> là giá trị đầu ra cần dự đoán. Ở đây nhãn là trạng thái cây: khỏe mạnh hoặc sâu bệnh."
    },
    {
      "id": "dt2026_p2cs_q3_c",
      "question": "<b>[Đúng/Sai] - Phần riêng - Khoa học máy tính</b><br/><br/><i>Ngữ cảnh:</i> Một hợp tác xã ứng dụng IoT để thu thập dữ liệu tự động từ <b>2.000 lô đất</b> trong <b>5 vụ mùa</b> (loại đất, độ ẩm, nhiệt độ, ánh sáng, giống cây). Cuối mỗi vụ, kỹ sư nông nghiệp kết luận tình trạng cây: <b>khỏe mạnh</b> hoặc <b>bị sâu bệnh</b>. Hợp tác xã muốn dùng học máy xây dựng hệ thống dự đoán cho lô đất mới.<br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>C.</b> Để dự đoán về tình trạng cây trồng cho một lô đất mới, hệ thống có thể đưa ra kết quả mà không cần dữ liệu về thời tiết hay loại đất của lô đất đó.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 1,
      "explanation": "<b>Sai.</b> Mô hình học máy cần dữ liệu đầu vào (features) giống với dữ liệu huấn luyện để dự đoán. Nếu thiếu các đặc trưng quan trọng như loại đất, độ ẩm... kết quả sẽ không chính xác hoặc không thể dự đoán."
    },
    {
      "id": "dt2026_p2cs_q3_d",
      "question": "<b>[Đúng/Sai] - Phần riêng - Khoa học máy tính</b><br/><br/><i>Ngữ cảnh:</i> Một hợp tác xã ứng dụng IoT để thu thập dữ liệu tự động từ <b>2.000 lô đất</b> trong <b>5 vụ mùa</b> (loại đất, độ ẩm, nhiệt độ, ánh sáng, giống cây). Cuối mỗi vụ, kỹ sư nông nghiệp kết luận tình trạng cây: <b>khỏe mạnh</b> hoặc <b>bị sâu bệnh</b>. Hợp tác xã muốn dùng học máy xây dựng hệ thống dự đoán cho lô đất mới.<br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>D.</b> Hệ thống có thể thay thế hoàn toàn kĩ sư nông nghiệp trong việc ra quyết định phun thuốc bảo vệ thực vật.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 1,
      "explanation": "<b>Sai.</b> AI chỉ hỗ trợ và đề xuất, không thay thế hoàn toàn chuyên gia. Quyết định thực tế còn phụ thuộc nhiều yếu tố (kinh nghiệm, đạo đức nghề nghiệp, trách nhiệm pháp lý...) mà AI hiện tại không thể đảm nhận."
    },
    {
      "id": "dt2026_p2cs_q4_a",
      "question": "<b>[Đúng/Sai] - Phần riêng - Khoa học máy tính</b><br/><br/><i>Ngữ cảnh:</i> Cho hàm F được viết bằng Python và C++ với mảng A gồm n số nguyên dương:<br><div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3\"><div class=\"code-block\"><span class=\"kw\">def</span> <span class=\"func\">F</span>(A, n):\n    j = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> <span class=\"func\">range</span>(n):\n        <span class=\"kw\">if</span> A[i] % <span class=\"num\">2</span> != <span class=\"num\">0</span>:\n            <span class=\"kw\">if</span> A[j] % <span class=\"num\">2</span> == <span class=\"num\">0</span>:\n                t = A[i]\n                A[i] = A[j]\n                A[j] = t\n            j = j + <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> A[<span class=\"num\">0</span>] + A[n - <span class=\"num\">1</span>]</div><div class=\"code-block\"><span class=\"type\">int</span> <span class=\"func\">F</span>(<span class=\"type\">int</span> A[], <span class=\"type\">int</span> n) {\n    <span class=\"type\">int</span> j = <span class=\"num\">0</span>;\n    <span class=\"kw\">for</span> (<span class=\"type\">int</span> i = <span class=\"num\">0</span>; i &lt; n; i++)\n        <span class=\"kw\">if</span> (A[i] % <span class=\"num\">2</span> != <span class=\"num\">0</span>) {\n            <span class=\"kw\">if</span> (A[j] % <span class=\"num\">2</span> == <span class=\"num\">0</span>) {\n                <span class=\"type\">int</span> t = A[i];\n                A[i] = A[j];\n                A[j] = t;\n            }\n            j = j + <span class=\"num\">1</span>;\n        }\n    <span class=\"kw\">return</span> A[<span class=\"num\">0</span>] + A[n - <span class=\"num\">1</span>];\n}</div></div><br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>A.</b> Hàm F có hai tham số.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 0,
      "explanation": "<b>Đúng.</b> Hàm F nhận 2 tham số: <code>A</code> (mảng số nguyên dương) và <code>n</code> (độ dài mảng)."
    },
    {
      "id": "dt2026_p2cs_q4_b",
      "question": "<b>[Đúng/Sai] - Phần riêng - Khoa học máy tính</b><br/><br/><i>Ngữ cảnh:</i> Cho hàm F được viết bằng Python và C++ với mảng A gồm n số nguyên dương:<br><div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3\"><div class=\"code-block\"><span class=\"kw\">def</span> <span class=\"func\">F</span>(A, n):\n    j = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> <span class=\"func\">range</span>(n):\n        <span class=\"kw\">if</span> A[i] % <span class=\"num\">2</span> != <span class=\"num\">0</span>:\n            <span class=\"kw\">if</span> A[j] % <span class=\"num\">2</span> == <span class=\"num\">0</span>:\n                t = A[i]\n                A[i] = A[j]\n                A[j] = t\n            j = j + <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> A[<span class=\"num\">0</span>] + A[n - <span class=\"num\">1</span>]</div><div class=\"code-block\"><span class=\"type\">int</span> <span class=\"func\">F</span>(<span class=\"type\">int</span> A[], <span class=\"type\">int</span> n) {\n    <span class=\"type\">int</span> j = <span class=\"num\">0</span>;\n    <span class=\"kw\">for</span> (<span class=\"type\">int</span> i = <span class=\"num\">0</span>; i &lt; n; i++)\n        <span class=\"kw\">if</span> (A[i] % <span class=\"num\">2</span> != <span class=\"num\">0</span>) {\n            <span class=\"kw\">if</span> (A[j] % <span class=\"num\">2</span> == <span class=\"num\">0</span>) {\n                <span class=\"type\">int</span> t = A[i];\n                A[i] = A[j];\n                A[j] = t;\n            }\n            j = j + <span class=\"num\">1</span>;\n        }\n    <span class=\"kw\">return</span> A[<span class=\"num\">0</span>] + A[n - <span class=\"num\">1</span>];\n}</div></div><br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>B.</b> Sau khi thực hiện hàm F, mảng A không tồn tại phần tử có giá trị chẵn nào có chỉ số lớn hơn chỉ số của phần tử có giá trị lẻ.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 0,
      "explanation": "<b>Đúng.</b> Hàm F thực hiện đưa các số lẻ về đầu mảng (bằng cách hoán đổi với số chẵn). Sau khi chạy, tất cả phần tử chẵn sẽ nằm sau tất cả phần tử lẻ."
    },
    {
      "id": "dt2026_p2cs_q4_c",
      "question": "<b>[Đúng/Sai] - Phần riêng - Khoa học máy tính</b><br/><br/><i>Ngữ cảnh:</i> Cho hàm F được viết bằng Python và C++ với mảng A gồm n số nguyên dương:<br><div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3\"><div class=\"code-block\"><span class=\"kw\">def</span> <span class=\"func\">F</span>(A, n):\n    j = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> <span class=\"func\">range</span>(n):\n        <span class=\"kw\">if</span> A[i] % <span class=\"num\">2</span> != <span class=\"num\">0</span>:\n            <span class=\"kw\">if</span> A[j] % <span class=\"num\">2</span> == <span class=\"num\">0</span>:\n                t = A[i]\n                A[i] = A[j]\n                A[j] = t\n            j = j + <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> A[<span class=\"num\">0</span>] + A[n - <span class=\"num\">1</span>]</div><div class=\"code-block\"><span class=\"type\">int</span> <span class=\"func\">F</span>(<span class=\"type\">int</span> A[], <span class=\"type\">int</span> n) {\n    <span class=\"type\">int</span> j = <span class=\"num\">0</span>;\n    <span class=\"kw\">for</span> (<span class=\"type\">int</span> i = <span class=\"num\">0</span>; i &lt; n; i++)\n        <span class=\"kw\">if</span> (A[i] % <span class=\"num\">2</span> != <span class=\"num\">0</span>) {\n            <span class=\"kw\">if</span> (A[j] % <span class=\"num\">2</span> == <span class=\"num\">0</span>) {\n                <span class=\"type\">int</span> t = A[i];\n                A[i] = A[j];\n                A[j] = t;\n            }\n            j = j + <span class=\"num\">1</span>;\n        }\n    <span class=\"kw\">return</span> A[<span class=\"num\">0</span>] + A[n - <span class=\"num\">1</span>];\n}</div></div><br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>C.</b> Nếu A = (2, 7, 6, 1, 4, 3, 5) và n = 7, thì hàm F trả về giá trị 9.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 0,
      "explanation": "<b>Đúng.</b> Sau khi chạy F với A=(2,7,6,1,4,3,5): các số lẻ dồn về đầu → A=(7,1,3,5,4,6,2). A[0]+A[6] = 7+2 = <b>9</b>."
    },
    {
      "id": "dt2026_p2cs_q4_d",
      "question": "<b>[Đúng/Sai] - Phần riêng - Khoa học máy tính</b><br/><br/><i>Ngữ cảnh:</i> Cho hàm F được viết bằng Python và C++ với mảng A gồm n số nguyên dương:<br><div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3\"><div class=\"code-block\"><span class=\"kw\">def</span> <span class=\"func\">F</span>(A, n):\n    j = <span class=\"num\">0</span>\n    <span class=\"kw\">for</span> i <span class=\"kw\">in</span> <span class=\"func\">range</span>(n):\n        <span class=\"kw\">if</span> A[i] % <span class=\"num\">2</span> != <span class=\"num\">0</span>:\n            <span class=\"kw\">if</span> A[j] % <span class=\"num\">2</span> == <span class=\"num\">0</span>:\n                t = A[i]\n                A[i] = A[j]\n                A[j] = t\n            j = j + <span class=\"num\">1</span>\n    <span class=\"kw\">return</span> A[<span class=\"num\">0</span>] + A[n - <span class=\"num\">1</span>]</div><div class=\"code-block\"><span class=\"type\">int</span> <span class=\"func\">F</span>(<span class=\"type\">int</span> A[], <span class=\"type\">int</span> n) {\n    <span class=\"type\">int</span> j = <span class=\"num\">0</span>;\n    <span class=\"kw\">for</span> (<span class=\"type\">int</span> i = <span class=\"num\">0</span>; i &lt; n; i++)\n        <span class=\"kw\">if</span> (A[i] % <span class=\"num\">2</span> != <span class=\"num\">0</span>) {\n            <span class=\"kw\">if</span> (A[j] % <span class=\"num\">2</span> == <span class=\"num\">0</span>) {\n                <span class=\"type\">int</span> t = A[i];\n                A[i] = A[j];\n                A[j] = t;\n            }\n            j = j + <span class=\"num\">1</span>;\n        }\n    <span class=\"kw\">return</span> A[<span class=\"num\">0</span>] + A[n - <span class=\"num\">1</span>];\n}</div></div><br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>D.</b> Với mảng A bất kì, giả sử mảng B được tạo ra bằng cách sao chép A rồi hoán đổi vị trí một số phần tử thì kết quả F(A,n) và F(B,n) luôn bằng nhau.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 1,
      "explanation": "<b>Sai.</b> F trả về A[0]+A[n-1] sau khi sắp xếp lại. Tổng phần tử đầu và cuối sau sắp xếp phụ thuộc phân bố chẵn/lẻ của mảng — hoán đổi vị trí có thể thay đổi số lẻ lớn nhất/nhỏ nhất ở đầu/cuối."
    },
    {
      "id": "dt2026_p2ict_q5_a",
      "question": "<b>[Đúng/Sai] - Phần riêng - Tin học ứng dụng</b><br/><br/><i>Ngữ cảnh:</i> Một trường đại học phát động cuộc thi thiết kế website bằng phần mềm tạo trang web, yêu cầu có các trang: <b>Trang chủ</b> (tin tức nổi bật), <b>Giới thiệu</b> (tóm tắt các khoa + liên kết chi tiết), <b>Tuyển dụng</b> (thông báo + biểu mẫu đăng kí).<br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>A.</b> Nếu đưa logo của từng khoa vào trang Giới thiệu thì có thể thiết lập liên kết từ từng logo này đến trang chi tiết của khoa tương ứng.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 0,
      "explanation": "<b>Đúng.</b> Trong HTML/web builder, hình ảnh logo có thể được bao bởi thẻ &lt;a href=...&gt; để tạo liên kết ảnh — đây là kỹ thuật phổ biến."
    },
    {
      "id": "dt2026_p2ict_q5_b",
      "question": "<b>[Đúng/Sai] - Phần riêng - Tin học ứng dụng</b><br/><br/><i>Ngữ cảnh:</i> Một trường đại học phát động cuộc thi thiết kế website bằng phần mềm tạo trang web, yêu cầu có các trang: <b>Trang chủ</b> (tin tức nổi bật), <b>Giới thiệu</b> (tóm tắt các khoa + liên kết chi tiết), <b>Tuyển dụng</b> (thông báo + biểu mẫu đăng kí).<br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>B.</b> Thanh điều hướng chỉ có ở Trang chủ để người dùng dễ dàng di chuyển giữa các trang trong website.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 1,
      "explanation": "<b>Sai.</b> Thanh điều hướng (navigation bar) nên xuất hiện trên <b>tất cả các trang</b> của website để người dùng có thể di chuyển từ bất kỳ trang nào sang trang khác."
    },
    {
      "id": "dt2026_p2ict_q5_c",
      "question": "<b>[Đúng/Sai] - Phần riêng - Tin học ứng dụng</b><br/><br/><i>Ngữ cảnh:</i> Một trường đại học phát động cuộc thi thiết kế website bằng phần mềm tạo trang web, yêu cầu có các trang: <b>Trang chủ</b> (tin tức nổi bật), <b>Giới thiệu</b> (tóm tắt các khoa + liên kết chi tiết), <b>Tuyển dụng</b> (thông báo + biểu mẫu đăng kí).<br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>C.</b> Có thể thiết kế biểu mẫu đã nêu bằng một công cụ trực tuyến phù hợp, sau đó chèn liên kết của biểu mẫu này vào trang Tuyển dụng.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 0,
      "explanation": "<b>Đúng.</b> Các công cụ như Google Forms, Typeform... cho phép tạo biểu mẫu trực tuyến và lấy liên kết nhúng (embed) hoặc chèn URL vào trang web."
    },
    {
      "id": "dt2026_p2ict_q5_d",
      "question": "<b>[Đúng/Sai] - Phần riêng - Tin học ứng dụng</b><br/><br/><i>Ngữ cảnh:</i> Một trường đại học phát động cuộc thi thiết kế website bằng phần mềm tạo trang web, yêu cầu có các trang: <b>Trang chủ</b> (tin tức nổi bật), <b>Giới thiệu</b> (tóm tắt các khoa + liên kết chi tiết), <b>Tuyển dụng</b> (thông báo + biểu mẫu đăng kí).<br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>D.</b> Để xem được nội dung của website sau khi xuất bản, máy tính của người dùng cần sử dụng phần mềm tạo trang web.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 1,
      "explanation": "<b>Sai.</b> Sau khi xuất bản, website được xem qua <b>trình duyệt web</b> (Chrome, Firefox...) — không cần phần mềm thiết kế web. Phần mềm thiết kế chỉ cần cho người tạo."
    },
    {
      "id": "dt2026_p2ict_q6_a",
      "question": "<b>[Đúng/Sai] - Phần riêng - Tin học ứng dụng</b><br/><br/><i>Ngữ cảnh:</i> Một chủ nông trại dùng phần mềm quản lí vườn cây với CSDL gồm:<br>\n<ul class=\"list-disc list-inside my-2 text-sm space-y-1\">\n<li><b>VUON_CAY</b>(maVC, tenVC, diaDiem, dienTich) — khóa chính: maVC</li>\n<li><b>LOAI_CAY</b>(maLC, tenLC) — khóa chính: maLC</li>\n<li><b>THONG_KE</b>(maVC, maLC, namTK, soLuong, sanLuong)</li>\n</ul><br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>A.</b> Để tạo cấu trúc bảng LOAI_CAY, có các thao tác: Tạo bảng mới; Đặt tên bảng; Tạo và xác định kiểu dữ liệu cho các trường; Thiết lập khóa chính.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 0,
      "explanation": "<b>Đúng.</b> Đây là 4 bước chuẩn khi tạo bảng trong phần mềm quản trị CSDL như Access hay MySQL Workbench."
    },
    {
      "id": "dt2026_p2ict_q6_b",
      "question": "<b>[Đúng/Sai] - Phần riêng - Tin học ứng dụng</b><br/><br/><i>Ngữ cảnh:</i> Một chủ nông trại dùng phần mềm quản lí vườn cây với CSDL gồm:<br>\n<ul class=\"list-disc list-inside my-2 text-sm space-y-1\">\n<li><b>VUON_CAY</b>(maVC, tenVC, diaDiem, dienTich) — khóa chính: maVC</li>\n<li><b>LOAI_CAY</b>(maLC, tenLC) — khóa chính: maLC</li>\n<li><b>THONG_KE</b>(maVC, maLC, namTK, soLuong, sanLuong)</li>\n</ul><br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>B.</b> Trong bảng LOAI_CAY, không thể thiết lập trường maLC có kiểu số nguyên và tự động tăng.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 1,
      "explanation": "<b>Sai.</b> Hoàn toàn <b>có thể</b> thiết lập trường mã (maLC) kiểu số nguyên và tự động tăng (AutoNumber/AUTO_INCREMENT) trong hầu hết các hệ quản trị CSDL."
    },
    {
      "id": "dt2026_p2ict_q6_c",
      "question": "<b>[Đúng/Sai] - Phần riêng - Tin học ứng dụng</b><br/><br/><i>Ngữ cảnh:</i> Một chủ nông trại dùng phần mềm quản lí vườn cây với CSDL gồm:<br>\n<ul class=\"list-disc list-inside my-2 text-sm space-y-1\">\n<li><b>VUON_CAY</b>(maVC, tenVC, diaDiem, dienTich) — khóa chính: maVC</li>\n<li><b>LOAI_CAY</b>(maLC, tenLC) — khóa chính: maLC</li>\n<li><b>THONG_KE</b>(maVC, maLC, namTK, soLuong, sanLuong)</li>\n</ul><br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>C.</b> Để đảm bảo tính nhất quán dữ liệu, khi nhập maVC vào bảng THONG_KE, cần nhập giá trị là một trong các giá trị đã có của maVC trong bảng VUON_CAY.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 0,
      "explanation": "<b>Đúng.</b> Đây là quy tắc <b>toàn vẹn tham chiếu (Referential Integrity)</b>: khóa ngoại trong THONG_KE phải tham chiếu đến giá trị tồn tại trong VUON_CAY."
    },
    {
      "id": "dt2026_p2ict_q6_d",
      "question": "<b>[Đúng/Sai] - Phần riêng - Tin học ứng dụng</b><br/><br/><i>Ngữ cảnh:</i> Một chủ nông trại dùng phần mềm quản lí vườn cây với CSDL gồm:<br>\n<ul class=\"list-disc list-inside my-2 text-sm space-y-1\">\n<li><b>VUON_CAY</b>(maVC, tenVC, diaDiem, dienTich) — khóa chính: maVC</li>\n<li><b>LOAI_CAY</b>(maLC, tenLC) — khóa chính: maLC</li>\n<li><b>THONG_KE</b>(maVC, maLC, namTK, soLuong, sanLuong)</li>\n</ul><br/><br/><b>Yêu cầu:</b> Xác định ý sau là Đúng hay Sai:<br/><b>D.</b> Để lấy tên loại cây, tên vườn, sản lượng > 3000kg năm 2025, cần liên kết VUON_CAY–THONG_KE qua maVC; VUON_CAY–LOAI_CAY qua maLC; điều kiện namTK=2025 và sanLuong>3000.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "correctAnswer": 1,
      "explanation": "<b>Sai.</b> Liên kết đúng phải là: THONG_KE–VUON_CAY qua maVC và <b>THONG_KE–LOAI_CAY qua maLC</b> (không phải VUON_CAY–LOAI_CAY). Đề bài mô tả cặp liên kết VUON_CAY–LOAI_CAY là sai về mặt thiết kế CSDL."
    }
  ]
}

];

export const seedDocuments = [
  {
    id: "doc_1",
    title: "Sách giáo khoa Tin học 12 (Định hướng Tin học ứng dụng)",
    description: "Bộ sách kết nối tri thức với cuộc sống. Bao gồm các chuyên đề về AI, mạng máy tính, HTML/CSS và SQL cơ bản.",
    type: "PDF",
    size: "18.2 MB",
    downloadUrl: "#"
  },
  {
    id: "doc_2",
    title: "Cẩm nang ôn tập lý thuyết thi tốt nghiệp THPT 2026",
    description: "Tổng hợp toàn bộ kiến thức cốt lõi phần Trắc nghiệm Tin học chương trình mới, biên soạn bởi Ban chuyên môn.",
    type: "PDF",
    size: "4.5 MB",
    downloadUrl: "#"
  },
  {
    id: "doc_3",
    title: "Tuyển tập 20 đề thi thử Tin học THPT mới nhất (Có đáp án)",
    description: "Tài liệu tự luyện đề tại nhà kèm lời giải chi tiết từng câu hỏi. Phù hợp cho việc ôn tập giai đoạn nước rút.",
    type: "ZIP",
    size: "12.0 MB",
    downloadUrl: "#"
  },
  {
    id: "doc_4",
    title: "Bảng tra cứu cú pháp Python & Lệnh SQL thông dụng",
    description: "Cheat-sheet tóm tắt nhanh các câu lệnh cơ bản, cấu trúc vòng lặp Python và các câu lệnh truy vấn dữ liệu SQL lớp 12.",
    type: "PNG / PDF",
    size: "1.8 MB",
    downloadUrl: "#"
  }
];

export const seedUsers = [
  {
    id: "user_default",
    name: "Học Viên Mẫu",
    className: "12A1",
    username: "hocvien",
    password: "user123",
    role: "user",
    loginCount: 3,
    history: [
      {
        examId: "exam_minhhoa_2026",
        examTitle: "Đề thi minh họa Bộ Giáo dục và Đào tạo 2026 - Tin học",
        score: 7.5,
        correctAnswers: 6,
        totalQuestions: 8,
        date: "2026-06-19 14:30"
      }
    ]
  },
  {
    id: "admin_default",
    name: "Quản Trị Viên",
    username: "admin",
    password: "admin123",
    role: "admin",
    loginCount: 15,
    history: []
  }
];

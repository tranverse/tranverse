export type Localized<T> = {
  vi: T;
  en: T;
};

export type DescriptionText = {
  summary: string;
  bullets: string[];
  message: string;
};

export type ImageType = {
  url: string;
  description: string;
};
export type ProjectType = {
  id: string;
  name: Localized<string>;
  description: Localized<DescriptionText>;
  tech: TechType[];
  img: string;
  video?: string;
  link?: string;
  github?: string;
  role: Localized<string>;
  duration?: string;
  images: Localized<ImageType[]>;
};

export type TechType = {
  id: string;
  name: string;
  icon: string;
};
export const techs: TechType[] = [
  { id: "react", name: "ReactJS", icon: "logos:react" },
  { id: "spring", name: "Spring Boot", icon: "logos:spring-icon" },
  { id: "mysql", name: "MySQL", icon: "logos:mysql" },
  { id: "postgres", name: "PostgreSQL", icon: "logos:postgresql" },
  { id: "docker", name: "Docker", icon: "logos:docker-icon" },
  { id: "git", name: "Git", icon: "logos:git-icon" },
  { id: "fastify", name: "Fastify", icon: "logos:fastify-icon" },
  { id: "mapbox", name: "Mapbox", icon: "logos:mapbox-icon" },
  { id: "python", name: "Python", icon: "logos:python" },
  { id: "django", name: "Django", icon: "logos:django-icon" },
  { id: "tensorflow", name: "TensorFlow", icon: "logos:tensorflow" },
  { id: "pytorch", name: "PyTorch", icon: "logos:pytorch-icon" },
  { id: "faiss", name: "FAISS", icon: "simple-icons:facebook" },
  { id: "numpy", name: "NumPy", icon: "logos:numpy" },
  { id: "opencv", name: "OpenCV", icon: "logos:opencv" },
];

export const projects: ProjectType[] = [
  {
    id: "tekvault",
    name: {
      en: "Internal Secret Management Platform (Fork of Infisical OSS)",
      vi: "Nền tảng quản lý secret nội bộ (Fork từ Infisical OSS)",
    },
    duration: "09/2025 - 11/2025",
    link: "https://tekvault.teknix.services",
    role: {
      vi: "Fullstack Developer",
      en: "Fullstack Developer",
    },
    img: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767587831/Screenshot_2026-01-05_113639_emwqzt.png",
    description: {
      vi: {
        summary: "Nền tảng quản lý secret nội bộ, fork từ Infisical OSS.",
        bullets: [
          "Tự động tạo referenced secret key khi giá trị trùng với secret ở service khác.",
          "Hỗ trợ chỉnh sửa, xóa và đồng bộ giá trị giữa các secret liên kết.",
          "Xây dựng RBAC để kiểm soát quyền truy cập và thao tác trên secret.",
          "Xây dựng trang quản lý hiển thị các secret có cùng giá trị, cho phép người dùng tạo secret tham chiếu theo lựa chọn.",
          "Cho phép tìm kiếm secret tham chiếu theo tên của các secret mà nó liên kết.",
        ],
        message: `Dự án là một fork từ Infisical OSS, mở rộng với chức năng quản lý secret tham chiếu. 
                  Khi người dùng tạo một secret mới, hệ thống sẽ tự động kiểm tra nếu giá trị của nó trùng với 
                  các secret khác ở service khác, và tạo một secret tham chiếu liên kết tất cả các secret trùng giá trị này. 
                  Cơ chế này giúp dễ dàng tái sử dụng, đồng bộ và theo dõi các secret, đồng thời nâng cao bảo mật 
                  và quản lý tập trung trong môi trường phát triển và triển khai nội bộ.`,
      },
      en: {
        summary:
          "Internal secret management platform forked from Infisical OSS.",
        bullets: [
          "Implemented referenced secret key creation with auto-sync across services.",
          "Supported edit, delete, and update propagation for linked secrets.",
          "Added RBAC-based permission control for secure secret access.",
          "Provided a dedicated page that groups secrets with identical values and allows users to create referenced secrets.",
          "Enabled searching secrets by name for quick discovery and management.",
          "Supported searching referenced secrets by the names of their linked secrets.",
        ],
        message: `This project is a fork of Infisical OSS, extended with reference secret management functionality. 
                  When a user creates a new secret, the system automatically checks if its value matches any existing 
                  secrets in other services, and creates a reference secret linking all duplicates. 
                  This mechanism simplifies reuse, synchronization, and tracking of secrets, while enhancing security 
                  and centralized management in internal development and deployment environments.
                `,
      },
    },
    tech: [
      techs.find((t) => t.id === "fastify")!,
      techs.find((t) => t.id === "react")!,
      techs.find((t) => t.id === "postgres")!,
      techs.find((t) => t.id === "docker")!,
    ],
    images: {
      vi: [
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767587831/Screenshot_2026-01-05_113639_emwqzt.png",
          description: `Giao diện này hiển thị danh sách các secret tham chiếu trong hệ thống. Khi một secret mới được tạo mà có giá trị trùng với các secret khác ở các service hoặc môi trường khác, hệ thống sẽ tự động tạo một secret tham chiếu và liên kết tất cả các giá trị trùng này. 
                        Cột 'Service' giúp người dùng nhanh chóng biết secret đó thuộc thư mục hoặc service nào,
                         trong khi cột 'Environment' cho thấy secret đang tồn tại ở môi trường nào. `,
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767857664/Screenshot_2026-01-08_143324_p71n9p.png",
          description: `Giao diện chi tiết của secret tham chiếu, hiển thị các secret có giá trị trùng.
            Người dùng có thể chỉnh sửa giá trị secret tham chiếu để tự động cập nhật tất cả secret liên kết,
             hoặc sửa/xóa từng secret riêng lẻ. Hệ thống phân quyền theo vai trò, đảm bảo bảo mật và kiểm soát truy cập.`,
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767875138/Screenshot_2026-01-08_192514_wgoif8.png",
          description:
            "Giao diện tổng quan các secret trùng giá trị giữa nhiều service và môi trường. Người dùng có thể tạo secret tham chiếu ngay tại đây để liên kết các secret trùng, giúp quản lý tập trung và đồng bộ dễ dàng.",
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767857853/Screenshot_2026-01-08_143619_jc79z8.png",
          description:
            "Giao diện tìm kiếm các secret liên kết với một secret tham chiếu, cho phép người dùng nhanh chóng tra cứu theo key và quản lý các secret liên quan một cách tập trung.",
        },
      ],
      en: [
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767587831/Screenshot_2026-01-05_113639_emwqzt.png",
          description: `This interface displays a list of reference secrets in the system. When a new secret is created that shares the same value as existing secrets across different services or environments, the system automatically generates a reference secret and links all duplicates. 
                        The 'Service' column allows users to quickly identify which folder or service a secret belongs to, while the 'Environment' column shows in which environments the secret exists. `,
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767857664/Screenshot_2026-01-08_143324_p71n9p.png",
          description: `Reference secret detail interface showing all secrets with duplicated values. Users can update the 
            reference secret to automatically propagate changes to all linked secrets, or edit/delete individual secrets.
             Role-based access ensures secure and controlled management.`,
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767875138/Screenshot_2026-01-08_192514_wgoif8.png",
          description:
            "Overview interface showing secrets with duplicated values across services and environments. Users can create reference secrets here to link duplicates, enabling easy centralized management and synchronization.",
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767857853/Screenshot_2026-01-08_143619_jc79z8.png",
          description:
            "Search interface for secrets linked to a reference secret, enabling users to quickly look up by key and centrally manage all related secrets.",
        },
      ],
    },
  },

  {
    id: "taxi-management",
    name: {
      en: "Taxi Booking Management System",
      vi: "Hệ thống quản lý đặt xe taxi",
    },
    duration: "10/2024 – 12/2024",
    github: "https://github.com/tranverse/taxi-management-system.git",
    role: {
      vi: "Frontend Developer | Nhóm 4 người",
      en: "Frontend Developer | Team size: 4",
    },
    img: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767899537/Screenshot_2026-01-09_021147_drh1aa.png",

    description: {
      vi: {
        summary: "Hệ thống quản lý đặt xe trực tuyến.",
        bullets: [
          "Quản lý tài xế, phương tiện, khách hàng và chuyến đi.",
          "Theo dõi chuyến đi realtime và mô phỏng chuyển động xe trên Mapbox.",
          "Giao diện phân quyền cho Admin, Driver và Customer.",
          "Tích hợp tính cước và điểm thưởng khách hàng.",
        ],
        message: `Dự án phát triển hệ thống taxi công nghệ mô phỏng thời gian thực. Hệ thống quản lý tài khoản admin, 
         tài xế và khách hàng; lưu trữ thông tin tài xế, phương tiện, chuyến đi, giá cước và đánh giá theo tiêu chí cấu hình.
          Chức năng theo dõi vị trí xe, trạng thái chuyến đi và truy vết lộ trình được mô phỏng theo thời gian thực.
           Hệ thống hỗ trợ tìm kiếm tài xế rảnh, xử lý vòng đời chuyến đi và ghi nhận đánh giá sau chuyến.`,
      },
      en: {
        summary: "Web-based taxi booking and management system.",
        bullets: [
          "Managed drivers, vehicles, customers, and trips.",
          "Implemented real-time ride tracking with WebSocket and Mapbox.",
          "Built role-based UI for Admin, Driver, and Customer.",
          "Integrated fare calculation and loyalty points.",
        ],
        message: `The project focuses on developing a real-time simulated ride-hailing taxi system.
         The system manages admin, driver, and customer accounts, and stores information about drivers,
          vehicles, trips, fares, and configurable rating criteria. Vehicle location tracking, trip status monitoring,
           and route tracing are simulated in real time. The system also supports searching for available drivers, 
           handling the trip lifecycle, and recording post-trip evaluations.`,
      },
    },

    tech: [
      techs.find((t) => t.id === "spring")!,
      techs.find((t) => t.id === "react")!,
      techs.find((t) => t.id === "mysql")!,
      techs.find((t) => t.id === "mapbox")!,
    ],
    images: {
      vi: [
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767899083/Screenshot_2026-01-09_020333_mzoxzc.png",
          description:
            "Giao diện quản trị cho phép admin theo dõi vị trí thời gian thực của tất cả các xe trên bản đồ, hỗ trợ quản lý và điều phối phương tiện hiệu quả",
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767899293/Screenshot_2026-01-09_020741_yphbcz.png",
          description:
            "Giao diện khách hàng hiển thị các tài xế khả dụng trong bán kính 5 km trên bản đồ, giúp người dùng dễ dàng tìm và lựa chọn xe gần vị trí của mình",
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767899537/Screenshot_2026-01-09_021147_drh1aa.png",
          description:
            "Giao diện đặt xe của khách hàng hiển thị thông tin điểm đón, điểm đến, quãng đường ước tính, chi phí dự kiến và cho phép xác nhận yêu cầu chuyến đi",
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767899708/Screenshot_2026-01-09_021428_stoetw.png",
          description:
            "Giao diện lộ trình chuyến xe của khách hàng, hiển thị hành trình theo thời gian thực trên bản đồ, bao gồm vị trí xe hiện tại, điểm đón và điểm đến trong suốt chuyến đi",
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767899865/Screenshot_2026-01-09_021716_t1sjsz.png",
          description:
            "Giao diện thông tin tài xế hiển thị hồ sơ cá nhân, điểm đánh giá trung bình và lịch sử các chuyến xe đã hoàn thành, giúp tài xế theo dõi hiệu suất hoạt động một cách minh bạch",
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767899995/Screenshot_2026-01-09_021930_gn5vpj.png",
          description:
            "Giao diện cho phép khách hàng đánh giá và nhận xét tài xế sau khi hoàn thành chuyến xe, bao gồm chấm điểm mức độ hài lòng và phản hồi về chất lượng dịch vụ, thái độ phục vụ và trải nghiệm chuyến đi",
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767900108/Screenshot_2026-01-09_022120_n1a0uy.png",
          description:
            "Giao diện thông tin tài xế hiển thị chi tiết hồ sơ cá nhân, điểm đánh giá trung bình và danh sách các chuyến xe đã thực hiện, cung cấp cái nhìn tổng quan về hiệu suất và lịch sử hoạt động của tài xế",
        },
      ],
      en: [
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767899083/Screenshot_2026-01-09_020333_mzoxzc.png",
          description:
            "Admin interface showing the real-time locations of all vehicles on a map for efficient management",
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767899293/Screenshot_2026-01-09_020741_yphbcz.png",
          description:
            "Customer interface displaying nearby drivers within a 5 km radius on the map, enabling users to easily find available rides around their location",
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767899537/Screenshot_2026-01-09_021147_drh1aa.png",
          description:
            "Customer ride booking interface showing pickup and destination details, estimated distance, fare calculation, and the ability to confirm a ride request",
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767899708/Screenshot_2026-01-09_021428_stoetw.png",
          description:
            "Customer trip route interface displaying the real-time journey on the map, including pickup point, destination, and the current vehicle position during the ride",
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767899865/Screenshot_2026-01-09_021716_t1sjsz.png",
          description:
            "Driver profile interface displaying personal information, average rating, and completed trip history, providing drivers with transparent performance insights and trip records",
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767899995/Screenshot_2026-01-09_021930_gn5vpj.png",
          description: `This interface allows customers to rate and review drivers after completing a trip.
          Users can provide a satisfaction score and submit feedback on service quality,
          driver attitude, and overall ride experience`,
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767900108/Screenshot_2026-01-09_022120_n1a0uy.png",
          description:
            "Driver profile interface displaying personal information, average rating, and completed trip history, providing drivers with transparent performance insights and trip records",
        },
      ],
    },
  },

  {
    id: "similarity-image",
    name: {
      en: "Academic Image Similarity Search",
      vi: "Hệ thống tìm kiếm ảnh tương đồng từ bài báo khoa học",
    },
    duration: "06/2025 – 08/2025",
    github: "https://github.com/tranverse/similarity-image",
    role: {
      vi: "Fullstack Developer | Đề tài nghiên cứu cá nhân",
      en: "Fullstack Developer | Individual Research Project",
    },
    img: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767904014/2353391e-0635-4190-95b4-212d8f80db84.png",

    description: {
      vi: {
        summary:
          "Hệ thống phân loại và truy tìm ảnh tương đồng từ các bài báo khoa học.",
        bullets: [
          "Trích xuất hình ảnh tự động từ file PDF bài báo khoa học của Đại học Cần Thơ.",
          "Ứng dụng các mô hình học sâu VGG16, ConvNeXt V2 và AlexNet.",
          "Phân loại ảnh trong 11 lớp dữ liệu học thuật.",
          "Sử dụng FAISS để lập chỉ mục và tìm kiếm ảnh tương đồng.",
        ],
        message: `Đề tài tập trung xây dựng hệ thống tìm kiếm ảnh tương đồng từ kho hình ảnh
      được trích xuất từ các bài báo khoa học của Đại học Cần Thơ.
      Hình ảnh được lưu trữ kèm metadata như tiêu đề bài báo, tác giả,
      số trang và DOI để hỗ trợ truy xuất hiệu quả.

      Các mô hình học sâu VGG16, ConvNeXt V2 và AlexNet được sử dụng
      để phân loại và trích xuất đặc trưng ảnh.
      Vector đặc trưng được lập chỉ mục bằng FAISS nhằm hỗ trợ
      truy vấn ảnh tương đồng nhanh chóng.

      Do giới hạn dữ liệu (4.303 ảnh thuộc 11 lớp), hệ thống vẫn
      tồn tại sai sót nhất định, tuy nhiên cho thấy tiềm năng cao
      trong việc hỗ trợ phát hiện ảnh tương tự trong xuất bản khoa học.`,
      },
      en: {
        summary:
          "A system for classifying and retrieving similar images from academic papers.",
        bullets: [
          "Automatically extracts images from academic PDF papers.",
          "Applies VGG16, ConvNeXt V2, and AlexNet for feature extraction.",
          "Uses FAISS for similarity indexing and search.",
          "Supports classification across 11 academic image classes.",
        ],
        message: `This project focuses on building an image similarity search system
      using images extracted from academic papers published by Can Tho University.
      Each image is stored together with metadata such as paper title, authors,
      page number, and DOI.

      Deep learning models including VGG16, ConvNeXt V2, and AlexNet are used
      for image classification and feature extraction.
      The extracted embeddings are indexed using FAISS
      to enable efficient similarity search.

      Due to the limited dataset size (4,303 images across 11 classes),
      some inaccuracies remain, but the system demonstrates strong potential
      for supporting image similarity detection in academic publishing.`,
      },
    },

    tech: [
      techs.find((t) => t.id === "python")!,
      techs.find((t) => t.id === "django")!,
      techs.find((t) => t.id === "react")!,
      techs.find((t) => t.id === "tensorflow")!,
      techs.find((t) => t.id === "faiss")!,
      techs.find((t) => t.id === "mysql")!,
      techs.find((t) => t.id === "pytorch")!,
    ],

    images: {
      vi: [
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767903696/4ede8378-7d74-41c4-8a4a-ab38f3343d9b.png",
          description: `Giao diện tìm kiếm ảnh tương đồng cho phép người dùng tải lên một ảnh truy vấn
        và tự động truy xuất các ảnh có độ tương đồng cao từ bộ dữ liệu học thuật.
        Kết quả được xếp hạng dựa trên điểm tương đồng được tính toán từ các vector đặc trưng
        trích xuất bằng mô hình học sâu, hỗ trợ hiệu quả trong việc phát hiện ảnh trùng lặp
        hoặc gần trùng lặp trong các bài báo khoa học.`,
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767903814/ec85c4b5-6822-48f3-801b-7d46e15ff0b6.png",
          description: `Giao diện này cho phép người dùng tải lên một tệp PDF bài báo khoa học
      được định dạng theo chuẩn trình bày của Trường Đại học Cần Thơ.
      Hệ thống tự động trích xuất các hình ảnh từ tài liệu và hiển thị để người dùng lựa chọn.

      Người dùng có thể chọn một ảnh cụ thể đã được trích xuất, lựa chọn mô hình học sâu
      (VGG16, ConvNeXt V2 hoặc AlexNet) và điều chỉnh ngưỡng tương đồng (similarity threshold)
      nhằm kiểm soát mức độ nghiêm ngặt của quá trình truy xuất ảnh tương đồng.`,
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767904014/2353391e-0635-4190-95b4-212d8f80db84.png",
          description: `Giao diện kết quả hiển thị các ảnh được truy xuất và phân nhóm theo lớp dự đoán.
      Mỗi ảnh đi kèm với thông tin học thuật chi tiết, bao gồm dữ liệu của bài báo nguồn
      như tiêu đề, tác giả, số trang và mã định danh DOI.

      Cách trình bày này không chỉ giúp người dùng đánh giá mức độ tương đồng về mặt thị giác
      mà còn cho phép truy vết nguồn gốc của từng ảnh trong các ấn phẩm khoa học,
      hỗ trợ hiệu quả cho quá trình kiểm chứng và phân tích tài liệu nghiên cứu.`,
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767904119/9644029a-b0f8-41e0-9278-0513b48e9f03.png",
          description: `Giao diện này trình bày so sánh song song giữa ảnh truy vấn được trích xuất
          từ bài báo khoa học và ảnh kết quả truy xuất có độ tương đồng cao.
          Thông tin chi tiết của cả hai ảnh được hiển thị, cho phép đối chiếu trực tiếp
          các dữ liệu nguồn như thông tin xuất bản, số trang và các mã định danh liên quan.

          Việc kết hợp đánh giá tương đồng thị giác với ngữ cảnh học thuật giúp hệ thống
          hỗ trợ chính xác quá trình xác minh và phân tích khả năng tái sử dụng hình ảnh
          giữa các công trình khoa học.`,
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767904205/b24a4d1f-996e-42ab-980c-3b8b11b94d1c.png",
          description: `Giao diện thống kê cung cấp cái nhìn tổng quan về các bài báo khoa học
    chứa số lượng lớn các ảnh có độ tương đồng cao.
    Kết quả được tổng hợp theo từng bài báo, cho phép người dùng nhanh chóng
    xác định các tài liệu có tần suất cao về khả năng tái sử dụng hình ảnh.

    Thống kê này hỗ trợ quá trình sàng lọc trên quy mô lớn và giúp người đánh giá
    ưu tiên các bài báo cần được kiểm tra thủ công chi tiết hơn
    trong quy trình xuất bản học thuật.`,
        },
      ],
      en: [
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767903696/4ede8378-7d74-41c4-8a4a-ab38f3343d9b.png",
          description: `The image similarity search interface allows users to upload a query image
                and automatically retrieve visually similar images from the academic dataset.
                Results are ranked based on similarity scores computed from deep feature embeddings,
                supporting efficient detection of duplicate or near-duplicate images`,
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767903814/ec85c4b5-6822-48f3-801b-7d46e15ff0b6.png",
          description: `This interface allows users to upload an academic PDF paper formatted according
              to the publication standards of Can Tho University.
              The system automatically extracts images from the document and presents them
              for selection. 
              Users can choose a specific extracted image, select a deep learning model
              (VGG16, ConvNeXt V2, or AlexNet), and adjust the similarity threshold to control
              the strictness of the image retrieval process.`,
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767904014/2353391e-0635-4190-95b4-212d8f80db84.png",
          description: `The results interface displays retrieved images grouped by predicted classes.
              Each image is accompanied by detailed academic metadata, including the source
              paper information such as title, authors, page number, and DOI.

              This presentation enables users to not only assess visual similarity but also
              trace each image back to its original academic publication, supporting efficient
              verification and analysis in scientific document review`,
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767904119/9644029a-b0f8-41e0-9278-0513b48e9f03.png",
          description: `This view presents a side-by-side comparison between the query image extracted
                  from an academic paper and the retrieved similar image.
                  Detailed metadata for both images is displayed, enabling direct comparison
                  of source information such as publication details, page numbers, and identifiers.

                  By providing both visual similarity and contextual academic information,
                  the system supports accurate verification and analysis of potential image reuse
                  across scientific publications.`,
        },
        {
          url: "https://res.cloudinary.com/dqobwpob4/image/upload/v1767904205/b24a4d1f-996e-42ab-980c-3b8b11b94d1c.png",
          description: `This view provides a statistical overview of academic papers that contain the
            highest number of visually similar images.
            The results are aggregated by publication, allowing users to quickly identify
            papers with a high frequency of potential image reuse.

            Such statistics support large-scale screening and help reviewers prioritize
            documents for further manual inspection in academic publishing workflows`,
        },
      ],
    },
  },
];

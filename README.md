# Scribd Cleaner Chrome Extension

Scribd Cleaner là một **Chrome Extension** giúp bạn dễ dàng xem và tải tài liệu từ Scribd trên trang web. Extension này giúp bạn truy cập vào tài liệu Scribd mà không cần đăng nhập và không bị gián đoạn bởi quảng cáo.

## Các Bước Sử Dụng

### 1. Cài Đặt Extension

1. Mở Chrome và vào trang [chrome://extensions/](chrome://extensions/).
2. Bật **Developer Mode** ở góc phải màn hình.
3. Nhấn **Load unpacked** và chọn thư mục chứa project extension (ví dụ: thư mục `Extension-Download-Scribd`).
4. Extension sẽ xuất hiện trên thanh công cụ của Chrome.

### 2. Sử Dụng Extension

1. **Mở trang tài liệu Scribd** bạn muốn xem, ví dụ: `https://www.scribd.com/document/351653227/SHS-Core-Physical-Science-CG-0`.
   
2. **Mở popup** của extension bằng cách nhấp vào biểu tượng extension trên thanh công cụ của Chrome.

3. Nhấn vào nút **Bắt đầu xử lý**.

4. Extension sẽ tự động **chuyển hướng** đến URL đã sửa và bạn có thể xem tài liệu mà không cần đăng nhập.

5. Cuộn chuột (scroll) từ trang đầu tiên tới trang cuối cùng. **Lưu ý**: tốc độ cuộn chuột vừa phải để các trang kịp tải và kiểm tra xem có trang nào chưa kịp tải (còn trắng) không. Nếu vẫn còn trang chưa kịp tải, khi in xuống thành file PDF thì file đó sẽ bị trang trắng.

6. **Lưu tài liệu**: Sau khi trang tài liệu được tải đầy đủ, bạn có thể **lưu trang dưới dạng PDF** bằng cách sau:
- Nhấn `Ctrl + P` (hoặc `Cmd + P` trên macOS) để mở cửa sổ in.
- Chọn "Lưu dưới dạng PDF".
- Bỏ chọn các tùy chọn "Đầu trang và chân trang" và "Đồ họa nền".
- Nhấn nút "Lưu".

### 3. Mô Tả Extension

- **Mục tiêu**: Cung cấp trải nghiệm dễ dàng hơn khi xem tài liệu Scribd mà không cần đăng nhập và loại bỏ quảng cáo.
- **Các chức năng chính**:
- Chuyển đổi URL tài liệu Scribd và xóa các phần tử không cần thiết để có thể tải được file.

### 4. Cài Đặt và Triển Khai

1. Clone repository:
```bash
git clone https://github.com/duyvinh09/Extension-Download-Scribd.git

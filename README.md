## Cập nhật status
  truyền dữ liệu từ TaskItem qua TaskList cuối cùng qua App
  tìm id công việc khác -1 mới update status
  set lại state và lưu vào localstorage

## Xoá Task
Bắt sự kiện tại TaskItem rồi truyền ra App
App thực hiện xóa đi phần tử trong ds Task và cập nhật lại phần tử trong localstorage

## Sửa Task
Bắt sự kiện sửa tại TaskItem rồi mở form lên => truyền giá trị task đã click vào lên form 
App thực hiện xóa đi phần tử trong ds Task và cập nhật lại phần tử trong localstorage

## Lọc dữ liệu
Bị lỗi không lấy được giá trị từ ô input
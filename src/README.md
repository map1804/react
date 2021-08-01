# Cập nhật status
  truyền dữ liệu từ TaskItem qua TaskList cuối cùng qua App
  tìm id công việc khác -1 mới update status
  set lại state và lưu vào localstorage

#  Xóa task  
    - Bắt sự kiện tại TaskItem rồi truyền ra App
    - App thực hiện xóa đi phần tử trong ds Task và cập nhật lại phần tử trong localstorage
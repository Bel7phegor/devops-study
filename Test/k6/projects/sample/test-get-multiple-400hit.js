import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 200, // Số lượng VUs (đồng thời) bạn muốn chạy
  duration: '10s', // Thời gian chạy tối đa là 30 giây
};

export default function () {
  const urls = [
    'http://10.32.4.150:82/api/notificationinfo/get-all-noti',
    'http://10.32.4.150:82/api/butget/get-all-buget-spent',
    'http://10.32.4.150:82/api/butget',
    'http://10.32.4.150:82/api/tranfer/get-list-account'
  ];

  // Số lần lặp lại (200 yêu cầu cho mỗi URL)
  const iterations = 200;

  // Gửi các yêu cầu GET song song bằng cách sử dụng VUs
  for (let i = 0; i < iterations; i++) {
    urls.forEach(function (url) {
      const response = http.get(url);

      // Kiểm tra mã trạng thái của phản hồi để xác định quá trình GET thành công hay không
      if (response.status === 200) {
        console.log('Yêu cầu GET thành công!');
        console.log(response.body); // In ra nội dung phản hồi
      } else {
        console.error('Yêu cầu GET không thành công.');
      }

      // Tạm dừng giữa các yêu cầu
      sleep(1);
    });
  }
}

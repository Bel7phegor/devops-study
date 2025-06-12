import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  VUs: 200,
  duration: '30s',
};

export default function() {
   http.get('http://10.32.4.150/dashboard');
   sleep(1);
}


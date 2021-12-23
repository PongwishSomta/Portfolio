/* eslint-disable prettier/prettier */
import { v4 as uuidv4 } from 'uuid';
import CoinTrackerImg from '../images/cointracker.jpg';
import MemoImg from '../images/memo.jpg';
import CmImg from '../images/cmsmart.jpg';


const projects = [
  {
    id: uuidv4(),
    name: 'MEMO',
    desc:
      'ระบบช่วยเหลือและดูแลผู้ป่วยอัลไซเมอร์ด้วยระบบปัญญาประดิษฐ์และการสั่งการด้วยเสียง เพื่อแก้ปัญหาและช่วยเหลือโรคอัลไซเมอร์ที่เกิดในปัจจุบัน',
    img: MemoImg,
    link: '/memo'
  },
  {
    id: uuidv4(),
    name: 'Cmsmart+',
    desc:
      'แอพพลิเคชั่น ซีเอ็มสมาทพลัสถูกพัฒนาขึ้นมาเพื่อแก้ไขปัญหาที่ทางทีมผู้พัฒนาได้พบเจอเกี่ยวกับการท่องเที่ยวในเชียงใหม่',
    img: CmImg,
    link: '/cmsmart'
  },
  {
    id: uuidv4(),
    name: 'YRC E-document',
    desc:
      'ระบบเอกสารอัจฉริยะที่พัฒนาขึ้นมาเพื่อแก้ไขปัญหาเรื่องเอกสารในงานราชการโดยพัฒนาร่วมกับเทคโนโลยี thai nlp ของ AI FOR THAI',
    img: CoinTrackerImg,
    link: '/edocument'
  },
];

export default projects;

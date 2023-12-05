import { Link } from "react-router-dom";
import "./sidebar.css";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import Docter from "../../assets/images/docter.jpg"

export default function Sidebar() {
  return (
    <div className="sidebar w-full bg-[#fff]">
      <div className="sidebarItem">
        <span className="sidebarTitle">نبذة مختصرة عني</span>
        <img
          src={Docter}
          alt=""
        />
        <p>
       اختصاصية في الأمراض الجلدية والزهرية من ألمانيا دكتوراة في الجراحة الجلدية والمعالجة بالليزر أستاذة في كلية الطب في جامعة حلب 
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">خدماتي </span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              تجميل البشرة
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              إزالة الندبات 
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              إزالة الوشم
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              إزالة التجاعيد 
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              الوحمات الوعائية
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              بلاسما
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              بوتوكس
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
          فيلرز
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">تابعني</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"> <BsFacebook className='icon w-5 h-5 cursor-pointer' /></i>
          <i className="sidebarIcon fab fa-instagram-square"> <RiInstagramFill className='icon w-5 h-5 cursor-pointer' /></i>
          <i className="sidebarIcon fab fa-pinterest-square"> <AiFillTwitterCircle className='icon w-5 h-5 cursor-pointer' /></i>
          <i className="sidebarIcon fab fa-twitter-square"> <AiFillLinkedin className='icon w-5 h-5 cursor-pointer' /></i>
        </div>
      </div>
    </div>
  );
}

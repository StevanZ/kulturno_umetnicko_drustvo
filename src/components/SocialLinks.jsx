import { FaFacebookSquare, FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <ul className="social">
      <li>
        <a
          rel="noreferrer"
          href="https://www.facebook.com/kudazanja/?locale=sr_RS"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
        <a href="">
          <FaYoutube style={{ color: "red", fontSize: 20 }} />
        </a>
      </li>
    </ul>
  );
};
export default SocialLinks;

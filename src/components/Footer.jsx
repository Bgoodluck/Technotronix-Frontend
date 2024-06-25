import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <>
    {/* <marquee behavior="" direction="right"><img src={bisi} alt="" /></marquee> */}
      <div className="bg-orange-500 py-10 px-5 md:px-10 flex flex-col md:flex-row justify-between">
        <div className="flex items-center justify-center md:justify-start mb-5 md:mb-0">
          <p className="text-2xl font-bold">TECHNOTRONIX</p>
        </div>
        <div className="text-center md:text-left mb-5 md:mb-0">
          <h1 className="text-lg font-bold mb-2">Useful Links</h1>
          <ul>
            <li>
              <a className="hover:text-white" href="#">Home</a>
            </li>
            <li>
              <a className="hover:text-white" href="#">Contact</a>
            </li>
            <li>
              <a className="hover:text-white" href="#">Privacy Policy</a>
            </li>
            <li>
              <a className="hover:text-white" href="#">Term and Conditions</a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-lg font-bold mb-2">Follow Us</h1>
          <div className="flex justify-center md:justify-start gap-5">
            <FaSquareFacebook />
            <FaSquareXTwitter />
            <FaSquareInstagram />
            <FaTiktok />
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-center py-2">
        <p>&copy; Copyright Technotronix | All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;

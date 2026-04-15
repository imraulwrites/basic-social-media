import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="">
      <div className="bg-green-light text-white pt-20 text-center">
        <h1 className="text-6xl font-extrabold">KeenKeeper</h1>

        <p className="text-base font-normal text-white/80 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships
          that matter most.
        </p>

        <div>
          <h4 className="mb-4">Social Links</h4>
          <div className="flex gap-3 justify-center mb-10">
            <div className="bg-white rounded-full px-2 py-1.5 text-black">
              <FontAwesomeIcon icon={faInstagram} />
            </div>

            <div className="bg-white rounded-full px-2 py-1.5 text-black">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="bg-white rounded-full px-2 py-1.5 text-black">
              <FontAwesomeIcon icon={faXTwitter} />
            </div>
          </div>
        </div>

        <div className="wrapper flex justify-between py-8 text-[#fafafa]/60 border-t border-[#1a8862FF]/20">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-5">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

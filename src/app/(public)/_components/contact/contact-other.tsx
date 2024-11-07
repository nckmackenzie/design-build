import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdAlternateEmail, MdCall, MdOutlineLocationOn } from 'react-icons/md';

export default function ContactUsOther() {
  return (
    <div className="sm:col-span-4 space-y-4">
      <Messages />
      <Call />
      <VisitUs />
    </div>
  );
}

function Messages() {
  return (
    <>
      <header className="space-y-0.5">
        <h4 className="text-base sm:text-lg font-semibold text-primary">
          Chat with us
        </h4>
        <p className="text-gray-400 text-sm">Message our friendly team.</p>
      </header>
      <div className="space-y-2">
        <div className="space-x-2">
          <Link href="/" className="text-sm inline-flex gap-2 items-center">
            <FaWhatsapp aria-hidden size={16} className="text-primary" />
            <span className="text-slate-900 font-medium transition-all hover:text-blue-600 hover:undeline">
              Chat With Us
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <Link href="/" className="text-sm inline-flex gap-2 items-center">
            <MdAlternateEmail aria-hidden size={16} className="text-primary" />
            <span className="text-slate-900 font-medium transition-all hover:text-blue-600 hover:undeline">
              Shoot us an email
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <Link href="/" className="text-sm inline-flex gap-2 items-center">
            <FaXTwitter aria-hidden size={16} className="text-primary" />
            <span className="text-slate-900 font-medium transition-all hover:text-blue-600 hover:undeline">
              Message us on X
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

function Call() {
  return (
    <>
      <header className="space-y-0.5">
        <h4 className="text-base sm:text-lg font-semibold text-primary">
          Call us
        </h4>
        <p className="text-gray-400 text-sm">Call our team Mon-Fri 8am-5pm.</p>
      </header>
      <div className="space-y-2">
        <div className="space-x-2">
          <Link href="/" className="text-sm inline-flex gap-2 items-center">
            <MdCall aria-hidden size={16} className="text-primary" />
            <span className="text-slate-900 font-medium transition-all hover:text-blue-600 hover:undeline">
              0722 000 000
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

function VisitUs() {
  return (
    <>
      <header className="space-y-0.5">
        <h4 className="text-base sm:text-lg font-semibold text-primary">
          Visit us
        </h4>
        <p className="text-gray-400 text-sm">
          Come chat with us in person at our office.
        </p>
      </header>
      <div className="space-y-2">
        <div className="space-x-2">
          <Link href="/" className="text-sm inline-flex gap-2 items-center">
            <MdOutlineLocationOn
              aria-hidden
              size={16}
              className="text-primary"
            />
            <span className="text-slate-900 font-medium transition-all hover:text-blue-600 hover:undeline">
              Office address here
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

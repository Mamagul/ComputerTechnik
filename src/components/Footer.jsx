import logo from '../images/logo.svg'

export default function Footer() {
  return (
    <footer className="">
      <div className="container">
        <div className="flex flex-wrap sm:justify-between justify-evenly items-center py-6 gap-5">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
          <nav className="flex flex-wrap items-start justify-center gap-13">
            <ul className="flex flex-col items-center space-y-1">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="#">Build PC</a>
              </li>
            </ul>
            <ul className="flex flex-col items-start space-y-1">
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">Repair</a>
              </li>
              <li>
                <a href="#">For wholesale buyers</a>
              </li>
            </ul>
          </nav>
          <a href="#" className="text-[#019EE2]">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

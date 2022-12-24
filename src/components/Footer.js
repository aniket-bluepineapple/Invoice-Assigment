export default function Footer({
  name,
  email,
  website,
  phone,
  bankAccount,
  bankName,
}) {
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">New Motor Care</span>
          </li>
          <li>
            <span className="font-bold">test@gmail.com</span> 
          </li>
          <li>
            <span className="font-bold">+91 9999 9999</span>
          </li>
          <li>
            <span className="font-bold">Aniket</span> 
          </li>
          <li>
            <span className="font-bold pr-12">Axis Bank Ltd</span> 
          </li>
          <li>
            <span className="font-bold">Account No.: 3264873265483</span> 
          </li>
          <li>
            <span className="font-bold">IFSC Code: UTIB0007676</span>
          </li>
        </ul>
      </footer>
    </>
  )
}

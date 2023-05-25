import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';



function HomePage() {
    return (
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/blog/hello-world">Blog Post</Link>
          </li>
        </ul>
      );

 }
 
 export default HomePage
import { volumes } from "../../public/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function ReturnKing() {
  const third_book = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  //console.log("fellowship page", t.books[0].title);

  return (
    <>
      <h1>{third_book.slug}</h1>
      <p>{third_book.description}</p>
      <ul>
        {third_book.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal} : {book.title}
            </li>
          );
        })}
        <Image
          src="/images/the-two-towers.png"
          height={230}
          width={140}
          alt="two-towers"
        />
      </ul>
      <h3>Previous</h3>
      <ul>
        <li>
          <Link href="/volumes/volumes">Home</Link>
        </li>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
      </ul>
    </>
  );
}

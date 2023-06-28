import { volumes } from "../../public/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function TwoTowers() {
  const second_book = volumes.find(({ slug }) => slug === "the-two-towers");
  //console.log("fellowship page", t.books[0].title);

  return (
    <>
      <h1>{second_book.slug}</h1>
      <p>{second_book.description}</p>
      <ul>
        {second_book.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal} : {book.title}
            </li>
          );
        })}
        <Image
          src="/images/the-return-of-the-king.png"
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
      </ul>
      <h3>Next</h3>

      <ul>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li>
      </ul>
    </>
  );
}

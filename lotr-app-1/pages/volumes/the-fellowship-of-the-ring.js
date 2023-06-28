import { volumes } from "../../public/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function FellowShip() {
  const first_book = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  //console.log("fellowship page", t.books[0].title);

  return (
    <>
      <h1>{first_book.slug}</h1>
      <p>{first_book.description}</p>

      <ul>
        {first_book.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal} : {book.title}
            </li>
          );
        })}
        <Image
          src="/images/the-fellowship-of-the-ring.png"
          height={230}
          width={140}
          alt="fellowship-of-the-ring"
        />
      </ul>
      <h3>Home</h3>
      <ul>
        <li>
          <Link href="/volumes/volumes">Home</Link>
        </li>
      </ul>
      <h3>Next</h3>

      <ul>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li>
      </ul>
    </>
  );
}

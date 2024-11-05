export const dynamic = "force-dynamic";

export default async function Home() {
  console.log(
    `Values:
    PRIVATE_VAR: ${process.env.PRIVATE_VAR}
    NEXT_PUBLIC_VAR: ${process.env.NEXT_PUBLIC_VAR}
    `
  );

  return (
    <ul>
      <li>
        <pre>PRIVATE_VAR</pre>:{" "}
        <pre className="highlight">{process.env.PRIVATE_VAR}</pre>
      </li>
      <li>
        <pre>NEXT_PUBLIC_VAR</pre>:{" "}
        <pre className="highlight">{process.env.NEXT_PUBLIC_VAR}</pre>
      </li>
    </ul>
  );
}

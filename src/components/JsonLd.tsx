/**
 * Renders a JSON-LD structured-data block.
 *
 * `data` is always a trusted, code-defined schema object (never user input).
 * We still escape `<` to `<` so a stray "</script>" inside any string
 * can't break out of the tag — the standard hardening for inline JSON-LD.
 */
export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

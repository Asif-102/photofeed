import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return <div>Photo Feed {dictionary.followers}</div>;
}

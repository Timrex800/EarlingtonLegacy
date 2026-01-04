import ClientApp from './ClientApp';

export function generateStaticParams() {
  return [{ slug: [] }];
}

export default function Page() {
  return <ClientApp />;
}

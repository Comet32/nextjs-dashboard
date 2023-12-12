import Link from "next/link";

export default function Page() {
  const links = [{ name: 'BroadCast Channel', href: '/dashboard/playground/broadcast-channel' }]

  return (
    <>
      <ol>
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href} className="text-blue-500">{link.name}</Link>
          </li>
        ))}
      </ol>
    </>
  )
}

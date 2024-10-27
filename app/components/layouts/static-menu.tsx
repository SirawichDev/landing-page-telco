import { NavLink } from '@remix-run/react'

const headerLinks: Array<Record<any, any>> = [
  { href: "/", icon: null, label: "Home+" },
  { href: "/pages", icon: null, label: "Page+" },
  { href: "", icon: null, label: "Porfolio+" },
  { href: "", icon: null, label: "Blog+" },
  { href: "", icon: null, label: "Contact+" },
];


const StaticMenu = () => {
    return (
        <>
        {headerLinks.map(({href, icon, label}, index) => (
            <li key={`${href}-${index}`}>
                <NavLink to={href} className="font-normal px-5 transition no-underline hover:text-accent focus:text-accent text-heading flex items-center">
                    {icon && <span className='ml-2'>{icon}</span>}
                    <span className="font-heading font-bold text-lg">{label}</span>
                </NavLink>
            </li>
        ))}
        </>
    )
}

export default StaticMenu
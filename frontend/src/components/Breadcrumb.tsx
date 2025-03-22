import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  items: {
    label: string;
    path: string;
  }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="mb-8">
      <ol className="flex text-sm space-x-2">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && <span className="mx-2 text-brand-gold/50">/</span>}
            {index === items.length - 1 ? (
              <span className="text-brand-gold">{item.label}</span>
            ) : (
              <Link to={item.path} className="text-brand-silver hover:text-brand-gold transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

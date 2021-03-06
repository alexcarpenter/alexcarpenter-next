import Link from 'next/link';
import Image from 'next/image';
import Breakout from '@/components/Breakout';
import Code from './Code';
import Emoji from './Emoji';
import ExternalLink from '@/components/ExternalLink';
import YoutubeVideo from '@/components/YoutubeVideo';

function H2({ children }) {
  return <h2 className="text-2xl font-bold">{children}</h2>;
}

function H3({ children }) {
  return <h3 className="text-xl font-bold">{children}</h3>;
}

function HR() {
  return <hr className="my-8" />;
}

function InlineCode({ children }) {
  return (
    <code className="bg-gray-200 px-1 py-0.5 rounded-sm text-sm">
      {children}
    </code>
  );
}

function CustomLink(props) {
  const isInternalLink =
    props.href && (props.href.startsWith('/') || props.href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={props.href}>
        <a className="text-blue hover:underline" {...props} />
      </Link>
    );
  }

  return (
    <a
      className="text-blue hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}

function List({ children }) {
  return <ul className="space-y-1 list-disc">{children}</ul>;
}

function Blockquote({ children }) {
  return (
    <blockquote className="p-4 md:p-8 text-lg md:text-xl rounded text-gray-600 bg-gray-200">
      {children}
    </blockquote>
  );
}

function Mark({ children }) {
  return (
    <mark className="px-0.5" style={{ backgroundColor: '#fffeca' }}>
      {children}
    </mark>
  );
}

function Note({ children, label = 'Note' }) {
  return (
    <div className="p-4 bg-white border rounded text-sm">
      <span className="uppercase font-medium tracking-wide">{label}:</span>{' '}
      {children}
    </div>
  );
}

const MDXComponents = {
  h2: H2,
  h3: H3,
  ul: List,
  hr: HR,
  a: CustomLink,
  blockquote: Blockquote,
  inlineCode: InlineCode,
  code: Code,
  Breakout,
  ExternalLink,
  Emoji,
  Image,
  Mark,
  Note,
  YoutubeVideo,
};

export default MDXComponents;

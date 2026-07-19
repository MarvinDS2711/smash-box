import Reveal from './Reveal';

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  light?: boolean;
  center?: boolean;
};

export default function SectionHeading({ eyebrow, title, lead, light, center = true }: Props) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`title ${light ? 'text-paper' : ''}`}>{title}</h2>
      {lead && <p className={`lead mt-5 ${light ? 'text-[#C9C0B2]' : ''}`}>{lead}</p>}
    </Reveal>
  );
}

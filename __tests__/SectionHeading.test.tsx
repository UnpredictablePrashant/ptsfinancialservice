import { render, screen } from '@testing-library/react';
import SectionHeading from '@/components/SectionHeading';

describe('SectionHeading', () => {
  it('renders title and description', () => {
    render(<SectionHeading title="Test title" description="Supporting copy" />);
    expect(screen.getByText(/test title/i)).toBeInTheDocument();
    expect(screen.getByText(/supporting copy/i)).toBeInTheDocument();
  });

  it('respects alignment prop', () => {
    render(<SectionHeading title="Aligned" alignment="left" />);
    const heading = screen.getByText('Aligned');
    expect(heading.parentElement).toHaveClass('text-left');
  });
});

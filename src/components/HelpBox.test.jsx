import { render, screen } from '@testing-library/react';
import HelpBox from './HelpBox';

describe('HelpBox', () => {
  it('should render the title and text', () => {
    const title = 'Sample Title';
    const text = 'Sample Text';

    render(<HelpBox title={title} text={text} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should have the correct CSS class', () => {
    const title = 'Sample Title';
    const text = 'Sample Text';

    render(<HelpBox title={title} text={text} />);

    const helpBoxElement = screen.getByRole('article');
    expect(helpBoxElement).toHaveClass('help-box');
  });
});
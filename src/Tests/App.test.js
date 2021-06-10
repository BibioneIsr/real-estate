import { render, fireEvent} from '@testing-library/react';
import App from '../App';

describe('Test module App', () => {

	it('renders follow link', () => {
	  const {queryByText} = render(<App />);

	  const linkElement = queryByText('follow');
	  //fireEvent.click(linkElement);
	  expect(linkElement).toBeInTheDocument();
	});

	it('renders Sell link', () => {
	/*  const {queryByText} = render(<App />);

	  const linkElement = queryByText('Sell');
	  //fireEvent.click(linkElement);
	  expect(linkElement).toBeInTheDocument();*/
	});
});

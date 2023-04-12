import { render, screen, fireEvent } from '@testing-library/react';
import Searchbar from './Searchbar';

test('Youtube search', () => {
  render(<Searchbar />);
  const title = screen.getByText("YouTube");
  expect(title).toBeInTheDocument();
});


test('Youtube search with text', () => {
    render(<Searchbar searchChangeHandler={()=>{}}/>)
    const inputField = screen.getByLabelText('youtube-search');
    fireEvent.change(inputField, {target: {value: 'react js'}})
    expect(inputField.value).toBe('react js')
})

test('Youtube search with text and then remove text should empty the input field', () => {
    render(<Searchbar searchChangeHandler={()=>{}}/>)
    const inputField = screen.getByLabelText('youtube-search');
    fireEvent.change(inputField, {target: {value: 'react js'}})
    expect(inputField.value).toBe('react js')
    fireEvent.change(inputField, {target: {value: ''}})
    expect(inputField.value).toBe('')
})

test('Youtube search with enter key', () => {
    render(<Searchbar searchChangeHandler={()=>{}}/>)
    const inputField = screen.getByLabelText('youtube-search');
    fireEvent.change(inputField, {target: {value: 'react js'}})
    expect(inputField.value).toBe('react js')
    fireEvent.keyDown(inputField, {key: 'Enter', code: 'Enter', charCode: 13})
    expect(inputField.value).toBe('react js')
    expect(inputField).not.toHaveFocus()
})

test('Youtube Search button', () => {
    render(<Searchbar searchChangeHandler={()=>{}}/>)
    const inputField = screen.getByTestId('search-input');
    const searchButton = screen.getByLabelText('youtube-search-button');
    fireEvent.click(searchButton)
    expect(inputField).not.toHaveFocus()
})

import { handleSubmit } from "../src/client/js/formHandler";
const mockSignUp = jest.fn();

// Create a mock event object (you can customize this as needed)
const mockEvent = {
  preventDefault: jest.fn(),
  target: {
    name: 'name', // Replace with the actual field name
    value: 'test value', // Replace with the actual input value
  },
};
describe('handleSubmit', () => {
    it('should call the signUp function with the correct arguments', () => {
      // Call the handleSubmit function with the mock event
      handleSubmit(mockEvent);
  
      // Assert that the preventDefault method was called
      expect(mockEvent.preventDefault).toHaveBeenCalled();
  
      // Assert that the signUp function was called with the correct arguments
      expect(mockSignUp).toHaveBeenCalledWith('test value'); // Replace with the expected argument
  
      // You can add more assertions or customize this test as needed
    });
  });
export const loginUser = async (email, password) => {
    try {
      // Simulating an API endpoint using JSONPlaceholder
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
  
      const data = await response.json();
      
      // Simulating login validation
      if (email === data.email && password === '12345') {
        return { success: true, token: 'fake-jwt-token', user: data };
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      throw error;
    }
  };
  
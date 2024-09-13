export const PagePath = {
  Login: "/auth/sign-in",
  Logout: "/auth/sign-out",
  DashBoard:"/dashboard/home"
};


// ErrorResponse.ts
interface ErrorResponse {
    message: string;
    status: number;
  }
  
  // Function that returns a rejected promise with a specific error type
  function rejectWithError(): Promise<never> {
    const error: ErrorResponse = {
      message: 'An error occurred',
      status: 500,
    };
  
    return Promise.reject(error);
  }
  
  // Example usage
  rejectWithError().catch((error) => {
    // IntelliSense sẽ hoạt động cho các thuộc tính của ErrorResponse
    
  });
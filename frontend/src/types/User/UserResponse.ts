  type UserResponse = {
    id: number;
    firstName: string;
    userName: string;
    schoolId: number;
    schoolYear: number;
    school: {id: number; name:string; county:string; type:string}
  };
  
  export default UserResponse;


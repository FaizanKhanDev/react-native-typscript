import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Student {
  id: number;
  name: string;
  age: number;
}

interface StudentState {
  studentsList: Student[];
  studentObject: Record<number, Student>;
}

const initialState: StudentState = {
  studentsList: [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 21 },
    { id: 3, name: "Jack", age: 22 },
    { id: 4, name: "Jill", age: 23 },
    { id: 5, name: "Joe", age: 24 }
  ],
  studentObject: {}
};

const studentSlice = createSlice({
  name: "Student",
  initialState,
  reducers: {
    createStudent: (state, action: PayloadAction<{ name: string; age: number }>) => {
      const newId = state.studentsList.length + 1;
      const newStudent: Student = {
        id: newId,
        name: action.payload.name,
        age: action.payload.age
      };
      state.studentsList.push(newStudent);
      state.studentObject[newId] = newStudent;
    },
    deleteStudent: (state, action: PayloadAction<number>) => {
      const idToDelete = action.payload;
      state.studentsList = state.studentsList.filter(student => student.id !== idToDelete);
      delete state.studentObject[idToDelete];
    },
    getStudentById: (state, action: PayloadAction<number>) => {
      const idToFind = action.payload;
      console.log("Student:", state.studentObject[idToFind]);
    },
    updateStudent: (state, action: PayloadAction<{ id: number; name: string; age: number }>) => {
      const { id, name, age } = action.payload;
      const indexToUpdate = state.studentsList.findIndex(student => student.id === id);
      if (indexToUpdate !== -1) {
        state.studentsList[indexToUpdate] = { id, name, age };
        state.studentObject[id] = { id, name, age };
      }
    }
  }
});

export const {
  createStudent,
  deleteStudent,
  getStudentById,
  updateStudent
} = studentSlice.actions;

export default studentSlice.reducer;

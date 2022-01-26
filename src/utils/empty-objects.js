export const user = {
  id: null,
  username: "",
  password: "",
  email: "",
};

export const schoolGroup = {
  value: null,
  label: "",
};

export const schoolSubject = {
  value: null,
  label: "",
};

export const schoolSemester = {
  id: null,
  name: "",
  startDate: "",
  endDate: "",
  schoolYear: null,
};

export const schoolYear = {
  id: null,
  name: "",
  startDate: "",
  endDate: "",
};

export const student = {
  id: null,
  firstName: "",
  lastName: "",
  pin: "",
  group: null,
  parents: [],
  user,
};

export const parent = {
  id: null,
  firstName: "",
  lastName: "",
  pin: "",
  user,
};

export const teacher = {
  id: null,
  firstName: "",
  lastName: "",
  pin: "",
  subjects: [],
  user,
};

export const schoolCourse = {
  id: null,
  subject: null,
  teacher: null,
  group: null,
  semester: null,
};

export const grade = {
  id: null,
  value: "",
  student: null,
  course: null,
};

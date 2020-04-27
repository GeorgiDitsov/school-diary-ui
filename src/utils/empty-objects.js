export const customer = {
    id: undefined,
    username: '',
    password: '',
    email: ''
}

export const groupOfStudents = {
    id: undefined,
    view: ''
}

export const schoolSubject = {
    id: undefined,
    name: ''
}

export const student = {
    id: undefined,
    name: '',
    pin: '',
    groupOfStudents,
    parents: [],
    customer
}

export const parent = {
    id: undefined,
    name: '',
    pin: '',
    customer
}

export const teacher = {
    id: undefined,
    name: '',
    pin: '',
    schoolSubjects: [],
    customer
}

export const course = {
    id: undefined,
    groupOfStudents,
    schoolSubject,
    teacher
}

export const semester = {
    id: undefined,
    begin: '',
    end: ''
}

export const grade = {
    id: undefined,
    value: 0,
    inserted: '',
    updated: '',
    student,
    course
}
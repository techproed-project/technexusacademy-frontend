import { config } from "./config";

export const CONTACT_GET_ALL_BY_PAGE_API = `${config.apiURL}/contactMessages/getAll`;
export const CONTACT_CREATE_API = `${config.apiURL}/contactMessages/save`;

export const LOGIN_API = `${config.apiURL}/auth/login`;

export const ADMIN_GET_ALL_BY_PAGE_API = `${config.apiURL}/admin/getAll`;
export const ADMIN_DELETE_API = `${config.apiURL}/admin/delete`;
export const ADMIN_CREATE_API = `${config.apiURL}/admin/save`;

export const MANAGER_GET_ALL_BY_PAGE_API = `${config.apiURL}/dean/search`;
export const MANAGER_GET_BY_ID_API = `${config.apiURL}/dean/getManagerById`;
export const MANAGER_DELETE_API = `${config.apiURL}/dean/delete`;
export const MANAGER_CREATE_API = `${config.apiURL}/dean/save`;
export const MANAGER_UPDATE_API = `${config.apiURL}/dean/update`;

export const ASSISTANT_GET_ALL_BY_PAGE_API = `${config.apiURL}/vicedean/search`;
export const ASSISTANT_GET_BY_ID_API = `${config.apiURL}/vicedean/getViceDeanById`;
export const ASSISTANT_DELETE_API = `${config.apiURL}/vicedean/delete`;
export const ASSISTANT_CREATE_API = `${config.apiURL}/vicedean/save`;
export const ASSISTANT_UPDATE_API = `${config.apiURL}/vicedean/update`;

export const TERM_GET_ALL_BY_PAGE_API = `${config.apiURL}/educationTerms/search`;
export const TERM_GET_ALL_API = `${config.apiURL}/educationTerms/getAll`;
export const TERM_DELETE_API = `${config.apiURL}/educationTerms`;
export const TERM_CREATE_API = `${config.apiURL}/educationTerms`;

export const LESSON_GET_ALL_BY_PAGE_API = `${config.apiURL}/lessons/search`;
export const LESSON_GET_ALL_API = `${config.apiURL}/lessons/getAll`;
export const LESSON_DELETE_API = `${config.apiURL}/lessons/delete`;
export const LESSON_CREATE_API = `${config.apiURL}/lessons/save`;

export const PROGRAM_GET_ALL_BY_PAGE_API = `${config.apiURL}/lessonPrograms/search`;
export const PROGRAM_GET_ALL_API = `${config.apiURL}/lessonPrograms/getAll`;
export const PROGRAM_GET_BY_ID_API = `${config.apiURL}/lessonPrograms/getById`;
export const PROGRAM_GET_ASSIGNED_API = `${config.apiURL}/lessonPrograms/getAllAssigned`;
export const PROGRAM_GET_UNASSIGNED_API = `${config.apiURL}/lessonPrograms/getAllUnassigned`;
export const PROGRAM_GET_TEACHER_API = `${config.apiURL}/lessonPrograms/getAllLessonProgramByTeacher`;
export const PROGRAM_GET_STUDENT_API = `${config.apiURL}/lessonPrograms/getAllLessonProgramByStudent`;
export const PROGRAM_DELETE_API = `${config.apiURL}/lessonPrograms/delete`;
export const PROGRAM_CREATE_API = `${config.apiURL}/lessonPrograms/save`;

export const TEACHER_GET_ALL_BY_PAGE_API = `${config.apiURL}/teachers/search`;
export const TEACHER_GET_ALL_API = `${config.apiURL}/teachers/getAll`;
export const TEACHER_GET_BY_ID_API = `${config.apiURL}/teachers/getSavedTeacherById`;
export const TEACHER_CREATE_API = `${config.apiURL}/teachers/save`;
export const TEACHER_DELETE_API = `${config.apiURL}/teachers/delete`;
export const TEACHER_UPDATE_API = `${config.apiURL}/teachers/update`;
export const TEACHER_ASSIGN_PROGRAM_API = `${config.apiURL}/teachers/chooseLesson`;

export const ADVISOR_GET_ALL_API = `${config.apiURL}/advisorTeacher/getAll`;


export const STUDENT_GET_ALL_BY_PAGE_API = `${config.apiURL}/students/search`;
export const STUDENT_GET_ALL_API = `${config.apiURL}/students/getAll`;
export const STUDENT_GET_ALL_BY_ADVISOR_API = `${config.apiURL}/students/getAllByAdvisor`;
export const STUDENT_GET_BY_ID_API = `${config.apiURL}/students/getStudentById`;
export const STUDENT_CREATE_API = `${config.apiURL}/students/save`;
export const STUDENT_DELETE_API = `${config.apiURL}/students/delete`;
export const STUDENT_UPDATE_API = `${config.apiURL}/students/update`;
export const STUDENT_ASSIGN_PROGRAM_API = `${config.apiURL}/students/chooseLesson`;


export const STUDENTINFO_GET_BY_TEACHER_API = `${config.apiURL}/studentInfo/getAllForTeacher`;
export const STUDENTINFO_GET_BY_STUDENT_API = `${config.apiURL}/studentInfo/getAllByStudent`;
export const STUDENTINFO_GET_BY_ID_API = `${config.apiURL}/studentInfo/get`;
export const STUDENTINFO_CREATE_API = `${config.apiURL}/studentInfo/save`;
export const STUDENTINFO_UPDATE_API = `${config.apiURL}/studentInfo/update`;
export const STUDENTINFO_DELETE_API = `${config.apiURL}/studentInfo/delete`;



export const MEET_GET_BY_TEACHER_API = `${config.apiURL}/meet/getAllMeetByAdvisorAsPage`;
export const MEET_GET_BY_STUDENT_API = `${config.apiURL}/meet/getAllMeetByStudent`;
export const MEET_GET_BY_ID_API = `${config.apiURL}/meet/getMeetById`;
export const MEET_CREATE_API = `${config.apiURL}/meet/save`;
export const MEET_UPDATE_API = `${config.apiURL}/meet/update`;
export const MEET_DELETE_API = `${config.apiURL}/meet/delete`;
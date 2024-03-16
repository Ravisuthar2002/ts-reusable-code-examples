import { parseStudentsData, parseTodoData, readCsv } from "./lib/classes/composition/csv-helper";
import { CSV_FILES_PATH } from "./utilities/constants";

console.log(parseStudentsData(readCsv(CSV_FILES_PATH+"/student-data.csv")));

console.log(parseTodoData(readCsv(CSV_FILES_PATH+"/todo-data.csv")));
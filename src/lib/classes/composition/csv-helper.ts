import * as fs from 'fs';

export interface Student {
    id: number;
    name: string;
    age: number;
}

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export function readCsv(path: string) {
    return fs.readFileSync(path, "utf-8").split("\n").map(item => item.split(","));
    
}

export function parseStudentsData(data: string[][]): Student[] {
    return data.map(item => ({
        id: parseInt(item[0]),
        name: item[1],
        age: parseInt(item[2])
    }));
}

export function parseTodoData(data: string[][]): Todo[] {
    return data.map(item => ({
        id: parseInt(item[0]),
        title: item[1],
        completed: item[2] === "completed"
    }));
}
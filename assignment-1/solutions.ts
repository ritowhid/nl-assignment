const multiplyValue = (value: number, multiplier: number = 2): number => {
    return value * multiplier;
}



const processInput = (a: string | number | boolean): string | number => {
    if (typeof a === "string") {
        return a.trim().toLowerCase();
    } else if (typeof a === "number") {
        return a * 10;
    } else {
        if (a) {
            return "Active";
        }
        return "Inactive";
    }
}



const formatCoordinate = (x: readonly [number, number, string]): string => {
    const [latitude, longitude, locationName] = x;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};



const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const arr: T[] = [];

    for (const currentArr of arrays) {
        for (const item of currentArr) {
            arr.push(item);
        }
    }
    return arr;
}



interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}
const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    const arr: Course[] = [];

    for (const course of courses) {
        if (course.isPublished && course.students >= minStudents) {
            arr.push(course);
        }
    }
    return arr;
}



const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    const arr: T[K][] = [];
    for (let i = 0; i < items.length; i++) {
        arr.push(items[i][key]);
    }
    return arr;
}



class Employee {
    constructor(
        protected name: string,
        private baseSalary: number,
    ) { }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    constructor(
        name: string,
        baseSalary: number,
        private department: string,
    ) {
        super(name, baseSalary);
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}



const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000)
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    })
}
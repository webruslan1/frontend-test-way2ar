export interface TrueOrFalseList {
    name: string,
    value: boolean
}

export interface Doctor {
    id: number;
    name: string;
    department: string;
    head: boolean;
}

export interface Nurse {
    id: number;
    name: string;
    department: string;
}

export interface NavData {
    label: string,
    icon: string,
    route: string
}

export interface Department {
    name: 'Кардиологическое' | 'Хирургическое'
}


import { defineStore } from "pinia";
import { ref } from "vue";
import type { Doctor, Nurse } from "../models/State.ts";
export const useMedicalStore = defineStore('medicalStore', () => {
    const doctors = ref(<Doctor[]>[
        { id: 1, name: 'Иван Иванов', department: 'Кардиологическое', head: true },
        { id: 2, name: 'Петр Петров', department: 'Хирургическое', head: false },
    ]);
    const nurses = ref(<Nurse[]>[
        { id: 1, name: 'Анна Смирнова', department: 'Кардиологическое' },
        { id: 2, name: 'Екатерина Сидорова', department: 'Хирургическое' },
    ]);

    let modalVisible = ref(<boolean>false);
    let modalVisibleEdit = ref(<boolean>false);
    let typeAdd = ref(<'Doctor' | 'Nurse' | any>null)
    let addObject = ref(<Doctor | Nurse | any>null);

    const openDialog = (who: 'Doctor' | 'Nurse') : void => {
        switch (who){
            case 'Doctor':
                addObject.value = {
                    id: 0,
                    name: '',
                    department: null,
                    head: false
                };
                break;
            case 'Nurse':
                addObject.value = {
                    id: 0,
                    name: '',
                    department: null
                };
                break;
            default:
                break;
        }
        typeAdd.value = who;
        modalVisible.value = true;
    };
    const openDialogEdit = (who: 'Doctor' | 'Nurse', data: Doctor | Nurse) : void => {
        addObject.value = {...data};
        typeAdd.value = who;
        modalVisibleEdit.value = true;
    }
    const closeModalAdd = () : void => {
        modalVisible.value = false;
        addObject.value = null;
    }
    const closeModalEdit = () : void => {
        modalVisibleEdit.value = false;
        addObject.value = null;
    }
    const addDoctor = (doctor: Doctor) : void => {
        doctors.value.push(doctor);
    };
    const addNurse = (nurse: Nurse) : void => {
        nurses.value.push(nurse);
    };
    const editDoctor = (doctor: Doctor) : void => {
        doctors.value = doctors.value.map((d: Doctor) => d.id === doctor.id ? doctor : d);
    };
    const editNurse = (nurse: Nurse) : void => {
        nurses.value = nurses.value.map((n: Nurse) => n.id === nurse.id ? nurse : n);
    };
    const removeDoctor = (id: number) : void => {
        doctors.value = doctors.value.filter(doctor => doctor.id !== id);
    };
    const removeNurse = (id: number) : void => {
        nurses.value = nurses.value.filter(nurse => nurse.id !== id);
    }

    return {
        doctors,
        nurses,

        modalVisible,
        modalVisibleEdit,
        typeAdd,
        addObject,

        openDialog,
        openDialogEdit,
        closeModalAdd,
        closeModalEdit,
        addDoctor,
        addNurse,
        editDoctor,
        editNurse,
        removeDoctor,
        removeNurse
    }
});
export class Appointment {
    id!: number;
    date!: string;
    patientId !: number|null;
    doctorId !: number;
    slotNo !: number;
    status !: number;
    prescription!: string;
    problem!: string;
}

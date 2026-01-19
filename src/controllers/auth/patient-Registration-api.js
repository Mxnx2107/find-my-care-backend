import { Patient } from "../../models/patient-model/patient-model.js";

const patientRegistration = async (req, res) => {
    try {
        const { userName, phoneNumber, password } = req.body;

        if (!userName || !phoneNumber || !password) {
            return res.status(400).json({ message: "All Fields are Required." });
        }

        const newPatient = new Patient({ userName, phoneNumber, password });
        await newPatient.save();

        res.status(201).json({ message: "Patient Created Successfully.", Patient: newPatient });

    } catch (error) {
        console.log("Error Saving Patient: ", error);
        res.status(500).json({ message: "Server Error." })

    }

}

export default patientRegistration;
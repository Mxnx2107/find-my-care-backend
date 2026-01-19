import bcrypt from 'bcrypt';
import { Hospital } from "../../models/hospital-model/hospital-model.js";
import { accessIdGenerator } from '../../utils/id-generator/Access-id-generator.js';
import { generatePassword } from "../../utils/password-generator/Password-generator.js";
import {sendEmail} from '../../utils/email-sender/emailSender.js';


const hospitalRegistration = async (req, res) => {
    try {
        const { hospitalName, hospitalType, hospitalFacilities, departments, state, city, address, email, certificate, photos, phoneNumber } = req.body
        if (!hospitalName || !hospitalType || !hospitalFacilities || !departments || !state || !city || !address || !email || !certificate || !photos || !phoneNumber) {
            return res.status(400).json({ message: "All Fields are Required." });
        }
        const isEmail = await Hospital.findOne({ email: email });
        const isPhone = await Hospital.findOne({ phone: phoneNumber });
        if (isEmail || isPhone) {
            return res.status(409).json({ message: "Hospital already existed." });
        }

        const generatedAccessId = accessIdGenerator(hospitalName, email, phoneNumber);
        const generatedPass = generatePassword(10);
        const hashedGeneratedPassword = bcrypt.hash(generatedPass, 15);


        const subject = "Your MS Portal Access Credentials.";
        const message = `<h1>Dear Hospital, </h1> <p>This is your acces id and password, you can change your password after successfully login.</p> <span> <b>User id</b>: ${generatedAccessId}<br><br> <b> Your Password is</b>: ${generatedPass}</span>`;
        await sendEmail(email, subject, message);

        const newHospital = new Hospital({ hospitalName, hospitalType, hospitalFacilities, departments, state, city, address, email, certificate, photos, phoneNumber, accessId: generatedAccessId, password: hashedGeneratedPassword });
        await newHospital.save();

        res.status(201).json({ message: "Hospital Created Successfully.", Student: newStudent });

    } catch (error) {
        console.log("Error Saving Hospital: ", error);
        res.status(500).json({ message: "Server Error." })
    }
}

export default hospitalRegistration;
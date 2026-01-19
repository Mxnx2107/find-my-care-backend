export const accessIdGenerator = (hospitalName, email, phoneNumber) => {

    const NoClean = phoneNumber.replace(/[^0-9]/g, "");
    const fullName =`${hospitalName}${email}`.toLowerCase();

    return `${fullName}${NoClean}@hospital.care.in`;
}
import bcrypt from 'bcryptjs';

async function hashPassword(plainPassword: string) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(plainPassword, salt);

    return hashedPassword;
}

async function verfiyPassword(plainPassword: string, hashedPassword: string) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}

export { hashPassword, verfiyPassword };
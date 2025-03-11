import { z } from "zod";
import { Role } from "../../../../services/userService";

export const userSchema = z.object({
    name: z.string().min(1, "ชื่อต้องมีตัวอักษรอย่างน้อย 1 ตัวขึ้นไป"),
    username: z.string().min(3, "ชื่อผู้ใช้ต้องมีตัวอักษรอย่างน้อย 3 ตัวขึ้นไป"),
    password: z
        .string()
        .min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัว")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).{6,}$/,
            "รหัสผ่านต้องมีตัวพิมพ์เล็ก ตัวพิมพ์ใหญ่ ตัวเลข และไม่ให้มีช่องว่าง"
        ),
    role: z.nativeEnum(Role, { required_error: "กรุณาเลือกบทบาท" }),
});

export type UserFormData = z.infer<typeof userSchema>;

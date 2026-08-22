import DBConnect from "@/app/lib/db";
import User from "@/app/lib/models/user";
import { passwordHash } from "@/app/components/utils";
export async function POST(request) {
  const { email, password } = await request.json();
  await DBConnect();
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return Response.json({ error: "Email is already in use" }, { status: 500 });
  }
  const hashedPass = await passwordHash(password);
  const newUser = new User({
    email,
    password: hashedPass,
  });

  try {
    await newUser.save();
    return Response.json({newUser},{status:200})
  } catch (err) {
    return Response.json({ error: "User Added Error" }, { status: 500 });
  }
}

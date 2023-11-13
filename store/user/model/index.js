export const userBasicInfoModal = {
  _id: null,
  name: "",
  email: "",
  password: "",
  newPassword: "",
  confirmPassword: "",
  isActive: true,
  image: "http://localhost:8082/uploads/default-user.jpg",
  photoUrl: "default-user.jpg",
  role: { label: "Admin", value: "Admin" },
};

export const userRole = [
  { label: "Admin", value: "Admin" },
  { label: "User", value: "User" },
];

import { database } from './firebaseConfig.js';
import { ref, set, get, child } from "firebase/database";

const createUser = async (id, name, email, password, phone) => {
  try {
    await set(ref(database, 'users/' + id), {
      name: name,
      email: email,
      password: password,
      phone: phone
    });
    return { success: true };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, error: error.message };
  }
};

const getAllUsers = async () => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `users`));
    if (snapshot.exists()) {
      phone: phone
    });
    return { success: true };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, error: error.message };
  }
};

const createAppointment = async (id, userId, date, time, service) => {
  try {
    await set(ref(database, 'appointments/' + id), {
      userId: userId,
      date: date,
      time: time,
      service: service
    });
    return { success: true };
  } catch (error) {
    console.error("Error creating appointment:", error);
    return { success: false, error: error.message };
  }
};

const getUser = async (userId) => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `users/${userId}`));
    if (snapshot.exists()) {
      return { success: true, data: snapshot.val() };
    } else {
      return { success: false, error: "User not found" };
    }
  } catch (error) {
    console.error("Error getting user:", error);
    return { success: false, error: error.message };
  }
};

const getAllAppointments = async () => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `appointments`));
    if (snapshot.exists()) {
      return { success: true, data: snapshot.val() };
    } else {
      return { success: false, error: "No appointments found" };
    }
  } catch (error) {
    console.error("Error getting appointments:", error);
    return { success: false, error: error.message };
  }
};

const getAllAppointments = async () => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `appointments`));
    if (snapshot.exists()) {
      return { success: true, data: snapshot.val() };
    } else {
      return { success: false, error: "No appointments found" };
    }
  } catch (error) {
    console.error("Error getting appointments:", error);
    return { success: false, error: error.message };
  }
};

export { createUser, createAppointment, getUser, getAllAppointments, getAllUsers };
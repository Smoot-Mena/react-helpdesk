import React from 'react';
import { create } from 'zustand';

const useUserInfo = create((set) => ({
    userEmail: "",
    setUserEmail: (userEmail) => set({ userEmail }),
    userPassword: "",
    setUserPassword: (userPassword) => set({ userPassword }),
    adminName: "",
    setAdminName: (adminName) => set({ adminName }),
    supportLevel: 1,
    setSupportLevel: (supportLevel) => set({ supportLevel })
}));

export default useUserInfo;
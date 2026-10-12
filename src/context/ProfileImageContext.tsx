import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProfileImageContextType {
  profileImage: string;
  isCustom: boolean;
  uploadPhoto: (file: File) => Promise<void>;
  resetPhoto: () => Promise<void>;
}

const ProfileImageContext = createContext<ProfileImageContextType | undefined>(undefined);

const DB_NAME = 'SamiPortfolioDB';
const STORE_NAME = 'media';
const KEY = 'original_profile_image';
const DEFAULT_IMAGE = '/assets/images/Profile.jpeg';

// Open IndexedDB safely
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getStoredImage(): Promise<string | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(KEY);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    try {
      return localStorage.getItem(KEY);
    } catch {
      return null;
    }
  }
}

async function setStoredImage(dataUrl: string): Promise<void> {
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(dataUrl, KEY);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch {
    try {
      localStorage.setItem(KEY, dataUrl);
    } catch {
      // ignore storage quota error
    }
  }
}

async function removeStoredImage(): Promise<void> {
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(KEY);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch {
    try {
      localStorage.removeItem(KEY);
    } catch {
      // ignore
    }
  }
}

export const ProfileImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profileImage, setProfileImage] = useState<string>(DEFAULT_IMAGE);
  const [isCustom, setIsCustom] = useState<boolean>(false);

  useEffect(() => {
    getStoredImage().then((saved) => {
      if (saved) {
        setProfileImage(saved);
        setIsCustom(true);
      }
    });
  }, []);

  const uploadPhoto = async (file: File) => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        const result = reader.result as string;
        if (result) {
          setProfileImage(result);
          setIsCustom(true);
          await setStoredImage(result);
          resolve();
        } else {
          reject(new Error('Failed to read file'));
        }
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  };

  const resetPhoto = async () => {
    await removeStoredImage();
    setProfileImage(DEFAULT_IMAGE);
    setIsCustom(false);
  };

  return (
    <ProfileImageContext.Provider value={{ profileImage, isCustom, uploadPhoto, resetPhoto }}>
      {children}
    </ProfileImageContext.Provider>
  );
};

export const useProfileImage = () => {
  const context = useContext(ProfileImageContext);
  if (!context) {
    throw new Error('useProfileImage must be used within a ProfileImageProvider');
  }
  return context;
};

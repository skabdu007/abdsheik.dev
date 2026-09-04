import React, { createContext, useContext, useState } from "react";

const DocumentModalContext = createContext();

export const DocumentModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    url: "",
    fileType: "pdf", // 'pdf' | 'pptx'
    size: "",
    downloadName: "",
    badge: "",
    subtitle: "",
  });

  const openModal = ({
    title,
    url,
    fileType = "pdf",
    size = "",
    downloadName = "",
    badge = "",
    subtitle = "",
  }) => {
    setModalState({
      isOpen: true,
      title,
      url,
      fileType,
      size,
      downloadName: downloadName || url.split("/").pop(),
      badge,
      subtitle,
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <DocumentModalContext.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </DocumentModalContext.Provider>
  );
};

export const useDocumentModal = () => {
  const context = useContext(DocumentModalContext);
  if (!context) {
    throw new Error("useDocumentModal must be used within a DocumentModalProvider");
  }
  return context;
};

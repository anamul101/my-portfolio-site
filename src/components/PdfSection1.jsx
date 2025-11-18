import React, { useState } from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';

export const App = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState('');
  const [viewPdf, setViewPdf] = useState(null);

  const fileType = ['application/pdf'];
  
  const handlePdfFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    if (selectedFile) {
      if (fileType.includes(selectedFile.type)) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError('');
        };
      } else {
        setPdfFile(null);
        setPdfFileError('Please select a valid PDF file');
      }
    } else {
      setPdfFileError('Please select a file');
    }
  };

  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    setViewPdf(pdfFile);
  };

  // CORRECTED WORKER URL - matches the version expected by @react-pdf-viewer
  const workerUrl = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Internship Report</h1>
        {/* <p style={styles.headerSubtitle}>Upload and view PDF files in your browser</p> */}
      </div>
      
      <div style={styles.uploadCard}>
        <form onSubmit={handlePdfFileSubmit} style={styles.form}>
          <div style={styles.fileUploadArea}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            <p style={styles.uploadText}>Drag & drop your PDF here</p>
            <p style={styles.uploadSubtext}>or</p>
            <label htmlFor="fileInput" style={styles.browseButton}>
              Browse Files
            </label>
            <input 
              id="fileInput"
              type="file" 
              accept="application/pdf"
              onChange={handlePdfFileChange}
              style={styles.fileInput}
            />
          </div>
          
          {pdfFileError && (
            <div style={styles.error}>{pdfFileError}</div>
          )}
          
          <button 
            type="submit" 
            style={styles.viewButton}
            disabled={!pdfFile}
          >
           Internship Report  View
          </button>
        </form>
      </div>
      
      <div style={styles.viewerSection}>
        <h2 style={styles.sectionTitle}>PDF Preview</h2>
        <div style={styles.pdfContainer}>
          {viewPdf ? (
            <Worker workerUrl={workerUrl}>
              <Viewer 
                fileUrl={viewPdf}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          ) : (
            <div style={styles.placeholder}>
              <div style={styles.placeholderIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#95a5a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <p style={styles.placeholderText}>No PDF file selected</p>
              <p style={styles.placeholderSubtext}>Upload a PDF file to view it here</p>
            </div>
          )}
        </div>
      </div>
      
      <div style={styles.footer}>
        <p>PDF Viewer App © {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    boxSizing: 'border-box',
  },
  header: {
    textAlign: 'center',
    padding: '30px 20px',
    marginBottom: '20px',
    background: 'linear-gradient(135deg, #3498db, #2c3e50)',
    borderRadius: '10px',
    color: 'white',
  },
  headerTitle: {
    fontSize: '2.5rem',
    margin: 0,
  },
  headerSubtitle: {
    fontSize: '1.2rem',
    opacity: 0.9,
    margin: '10px 0 0',
  },
  uploadCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  fileUploadArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dashed #3498db',
    borderRadius: '10px',
    padding: '40px 20px',
    backgroundColor: '#f1f8ff',
    transition: 'all 0.3s ease',
  },
  uploadText: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#2c3e50',
    margin: '15px 0 5px',
  },
  uploadSubtext: {
    color: '#7f8c8d',
    margin: '5px 0',
  },
  browseButton: {
    padding: '10px 25px',
    backgroundColor: '#3498db',
    color: 'white',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'background-color 0.2s',
    marginTop: '10px',
    ':hover': {
      backgroundColor: '#2980b9',
    }
  },
  fileInput: {
    display: 'none',
  },
  error: {
    textAlign: 'center',
    color: '#e74c3c',
    fontWeight: '500',
    padding: '10px',
    backgroundColor: '#fce4e2',
    borderRadius: '6px',
  },
  viewButton: {
    padding: '14px',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#27ae60',
    },
    ':disabled': {
      backgroundColor: '#95a5a6',
      cursor: 'not-allowed',
    }
  },
  viewerSection: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
  },
  sectionTitle: {
    color: '#2c3e50',
    marginTop: '0',
    paddingBottom: '15px',
    borderBottom: '1px solid #ecf0f1',
  },
  pdfContainer: {
    height: '600px',
    border: '1px solid #ecf0f1',
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
  },
  placeholder: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#7f8c8d',
    backgroundColor: '#f9f9f9',
  },
  placeholderIcon: {
    marginBottom: '20px',
  },
  placeholderText: {
    fontSize: '1.2rem',
    fontWeight: '500',
    margin: '0 0 5px',
  },
  placeholderSubtext: {
    margin: '0',
    opacity: 0.8,
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    color: '#7f8c8d',
    marginTop: '30px',
    borderTop: '1px solid #ecf0f1',
  },
};

export default App;